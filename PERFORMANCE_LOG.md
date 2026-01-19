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

## Final Results
- **Dump 10k**: 0.6358s (vs 1.7608s baseline) -> **~64% faster**
- **Load 10k**: 3.2901s (vs 5.0157s baseline) -> **~34% faster**

All safety features (recursion depth, circular references, type validation) and error reporting details (path tracking with indices) are preserved.
