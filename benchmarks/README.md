# Lodum Benchmarks

This directory contains scripts to measure the performance of Lodum compared to other common serialization libraries in Python.

## Libraries Compared

- **Lodum**: This library.
- **Pydantic (v2)**: A very popular data validation and serialization library, partially implemented in Rust.
- **Marshmallow**: A well-established library for object serialization and deserialization.
- **Native json/pickle**: Standard library implementations.
- **orjson**: A fast JSON library for Python.
- **msgpack/cbor2/ruamel.yaml**: Common binary and text formats.

## Automated Performance Tracking

Performance is tracked automatically via GitHub Actions on every push to `main`. You can view the historical performance graphs on our [GitHub Pages site](https://webmaven.github.io/lodum/dev/benchmarks).

Benchmarks are run on both **Linux (Ubuntu)** and **Windows** to ensure cross-platform performance consistency.

## Standard Benchmarks (`run.py`)

The standard benchmarks use the `timeit` module to measure the execution time of serialization (Object -> String/Bytes) and deserialization (String/Bytes -> Object) operations.

We use three scenarios:
1. **Simple**: A small object with a few primitive fields.
2. **Complex**: An object with lists, dictionaries, and various types.
3. **Nested**: An object containing other objects and lists of objects.

Results are reported in microseconds (us) per operation. Lower is better.

## Streaming & Memory Benchmark (`streaming.py`)

This benchmark specifically measures the efficiency of `load_stream` when dealing with very large datasets (e.g., 500,000 objects). It tracks both execution time and **Peak Memory Usage** using `tracemalloc`.

## Running Locally

To run the benchmarks locally, ensure you have the optional dependencies installed:

```bash
pip install -e ".[all]" pydantic marshmallow ijson
```

Then, run the scripts from the root of the repository:

```bash
# Standard benchmarks
PYTHONPATH=src python benchmarks/run.py

# Streaming/Memory benchmark
PYTHONPATH=src python benchmarks/streaming.py 100000
```
