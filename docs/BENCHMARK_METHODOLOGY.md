# Benchmark Methodology

To ensure that Lodum's performance claims are accurate, reproducible, and comparable over time, we employ a rigorous benchmarking methodology standardized on GitHub Actions CI.

## Standardized Hardware

We use **Hardware Fingerprinting** to ensure that all performance comparisons are made on identical runner types. 

- **Reference Hardware**: AMD EPYC 7763 64-Core Processor.
- **Validation**: Every benchmark run begins by executing `benchmarks/get_hw_info.py`. This script captures the CPU model and OS family.
- **Integrity Guard**: If GitHub assigns a runner with different hardware, the CI system issues a warning. For official releases, this check is **strict**; the release will fail until a new baseline is established on the new hardware.

## Measurement Techniques

### 1. Execution Time (`timeit`)
For core serialization and deserialization, we use the standard Python `timeit` module.
- **Iterations**: Each operation is timed over **2,000 iterations**.
- **Statistics**: We perform **5 repeats** of the iteration cycle and report the **Mean** and **Standard Deviation** in microseconds (us) per operation.

### 2. Memory Tracking (`tracemalloc`)
For our **XL Streaming Benchmarks**, we measure memory efficiency using the `tracemalloc` module.
- **Metric**: We capture the **Peak Memory Usage** during the entire deserialization process.
- **Verification**: This allows us to quantitatively prove the memory reduction (typically >90%) achieved by using `load_stream` instead of standard `loads`.

## Benchmark Scenarios

We use three standardized data structures to measure performance across different complexity levels:

| Scenario | Description |
| :--- | :--- |
| **Simple** | A flat object with a few primitive fields (int, str, bool). |
| **Complex** | An object containing lists, nested dictionaries, enums, and dates. |
| **Nested** | A multi-level object containing a hierarchy of other @lodum objects. |

## XL Streaming Benchmark

The XL benchmark simulates real-world "Big Data" scenarios:
- **Dataset**: A JSON array containing **500,000 objects**.
- **Data Size**: Approximately **45MB** of raw JSON.
- **Objective**: Compare the time and memory consumption of loading the entire array into memory vs. processing it lazily via a binary stream.

## Continuous Monitoring

Performance is tracked automatically on every push to the `main` branch across both **Linux (ubuntu-latest)** and **Windows (windows-latest)**. Results are pushed to our [Live Performance Dashboard](https://webmaven.github.io/lodum/benchmarks/) to ensure no regressions are introduced during development.

## Reproducing Locally

You can run the full suite on your own machine by installing the benchmarking dependencies:

```bash
pip install -e ".[all]" pydantic marshmallow
PYTHONPATH=src:. python benchmarks/run.py
```
