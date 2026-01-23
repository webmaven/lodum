# Lodum Performance Benchmarks

Iterations: 2000

Python version: 3.12.12 (main, Nov  7 2025, 00:07:10) [GCC 13.3.0]

### JSON Serialization (Object -> JSON)
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 8.46 ± 2.53 | 12.33 ± 0.47 | 21.07 ± 0.54 |
| Pydantic (v2) | 2.18 ± 0.12 | 3.02 ± 0.02 | 5.34 ± 0.12 |
| Marshmallow | 10.73 ± 0.31 | 24.02 ± 0.67 | 61.86 ± 0.58 |
| Native json (dict) | 3.72 ± 0.03 | 6.11 ± 0.19 | 9.54 ± 0.03 |
| orjson (dict) | 0.32 ± 0.02 | 0.56 ± 0.02 | 0.83 ± 0.02 |

### JSON Deserialization (JSON -> Object)
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 18.07 ± 0.76 | 25.38 ± 0.88 | 101.99 ± 1.46 |
| Pydantic (v2) | 2.44 ± 0.27 | 3.65 ± 0.12 | 10.42 ± 0.32 |
| Marshmallow | 27.66 ± 0.45 | 64.23 ± 0.80 | 199.06 ± 6.61 |
| Native json (dict) | 2.95 ± 0.19 | 4.70 ± 0.07 | 8.52 ± 0.23 |
| orjson (dict) | 0.58 ± 0.02 | 1.43 ± 0.08 | 2.83 ± 0.17 |

### MsgPack Serialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 4.14 ± 0.08 | 7.36 ± 0.14 | 14.32 ± 0.30 |
| Native msgpack (dict) | 0.90 ± 0.01 | 1.64 ± 0.03 | 3.09 ± 0.02 |

### MsgPack Deserialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 14.41 ± 0.17 | 19.99 ± 0.13 | 91.55 ± 1.14 |
| Native msgpack (dict) | 0.86 ± 0.04 | 1.98 ± 0.03 | 5.05 ± 0.08 |

### CBOR Serialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 11.31 ± 0.04 | 17.26 ± 0.26 | 28.85 ± 0.18 |
| Native cbor2 (dict) | 8.07 ± 0.14 | 11.00 ± 0.16 | 16.85 ± 0.26 |

### CBOR Deserialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 18.86 ± 0.34 | 25.80 ± 0.55 | 100.48 ± 1.76 |
| Native cbor2 (dict) | 3.06 ± 0.03 | 5.91 ± 2.21 | 8.37 ± 0.07 |

### YAML Serialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 493.78 ± 1.44 | 1135.31 ± 13.78 | 2972.50 ± 399.60 |
| ruamel.yaml (dict) | 482.93 ± 4.82 | 1103.49 ± 15.39 | 924.63 ± 16.42 |

### YAML Deserialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 513.86 ± 18.33 | 1333.59 ± 8.63 | 1335.66 ± 9.77 |
| ruamel.yaml (dict) | 474.47 ± 12.26 | 1291.30 ± 31.73 | 1160.17 ± 9.46 |

### Pickle Serialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum (Safe) | 6.97 ± 0.02 | 10.27 ± 0.11 | 25.93 ± 0.20 |
| Native pickle | 3.65 ± 0.06 | 4.34 ± 0.09 | 14.26 ± 0.02 |

### Pickle Deserialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum (Safe) | 6.63 ± 0.05 | 8.44 ± 0.04 | 14.79 ± 0.07 |
| Native pickle | 3.39 ± 0.02 | 5.01 ± 0.04 | 10.79 ± 0.06 |
