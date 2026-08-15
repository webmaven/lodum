# Lodum Agent Guide

This document is intended for AI agents (like yourself) to quickly understand the architecture, conventions, and safety requirements of the `lodum` codebase.

## 🏗️ Architecture at a Glance

`lodum` is an AST-based serialization framework. Its core performance comes from compiling specialized Python bytecode for every `@lodum`-enabled class.

### Key Components
- **`lodum.core`**: Defines the `Dumper` and `Loader` protocols. All format-specific logic must adhere to these.
- **`lodum.compiler`**: The engine that walks class signatures and generates AST nodes.
- **`lodum.handlers`**: Modular type handlers for primitives, collections, and the standard library.
- **`lodum.internal`**: The central dispatcher and compilation coordinator.

## 🛠️ Core Mandates for Development

1.  **Protocol Compliance & Buffer Handling**: When modifying or adding dumpers, ensure all methods handle `depth: int` and `seen: Optional[set]` arguments. **Crucial:** Every format dumper (`YamlDumper`, `BsonDumper`, `CborDumper`, etc.) must implement `dump_buffer`. Failing to do so causes `BaseDumper`'s zero-copy `memoryview` to leak into underlying serializers (e.g. `ruamel.yaml`), corrupting global emitter state and causing cascading `EmitterError` / `closed file` failures across subsequent tests.
2.  **Streaming Safety**: Prefer orchestration methods (`begin_struct`, `field`, `list_item`) over direct collection creation in dumpers to maintain O(1) memory compatibility.
3.  **Eager Analysis & Annotation Safety**: The `@lodum` decorator performs eager analysis. **Do not use `from __future__ import annotations`** in models or handler dispatch files; stringified annotations break runtime type inspection and cause `DeserializationError: 'str' object has no attribute '__name__'`.
4.  **WASM / Pyodide Compatibility**: All core changes must be verified against Pyodide (`node run_pyodide_node.js`). Note that `json.stream` (requires `ijson`), `lodum.yaml` (`ruamel.yaml`), `lodum.bson` (`pymongo`), and `polars` are not available in Pyodide due to C/Rust extensions. When adding new modules with native C/Rust dependencies or threading primitives, you must immediately update `run_pyodide_node.js` (`ignore_args` and `-k "not ..."`) to skip them in Pyodide. Avoid using native modules or threading primitives directly; use `lodum.concurrency` instead.
5.  **Validation & Test Environment**: Every bug fix or feature implementation must include a reproduction script or a new test case in `tests/`. Always run tests with `PYTHONPATH=src .venv/bin/pytest` or `hatch run test`.

## 🧬 AST Compiler Conventions

We use a specialized DSL in `src/lodum/compiler/dsl.py` (aliased as `b`) to make AST generation more readable.

**Example**:
```python
# Instead of:
node = ast.Call(func=ast.Name(id='print', ctx=ast.Load()), args=[ast.Constant(value='hello')], keywords=[])

# Use the DSL:
node = b.call('print', [b.const('hello')])
```

## 🧪 Testing and Coverage

-   **Test Runner**: `pytest`
-   **Coverage Target**: **90%+**
-   - Standard: `PYTHONPATH=src pytest --cov=lodum`
-   - Pyodide: `node run_pyodide_node.js`

## 🛡️ Security Note

The `lodum.pickle` module contains a `SafeUnpickler`. Any changes to this module must rigorously maintain the "Secure-by-Default" stance by blocking arbitrary module imports and code execution.

## 🚀 Release Workflow

**PyPI releases are intentionally manual** — there is no automatic publish on tag push.  Before cutting any release, always run the pre-release gate script:

```bash
python scripts/check_release.py X.Y.Z
# or:
hatch run check-release X.Y.Z
```

The script verifies **7 gates** in sequence:

1. `pyproject.toml` version matches target
2. `CHANGELOG.md` and `docs/NEWS.md` both contain an entry for `[X.Y.Z]`
3. Neither changelog has a stale `[Unreleased]` section
4. `ruff check` + `ruff format --check` pass
5. `mypy src` passes
6. Test suite passes (import-only failures for missing optional extras are tolerated — CI with `[all]` extras enforces 90% coverage)
7. `python -m build` succeeds and `twine check` validates the artifacts

Only after all 7 pass: tag, push, wait for CI and Docs workflows to go green, then `twine upload dist/lodum-X.Y.Z*`.

**Full human-readable runbook**: `docs/RELEASING.md`

## 📄 Docs Architecture

### Single source of truth

`docs/index.md` is a thin 3-line wrapper that includes `README.md` via `mkdocs-include-markdown-plugin`:

```
{%
  include-markdown "../README.md"
  rewrite-relative-urls=false
%}
```

**Do not edit `docs/index.md` for content** — edit `README.md` instead.  The docs site picks up changes automatically.

### README.md link rules (critical)

Because `README.md` is included verbatim into the docs build, broken links produce mkdocs warnings:

- **Docs-site links** (Performance, Contributing, etc.) must use absolute `https://webmaven.github.io/lodum/…` URLs, **not** `docs/`-prefixed relative paths.
- **Images** must use `https://raw.githubusercontent.com/…` absolute URLs so they render on both GitHub and the docs site.

### Versioned docs

The Docs GitHub Actions workflow uses `mike` (see `.github/workflows/docs.yml`):
- Push to `main` → deploys as `dev`
- Push of `vX.Y.Z` tag → deploys as `X.Y.Z` and sets `latest`

The workflow has `concurrency: group: docs-${{ github.ref_name }}` to prevent push races on the `gh-pages` branch.
