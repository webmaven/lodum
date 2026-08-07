# Critical Issues Fix Plan

## Issue 1: Broken link in `docs/PERFORMANCE.md`
- **File**: `docs/PERFORMANCE.md` (line 49)
- **Change**: Replace `[PERFORMANCE_ANALYSIS.md](PERFORMANCE_ANALYSIS.md)` with `[PERFORMANCE_EVOLUTION.md](PERFORMANCE_EVOLUTION.md)` — the referenced file exists and covers the same content.
- **Status**: ✅ Done

## Issue 2: Docs use `dumps`/`loads`/`load_stream` as canonical API when code uses `dump`/`load`/`stream`
- **Problem**: The docs consistently present `dumps()`/`loads()`/`load_stream()` as the primary API, but the code defines `dump()`/`load()`/`stream()` as the primary functions, with `dumps`/`loads`/`load_stream` as "legacy aliases."
- **Fix**: Update docs to use `dump`/`load`/`stream` as canonical names. This is correct because:
  1. `dump`/`load` have richer signatures (support `target`/`source` paths, `max_size`) that `dumps`/`loads` don't expose
  2. The docs already describe these richer signatures, so they implicitly assume `dump`/`load`
  3. Changing docs is simpler than renaming functions across 8 module files
- **Files changed**:
  - `docs/index.md` — All `dumps`/`loads`/`load_stream` → `dump`/`load`/`stream`
  - `docs/GETTING_STARTED.md` — `dumps`/`loads` → `dump`/`load`
  - `docs/MIGRATION.md` — `loads`/`dumps` → `load`/`dump`
  - `docs/BENCHMARK_METHODOLOGY.md` — `load_stream` → `stream`
  - `docs/demo.md` — `dumps`/`loads` → `dump`/`load`
- **Status**: ✅ Done

## Issue 3: Dead weight files in repo
- **Files to remove**: `batch_3.txt`, `batch_4.txt`, `batch_5.txt`, `existing_shas.txt`, `all_shas.txt`, `next_batch.txt`
- These are git SHA hash artifacts with no business in the repository.
- Not referenced by any CI workflow, build script, or documentation.
- **Status**: ✅ Done — all 6 files deleted.

## Issue 4: `test_migrate_data.py` crashes on import
- **File**: `tests/test_migrate_data.py`
- **Problem**: Imports from `benchmarks.migrate_data` which doesn't exist. Uses `unittest.TestCase` style instead of pytest. Has lint violations (unused imports).
- The file comment says "Since migrate_data.py doesn't exist yet, this will fail."
- **Fix**: Delete the file entirely.
- **Status**: ✅ Done — file deleted.

## Verification Steps
After applying fixes, run:
```bash
ruff check src tests
ruff format --check src tests
PYTHONPATH=src pytest tests/test_json.py tests/test_field.py tests/test_validation.py -v
python -c "from lodum import lodum, field, json; print('OK')"
```
