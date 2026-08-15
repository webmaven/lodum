# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.0] - 2026-08-15

### Added
- **Zero-Copy Buffer Extraction**: Added `dump_buffer` method to `Dumper` protocol for zero-copy in-memory buffer passing.
- **O(1) NumPy Reconstitution**: Fast-path O(1) buffer deserialization using `np.frombuffer` for NumPy arrays and binary buffers.
- **Collection Subclass Reconstitution**: Automatic preservation and instantiation of custom `dict` and `list` subclasses (`collections.UserDict`, `collections.UserList`, custom mapping types) across serialization boundaries.
- **Native `@dataclass` Support**: Direct serialization and hydration of standard Python `@dataclass` instances without requiring the `@lodum` decorator.
- **O(1) Streaming JSON Serialization**: Fully implemented the stateful `Dumper` protocol, enabling constant-memory JSON serialization via `dump_stream`.
- **Eager Metadata Analysis**: The `@lodum` decorator now performs eager analysis of classes, ensuring metadata is immediately available for tests and schema generation without requiring a prior serialization call.
- **WASM & Pyodide Support Guidance**: Explicit documentation of WebAssembly runtime capabilities and constraints.

### Fixed
- **YAML / BSON / CBOR Buffer Handling**: Implemented `dump_buffer` across all format dumpers to prevent `memoryview` leaks that caused serializer state corruption and cascading emitter crashes.
- **Loader Protocol Enhancements**: Extended `BaseLoader` and `CborLoader` `load_bytes_value` to support `bytearray` and `memoryview` instances cleanly.
- **Multithreaded Compiler Race Condition**: Global handler registry initialization for worker threads to prevent concurrency cache corruption.
- **Protocol Compliance**: Strict propagation of `depth` and `seen` context parameters across all standard library collection handlers.
- **Pyodide Test Harness Synchronization**: Updated test suite runner exclusions to skip unsupported C-extension dependencies (`ijson`, `ruamel.yaml`, `pymongo`) in WebAssembly testing.

### Changed
- **Minimum Python Version**: Bumped minimum supported Python version to `>=3.10` to natively leverage PEP 604 union syntax (`|`) and modern typing features.

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
