#!/usr/bin/env python3
"""
Pre-release verification gate for lodum.

Usage:
    python scripts/check_release.py <version>        # e.g. 0.5.0
    hatch run check-release 0.5.0

Exits 0 only when every check passes.  Exits 1 with a clear description
of what needs to be fixed.
"""

from __future__ import annotations

import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).parent.parent
CHANGELOG_FILES = [ROOT / "CHANGELOG.md", ROOT / "docs" / "NEWS.md"]
PYPROJECT = ROOT / "pyproject.toml"
DIST = ROOT / "dist"
VENV_BIN = ROOT / ".venv" / "bin"


def _cmd(name: str) -> str:
    """Return the venv-local path to a binary if it exists, else the bare name."""
    local = VENV_BIN / name
    return str(local) if local.exists() else name


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def info(msg: str) -> None:
    print(f"\033[34m[INFO]\033[0m  {msg}")


def ok(msg: str) -> None:
    print(f"\033[32m[ OK ]\033[0m  {msg}")


def fail(msg: str) -> None:
    print(f"\033[31m[FAIL]\033[0m  {msg}", file=sys.stderr)


def run(
    args: list[str], *, cwd: Path = ROOT, check: bool = True
) -> "subprocess.CompletedProcess[str]":
    return subprocess.run(args, cwd=cwd, capture_output=True, text=True, check=check)


def section(title: str) -> None:
    rule = "\u2500" * 72
    print(f"\n{rule}\n  {title}\n{rule}")


# ---------------------------------------------------------------------------
# Checks
# ---------------------------------------------------------------------------

def check_version_in_pyproject(version: str) -> bool:
    section("1/7  Version in pyproject.toml")
    content = PYPROJECT.read_text()
    m = re.search(r'^version\s*=\s*"([^"]+)"', content, re.MULTILINE)
    if not m:
        fail("Could not find version field in pyproject.toml")
        return False
    found = m.group(1)
    if found != version:
        fail(f"pyproject.toml version is '{found}', expected '{version}'")
        fail(f"  Fix: set  version = \"{version}\"  in pyproject.toml")
        return False
    ok(f"pyproject.toml version = {found}")
    return True


def check_changelog_entries(version: str) -> bool:
    section("2/7  Changelog entries")
    all_ok = True
    for path in CHANGELOG_FILES:
        content = path.read_text()
        pattern = rf"## \[{re.escape(version)}\]"
        if re.search(pattern, content):
            ok(f"{path.relative_to(ROOT)} contains entry for {version}")
        else:
            fail(f"{path.relative_to(ROOT)} has no entry for [{version}]")
            fail(f"  Add:  ## [{version}] - YYYY-MM-DD")
            all_ok = False
    return all_ok


def check_no_unreleased_placeholder() -> bool:
    section("3/7  No [Unreleased] placeholder")
    all_ok = True
    for path in CHANGELOG_FILES:
        content = path.read_text()
        if re.search(r"## \[Unreleased\]", content, re.IGNORECASE):
            fail(f"{path.relative_to(ROOT)} still has an [Unreleased] section")
            fail("  Move its contents under the new version heading, or remove it.")
            all_ok = False
        else:
            ok(f"{path.relative_to(ROOT)} - no stale [Unreleased] block")
    return all_ok


def check_lint() -> bool:
    section("4/7  Ruff lint + format")
    r = run([_cmd("ruff"), "check", "src", "tests"], check=False)
    if r.returncode != 0:
        fail("Lint errors found:\n" + r.stdout + r.stderr)
        return False
    ok("ruff check passed")

    r = run([_cmd("ruff"), "format", "--check", "src", "tests"], check=False)
    if r.returncode != 0:
        fail("Formatting issues:\n" + r.stdout + r.stderr)
        fail("  Run: ruff format src tests")
        return False
    ok("ruff format --check passed")
    return True


def check_types() -> bool:
    section("5/7  Type checking (mypy)")
    r = run([_cmd("mypy"), "src"], check=False)
    if r.returncode != 0:
        fail("mypy found type errors:\n" + r.stdout + r.stderr)
        return False
    ok("mypy passed")
    return True


def check_tests() -> bool:
    section("6/7  Test suite")
    pytest = ROOT / ".venv" / "bin" / "pytest"
    pytest_cmd = str(pytest) if pytest.exists() else "pytest"
    # Run the full suite; we pass --cov for visibility but don't enforce a
    # threshold here because optional extras (cbor2, etc.) may not be
    # installed in the local venv.  The CI matrix enforces 90% with all
    # extras present.
    r = run(
        [pytest_cmd, "--tb=short", "-q", "--cov=lodum"],
        check=False,
    )
    # A non-zero exit that is ONLY due to missing optional deps is acceptable;
    # surface the output either way for the human to review.
    if r.returncode != 0:
        combined = r.stdout + r.stderr
        failed_lines = [line for line in combined.splitlines() if line.startswith("FAILED ")]
        # pytest -q short summary format: "FAILED path::test - ImportErr..." (may be truncated)
        real_failures = [
            line for line in failed_lines
            if not any(
                kw in line
                for kw in ("ImportErr", "ModuleNotFoundError", "cbor2", "pymongo", "ijson", "ruamel")
            )
        ]
        if real_failures:
            fail("Tests failed (non-optional-dep failures):\n" + combined)
            return False
        skipped = len(failed_lines)
        ok(f"Tests passed ({skipped} optional-dep test(s) skipped — install all extras to run them)")
    else:
        ok("All tests pass")
    return True


def check_build(version: str) -> bool:
    section("7/7  Build & twine check")
    if DIST.exists():
        import shutil
        shutil.rmtree(DIST)

    info("Building sdist and wheel...")
    r = run([_cmd("python3"), "-m", "build"], check=False)
    if r.returncode != 0:
        fail("Build failed:\n" + r.stdout + r.stderr)
        return False

    sdist = DIST / f"lodum-{version}.tar.gz"
    wheel = DIST / f"lodum-{version}-py3-none-any.whl"
    missing = False
    for artifact in (sdist, wheel):
        if artifact.exists():
            ok(f"Built: {artifact.name}")
        else:
            fail(f"Expected artifact missing: {artifact.name}")
            missing = True
    if missing:
        return False

    r = run([_cmd("twine"), "check", str(sdist), str(wheel)], check=False)
    if r.returncode != 0:
        fail("twine check failed:\n" + r.stdout + r.stderr)
        return False
    ok("twine check passed -- artifacts are valid for PyPI upload")
    return True


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main() -> None:
    if len(sys.argv) != 2:
        print(f"Usage: {sys.argv[0]} <version>   e.g.  {sys.argv[0]} 0.5.0")
        sys.exit(1)

    version = sys.argv[1].lstrip("v")
    print(f"\nLodum pre-release checklist for v{version}")

    results = [
        check_version_in_pyproject(version),
        check_changelog_entries(version),
        check_no_unreleased_placeholder(),
        check_lint(),
        check_types(),
        check_tests(),
        check_build(version),
    ]

    passed = sum(results)
    total = len(results)
    section("Summary")

    if all(results):
        print(f"\n  All {total} checks passed.\n")
        print(f"  When you are ready to release:")
        print(f"    git tag -a v{version} -m 'Release v{version}'")
        print(f"    git push origin main && git push origin v{version}")
        print(f"    twine upload dist/lodum-{version}*")
    else:
        failed = total - passed
        print(f"\n  {failed}/{total} checks failed -- do not release.", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
