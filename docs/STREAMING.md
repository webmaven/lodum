# Streaming

Streaming enables processing arbitrarily large datasets with **O(1) memory** — constant, predictable memory usage regardless of input size. This is essential for workloads like processing large files, real-time data pipelines, and WASM/Pyodide environments with constrained memory.

## Overview

Lodum supports streaming in two directions:

| Operation | Function | Memory Profile |
|---|---|---|
| **Serialization** | `json.dump(obj, target)` | O(1) — writes tokens directly to the target |
| **Deserialization** | `json.stream(cls, source)` | O(1) — yields objects one at a time via incremental parsing |

## Streaming Serialization

When `dump()` receives a **target** (a file-like object or `Path`), it switches from IR mode to streaming mode, writing JSON tokens directly to the output without building an intermediate Python dictionary.

### How It Works

Under the hood, lodum uses `JsonStreamingDumper` (from [`src/lodum/json.py`](https://github.com/webmaven/lodum/blob/main/src/lodum/json.py)), which implements the `StreamingDumper` protocol. Each primitive, struct field, and list item writes its JSON representation directly to the target stream:

```
{ "name": "Alice", "scores": [95, 87, 92] }
 ↑              ↑             ↑          ↑
 field name   string value   [ token   number token
```

### Basic Example — Write to File

```python
import lodum.json as json

large_list = [{"id": i, "data": f"record_{i}"} for i in range(1_000_000)]

# O(1) memory — writes directly to file
with open("output.json", "w") as f:
    json.dump(large_list, f)
```

### Write to Any Stream

```python
import io
import lodum.json as json

# Write to a StringIO (in-memory text buffer)
buffer = io.StringIO()
json.dump(large_list, buffer)

# Write to a BytesIO (binary buffer)
binary_buffer = io.BytesIO()
# Note: for BytesIO, the target is opened in "w" mode
# for text-based JSON. Use a file Path for binary output.
```

### Formatting Options

When streaming to a target, formatting kwargs like `indent` are **best-effort** since the streaming dumper writes tokens incrementally. For formatted output of small objects, omit the target parameter to use IR mode:

```python
# IR mode — full control over formatting (uses more memory)
json_string = json.dump(obj, indent=2)

# Streaming mode — O(1) memory (formatting is minimal)
with open("output.json", "w") as f:
    json.dump(obj, f)
```

## Streaming Deserialization

The `stream()` function lazily decodes a sequence of JSON objects from a file, yielding one instance at a time. This is ideal for processing large JSON arrays or JSONL (newline-delimited JSON) files.

### How It Works

`stream()` uses the [`ijson`](https://pypi.org/project/ijson/) library to perform **incremental JSON parsing**. Instead of loading the entire file into memory, `ijson` reads the file in chunks and yields each object as it is parsed:

```python
import lodum.json as json

# Yields one User object at a time — never loads all users into memory
for user in json.stream(User, "users.json"):
    process(user)
    del user  # free memory immediately
```

### Setup

Streaming deserialization requires the `ijson` optional dependency:

```bash
pip install "lodum[ijson]"
```

### Usage

The source must contain a **top-level array** of objects. Each element is parsed and deserialized into the target class:

```python
from dataclasses import dataclass
from lodum import lodum
import lodum.json as json

@lodum
@dataclass
class User:
    id: int
    name: str
    email: str

# Process one user at a time from a 10GB file
with open("huge_dataset.json") as f:
    for user in json.stream(User, f):
        send_email(user.email)
```

### JSONL Support

For JSONL files (one JSON object per line, no enclosing array), you can iterate line by line and load each object individually. Note: this approach loads one line at a time but does not use `ijson`:

```python
import lodum.json as json

with open("data.jsonl") as f:
    for line in f:
        user = json.load(User, line)  # Each line is a standalone JSON object
        process(user)
```

## Streaming Across Formats

Streaming deserialization (`stream()`) is available in the following formats:

| Format | `stream()` | Streaming Serialization (`dump` to target) |
|---|---|---|
| **JSON** | ✅ (`ijson`) | ✅ (`JsonStreamingDumper`) |
| **MsgPack** | ✅ (native unpacker) | ❌ Not yet implemented |
| **CBOR** | ✅ (native unpacker) | ❌ Not yet implemented |
| **BSON** | ✅ (native iterator) | ❌ Not yet implemented |
| **YAML** | ✅ (multi-document) | ❌ Not yet implemented |
| **TOML** | ❌ TOML is single-document | ❌ Not yet implemented |
| **Pickle** | ❌ No streaming support | ✅ (writes directly) |

> **Planned**: The ROADMAP documents streaming serialization for MsgPack and CBOR as a v0.4.0 milestone. See [Streaming Support Plan](plans/streaming_support.md).

## Memory Profile Comparison

Here is how memory usage compares for serializing a list of 1 million records:

| Mode | Peak Memory | Use Case |
|---|---|---|
| **IR mode** (`json.dump(obj)`) | O(n) — builds full dict, then encodes | Small objects, need string output |
| **Streaming** (`json.dump(obj, target)`) | O(1) — writes tokens directly | Large files, pipelines |

For deserialization:

| Mode | Peak Memory | Use Case |
|---|---|---|
| **`load()`** (`json.load(cls, source)`) | O(n) — loads entire JSON into memory | Small files, need all objects |
| **`stream()`** (`json.stream(cls, source)`) | O(1) — parses incrementally | Large files, process one at a time |

## API Reference

### `json.dump(obj, target, **kwargs)` → `Optional[str]`

Serializes `obj` to JSON. If `target` is provided, streaming mode is used (O(1) memory).

```python
# IR mode — returns a string
output = json.dump(obj)

# Streaming mode — writes to target, returns None
json.dump(obj, open("out.json", "w"))
json.dump(obj, Path("out.json"))
```

### `json.stream(cls, source)` → `Iterator[T]`

Lazily yields instances of `cls` from a JSON array source.

```python
for obj in json.stream(cls, Path("data.json")):
    process(obj)
```

### Legacy: `json.load_stream(cls, stream_io)` → `Iterator[T]`

Legacy alias for `stream(cls, source)`. New code should use `stream()`.

## Best Practices

1. **Use streaming for files larger than available memory.** Even if the data fits, streaming keeps peak memory bounded.
2. **`ijson` requires binary mode for best performance.** Open files with `"rb"` when possible, or let lodum handle it:
   ```python
   with open("data.json", "rb") as f:
       for obj in json.stream(cls, f):
           process(obj)
   ```
3. **Process and discard each object.** Avoid collecting streamed objects into a list unless you intentionally want to grow memory.
4. **For formatting needs**, use IR mode (no target) for small datasets and streaming for large ones.
