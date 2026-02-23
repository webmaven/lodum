# Performance Evolution

This document tracks the performance trajectory of Lodum. All results in this analysis are standardized on **Linux (ubuntu-latest)** hardware (AMD EPYC 7763) to ensure a fair comparison across the library's history.

## Performance Trajectory (JSON)

Measurements are in microseconds (us) per operation. Lower is better.

| Scenario | v0.1.0 (Initial) | v0.2.0 (Public) | v0.3.0 (Latest) | Overall Improvement |
| :--- | ---: | ---: | ---: | :--- |
| **Simple Serialization** | 5.56 | 4.86 | 4.90 | **~12% faster** |
| **Simple Deserialization** | 18.82 | 12.05 | 12.47 | **~34% faster** |
| **Complex Serialization** | 10.95 | 7.79 | 7.90 | **~28% faster** |
| **Complex Deserialization** | 37.31 | 25.99 | 26.35 | **~29% faster** |
| **Nested Serialization** | 25.58 | 21.54 | 21.69 | **~15% faster** |
| **Nested Deserialization** | 117.81 | 72.63 | 74.44 | **~37% faster** |

## Key Milestones

### v0.1.0 to v0.2.0: The AST Revolution
The massive jump in performance seen in v0.2.0 was driven by the migration to a fully AST-based (Abstract Syntax Tree) code generation engine. 
- **Optimization**: Instead of generic loops and runtime inspections, Lodum now generates specialized Python bytecode tailored to each unique class schema.
- **Result**: Deserialization speed improved by up to **37%** in nested scenarios.

### v0.2.0 to v0.3.0: Robustness and Concurrency
v0.3.0 focused on cross-platform integrity and WASM support. 
- **Change**: Introduced the `Context` object and a new internal registry to support thread-safe global state and WASM sequential shims.
- **Performance Impact**: Despite the added complexity for concurrency support, performance remained stable (within 1-2% of v0.2.0), proving that our lock-free handler lookups are highly efficient.

## Analysis vs. Competitors

While Lodum is a pure-Python library, its AST-based approach allows it to significantly outperform traditional validation libraries like Marshmallow. 

- **Marshmallow (v3.x)**: Lodum v0.3.0 is typically **2x to 3x faster** across all categories.
- **Pydantic (v2.x)**: Pydantic remains faster due to its core being written in Rust. Lodum provides a competitive alternative for environments where binary dependencies are restricted (like WASM/Pyodide) or where a pure-Python codebase is preferred.

For real-time results and automated regression tracking, visit the [Lodum Performance Dashboard](https://webmaven.github.io/lodum/benchmarks/).
