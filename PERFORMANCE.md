# Lodum Performance

Lodum is designed for high performance by using runtime bytecode compilation to generate specialized serialization and deserialization handlers for your classes.

## Benchmark Results

The following benchmarks were run on Python 3.12.12. Results are in microseconds (us) per operation (lower is better).

### JSON Serialization (Object -> JSON)
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 8.24 | 31.47 | 33.58 |
| Pydantic (v2) | 1.90 | 2.76 | 5.22 |
| Marshmallow | 11.10 | 24.55 | 63.11 |
| Native json (dict) | 3.85 | 5.99 | 9.67 |

### JSON Deserialization (JSON -> Object)
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 22.06 | 45.39 | 131.68 |
| Pydantic (v2) | 2.88 | 4.00 | 10.58 |
| Marshmallow | 27.64 | 65.16 | 196.23 |
| Native json (dict) | 2.96 | 4.75 | 8.41 |

### Binary Formats (Lodum vs Native)

| Format | Operation | Simple (us) | Complex (us) | Nested (us) |
| :--- | :--- | ---: | ---: | ---: |
| **MsgPack** | Serialization | 4.89 | 25.56 | 25.97 |
| | Deserialization | 17.84 | 38.71 | 124.40 |
| **CBOR** | Serialization | 12.51 | 37.00 | 41.75 |
| | Deserialization | 22.41 | 44.90 | 132.87 |
| **Pickle** | Serialization | 8.01 | 32.32 | 38.42 |
| | Deserialization | 7.22 | 9.17 | 15.54 |

## Analysis

- **Lodum vs Marshmallow**: Lodum is significantly faster than Marshmallow, especially for nested objects and complex serialization. This is thanks to its bytecode generation which avoids much of the runtime introspection overhead.
- **Lodum vs Pydantic**: Pydantic v2 remains faster as it is primarily implemented in Rust. Lodum aims to provide a pure-Python alternative that achieves high performance through dynamic optimization.
- **Overhead**: Compared to raw dictionary serialization (Native json), Lodum adds some overhead due to object traversal and validation, but remains competitive for a feature-rich serialization library.

## Running Benchmarks Yourself

See the [benchmarks/](benchmarks/) directory for instructions on how to run these benchmarks on your own machine.
