# Specification: Overhaul Performance & Benchmarking Infrastructure for High Integrity

## Overview
The goal of this track is to transition from a monolithic, bloated `data.js` into a robust, atomic, and topologically-ordered performance infrastructure. This system will ensure data integrity, eliminate "ghost" commits from failed branches, and provide a reliable mechanism for data repair and backfilling without polluting the `main` branch.

## Functional Requirements
1. **Atomic Result Storage**: Transition benchmark results from a single monolithic file to individual JSON files (`benchmarks/history/<sha>/<platform>.json`) in the `gh-pages` branch.
2. **Canonical Ordering Engine**: Establish `git rev-list --topo-order --reverse main` as the definitive source for the dashboard's timeline.
3. **Data Integrity Filter**: Automatically exclude any historical data point that is not present in the current `main` branch history.
4. **Resilient Dashboard Synthesis**: Implement a new generator that can rebuild the `data.js` file by synthesizing data from atomic files along the canonical SHA timeline.
5. **Data Gap Resilience**: Configure the dashboard to handle "sparse" data gracefully (e.g., connecting points across missing commits) while indicating gaps in the UI.
6. **No-Touch Backfilling**: Provide a mechanism to repair or add historical data via `workflow_dispatch` without creating new commits in the `main` branch.

## Acceptance Criteria
- `data.js` only contains SHAs present in the current `main` branch.
- The dashboard visualization is strictly monotonic and topologically ordered.
- Historical data (e.g., v0.3.0 baseline) remains visible and accurate after the migration.
- The CI pipeline successfully updates the atomic storage and regenerates the dashboard.
- Gaps in benchmarking data do not break the ECharts visualization.

## Out of Scope
- Adding new benchmarking modules (this track is purely infrastructural).
- Changing the core benchmarking engine logic (`run.py`).
