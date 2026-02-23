# Lodum Benchmark History

Lodum performance is now automatically tracked on every push to the `main` branch. This provides a continuous, high-quality performance record on standardized hardware (AMD EPYC 7763).

👉 **[Lodum Performance Dashboard (Live)](https://webmaven.github.io/lodum/benchmarks/)**

## CI-Standardized Baseline

The following results were generated using the latest benchmarking suite running against historical versions of the library on identical CI hardware.

### ubuntu-latest (AMD EPYC 7763)

| Version | JSON Ser (Simple) | JSON Deser (Simple) | Details |
| :--- | ---: | ---: | :--- |
| **v0.3.0** (Latest) | 4.90 us | 12.47 us | [latest_native.md](https://github.com/webmaven/lodum/blob/main/benchmarks/results/latest_native.md) |
| **v0.2.0** | 4.85 us | 12.05 us | [v0.2.0.md](https://github.com/webmaven/lodum/blob/main/benchmarks/results/ci_standardized/v0.2.0.md) |
| **v0.1.0** | 5.56 us | 18.81 us | [v0.1.0.md](https://github.com/webmaven/lodum/blob/main/benchmarks/results/ci_standardized/v0.1.0.md) |

## Legacy Manual Benchmarks

These results were generated manually during development and are preserved for historical context. Note that they may have been run on different hardware.

| Run Date | Description | Path |
| :--- | :--- | :--- |
| 2025-01-19 | Initial Baseline | [benchmarks/results/2025-01-19_baseline/results.md](https://github.com/webmaven/lodum/blob/main/benchmarks/results/2025-01-19_baseline/results.md) |
| 2025-01-19 | Statistical & Optimized | [benchmarks/results/2025-01-19_statistical_optimized/results.md](https://github.com/webmaven/lodum/blob/main/benchmarks/results/2025-01-19_statistical_optimized/results.md) |
| 2026-01-20 | Merged & Safety Fixed | [benchmarks/results/2026-01-20_merged_performance/results.md](https://github.com/webmaven/lodum/blob/main/benchmarks/results/2026-01-20_merged_performance/results.md) ([Win32](https://github.com/webmaven/lodum/blob/main/benchmarks/results/2026-01-20_merged_performance/results_win32.md)) |
| 2026-01-24 | AST Verification | [benchmarks/results/2026-01-24_ast_verification/comparison.md](https://github.com/webmaven/lodum/blob/main/benchmarks/results/2026-01-24_ast_verification/comparison.md) ([Raw](https://github.com/webmaven/lodum/blob/main/benchmarks/results/2026-01-24_ast_verification/results.md)) |
| 2026-01-25 | Final Modular Refactor | [benchmarks/results/2026-01-25_final_modular_refactor/results.md](https://github.com/webmaven/lodum/blob/main/benchmarks/results/2026-01-25_final_modular_refactor/results.md) |

For more information on how we measure performance and ensure hardware consistency, see our [Benchmark Methodology](BENCHMARK_METHODOLOGY.md).

For the latest performance analysis and summary, see [PERFORMANCE.md](PERFORMANCE.md).