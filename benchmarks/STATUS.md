# Benchmarking Setup: Infrastructure Status & Handover Report

This report summarizes the current state of the `lodum` benchmarking infrastructure, identifies confirmed failure modes, and outlines the remaining work to complete the historical backfill.

---

### **1. Core Architecture (The "Atomic" Model)**
The system is designed to maintain a clean `main` branch while storing performance data in `gh-pages`.
- **Atomic Results**: Every benchmark run saves results to `benchmarks/history/<sha>/<platform>.json` on the `gh-pages` branch. This prevents monolithic `data.js` bloat and allows per-platform updates.
- **Topological Generation**: The `generate_dashboard.py` script reconstructs the timeline by calling `git rev-list main`. It only includes data for SHAs that exist in the current `main` branch lineage.
- **Resilient Shims**: Located in `benchmarks/models.py` and `benchmarks/streaming.py`, these shims use broad `except Exception` blocks to survive historical commits where the library was broken (e.g., missing imports, failed decorators).

---

### **2. Recent Accomplishments**
- **Eliminated Race Conditions**: Added a `concurrency` group (`dashboard-update`) to the `finalize-deployment` job in `.github/workflows/benchmarks.yml`. Updates to the dashboard are now strictly serialized.
- **Hardware Normalization**: Implemented a **Calibration Baseline**. Each runner executes a standard Python `json` benchmark to measure raw host speed. Results are now stored with a `normalized` field (`Lodum_Time / Reference_Time`), making data comparable across Ubuntu, Windows, and MacOS runners.
- **E2E Sentinel**: A Playwright-based test (`e2e_tests/test_dashboard.py`) verifies that the dashboard renders correctly and the KPI Speedup ratio is calculated before finishing a CI cycle.

---

### **3. Current Progress**
- **Total `main` History**: 190 SHAs.
- **SHAs with Verified Data**: **61**.
- **Backfill Debt**: **129**.
- **Validated Milestone**: `v0.3.0` (`159df1cc`) and `HEAD` (`173c17ea`) have been successfully re-benchmarked with normalization. Cross-platform variance for normalized scores is now **< 5%**.

---

### **4. Outstanding Issues & Investigation Results**

#### **The "Stagnation" Mystery**
The backfill loop recently stalled at **61 SHAs**. 
- **Finding**: While CI runs succeed, the same SHAs (`7d5ae0ad`, `72573125`, `88a6c3d2`) were being re-queued.
- **Analysis**: The audit logic showed these SHAs were present in `data.js` but their directory in `benchmarks/history/` was missing locally after a `git pull`. This suggests a potential "lost update" or an issue where `generate_dashboard.py` is called with a stale view of the `history/` directory during high-concurrency periods.

#### **Empty JSON Artifacts**
- **Finding**: Some recent runs reported: `Error processing .../results.json: Expecting value: line 1 column 1 (char 0)`.
- **Diagnosis**: The `results.json` was being created (allowing `upload-artifact` to succeed) but was empty. This usually happens if the benchmark script crashes *after* opening the output file but *before* writing the JSON. The hardened shims fixed the most common crashes, but this specific failure needs re-verification.

---

### **5. Falsified Hypotheses**
- **Hypothesis: GitHub Actions Rate Limiting**. (Falsified). Runs are completing; the issue is data persistence.
- **Hypothesis: Branch Pollution**. (Falsified). `main` has been verified clean of benchmark data.
- **Hypothesis: Python Version Mismatch**. (Falsified). The current CI uses Python 3.10 consistently across platforms.

---

### **6. Instructions for Continuation**
1.  **Sync and Audit**: Start by running the "Comprehensive Data Flow Audit" script (see Turn 60) on the `gh-pages` branch to identify the *true* missing SHAs.
2.  **Verify the `7d5ae0ad` Batch**: Determine if this batch actually has directory entries in `origin/gh-pages`. If not, force a re-run.
3.  **Resume Batches**: Continue backfilling in batches of 3. If the count stalls again at 61, investigate the `merge_data.py` script's error handling specifically for empty files.
4.  **UI Updates**: The dashboard now supports "Performance Points" (`pts`). The UI might need a small tweak to reflect that these are normalized values rather than raw microseconds.

---
*Report generated on Wednesday, May 6, 2026*
