## Performance Tracking

Lodum performance is automatically tracked on every push to the `main` branch. You can view the historical performance dashboard here:

👉 **[Lodum Performance Dashboard](https://webmaven.github.io/lodum/dev/benchmarks)**

We track performance across both **Linux** and **Windows** environments to ensure consistent quality for all users.

## Benchmark Results

The following benchmarks were run on Python 3.13.7 (win32). Results are in microseconds (us) per operation (lower is better).

### JSON Serialization (Object -> JSON)
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 7.62 ± 1.87 | 15.45 ± 2.03 | 36.51 ± 3.67 |
| Pydantic (v2) | 3.13 ± 1.63 | 3.31 ± 0.40 | 6.76 ± 0.52 |
| Marshmallow | 12.73 ± 1.73 | 30.23 ± 0.97 | 73.29 ± 4.58 |
| Native json (dict) | 4.29 ± 0.41 | 6.76 ± 0.57 | 8.78 ± 0.46 |
| orjson (dict) | 0.50 ± 0.02 | 0.73 ± 0.02 | 0.98 ± 0.01 |

### JSON Deserialization (JSON -> Object)
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 21.75 ± 1.70 | 42.52 ± 2.13 | 131.67 ± 6.75 |
| Pydantic (v2) | 3.21 ± 0.76 | 3.94 ± 0.71 | 16.52 ± 0.95 |
| Marshmallow | 31.21 ± 4.01 | 72.18 ± 4.93 | 226.99 ± 6.63 |
| Native json (dict) | 3.15 ± 0.40 | 4.52 ± 0.64 | 7.59 ± 0.57 |
| orjson (dict) | 0.77 ± 0.10 | 1.52 ± 0.06 | 2.84 ± 0.13 |

### Binary Formats (Lodum vs Native)

| Format | Operation | Simple (us) | Complex (us) | Nested (us) |
| :--- | :--- | :--- | :--- | :--- |
| **MsgPack** | Serialization | 4.60 ± 1.37 | 10.15 ± 0.40 | 31.31 ± 3.03 |
| **MsgPack** | Deserialization | 18.22 ± 2.12 | 35.90 ± 2.62 | 119.92 ± 7.01 |
| **CBOR** | Serialization | 11.61 ± 0.88 | 18.84 ± 0.70 | 43.67 ± 2.76 |
| **CBOR** | Deserialization | 21.61 ± 2.00 | 39.39 ± 3.38 | 132.37 ± 4.49 |
| **Pickle** | Serialization | 8.91 ± 0.73 | 13.26 ± 0.95 | 39.72 ± 2.00 |
| **Pickle** | Deserialization | 6.75 ± 0.42 | 9.87 ± 1.75 | 16.21 ± 1.22 |

## Analysis

- **Lodum vs Marshmallow**: Lodum consistently outperforms Marshmallow (often 2x faster), particularly in serialization and handling complex structures.
- **Lodum vs Pydantic**: Pydantic v2 remains faster due to its Rust-based core. Lodum provides a competitive pure-Python alternative with zero binary dependencies.
- **AST Optimization**: The move to AST-based code generation has significantly improved performance compared to string-based `exec` methods while providing better type safety and more informative error messages.
- **Thread Safety**: The modular refactor introduced thread-safe global state management via `Context` without performance regressions, thanks to a lock-free fast path for handler cache lookups.

For a detailed analysis of performance improvements over time, see [PERFORMANCE_ANALYSIS.md](PERFORMANCE_ANALYSIS.md).

## Running Benchmarks Yourself



See the [benchmarks/](https://github.com/webmaven/lodum/tree/main/benchmarks) directory for instructions on how to run these benchmarks on your own machine.
