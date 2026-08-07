# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.0] - 2026-08-06

### Added
- **Zero-Copy Buffer Extraction**: Added `dump_buffer` method to `Dumper` protocol for in-memory buffer passing without copying.
- **O(1) NumPy Reconstitution**: Fast-path O(1) buffer deserialization using `np.frombuffer` for NumPy arrays and binary buffers.
- **Collection Subclass Reconstitution**: Automatic preservation and instantiation of custom `dict` and `list` subclasses (`collections.UserDict`, `collections.UserList`, custom mapping types) across serialization boundaries.
- **Native `@dataclass` Support**: Direct serialization and hydration of standard Python `@dataclass` instances without requiring the `@lodum` decorator.
- **O(1) Streaming JSON Serialization**: Fully implemented the stateful `Dumper` protocol, enabling constant-memory JSON serialization via `dump_stream`.
- **Eager Metadata Analysis**: The `@lodum` decorator now performs eager analysis of classes, ensuring metadata is immediately available for tests and schema generation without requiring a prior serialization call.

### Fixed
- **Multithreaded Compiler Race Condition**: Global handler registry initialization for worker threads to prevent concurrency cache corruption.
- **Protocol Compliance**: Strict propagation of `depth` and `seen` context parameters across all standard library collection handlers.

## [0.3.0] - 2026-02-21

### Added
- **Robust WASM Concurrency Support**: New `lodum.concurrency` module providing a unified threading/locking API for both native and browser-based Python.
- **Active Thread Probing**: Automatic detection of threading capabilities in WASM/Pyodide environments via active probing rather than just environment variables.
- **Sequential Shims**: Graceful fallback to `SequentialThread`, `DummyLock`, and `DummyLocal` in restricted environments (e.g., browsers without COOP/COEP isolation).
- **CI Validation**: Automated Pyodide test suite execution in both standard and shared-memory modes.

## [0.2.0] - 2026-02-11

### Added
- **First Public Release!**
- Core `@lodum` decorator for class introspection.
- AST-based bytecode compiler for high-performance serialization.
- Support for multiple formats: JSON, YAML, TOML, MsgPack, CBOR, BSON, and Pickle.
- Deep normalization with `asdict()` and hydration with `fromdict()`.
- Built-in validation system (`Range`, `Length`, `Match`, `OneOf`).
- Standardized JSON Schema generation via `lodum.schema()`.
- Native support for `numpy`, `pandas`, and `polars` data structures.
- Support for most standard library collection types and wrappers.
- Detailed error path tracking (e.g., `root.users[2].id`).
- Comprehensive documentation suite including Architecture, Performance, and User Guides.
- GitHub community templates and governance documents.

### Changed
- Refactored core engine into modular `compiler/` and `handlers/` subpackages.
- Promoted `lodum.schema()` as the primary entry point for schema generation.
- Improved thread-safety with thread-local `Context` and lock-free cache lookups.

## [0.1.0] - 2025-01-19
- Initial internal baseline and proof-of-concept.
