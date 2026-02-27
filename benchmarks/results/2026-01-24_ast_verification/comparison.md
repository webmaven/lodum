# Benchmark Comparison: AST Refactor vs Baseline (01-20)

**Date:** 2026-01-24
**Baseline:** `benchmarks/results/2026-01-20_merged_performance/BENCHMARK_RESULTS_WIN32.md`
**Current:** `current_benchmark.txt`

## Summary

The AST refactoring has resulted in performance improvements across most key metrics, particularly in JSON handling.

| Category | Scenario | Baseline (us) | Current (us) | Change |
| :--- | :--- | :--- | :--- | :--- |
| **JSON Serialization** | Simple | 11.45 | 8.71 | **-24% (Faster)** |
| | Complex | 16.01 | 12.56 | **-21% (Faster)** |
| | Nested | 33.43 | 32.16 | -4% (Faster) |
| **JSON Deserialization** | Simple | 31.24 | 21.73 | **-30% (Faster)** |
| | Complex | 40.06 | 40.11 | 0% |
| | Nested | 145.26 | 122.56 | **-16% (Faster)** |
| **MsgPack Serialization** | Simple | 6.80 | 6.06 | -11% (Faster) |
| | Complex | 10.76 | 9.49 | -12% (Faster) |
| | Nested | 24.77 | 26.23 | +6% (Slower) |
| **MsgPack Deserialization** | Simple | 21.88 | 16.89 | **-23% (Faster)** |
| | Complex | 29.45 | 36.03 | +22% (Slower) |
| | Nested | 142.09 | 114.76 | **-19% (Faster)** |
| **CBOR Serialization** | Simple | 25.09 | 12.61 | **-50% (Faster)** |
| | Complex | 24.50 | 17.50 | **-29% (Faster)** |
| | Nested | 48.42 | 40.12 | -17% (Faster) |
| **CBOR Deserialization** | Simple | 25.61 | 21.09 | -18% (Faster) |
| | Complex | 34.33 | 38.01 | +11% (Slower) |
| | Nested | 146.51 | 124.66 | **-15% (Faster)** |

## Conclusion

The move to AST-based code generation (`exec` removed in favor of direct `compile`) has generally improved performance, likely due to more efficient bytecode generation or reduction in overhead. 

*   **JSON** sees consistent wins.
*   **CBOR** sees massive wins in serialization.
*   **MsgPack** is faster for simple types but mixed for complex nested structures.

The regression in MsgPack Complex Deserialization (+22% slower) might be worth investigating, but the overall picture is positive.
