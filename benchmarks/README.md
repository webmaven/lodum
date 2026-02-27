# Lodum Benchmarks

This directory contains scripts to measure the performance of Lodum compared to other common serialization libraries in Python.

## Libraries Compared

- **Lodum**: This library.
- **Pydantic (v2)**: A very popular data validation and serialization library, partially implemented in Rust.
- **Marshmallow**: A well-established library for object serialization and deserialization.
- **Native json/pickle**: Standard library implementations.
- **orjson**: A fast JSON library for Python.
- **msgpack/cbor2/ruamel.yaml**: Common binary and text formats.

## Running Benchmarks

To run the benchmarks, you need to have the optional dependencies installed. You can install them with:

```bash
pip install -e ".[all]" pydantic marshmallow orjson
```

Then, run the benchmark script from the root of the repository:

```bash
PYTHONPATH=src:. python benchmarks/run.py
```

## Methodology

The benchmarks use the `timeit` module to measure the execution time of serialization (Object -> String/Bytes) and deserialization (String/Bytes -> Object) operations.

We use three scenarios:
1. **Simple**: A small object with a few primitive fields.
2. **Complex**: An object with lists, dictionaries, and various types.
3. **Nested**: An object containing other objects and lists of objects.

Results are reported in microseconds (us) per operation. Lower is better.
