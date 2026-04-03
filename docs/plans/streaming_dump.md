# Detailed Design: Streaming Serialization (Phase 2)

## Status: Revised Implementation Strategy
This document specifies the technical architecture for enabling O(1) memory streaming serialization in Lodum via a **Stateful Dumper Protocol**.

## 🏛️ Architecture: The Stateful Dumper
The primary goal is to shift responsibility for "data shaping" from the compiler to the Dumper implementation. The compiler becomes a structural driver that informs the dumper about the object's topology.

### 1. The "Lodum Protocol" Interface
The `Dumper` protocol in `core.py` will be expanded to include structural orchestration:

```python
class Dumper(Protocol):
    # Primitives (Standardized Signature)
    def dump_int(self, value: int, depth: int, seen: Optional[set]) -> Any: ...
    def dump_str(self, value: str, depth: int, seen: Optional[set]) -> Any: ...
    # ... other primitives ...

    # Struct Orchestration
    def begin_struct(self, cls: Type) -> Any: ...
    def end_struct(self) -> Any: ...
    def field(self, name: str, value: Any, handler: Callable, depth: int, seen: Optional[set]) -> None: ...

    # Collection Orchestration
    def begin_list(self) -> None: ...
    def end_list(self) -> Any: ...
    def list_item(self, value: Any, handler: Callable, depth: int, seen: Optional[set]) -> None: ...
```

### 2. Dual-Mode Implementation Strategy
*   **BaseDumper (IR Mode)**: Implements these methods to build and return standard Python dictionaries and lists. This preserves backward compatibility for `dump(obj) -> str`.
*   **StreamingDumper (O(1) Mode)**: Implements these methods to write tokens directly to an IO target, managing separators (commas) and depth internally.

---

## 🛠️ Implementation Steps

### Phase A: Protocol & Core Hygiene (Surgical)
1.  Update `Dumper` protocol and `BaseDumper` in `core.py`. 
    *   **CRITICAL**: Do not remove `Context`, `get_context`, or decorator analysis logic.
2.  Update all primitive handlers in `handlers/` to support the 3-argument `(value, depth, seen)` signature.

### Phase B: Compiler Refactor
1.  Update `dump_codegen.py` to use `dumper.field()` and `dumper.list_item()`.
2.  The generated AST should no longer create lists or dicts; it should purely call dumper orchestration methods.

### Phase C: The JSON Streamer
1.  Implement `JsonStreamingDumper(StreamingDumper)` in `json.py`.
2.  Handle recursive state and separators using an internal depth stack.

---

## 🧪 Verification & Regression Testing
*   **Signature Parity**: All 315 existing tests must pass with `BaseDumper`'s new orchestration logic.
*   **Deep Parity**: `test_json_streaming_dumper_deep` must confirm that nested structures and character escaping are identical between IR and Stream paths.
*   **Memory Guard**: Profile a 100k-object dump to ensure peak memory remains constant.
