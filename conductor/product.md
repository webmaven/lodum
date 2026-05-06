# Product Guide: lodum

## Overview
`lodum` is a high-performance Python serialization and deserialization framework inspired by Rust's `serde`. It uses a specialized Abstract Syntax Tree (AST) bytecode compiler to generate optimized serialization logic at runtime, effectively eliminating the overhead of generic Python introspection.

## Target Audience
- **Performance-Oriented Developers**: Developers building high-throughput web APIs, microservices, or low-latency systems where serialization is a bottleneck.
- **Data Science & ML Engineers**: Users of NumPy, Pandas, and Polars who need efficient, zero-glue serialization for complex datasets.
- **WASM & Browser Developers**: Developers targeting Pyodide or browser-based Python applications who require fast, memory-efficient data interchange.

## Core Features & Capabilities
1. **AST Bytecode Compilation**: Generates specialized bytecode for serialization (~64% faster dumps) and deserialization (~35% faster loads) than standard Python introspection.
2. **Universal Polymorphic API**: A single, ergonomic interface for JSON, YAML, TOML, MsgPack, CBOR, BSON, and Pickle.
3. **O(1) Memory Streaming**: Constant-memory serialization for massive object graphs directly to disk or network streams.
4. **Data Science First-Class Citizens**: Native, zero-configuration support for NumPy, Pandas, and Polars.
5. **Secure-by-Design**: Built-in `SafeUnpickler` and structural validation to prevent arbitrary code execution in potentially insecure formats.
6. **Deep Normalization (`asdict`)**: Converts objects to/from Python primitives with full field customization (renaming, skipping, validation).

## Guiding Principles
- **Speed-First**: Performance is the primary metric. Architectural decisions prioritize bytecode efficiency over runtime flexibility.
- **Ergonomics**: The API should feel like "standard" Python `json` or `pickle` while providing much more power.
- **Universal & Extensible**: A format-agnostic core that allows easy integration of new protocols and complex data types.
- **WASM Compatibility**: First-class support for browser-based Python runtimes, including concurrency management in restricted environments.

## Future Vision (v0.4.0 and Beyond)
The immediate focus is on **Compiler Robustness**, ensuring the AST engine can handle increasingly complex Python data structures and edge cases while maintaining its speed lead. Future goals include native FastAPI integration and automatic OpenAPI schema generation.
