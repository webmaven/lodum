# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-02-08

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
