# Release Process

This document describes how to cut a new lodum release.

## Overview

Releases are **manual and intentional**. There is no automated PyPI publish
step on CI — every upload is a deliberate human action taken only after all
gates pass. This protects against accidental or premature publication of
immutable artifacts.

The full workflow is:

```
Update version → Write changelog → Run gate script → Tag → Push → Upload to PyPI
```

---

## Step-by-Step

### 1. Update the version

In `pyproject.toml`, set:

```toml
version = "X.Y.Z"
```

### 2. Update both changelogs

Both files must have an entry for the new version **before** the gate
script is run.  The gate explicitly rejects an `[Unreleased]` placeholder.

| File | Purpose |
| --- | --- |
| `CHANGELOG.md` | Canonical source for git / GitHub |
| `docs/NEWS.md` | Rendered in the documentation site |

Keep them identical in content.  Use [Keep a Changelog](https://keepachangelog.com/) format:

```markdown
## [X.Y.Z] - YYYY-MM-DD

### Added
- …

### Fixed
- …

### Changed
- …
```

### 3. Run the pre-release gate

```bash
python scripts/check_release.py X.Y.Z
# or via hatch:
hatch run check-release X.Y.Z
```

The script runs **7 sequential checks**:

| # | Check | What it catches |
|---|-------|----------------|
| 1 | `pyproject.toml` version | Forgot to bump the version |
| 2 | Changelog entries in both files | Missing or mis-named release section |
| 3 | No `[Unreleased]` placeholder | Stale draft sections left in |
| 4 | `ruff check` + `ruff format --check` | Lint / formatting regressions |
| 5 | `mypy` | Type errors |
| 6 | Test suite | Broken tests; import-only failures for missing optional extras are tolerated |
| 7 | `python -m build` + `twine check` | Bad packaging metadata; missing files |

**Only proceed to the next step when all 7 checks print `[ OK ]`.**

### 4. Commit, tag, push

```bash
git add pyproject.toml CHANGELOG.md docs/NEWS.md
git commit -m "chore: release vX.Y.Z"
git tag -a vX.Y.Z -m "Release vX.Y.Z"
git push origin main
git push origin vX.Y.Z
```

Pushing the tag triggers:
- **Docs workflow** — deploys the `X.Y.Z` versioned docs to GitHub Pages and
  sets `X.Y.Z` as `latest`.
- **CI workflow** — runs the full test matrix on the tagged commit.

Wait for both to turn green before uploading to PyPI.

### 5. Upload to PyPI

The gate script already built the artifacts in `dist/`.  Verify they are
still present, then upload:

```bash
ls dist/lodum-X.Y.Z*          # should show .tar.gz and .whl
twine upload dist/lodum-X.Y.Z*
```

> **PyPI uploads are immutable.**  Never upload until CI and docs are green
> and you are confident the release is complete.

---

## Docs Architecture

### Single source of truth

`docs/index.md` is a thin wrapper that includes `README.md` via
[mkdocs-include-markdown-plugin](https://github.com/mondeja/mkdocs-include-markdown-plugin):

```
{%
  include-markdown "../README.md"
  rewrite-relative-urls=false
%}
```

**Consequence**: `README.md` is the canonical homepage.  Edit it there;
the docs site picks up the change automatically on the next build.
Do not edit `docs/index.md` directly for content changes.

### Links in README.md

Because `README.md` is included verbatim into the docs site:

- Use **absolute `https://webmaven.github.io/lodum/…` URLs** for any link
  that points into the docs site (Performance, Contributing, etc.).
- Use **absolute `https://raw.githubusercontent.com/…` URLs** for images
  so they render on both GitHub and the docs site.
- Avoid `docs/`-prefixed relative paths (e.g., `docs/CONTRIBUTING.md`) —
  they break mkdocs link resolution.

### Versioned docs (mike)

The `Docs` GitHub Actions workflow uses
[mike](https://github.com/jimporter/mike) to maintain a version dropdown:

| Event | mike action |
|-------|-------------|
| Push to `main` | Deploys as `dev` |
| Push of `vX.Y.Z` tag | Deploys as `X.Y.Z` and sets it as `latest` |

The dropdown state lives in `versions.json` on the `gh-pages` branch.
