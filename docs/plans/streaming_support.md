# Streaming Support Implementation Plan

## Overview
This plan details the implementation of streaming serialization (`dump_stream`) and deserialization (`load_stream`) for `lodum`, as requested in issue #41. The goal is to enable the processing of datasets larger than memory by operating on streams instead of in-memory objects.

## Current State Analysis
Our research of the existing codebase (`src/lodum/core.py`, `src/lodum/compiler/dump_codegen.py`, `src/lodum/compiler/load_codegen.py`) reveals:
*   **Serialization (`dump`):** The current `Dumper` protocol and codegen are fundamentally in-memory. The process starts with `dumper.begin_struct()` (which creates a `dict`), populates it, and returns the completed dictionary. This is not suitable for streaming.
*   **Deserialization (`load`):** The `Loader` protocol is more amenable to streaming, with `load_list` and `load_dict` returning iterators. However, the current codegen immediately consumes these iterators to build in-memory objects, preventing true streaming.

## Implementation Approach
The implementation will be split into two phases. Phase 1 will focus on deserialization (`load_stream`), which is a more natural extension of the current architecture. Phase 2 will address the more complex serialization (`dump_stream`), which requires a new protocol and codegen path.

---

## Phase 1: Streaming Deserialization (`load_stream`)

### Overview
The goal of this phase is to implement `load_stream`, a generator function that yields objects from a stream (e.g., a file handle) one at a time. We will initially target JSON using the `ijson` library.

### Changes Required:

#### 1. `src/lodum/json.py`: Add `StreamingJSONLoader` and `load_stream`
**Changes**:
- Introduce a new `StreamingJSONLoader` class that inherits from `BaseLoader`. This loader will wrap an `ijson` stream parser.
- Implement the `load_stream(cls, stream)` generator function. This function will initialize the `StreamingJSONLoader` and yield objects as they are parsed from the stream.

```python
# src/lodum/json.py

import ijson
from .core import BaseLoader, T
from .internal import load
from typing import IO, Iterable

# ... existing code ...

class StreamingJSONLoader(BaseLoader):
    """
    A loader that operates on a streaming parser (ijson) instead of a pre-loaded dict.
    """
    def __init__(self, parser_events):
        self._events = parser_events
        # ... implementation to pull tokens from the stream ...

# ...

def load_stream(cls: Type[T], stream: IO[bytes]) -> Iterable[T]:
    """
    Lazily decodes a stream of JSON objects into instances of `cls`.
    This is intended for streams containing a top-level array of objects.
    """
    # We assume the stream is a JSON array of objects.
    parser = ijson.parse(stream)
    for prefix, event, value in parser:
        if prefix.endswith('.item') and event == 'end_map':
            # At the end of each object in the array, 'value' will be the dict.
            # We can now use the existing 'load' logic with a standard JSONLoader.
            yield load(cls, JSONLoader(value))

```

#### 2. `tests/test_json.py`: Add Tests for Streaming Deserialization
**Changes**:
- Add new test cases to verify `json.load_stream`.
- Tests should cover:
    - Loading a stream of multiple objects.
    - Handling an empty stream/array.
    - Behavior with malformed JSON in the stream.

```python
# tests/test_json.py

import io
# ...

def test_load_stream():
    json_stream = io.BytesIO(b'[{"id": 1, "name": "A"}, {"id": 2, "name": "B"}]')
    
    @lodum
    class MyItem:
        def __init__(self, id: int, name: str):
            self.id = id
            self.name = name

    items = list(json.load_stream(MyItem, json_stream))
    assert len(items) == 2
    assert items[0].id == 1
    assert items[1].name == "B"
```

### Success Criteria:
#### Automated:
- [ ] `PYTHONPATH=src pytest tests/test_json.py` passes.
#### Manual:
- [ ] Verify that `load_stream` can process a large JSON file (e.g., >1GB) without consuming significant memory.

---

## Phase 2: Streaming Serialization (`dump_stream`)
*This phase will be implemented after Phase 1 is complete and merged.*

### Overview
This phase will implement `dump_stream(iterable_of_objects, stream)`, which serializes an iterable of objects to a stream. This requires a new `StreamingDumper` protocol and a parallel codegen path.

### Changes Required:
1.  **`src/lodum/core.py`**: Define a new `StreamingDumper` protocol.
2.  **`src/lodum/compiler/dump_codegen.py`**: Create a new `_build_dump_stream_function_ast` function.
3.  **`src/lodum/json.py`**: Implement a `JSONStreamingDumper` and the public `dump_stream` function.
4.  **`tests/test_json.py`**: Add tests for `json.dump_stream`.

**Implementation Note**: The specifics of this phase will be detailed in a subsequent plan once Phase 1 is validated. This provides a high-level outline.

## Review Criteria (Self-Critique)
- **Specificity**: Phase 1 is highly specific, with clear code examples and file paths. Phase 2 is intentionally high-level and will be detailed later.
- **Verification**: Phase 1 includes both automated and manual success criteria.
- **Phasing**: The plan is phased logically, with deserialization first, as it builds upon existing architecture more directly.
