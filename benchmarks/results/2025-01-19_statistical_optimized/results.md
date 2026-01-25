# Lodum Performance Benchmarks

Iterations: 2000

Python version: 3.12.12 (main, Nov  7 2025, 00:07:10) [GCC 13.3.0]

### JSON Serialization (Object -> JSON)
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 6.55 ± 0.27 | 25.64 ± 0.21 | 26.86 ± 0.29 |
| Pydantic (v2) | 1.97 ± 0.03 | 2.74 ± 0.04 | 5.27 ± 0.03 |
| Marshmallow | 11.58 ± 0.06 | 27.72 ± 5.25 | 81.42 ± 3.37 |
| Native json (dict) | 4.84 ± 0.79 | 7.81 ± 1.28 | 15.44 ± 2.46 |
| orjson (dict) | 0.50 ± 0.04 | 0.91 ± 0.04 | 1.15 ± 0.07 |

### JSON Deserialization (JSON -> Object)
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 21.09 ± 1.21 | 40.50 ± 1.18 | 125.10 ± 2.11 |
| Pydantic (v2) | 2.82 ± 0.82 | 3.98 ± 0.09 | 10.34 ± 0.07 |
| Marshmallow | 27.67 ± 0.34 | 64.40 ± 0.37 | 193.85 ± 1.76 |
| Native json (dict) | 2.90 ± 0.02 | 4.68 ± 0.05 | 8.16 ± 0.02 |
| orjson (dict) | 0.58 ± 0.01 | 1.40 ± 0.05 | 2.67 ± 0.01 |

### MsgPack Serialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 3.90 ± 0.04 | 19.75 ± 0.31 | 20.10 ± 0.12 |
| Native msgpack (dict) | 0.93 ± 0.01 | 1.57 ± 0.02 | 3.14 ± 0.03 |

### MsgPack Deserialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 16.83 ± 0.18 | 35.29 ± 0.38 | 116.42 ± 0.52 |
| Native msgpack (dict) | 0.84 ± 0.02 | 1.98 ± 0.01 | 4.99 ± 0.04 |

### CBOR Serialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 11.73 ± 0.16 | 35.63 ± 3.14 | 41.52 ± 5.27 |
| Native cbor2 (dict) | 11.64 ± 0.12 | 16.66 ± 0.68 | 17.40 ± 0.52 |

### CBOR Deserialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 20.30 ± 0.24 | 59.80 ± 21.04 | 238.30 ± 18.22 |
| Native cbor2 (dict) | 4.92 ± 0.16 | 7.73 ± 0.24 | 15.42 ± 0.73 |

### YAML Serialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 675.55 ± 202.43 | 1190.75 ± 33.93 | 2773.75 ± 32.08 |
| ruamel.yaml (dict) | 479.82 ± 2.26 | 1098.12 ± 11.04 | 918.68 ± 4.44 |

### YAML Deserialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 516.77 ± 4.58 | 1374.45 ± 10.70 | 1459.11 ± 78.88 |
| ruamel.yaml (dict) | 491.33 ± 19.55 | 1307.06 ± 45.36 | 1400.55 ± 282.26 |

### Pickle Serialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum (Safe) | 7.10 ± 0.06 | 22.72 ± 0.07 | 32.51 ± 1.14 |
| Native pickle | 4.38 ± 0.22 | 4.72 ± 0.08 | 15.02 ± 0.09 |

### Pickle Deserialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum (Safe) | 6.99 ± 0.03 | 9.05 ± 0.06 | 15.18 ± 0.06 |
| Native pickle | 3.58 ± 0.02 | 5.30 ± 0.04 | 11.11 ± 0.03 |
