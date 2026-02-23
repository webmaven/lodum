# Performance Overview

Lodum is designed for high-performance Python applications. By using runtime bytecode compilation (via Python AST), it generates specialized serialization handlers tailored to your specific classes, achieving speeds that rival or exceed traditional pure-Python frameworks.

## Native Speed, Pure Python

Lodum bridges the gap between the ergonomics of pure Python and the performance requirements of data-intensive applications.

### Core Benchmarks (JSON)
Standardized on **Linux (ubuntu-latest)** hardware. Measurements in microseconds (us) per operation (lower is better).

| Scenario | Lodum (v0.3.0) | Marshmallow | Performance Gain |
| :--- | :--- | :--- | :--- |
| **Simple Serialization** | 4.90 us | 7.62 us | **~1.5x faster** |
| **Simple Deserialization** | 12.47 us | 18.84 us | **~1.5x faster** |
| **Complex Serialization** | 7.90 us | 16.86 us | **~2.1x faster** |
| **Complex Deserialization** | 26.35 us | 43.70 us | **~1.6x faster** |
| **Nested Serialization** | 21.69 us | 46.12 us | **~2.1x faster** |
| **Nested Deserialization** | 74.44 us | 137.24 us | **~1.8x faster** |

## Beyond Execution Speed: Memory Efficiency

Lodum v0.3.0 introduces first-class **Streaming Support**, allowing you to process datasets that exceed your system memory.

### The XL Dataset Challenge
In our standardized XL benchmark (500,000 objects, ~45MB JSON), Lodum demonstrated the massive advantage of lazy processing:

| Method | Peak Memory (Heap) | Efficiency Gain |
| :--- | :--- | :--- |
| **Standard `loads`** | 453.74 MB | Baseline |
| **Streaming `load_stream`** | **0.71 MB** | **99.8% reduction** |

## Why Choose Lodum?

1.  **Pure Python Core**: No C-extensions required. Ideal for **WASM/Pyodide** and restricted environments where binary dependencies are blocked.
2.  **Native Data Science Support**: Optimized handlers for **NumPy**, **Pandas**, and **Polars** (via optional extras).
3.  **Thread-Safe by Design**: Global state is managed via a lock-free context, ensuring high performance even in multi-threaded web servers.
4.  **No "Just-in-Case" Logic**: Lodum generates the exact code needed for your schema—no generic loops or runtime type inspections in the hot path.

---

### Deep Dives
*   **[Performance Evolution](PERFORMANCE_EVOLUTION.md)**: How we achieved these numbers through the AST Revolution.
*   **[Live Performance Dashboard](https://webmaven.github.io/lodum/benchmarks/)**: Real-time regression tracking.
*   **[Benchmark Methodology](BENCHMARK_METHODOLOGY.md)**: How we ensure our data is transparent and reproducible.
