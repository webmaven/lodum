# Implementation Plan: Overhaul Performance & Benchmarking Infrastructure for High Integrity

## Phase 1: Migration (The "Great Purge")
- [ ] Task: Create `migrate_data.py` to extract and atomize valid entries from the existing monolithic `data.js`.
- [ ] Task: Write Tests: Validate that the migration script correctly identifies SHAs belonging to the current `main` branch.
- [ ] Task: Execute the "Great Purge" on the `gh-pages` branch to initialize the atomic directory structure.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Migration' (Protocol in workflow.md)

## Phase 2: Canonical Generator
- [ ] Task: Implement `generate_dashboard.py` to rebuild `data.js` from atomic files using topological ordering.
- [ ] Task: Write Tests: Verify that the generator correctly handles missing data points and maintains strict monotonicity.
- [ ] Task: Validate the generated `data.js` against the existing `validate_dashboard.py` rules.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Canonical Generator' (Protocol in workflow.md)

## Phase 3: CI Integration & Repairability
- [ ] Task: Update `.github/workflows/benchmarks.yml` to replace monolithic appending with atomic storage and canonical generation.
- [ ] Task: Implement "Repair & Backfill" mode in `workflow_dispatch` to allow manual historical updates.
- [ ] Task: Write Tests: Verify the repair workflow correctly overwrites/adds atomic JSON files without polluting `main`.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: CI Integration & Repairability' (Protocol in workflow.md)

## Phase 4: Dashboard & UI Resilience
- [ ] Task: Update `index.html` (ECharts) to handle sequence-indexing and connect nulls across data gaps.
- [ ] Task: Write Tests: Perform visual regression check (manual) to ensure the chart is monotonic and correct.
- [ ] Task: Final verification of the end-to-end pipeline from commit to live dashboard update.
- [ ] Task: Conductor - User Manual Verification 'Phase 4: Dashboard & UI Resilience' (Protocol in workflow.md)
