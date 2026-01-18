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

### Pull Requests

- Open a new GitHub pull request with the patch.
- Ensure the PR description clearly describes the problem and solution. Include the relevant issue number if applicable.
- Before submitting, please ensure that your code follows the existing style of the project, and that all tests pass.

## Running Tests

We use `pytest` for testing. You can run the full test suite locally:

```bash
PYTHONPATH=src pytest
```

## Pre-commit Checks

Before submitting a pull request, please run the following checks to ensure code quality:

1.  **Linting:**
    ```bash
    ruff check src/lodum
    ```

2.  **Formatting:**
    ```bash
    ruff format --check src/lodum
    ```

3.  **Type Checking:**
    ```bash
    mypy src/lodum
    ```

## Styleguides

- We use [Ruff](https://github.com/astral-sh/ruff) for code formatting and linting. Please run it on your code before submitting a pull request.
- We follow [PEP 8](https://www.python.org/dev/peps/pep-0008/) for all Python code.

## License

By contributing, you agree that your contributions will be licensed under the Apache License 2.0.
