# Lodum Performance Benchmarks

Iterations: 2000

Python version: 3.10.12 (main, Jan 26 2026, 14:55:28) [GCC 11.4.0]

### JSON Serialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 16.10 ± 0.67 | 24.35 ± 0.80 | 66.27 ± 6.40 |
| Pydantic (v2) | 3.73 ± 0.02 | 5.25 ± 0.23 | 9.31 ± 0.67 |
| Marshmallow | 21.62 ± 0.78 | 46.79 ± 1.42 | 118.76 ± 0.78 |

### JSON Deserialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 35.41 ± 2.15 | 69.14 ± 2.17 | 189.45 ± 4.02 |
| Pydantic (v2) | 3.58 ± 0.19 | 6.81 ± 1.61 | 13.43 ± 0.13 |
| Marshmallow | 52.71 ± 0.96 | 121.47 ± 14.14 | 385.11 ± 37.16 |

### MsgPack Serialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 9.15 ± 0.65 | 14.94 ± 1.03 | 50.09 ± 3.16 |
| Native msgpack (dict) | 1.50 ± 0.03 | 2.59 ± 0.06 | 4.47 ± 0.04 |

### MsgPack Deserialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 33.69 ± 10.59 | 60.17 ± 2.27 | 191.20 ± 6.07 |
| Native msgpack (dict) | 1.19 ± 0.03 | 3.02 ± 0.18 | 6.27 ± 0.50 |

### CBOR Serialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 24.33 ± 2.94 | 33.02 ± 2.57 | 73.37 ± 1.05 |
| Native cbor2 (dict) | 14.07 ± 1.32 | 17.45 ± 0.83 | 24.81 ± 0.78 |

### CBOR Deserialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 38.28 ± 2.02 | 71.27 ± 3.61 | 205.75 ± 5.73 |
| Native cbor2 (dict) | 5.22 ± 0.16 | 7.25 ± 0.12 | 11.04 ± 0.16 |

### YAML Serialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 898.39 ± 23.56 | 2281.63 ± 170.77 | 6355.75 ± 134.65 |

### YAML Deserialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 1407.61 ± 50.92 | 3660.13 ± 115.82 | 3588.55 ± 55.59 |

### TOML Serialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 34.62 ± 2.45 | 93.69 ± 1.02 | 230.37 ± 39.88 |

### TOML Deserialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum | 143.04 ± 11.80 | 371.91 ± 22.04 | N/A |

### Pickle Serialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum (Safe) | 26.05 ± 1.11 | 39.94 ± 1.99 | 80.64 ± 2.84 |

### Pickle Deserialization
| Library | Simple (us) | Complex (us) | Nested (us) |
| :--- | ---: | ---: | ---: |
| Lodum (Safe) | 16.15 ± 1.65 | 18.00 ± 0.92 | 29.25 ± 2.85 |

