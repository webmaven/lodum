# Memory-Aware Serialization (Lazy Loading & Quantization)

## Overview
<<<<<<< HEAD
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
=======
This plan details the implementation of "Memory-Aware" serialization in `lodum`. The goal is to allow Data Analysts to work with large, quantized datasets (e.g., ML weights, high-frequency sensor data) in memory-constrained environments like Pyodide/WASM without triggering Out-Of-Memory (OOM) errors.

## Problem Statement
Standard Python serialization (and many modern alternatives) expands data upon loading. For example, 1GB of 4-bit quantized data often expands to 8GB or more when converted to standard Python floats or NumPy arrays. In environments like WASM with a 4GB memory ceiling, this makes many data science tasks impossible.

## Implementation Approach

### 1. Lazy Field & Partial Object Loading
Introduce a `lazy=True` option to `field()`. This provides two tiers of memory optimization:

- **Lazy Tensor/Array Access**: For large arrays (NumPy/Tensors), the loader captures the byte-offset and length, returning a proxy. Materialization occurs only when slices are accessed.
- **Lazy Field Access (Complex Objects)**: For nested `@lodum` objects or large dictionaries, the field is skipped during initial parse. Accessing the attribute triggers a targeted "sub-parse" of only that section of the buffer.

```python
@lodum
class LargeModel:
    metadata: Dict[str, Any]
    weights: np.ndarray = field(lazy=True)  # Tensor proxy
    extra_data: ComplexInfo = field(lazy=True)  # Object proxy
```

- **Generated Bytecode**: The compiler generates a "skip-and-record" instruction that stores the buffer reference and bounds for the lazy field.
- **Seekable Requirements**: This feature requires a seekable data source (e.g., `BytesIO` or `mmap`) to allow random access to lazy segments.

### 2. Quantization-Aware Handlers (lodum.ext.ml)
To maintain a lean core, advanced ML-specific logic (bit-packing, quantization scales) will reside in the `lodum.ext.ml` namespace. This will be an optional "extra" (`pip install "lodum[ml]"`).

- **Bit-Packed Dtypes**: Support for `q4_0`, `q4_k`, `int8`, etc.
- **AST Generation**: The `load_codegen` engine will generate specialized bit-shifting loops (`(val >> 4) & 0x0F`) to unpack data directly into the target representation.
- **Metadata Coupling**: Support for block-level quantization parameters (scales and zero-points) that are read and applied during access.

### 3. Zero-Copy Architecture & Memory Mapping
Leverage Python's `memoryview` and `mmap` to avoid memory expansion.

- **Buffer Management**: Use `memoryview` to slice the input buffer without copying.
- **mmap Integration**: When loading from a file, `lodum` can automatically use `mmap` to map the file into address space, allowing the OS to handle paging and keeping the Python heap footprint minimal.
- **Interleaved Data**: Support formats like GGUF and Safetensors, allowing the parser to jump between descriptors and large data blocks.

## Use Cases
- **Browser-based LLMs**: Managing model metadata and weights in Pyodide without crashing the tab.
- **Edge Computing**: Analyzing high-frequency sensor streams on resource-constrained hardware.
- **Dequantize-on-Access**: Providing a NumPy-compatible interface that only performs floating-point math on the specific slice being accessed.

## Relationship to Streaming Support
While both this plan and the [Streaming Support Plan](./streaming_support.md) address memory constraints, they solve different problems:

- **Streaming (`load_stream`)**: Focuses on **horizontal scale** (iterating over millions of objects). It works on sequential, non-seekable streams (like network sockets).
- **Memory-Aware (`lazy=True`)**: Focuses on **vertical depth** (handling massive fields within a single object). It requires a **seekable source** (like a local file or `BytesIO`) to allow the proxy to "jump back" and read data on-demand.

**Synergy**: When combined, `lodum` can stream a large list of objects where each individual object is also lazily loaded, providing maximum memory efficiency for complex data science pipelines.

## Milestones
1. **Phase 1**: Prototype lazy field skipping in the AST compiler.
2. **Phase 2**: Implement basic `QuantizedArray` proxy for 8-bit data.
3. **Phase 3**: Add bit-packed (4-bit) AST generation logic.
4. **Phase 4**: Full integration with NumPy/Polars for zero-copy views.
>>>>>>> main
