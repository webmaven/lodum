---
name: Release
about: Track the steps for a new lodum release.
title: 'Release v'
labels: ['type: chore', 'status: in-progress']
assignees: ''

---

## Release Tasks

### Preparation
- [ ] Create release branch `feature/issue-XX-release-prep`
- [ ] Update `__version__` in `src/lodum/__init__.py`
- [ ] Update `version` in `pyproject.toml`
- [ ] Update `CHANGELOG.md` with new version, date, and notes
- [ ] Copy `CHANGELOG.md` to `docs/NEWS.md`

### Branding & Docs
- [ ] Verify README header and social preview images
- [ ] Build and verify local documentation: `hatch run docs-build`
- [ ] Ensure all internal and external links are valid

### Verification
- [ ] Run full test suite: `PYTHONPATH=src pytest`
- [ ] Run linting and type checks: `hatch run lint` and `hatch run type-check`
- [ ] (Optional) Verify install from test-pypi or local wheel

### Finalization
- [ ] Merge release branch to `main`
- [ ] Create and push Git tag: `git tag -a vX.Y.Z -m "Release vX.Y.Z" && git push origin vX.Y.Z`
- [ ] Build distribution: `python3 -m build`
- [ ] Upload to PyPI: `twine upload dist/*`
- [ ] Verify live project on PyPI: `https://pypi.org/project/lodum/`
- [ ] Verify documentation deployment: `https://webmaven.github.io/lodum/`
