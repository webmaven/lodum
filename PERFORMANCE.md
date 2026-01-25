# Lodum Performance

Lodum is designed for high performance by using runtime bytecode compilation (via Python AST) to generate specialized serialization and deserialization handlers for your classes.

## Benchmark Results

The following benchmarks were run on Python 3.13.7. Results are in microseconds (us) per operation (lower is better).

### JSON Serialization (Object -> JSON)
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 8.71 ± 0.58 | 12.56 ± 1.63 | 32.16 ± 3.28 |
| Pydantic (v2) | 2.03 ± 0.22 | 3.74 ± 0.54 | 6.81 ± 0.93 |
| Marshmallow | 11.51 ± 2.21 | 28.37 ± 3.05 | 69.78 ± 4.66 |
| Native json (dict) | 4.30 ± 0.19 | 6.13 ± 0.56 | 9.26 ± 0.92 |
| orjson (dict) | 0.44 ± 0.30 | 0.51 ± 0.02 | 1.01 ± 0.04 |

### JSON Deserialization (JSON -> Object)
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 21.73 ± 2.14 | 40.11 ± 3.03 | 122.56 ± 3.39 |
| Pydantic (v2) | 2.86 ± 0.22 | 4.61 ± 0.22 | 12.11 ± 1.72 |
| Marshmallow | 37.93 ± 3.55 | 74.39 ± 8.06 | 222.29 ± 6.17 |
| Native json (dict) | 3.55 ± 0.74 | 5.56 ± 0.72 | 8.09 ± 0.88 |
| orjson (dict) | 0.68 ± 0.40 | 1.44 ± 0.15 | 2.75 ± 0.18 |

### Binary Formats (Lodum vs Native)

| Format | Operation | Simple (us) | Complex (us) | Nested (us) |
| :--- | :--- | ---: | ---: | ---: |
| **MsgPack** | Serialization | 6.06 ± 0.46 | 9.49 ± 1.49 | 26.23 ± 1.68 |
| | Deserialization | 16.89 ± 1.25 | 36.03 ± 1.27 | 114.76 ± 2.67 |
| **CBOR** | Serialization | 12.61 ± 0.99 | 17.50 ± 2.55 | 40.12 ± 1.54 |
| | Deserialization | 21.09 ± 2.42 | 38.01 ± 2.89 | 124.66 ± 4.30 |
| **Pickle** | Serialization | 8.87 ± 0.80 | 12.10 ± 2.17 | 35.68 ± 4.63 |
| | Deserialization | 6.37 ± 0.70 | 8.83 ± 2.33 | 15.30 ± 1.14 |

## Analysis

- **Lodum vs Marshmallow**: Lodum consistently outperforms Marshmallow, particularly in serialization and handling complex structures.
- **Lodum vs Pydantic**: Pydantic v2 remains faster due to its Rust-based core. Lodum provides a competitive pure-Python alternative.
- **AST Optimization**: The move to AST-based code generation has further improved performance, especially for JSON and CBOR serialization, compared to previous string-based generation methods.

## Running Benchmarks Yourself

See the [benchmarks/](benchmarks/) directory for instructions on how to run these benchmarks on your own machine.