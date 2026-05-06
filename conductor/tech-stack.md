# Tech Stack: lodum

## Core Language & Runtime
- **Language**: Python 3.9+
- **Runtimes**: CPython (Standard) and Pyodide (WASM/Browser).

## Build & Environment Management
- **Build System**: Hatch / Hatchling
- **Dependency Management**: Standard `pip` with optional extras for specialized formats and library support.
- **WASM Interop**: Pyodide / Node.js for browser-based testing.

## Serialization Formats & Engines
- **JSON**: Standard library `json` and `ijson` for streaming.
- **Binary Protocols**: MsgPack, CBOR, BSON.
- **Config Formats**: YAML, TOML.
- **Legacy/Native**: Secure-by-default Pickle.

## Specialized Library Support
- **Numerical/Array Data**: NumPy.
- **Tabular/DataFrame Data**: Pandas, Polars.

## Development & Quality Assurance
- **Testing Framework**: Pytest.
- **WASM Testing**: Playwright (for Pyodide/Browser environments).
- **Static Analysis**: Mypy (100% type hint coverage).
- **Linting & Formatting**: Ruff.
- **Performance Benchmarking**: Standardized benchmark suite using hardware fingerprinting.

## Documentation & Frontend
- **Static Site Generator**: MkDocs (with Material for MkDocs).
- **Performance Dashboard**: Interactive ECharts-based visualization.
