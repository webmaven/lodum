# Lodum Performance

Lodum is designed for high performance by using runtime bytecode compilation to generate specialized serialization and deserialization handlers for your classes.

## Benchmark Results

The following benchmarks were run on Python 3.12.12. Results are in microseconds (us) per operation (lower is better).

### JSON Serialization (Object -> JSON)
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 8.46 ± 2.53 | 12.33 ± 0.47 | 21.07 ± 0.54 |
| Pydantic (v2) | 2.18 ± 0.12 | 3.02 ± 0.02 | 5.34 ± 0.12 |
| Marshmallow | 10.73 ± 0.31 | 24.02 ± 0.67 | 61.86 ± 0.58 |
| Native json (dict) | 3.72 ± 0.03 | 6.11 ± 0.19 | 9.54 ± 0.03 |

### JSON Deserialization (JSON -> Object)
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 18.07 ± 0.76 | 25.38 ± 0.88 | 101.99 ± 1.46 |
| Pydantic (v2) | 2.44 ± 0.27 | 3.65 ± 0.12 | 10.42 ± 0.32 |
| Marshmallow | 27.66 ± 0.45 | 64.23 ± 0.80 | 199.06 ± 6.61 |
| Native json (dict) | 2.95 ± 0.19 | 4.70 ± 0.07 | 8.52 ± 0.23 |

### Binary Formats (Lodum vs Native)

| Format | Operation | Simple (us) | Complex (us) | Nested (us) |
| :--- | :--- | ---: | ---: | ---: |
| **MsgPack** | Serialization | 4.14 ± 0.08 | 7.36 ± 0.14 | 14.32 ± 0.30 |
| | Deserialization | 14.41 ± 0.17 | 19.99 ± 0.13 | 91.55 ± 1.14 |
| **CBOR** | Serialization | 11.31 ± 0.04 | 17.26 ± 0.26 | 28.85 ± 0.18 |
| | Deserialization | 18.86 ± 0.34 | 25.80 ± 0.55 | 100.48 ± 1.76 |
| **Pickle** | Serialization | 6.97 ± 0.02 | 10.27 ± 0.11 | 25.93 ± 0.20 |
| | Deserialization | 6.63 ± 0.05 | 8.44 ± 0.04 | 14.79 ± 0.07 |

## Analysis

- **Lodum vs Marshmallow**: Lodum is significantly faster than Marshmallow, especially for nested objects and complex serialization. This is thanks to its bytecode generation which avoids much of the runtime introspection overhead.
- **Lodum vs Pydantic**: Pydantic v2 remains faster as it is primarily implemented in Rust. Lodum aims to provide a pure-Python alternative that achieves high performance through dynamic optimization.
- **Overhead**: Compared to raw dictionary serialization (Native json), Lodum adds some overhead due to object traversal and validation, but remains competitive for a feature-rich serialization library.

## Running Benchmarks Yourself

See the [benchmarks/](benchmarks/) directory for instructions on how to run these benchmarks on your own machine.
