# Benchmark History

This page provides an archive of all formal benchmark runs for the Lodum project. 

## CI-Standardized Trajectory (Recommended)

The following reports were generated on identical **Linux (ubuntu-latest)** hardware (AMD EPYC 7763) using the latest measurement suite. These are the most reliable records for comparing library performance across versions.

| Version | Runner OS | Hardware | Report |
| :--- | :--- | :--- | :--- |
| **v0.3.0** | Linux | AMD EPYC 7763 | [Latest Native](https://github.com/webmaven/lodum/blob/main/benchmarks/results/latest_native.md) |
| **v0.2.0** | Linux | AMD EPYC 7763 | [Standardized Baseline](https://github.com/webmaven/lodum/blob/main/benchmarks/results/ci_standardized/v0.2.0.md) |
| **v0.1.0** | Linux | AMD EPYC 7763 | [Standardized Baseline](https://github.com/webmaven/lodum/blob/main/benchmarks/results/ci_standardized/v0.1.0.md) |

---

## Legacy Manual Benchmarks

These results were generated manually during the initial development phases. They may have been run on different hardware (e.g., local developer machines) and are preserved for historical context and internal reference only.

| Run Date | Description | Platform | Archive Link |
| :--- | :--- | :--- | :--- |
| 2026-01-25 | Final Modular Refactor | Win32 | [Results](https://github.com/webmaven/lodum/blob/main/benchmarks/results/2026-01-25_final_modular_refactor/results.md) |
| 2026-01-24 | AST Verification | Win32 | [Comparison](https://github.com/webmaven/lodum/blob/main/benchmarks/results/2026-01-24_ast_verification/comparison.md) |
| 2026-01-20 | Merged Performance | Win32 | [Results](https://github.com/webmaven/lodum/blob/main/benchmarks/results/2026-01-20_merged_performance/results_win32.md) |
| 2025-01-19 | Optimized Dispatch | Linux | [Results](https://github.com/webmaven/lodum/blob/main/benchmarks/results/2025-01-19_statistical_optimized/results.md) |
| 2025-01-19 | Initial Baseline | Linux | [Results](https://github.com/webmaven/lodum/blob/main/benchmarks/results/2025-01-19_baseline/results.md) |

---

For real-time results and regression tracking on every commit, visit our **[Live Performance Dashboard](https://webmaven.github.io/lodum/benchmarks/)**.
