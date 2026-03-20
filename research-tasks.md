# Lodum Performance Restoration R&D: Task List

**Objective**: Identify and resolve performance regressions relative to `v0.3.0` using a noise-resilient, data-driven methodology.

## Phase 1: Foundation & Baseline
- [x] **[1. Baseline Verification]**: Verify the current dashboard correctly reflects `v0.3.0` as the regression baseline across all formats.
  - *Status*: DONE
  - *Success Criteria*: Dashboard shows stable baseline comparisons for all 6 core formats. (Verified via `data_v123.js` tags mapping).

## Phase 2: Diagnostic Profiling (Local)
## Phase 2: Diagnostic Profiling (Local)
- [x] **[2. Systematic Profiling]**: Generate high-resolution `pyinstrument` reports for the top 3 regressed scenarios (JSON/MsgPack complex).
  - *Status*: DONE
  - *Success Criteria*: `.html` profile reports saved in `benchmarks/profiles/` showing clear call-tree bottlenecks.
- [x] **[3. Bottleneck Analysis]**: Analyze `load_codegen.py` and `dump_codegen.py` output against profile data.
  - *Status*: DONE
  - *Success Criteria*: Specific line-level inefficiencies identified: redundant recursive calls through `internal.py:dump` in AST-generated handlers, and unnecessary `_get_dump_handler` lookups in tight loops.
- [x] **[4. Iterative Optimization]**: Implement targeted fixes (e.g., inlining, reduced attribute lookups) in the `compiler` package.
  - *Status*: DONE
  - *Success Criteria*: Local micro-benchmarks show >15% improvement in targeted routines via AST-inlining of `dump` handler and removal of redundant `_get_dump_handler` lookups.

## Phase 4: Validation & Release
- [/] **[5. CI Validation]**: Push changes to GitHub and verify performance gains via the ECharts dashboard.
  - *Status*: IN_PROGRESS
  - *Success Criteria*: Dashboard shows "Green" or "Neutral" status on the Regression Heatmap for all primary targets. (Depends on 4)
- [ ] **[6. Regression Heatmap Review]**: Final review of the "Regression Heatmap" to ensure no new regressions were introduced.
  - *Status*: PENDING
  - *Success Criteria*: Zero regressions >15% across the entire format matrix. (Depends on 5)
