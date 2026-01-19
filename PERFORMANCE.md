# Lodum Performance

Lodum is designed for high performance by using runtime bytecode compilation to generate specialized serialization and deserialization handlers for your classes.

## Benchmark Results

The following benchmarks were run on Python 3.12.12. Results are in microseconds (us) per operation (lower is better).

### JSON Serialization (Object -> JSON)
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 6.55 ± 0.27 | 25.64 ± 0.21 | 26.86 ± 0.29 |
| Pydantic (v2) | 1.97 ± 0.03 | 2.74 ± 0.04 | 5.27 ± 0.03 |
| Marshmallow | 11.58 ± 0.06 | 27.72 ± 5.25 | 81.42 ± 3.37 |
| Native json (dict) | 4.84 ± 0.79 | 7.81 ± 1.28 | 15.44 ± 2.46 |

### JSON Deserialization (JSON -> Object)
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 21.09 ± 1.21 | 40.50 ± 1.18 | 125.10 ± 2.11 |
| Pydantic (v2) | 2.82 ± 0.82 | 3.98 ± 0.09 | 10.34 ± 0.07 |
| Marshmallow | 27.67 ± 0.34 | 64.40 ± 0.37 | 193.85 ± 1.76 |
| Native json (dict) | 2.90 ± 0.02 | 4.68 ± 0.05 | 8.16 ± 0.02 |

### Binary Formats (Lodum vs Native)

| Format | Operation | Simple (us) | Complex (us) | Nested (us) |
| :--- | :--- | ---: | ---: | ---: |
| **MsgPack** | Serialization | 3.90 ± 0.04 | 19.75 ± 0.31 | 20.10 ± 0.12 |
| | Deserialization | 16.83 ± 0.18 | 35.29 ± 0.38 | 116.42 ± 0.52 |
| **CBOR** | Serialization | 11.73 ± 0.16 | 35.63 ± 3.14 | 41.52 ± 5.27 |
| | Deserialization | 20.30 ± 0.24 | 59.80 ± 21.04 | 238.30 ± 18.22 |
| **Pickle** | Serialization | 7.10 ± 0.06 | 22.72 ± 0.07 | 32.51 ± 1.14 |
| | Deserialization | 6.99 ± 0.03 | 9.05 ± 0.06 | 15.18 ± 0.06 |

## Analysis

- **Lodum vs Marshmallow**: Lodum is significantly faster than Marshmallow, especially for nested objects and complex serialization. This is thanks to its bytecode generation which avoids much of the runtime introspection overhead.
- **Lodum vs Pydantic**: Pydantic v2 remains faster as it is primarily implemented in Rust. Lodum aims to provide a pure-Python alternative that achieves high performance through dynamic optimization.
- **Overhead**: Compared to raw dictionary serialization (Native json), Lodum adds some overhead due to object traversal and validation, but remains competitive for a feature-rich serialization library.

## Running Benchmarks Yourself

See the [benchmarks/](benchmarks/) directory for instructions on how to run these benchmarks on your own machine.
