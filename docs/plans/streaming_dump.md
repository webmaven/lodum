# Detailed Design: Streaming Serialization (Phase 2)

## Status: Draft
This document specifies the technical architectural changes required to enable direct-to-stream serialization in Lodum, bypassing the in-memory intermediate representation (IR).

## 🏛️ Current vs. Proposed Architecture

### Current (IR-Based)
1.  **Codegen**: Generates a function that returns a `dict`.
2.  **Internal Flow**: `dump_internal` ➔ `CompiledHandler` ➔ `Returns Dict` ➔ `json.dumps(Dict)`.
3.  **Constraint**: Memory usage scales linearly with object size.

### Proposed (Direct-to-Stream)
1.  **Codegen**: Generates a "Dual-Mode" function.
2.  **Internal Flow**: `dump_internal` ➔ `CompiledHandler(target)` ➔ `dumper.write_chunk()` ➔ `Stream`.
3.  **Constraint**: Memory usage remains constant (O(1)).

---

## 🛠️ Technical Components

### 1. `Dumper` Protocol Extension
We need to add a method to the `Dumper` protocol that handles direct writing:

```python
class Dumper(Protocol):
    # Existing methods...
    
    def write_raw(self, chunk: Any) -> None:
        """Writes a pre-encoded chunk directly to the output stream."""
        ...
```

### 2. Dual-Mode AST Codegen
The `_build_dump_function_ast` in `dump_codegen.py` will be modified to support a `target` argument.

- **Mode A (IR)**: When `target is None`, the generated code builds and returns a `dict` (current behavior).
- **Mode B (Streaming)**: When `target` is provided, the generated code calls `dumper.write_int()`, `dumper.write_str()`, etc., directly.

**Example of Generated Logic (Pseudo-code):**
```python
def dump_User(obj, dumper, target=None):
    if target:
        dumper.write_raw("{")
        dumper.write_raw('"id": ')
        dumper.dump_int(obj.id)
        dumper.write_raw(', "name": ')
        dumper.dump_str(obj.name)
        dumper.write_raw("}")
    else:
        return {"id": obj.id, "name": obj.name}
```

### 3. Buffering and Performance
To maintain high throughput, we will implement **Aggressive Buffering** in the format-specific dumpers. Instead of making a syscall for every field, the dumper will aggregate chunks into an internal buffer before calling `target.write()`.

---

## 📅 Implementation Steps

1.  **Protocol Update**: Modify `src/lodum/core.py` to include stream-writing methods.
2.  **Compiler Overhaul**: Update `src/lodum/compiler/dump_codegen.py` to generate the dual-mode logic.
3.  **JSON Streamer**: Implement a `JsonStreamDumper` that handles braces, commas, and quotes.
4.  **Binary Streamers**: Implement `MsgPackStreamDumper` and `CborStreamDumper` using underlying library buffer APIs.

## 🧪 Verification
- [ ] **Memory Profiling**: Use `tracemalloc` to confirm O(1) memory during a 100,000 object dump.
- [ ] **Functional Parity**: Ensure that `dump(obj)` (string) and `dump(obj, io.StringIO())` (stream) produce identical output.
