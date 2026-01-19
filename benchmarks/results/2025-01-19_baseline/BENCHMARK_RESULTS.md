# Lodum Performance Benchmarks

Iterations: 2000

Python version: 3.12.12 (main, Nov  7 2025, 00:07:10) [GCC 13.3.0]

### JSON Serialization (Object -> JSON)
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 8.24 | 31.47 | 33.58 |
| Pydantic (v2) | 1.90 | 2.76 | 5.22 |
| Marshmallow | 11.10 | 24.55 | 63.11 |
| Native json (dict) | 3.85 | 5.99 | 9.67 |
| orjson (dict) | 0.33 | 0.57 | 0.86 |

### JSON Deserialization (JSON -> Object)
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 22.06 | 45.39 | 131.68 |
| Pydantic (v2) | 2.88 | 4.00 | 10.58 |
| Marshmallow | 27.64 | 65.16 | 196.23 |
| Native json (dict) | 2.96 | 4.75 | 8.41 |
| orjson (dict) | 0.60 | 1.29 | 2.66 |

### MsgPack Serialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 4.89 | 25.56 | 25.97 |
| Native msgpack (dict) | 0.95 | 1.67 | 3.33 |

### MsgPack Deserialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 17.84 | 38.71 | 124.40 |
| Native msgpack (dict) | 0.84 | 2.02 | 5.00 |

### CBOR Serialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 12.51 | 37.00 | 41.75 |
| Native cbor2 (dict) | 8.44 | 11.87 | 17.44 |

### CBOR Deserialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 22.41 | 44.90 | 132.87 |
| Native cbor2 (dict) | 3.16 | 4.82 | 8.52 |

### YAML Serialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 496.58 | 2403.27 | 3204.83 |
| ruamel.yaml (dict) | 724.30 | 1858.29 | 976.29 |

### YAML Deserialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 538.71 | 1450.11 | 1488.50 |
| ruamel.yaml (dict) | 470.63 | 1470.87 | 1184.72 |

### Pickle Serialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum (Safe) | 8.01 | 32.32 | 38.42 |
| Native pickle | 3.88 | 4.70 | 14.65 |

### Pickle Deserialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum (Safe) | 7.22 | 9.17 | 15.54 |
| Native pickle | 3.62 | 5.28 | 11.11 |
