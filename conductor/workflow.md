# Workflow: lodum

## Core Development Protocol
- **Test-Driven Development (TDD)**: Every feature or bug fix MUST start with a failing test case that defines the expected behavior.
- **Code Quality**: Adhere to the project's Ruff and Mypy configurations. Zero linting or typing errors are permitted in the `main` branch.
- **Documentation**: All new features must be documented in the corresponding Markdown files in the `docs/` directory.

## Testing & Coverage
- **Required Coverage**: Maintain a minimum of **90% code coverage** for all changes. 
- **WASM Validation**: Any change impacting the core logic or concurrency MUST be verified against the Pyodide/Node.js test environment.

## Commit & Branching Strategy
- **Per-Task Commits**: Create a commit after completing every atomic task in the implementation plan. 
- **Per-Phase Branching**: Use dedicated feature branches for each major phase. Merge into the `main` branch only after the entire phase is complete and verified.
- **Git Notes**: Record task summaries and performance deltas in Git notes to maintain a persistent, non-intrusive project history.

## Performance Infrastructure & Guardrails
- **Benchmarking Protocol**: Every performance-impacting change MUST be validated against the current baseline using the `benchmarks/run.py` engine.
- **Standardized Hardware**: Benchmarks must be executed on hardware that matches the stored fingerprints in `benchmarks/metadata/` to ensure data integrity.
- **Topological Integrity**: The performance dashboard MUST only reflect "intentional" commits from the `main` branch, ordered topologically to prevent "counterfactual" data points.
- **Profiling Guardrails**: For any regression exceeding 2% or any significant architectural change, a detailed `cProfile` or `pyinstrument` analysis MUST be performed and recorded in the phase completion summary.
- **O(1) Memory Verification**: Streaming-related changes must be validated for constant memory usage using the `benchmarks/streaming.py` suite.

## Phase Completion & Checkpointing
- **Phase Completion Verification**: At the end of every phase, perform a full "User Manual Verification" (as specified in the Implementation Plan) to ensure the integrated work meets the original specification and performance goals.
