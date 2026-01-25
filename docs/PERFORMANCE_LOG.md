# Performance Optimization Log

This document records the experiments and findings during the performance optimization of Lodum.

## Baseline
- **Benchmark**: JSON dump/load of a `Post` object with 10 `Comment`s and nested `User` objects (10,000 iterations).
- **Results**:
  - Dump: 1.7608s
  - Load: 5.0157s

---

## Experiment 1: Defer Path Tracking
- **Plan**: Defer the computation of `field_path` strings in compiled load handlers until an exception actually occurs.
- **Hypothesis**: String formatting for paths adds overhead even in the success path.
- **Findings**: No significant improvement. Loading time remained around 5.05s.
- **Reasoning**: The overhead of string formatting is small compared to other operations (like object instantiation), and it was still being evaluated for nested calls because `load` requires it.

---

## Experiment 2: Pre-resolve Handlers
- **Plan**: Pre-resolve dump/load handlers for fields at compile time and include them in the `context` of the compiled functions.
- **Hypothesis**: Avoiding `dump()` and `load()` entry points (which perform cache lookups and introspection) will significantly reduce overhead.
- **Findings**: Massive improvement in Dumping (~65% faster). Loading also improved (~12%).
- **Warning**: Bypassing `dump()` removed circular reference detection for nested objects.
- **Integration**: Added circular reference and depth checks directly into the compiled handlers to maintain safety while keeping most of the performance gain.

---

## Experiment 3: Optimize Circular Reference Detection
- **Plan**: Make circular reference detection in the `dump()` entry point more efficient by avoiding `id()` and `seen` checks for primitives.
- **Hypothesis**: Calling `id()` for every single primitive is expensive.
- **Findings**: No significant improvement in the specific benchmark.
- **Reasoning**: Compiled handlers were already bypassing `dump()` for primitives. Nested containers still needed the check.
- **Final Design**: Moved safety checks to the handlers themselves, allowing them to call each other directly (pre-resolved) while remaining safe.

---

## Experiment 4: Inlining Sequence Handlers
- **Plan**: Inline loops for `List[Primitive]` directly into compiled handlers.
- **Hypothesis**: Avoiding a call to `dump_seq` for common lists would help.
- **Findings**: Minimal benefit for small lists. Overhead is dominated by other factors.
- **Status**: Not integrated as the complexity outweighs the gain for now.

---

## Experiment 5: Fast JSON Loader (Raw Dict Access)
- **Plan**: Allow loaders to provide direct access to the source dictionary (`get_dict()`) and have the compiled handler access raw values for primitives.
- **Hypothesis**: Avoiding the creation of `JsonLoader` wrapper objects for every field will reduce allocation overhead.
- **Findings**: Significant improvement in Loading (~25% improvement over previous best).
- **Integration**: Added `get_dict()` to the `Loader` protocol and updated `internal.py` to use it when available.

---

## Experiment 6: Optimized Sequence Deserialization
- **Plan**: Inline loops for `List[Primitive]` and `Dict[str, Primitive]` in compiled load handlers.
- **Hypothesis**: Avoiding closure calls and generic `load_list` logic for common primitives will reduce overhead.
- **Findings**: Significant improvement. Loading time dropped to 3.29s.
- **Integration**: Inlined loops with index-based path tracking to preserve detailed error reporting.

---

## Experiment 7: Faster Primitive Sequence Serialization
- **Plan**: Inline serialization for `List[Primitive]` in compiled dump handlers and generic `_dump_sequence`.
- **Hypothesis**: Avoiding `dump()` calls for known primitives in a list will speed up common cases.
- **Findings**: Modest improvement. Dumping time dropped to 0.64s.
- **Integration**: Inlined `list(val)` for primitive lists in dump handlers, with circular reference checks.

---

## Experiment 8: Multi-format Performance Verification
- **Plan**: Measure the impact of engine-level optimizations across multiple formats (JSON, MsgPack, CBOR, YAML).
- **Findings**:
  - **MsgPack/CBOR**: Loading performance is comparable to JSON (~0.31s-0.33s for 1k iterations), confirming that `get_dict()` and inlined primitive handling provide universal benefits to any format that returns standard Python collections.
  - **YAML**: Significantly slower overall due to the overhead of the `ruamel.yaml` parser, but still benefits proportionally from engine speedups.
- **Conclusion**: The "Engine vs Format" architecture successfully decoupled optimizations, allowing a single set of improvements in `internal.py` to uplift the entire library.

---

## Experiment 9: Modular Thread-Safe Architecture
- **Plan**: Refactor the "God Module" `internal.py` into modular components and encapsulate global state into a thread-safe `Context` object.
- **Hypothesis**: Decoupling the engine and implementing thread-local storage for registry/caches will improve maintainability without significantly increasing overhead.
- **Findings**: No regression in "happy path" performance. The lock-free fast path for cache lookups ensures that high-concurrency access remains efficient.
- **Integration**: Created `compiler/` and `handlers/` subpackages. All global state now flows through `get_context()`.

---

## Final Results (Post-Refactor)
- **Dump 10k (JSON)**: 0.63s - 0.65s (Baseline: 1.76s) -> **~64% faster**
- **Load 10k (JSON)**: 3.25s - 3.30s (Baseline: 5.01s) -> **~35% faster**

All safety features (recursion depth, circular references, type validation) and error reporting details are preserved across all formats. Feature parity and standardized error messages are now implemented across the entire library.
