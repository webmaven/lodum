# Memory-Aware Serialization (Lazy Loading & Quantization)

## Overview
This plan specifies the implementation of "Memory-Aware" loading in `lodum`. While the `stream()` API handles **horizontal scale** (many small objects), this plan addresses **vertical scale**: objects containing massive individual fields (e.g., ML weights, large arrays) that exceed available memory, particularly in WASM/Pyodide environments.

## Motivation (Post-Refactor Context)
With the implementation of the **Stateful Dumper Protocol** and the **Polymorphic API**, `lodum` can now write data with O(1) memory. However, **Loading** is still primarily IR-based: even with `stream()`, individual objects are fully materialized before being yielded. 

Memory-aware serialization will transition the `Loader` protocol to a stateful model, allowing the compiler to generate "Lazy Proxies" that only materialize data when accessed.

## Implementation Approach

### 1. Stateful Loader Orchestration
Similar to the `Dumper` orchestration, the `Loader` protocol will be expanded to support targeted "sub-parsing."

```python
class Loader(Protocol):
    # Existing methods...
    
    def get_raw_segment(self) -> bytes: 
        """Returns the raw bytes of the current field/segment without parsing."""
        ...
    
    def enter_lazy(self) -> 'Loader':
        """Records the current position and returns a loader for deferred materialization."""
        ...
```

### 2. Lazy Proxies & Field Option
Introduce `lazy=True` to `lodum.field()`.

- **Lazy Tensors**: For `numpy` or `torch` arrays, the loader will return a `LazyArrayProxy` that holds a `memoryview` of the underlying buffer (or an `mmap` reference).
- **Lazy Objects**: For complex nested objects, the loader will return a proxy that captures the sub-loader state. Accessing any attribute on the proxy triggers `load_internal`.

```python
@lodum
class Model:
    version: str
    weights: np.ndarray = field(lazy=True)  # Stays as bytes until weights[0] is accessed
```

### 3. Bit-Packed Dtypes (Quantization)
The `load_codegen` engine will be updated to support bit-level unpacking for common ML formats (e.g., 4-bit and 8-bit quantization).

- **Specialized Loops**: The compiler will generate AST for bit-shifting and masking logic (`(byte >> 4) & 0x0F`) to dequantize data on-the-fly during proxy access.
- **Zero-Copy Integration**: Leverage `memoryview` to ensure that even during dequantization, no intermediate full-precision copies of the entire dataset are created.

### 4. Zero-Copy Architecture
- **mmap Source**: Update `_resolve_source` in `internal.py` to support `mmap.mmap` as a first-class source.
- **Buffer Retention**: The `Context` will optionally maintain a reference to the source buffer if lazy fields are present, preventing premature garbage collection.

## Milestones

### Phase 1: The Lazy Protocol (Core)
- [ ] Add `lazy` argument to `Field` and `field()`.
- [ ] Update `Loader` protocol with `get_raw_segment` and `enter_lazy`.
- [ ] Refactor `load_codegen.py` to generate proxy-instantiation AST for lazy fields.

### Phase 2: Array Proxies (Extensions)
- [ ] Implement `LazyArrayProxy` in `extensions/numpy.py`.
- [ ] Ensure `asdict()` and `fromdict()` handle proxy objects correctly.

### Phase 3: Quantization Handlers (ML)
- [ ] Create `src/lodum/extensions/ml.py`.
- [ ] Implement 4-bit/8-bit dequantization logic in the AST compiler.

### Phase 4: Verification
- [ ] Benchmark memory peak during loading of a 2GB "lazy" model in a 512MB environment.
- [ ] Verify `mmap` integration on large local files.

## Relationship to Existing APIs
- **`load()`**: Continues to return fully materialized objects by default.
- **`stream()`**: Remains the tool for iterating over sequences.
- **`lazy=True`**: Allows `load()` and `stream()` to handle objects that are internally too large for memory.
