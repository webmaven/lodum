# Contributing to lodum

First off, thank you for considering contributing to `lodum`! It's people like you that make open source such a great community.

## Development Setup

To set up a local development environment:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/webmaven/lodum.git
    cd lodum
    ```

2.  **Install the package in editable mode with all optional dependencies:**
    ```bash
    pip install -e ".[all]"
    ```

3.  **Install development tools:**
    ```bash
    pip install pytest ruff mypy pandas-stubs
    ```

## How Can I Contribute?

There are many ways to contribute, from writing tutorials or blog posts, improving the documentation, submitting bug reports and feature requests or writing code which can be incorporated into `lodum` itself.

### Reporting Bugs

- **Ensure the bug was not already reported** by searching on GitHub under [Issues](https://github.com/webmaven/lodum/issues).
- If you're unable to find an open issue addressing the problem, [open a new one](https://github.com/webmaven/lodum/issues/new). Be sure to include a **title and clear description**, as much relevant information as possible, and a **code sample** or an **executable test case** demonstrating the expected behavior that is not occurring.

### Suggesting Enhancements

- Open a new issue and provide a clear description of the enhancement you'd like to see, why it's useful, and if possible, a suggestion for how it could be implemented.

### Tracking Project Progress

`lodum` uses GitHub Issues and a Project Board to manage its development roadmap, features, and bugs. This system helps ensure clarity, accountability, and efficient progress.

**Issue Labels:**
We categorize issues using `type:` and `status:` labels:
*   `type: epic`: Major roadmap items or significant features.
*   `type: story`: Smaller, actionable tasks contributing to an epic.
*   `type: bug`: Issues identifying defects.
*   `type: chore`: Maintenance tasks, refactoring, or non-feature work.
*   `status: backlog`: Tasks awaiting prioritization.
*   `status: ready`: Tasks ready to be picked up by a developer.
*   `status: in-progress`: Tasks actively being worked on.
*   `status: in-review`: Tasks with an open Pull Request awaiting review.
*   `status: done`: Completed tasks (typically auto-closed by PR merges).

**Project Board:**
You can view the overall project status and progress on our [GitHub Project Board](https://github.com/users/webmaven/projects/1). This Kanban board visualizes the flow of tasks through various stages.

### Pull Requests

- Open a new GitHub pull request with the patch.
- Ensure the PR description clearly describes the problem and solution. Include the relevant issue number if applicable.
- **Link to Issues**: All Pull Requests must be explicitly linked to one or more GitHub Issues they resolve or implement. Use closing keywords (e.g., `Closes #<issue_number>`, `Fixes #<issue_number>`, `Resolves #<issue_number>`) in your PR description. This automatically closes the associated issue upon merging the PR and ensures proper traceability.
- Before submitting, please ensure that your code follows the existing style of the project, and that all tests pass.

### Submitting Implementation Plans

For significant new features, architectural changes, or complex bug fixes, we encourage contributors to submit a detailed implementation plan *before* writing code. This ensures alignment, architectural soundness, and helps prevent "vague plans" that can lead to "messy code."

A good implementation plan should be submitted as a separate Markdown document (e.g., in the `docs/plans/` directory if it's a major roadmap item) or included directly in a GitHub issue description. It should cover:

1.  **Overview**:
    *   What problem does this solve, and why is it needed?
    *   What is the goal of this change?

2.  **Current State Analysis**:
    *   Briefly describe the relevant existing code or architecture (with file:line references where applicable).
    *   Identify affected components and current behavior.

3.  **Proposed Implementation Approach**:
    *   High-level strategy or design.
    *   Break down the work into logical, atomic phases (e.g., Schema -> Backend -> UI, or smaller logical steps).

4.  **Detailed Changes (per phase)**:
    *   For each phase, specify:
        *   **Files to be changed**: List specific file paths (e.g., `src/module/file.py`).
        *   **Summary of changes**: Briefly describe the modifications (e.g., "Add `validate()` method handling X").
        *   *(Optional: Code snippets)*: Include small, illustrative code snippets if they significantly clarify the change.

5.  **Verification Strategy (per phase)**:
    *   For each phase, outline how the changes will be verified:
        *   **Automated Tests**: Specify commands to run (e.g., `PYTHONPATH=src pytest tests/my_feature.py`).
        *   **Manual Verification**: Provide clear, reproducible steps (e.g., "Click X, expect Y").

6.  **Architectural Risks/Considerations**:
    *   Identify potential side effects, dependency issues, performance risks, or violations of existing project conventions.

7.  **Out of Scope**:
    *   Explicitly state what this plan does *not* cover to prevent scope creep.

Submitting a plan allows for early feedback and ensures that the proposed solution aligns with `lodum`'s architectural principles and quality standards.

## Running Tests

We use `pytest` for native testing and a Node.js-based runner for Pyodide (WASM) testing.

### Native Tests
Run the full test suite locally:
```bash
PYTHONPATH=src pytest
```

### Pyodide (WASM) Tests
To ensure compatibility with browser environments, we run tests in Pyodide via Node.js.

1.  **Install Node.js dependencies:**
    ```bash
    npm install
    ```

2.  **Build the distribution wheel:**
    The Pyodide runner requires a built wheel to install the package in the virtual WASM environment.
    ```bash
    python3 -m build
    ```

3.  **Run the Pyodide tests:**
    ```bash
    # Run standard sequential tests
    node run_pyodide_node.js

    # Run with simulated shared memory (concurrency testing)
    PYODIDE_SHARED_MEMORY=1 node run_pyodide_node.js
    ```

## Pre-commit Checks

Before submitting a pull request, please run the following checks to ensure code quality:

1.  **Linting & Formatting:**
    ```bash
    ruff check src tests benchmarks
    ruff format --check src tests benchmarks
    ```

2.  **Type Checking:**
    ```bash
    mypy src tests
    ```

## Styleguides

- We use [Ruff](https://github.com/astral-sh/ruff) for code formatting and linting. Please run it on your code before submitting a pull request.
- We follow [PEP 8](https://www.python.org/dev/psps/pep-0008/) for all Python code.

## Core Development Guidelines

### Modular Architecture
The core engine is split into two primary areas:
- `src/lodum/compiler/`: Handles type analysis and specialized bytecode generation.
- `src/lodum/handlers/`: Contains generic fallback logic for types when specialized code cannot be compiled.

### AST Generation
When modifying the compiler, use the `ASTBuilder` DSL found in `src/lodum/compiler/dsl.py`. This ensures that generated code is readable and consistent across different Python versions.

### Thread Safety
Lodum uses a `Context` object to manage global state. All handlers must be stateless or use the provided `Context` for caching. Avoid global variables that could cause race conditions during concurrent serialization.

## Release Process

When a new version of `lodum` is ready for release, follow these steps:

1.  **Prepare the Release Branch**:
    - Create a new branch `feature/issue-XX-release-prep` (replacing XX with the release tracking issue number).
2.  **Update Version**:
    - Update `__version__` in `src/lodum/__init__.py`.
    - Update the `version` field in `pyproject.toml`.
3.  **Update Changelog**:
    - Add a new section to `CHANGELOG.md` following the [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format.
    - Set the release date.
4.  **Final Checks**:
    - Run the full test suite: `PYTHONPATH=src pytest`.
    - Run Pyodide tests: `node run_pyodide_node.js` and `PYODIDE_SHARED_MEMORY=1 node run_pyodide_node.js`.
    - Build and preview the documentation: `mkdocs serve`.
    - Ensure all branding assets (headers, social previews) are correct.
5.  **Merge and Tag**:
    - Merge the release branch into `main`.
    - Create a signed Git tag: `git tag -a vX.Y.Z -m "Release vX.Y.Z"`.
    - Push the tag: `git push origin vX.Y.Z`.
6.  **Deploy and Publish**:
    - Build the distribution: `python3 -m build`.
    - Upload to PyPI: `twine upload dist/*`.
    - Deploy versioned documentation: `mike deploy --push --update-aliases vX.Y.Z latest`.
    - Set the new version as default (if applicable): `mike set-default --push latest`.

## License

By contributing, you agree that your contributions will be licensed under the Apache License 2.0.