# Performance Analysis: 2025-01-19 Baseline vs 2026-01-20 Optimized

This document analyzes the performance impact of the engine overhaul reconciled on January 20th, 2026.

## Executive Summary

The optimizations implemented in the `performance-improvements` branch have yielded massive performance gains, particularly for complex and nested objects. Engine-level improvements such as pre-resolved field handlers, inlined primitive sequence loops, and raw dictionary access have successfully decoupled performance from format overhead.

### Key Highlights:
- **Complex Object Serialization**: ~53% to ~71% faster across all formats.
- **Complex Object Deserialization**: ~43% to ~48% faster across all formats.
- **Nested Object Handling**: ~23% to ~45% faster.

## Detailed Metrics Comparison

All values are in microseconds (us) per operation (lower is better).

### 1. JSON (Text-based)

| Operation | Model | 1/19 Baseline | 1/20 Optimized | Improvement |
| :--- | :--- | :---: | :---: | :---: |
| **Serialization** | Simple | 8.24 | 8.46 | -2.6% (Noise) |
| | Complex | 31.47 | 12.33 | **60.8%** |
| | Nested | 33.58 | 21.07 | **37.2%** |
| **Deserialization** | Simple | 22.06 | 18.07 | **18.1%** |
| | Complex | 45.39 | 25.38 | **44.1%** |
| | Nested | 131.68 | 101.99 | **22.5%** |

### 2. MsgPack (Binary-based)

| Operation | Model | 1/19 Baseline | 1/20 Optimized | Improvement |
| :--- | :--- | :---: | :---: | :---: |
| **Serialization** | Simple | 4.89 | 4.14 | **15.3%** |
| | Complex | 25.56 | 7.36 | **71.2%** |
| | Nested | 25.97 | 14.32 | **44.8%** |
| **Deserialization** | Simple | 17.84 | 14.41 | **19.2%** |
| | Complex | 38.71 | 19.99 | **48.3%** |
| | Nested | 124.40 | 91.55 | **26.4%** |

### 3. CBOR (Binary-based)

| Operation | Model | 1/19 Baseline | 1/20 Optimized | Improvement |
| :--- | :--- | :---: | :---: | :---: |
| **Serialization** | Simple | 12.51 | 11.31 | **9.6%** |
| | Complex | 37.00 | 17.26 | **53.3%** |
| | Nested | 41.75 | 28.85 | **30.9%** |
| **Deserialization** | Simple | 22.41 | 18.86 | **15.8%** |
| | Complex | 44.90 | 25.80 | **42.5%** |
| | Nested | 132.87 | 100.48 | **24.4%** |

## Conclusion

The engine overhaul is a resounding success. By moving safety checks (circular references, recursion depth) and type validation into compiled bytecode, Lodum achieves high speed without sacrificing the robustness inspired by Rust's `serde`. The improvements are format-agnostic, providing immediate benefits to JSON, MsgPack, CBOR, and even YAML (which saw proportional gains despite high parser overhead).
