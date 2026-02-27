# Schema-to-Code CLI Tool Implementation Plan

## Overview
This plan details the implementation of a Command-Line Interface (CLI) tool that generates `@lodum`-decorated Python classes from an existing JSON Schema, addressing issue #45. This tool will streamline development by automating the creation of data model definitions from schema specifications.

## Current State Analysis
*   `lodum` classes are defined using the `@lodum` decorator and `__init__` type hints, optionally using `field()` for metadata.
*   `lodum.schema()` can generate JSON Schema from `@lodum` classes, demonstrating a clear mapping.
*   The problem of JSON Schema to Python code generation is addressed by existing tools like `datamodel-code-generator`, indicating a mature understanding of the conversion logic.
*   Python's `ast` module provides programmatic control over code generation.

## Implementation Approach
We will build a custom CLI tool that parses JSON Schema, maps its definitions to Python types and `@lodum` class structure, and generates Python code using the `ast` module. This approach ensures full compatibility with `lodum`'s specific decorator and `field()` function.

---

## Phase 1: Core Schema Parsing and AST Generation Logic

### Overview
Implement the core logic to parse a JSON Schema file, interpret its definitions, and translate them into a Python Abstract Syntax Tree (AST) representing `@lodum`-decorated classes.

### Changes Required:

#### 1. `src/lodum/ext/codegen.py`: Create new module for code generation logic
**Changes**:
- Create a new file `src/lodum/ext/codegen.py`.
- Define a class `SchemaToLodumConverter` that takes a JSON Schema dictionary.
- Implement methods within this class to:
    - `_map_json_type_to_python_type(json_type: str, json_format: Optional[str]) -> str`: Maps JSON Schema types (`string`, `integer`, `array`, `object`) to corresponding Python type strings (`str`, `int`, `List`, `Dict`, etc.).
    - `_generate_class_ast(schema_name: str, schema_properties: Dict[str, Any], required_fields: List[str]) -> ast.ClassDef`: Generates an `ast.ClassDef` node for a `@lodum` class, including its `__init__` method, type hints, and `field()` calls where appropriate (e.g., for `rename`, `default`).
    - `convert_to_module_ast() -> ast.Module`: The main method to generate the full module AST, including imports and all generated classes.

```python
# src/lodum/ext/codegen.py

import ast
from typing import Any, Dict, List, Optional
# ... other necessary imports for ast and typing ...

class SchemaToLodumConverter:
    def __init__(self, json_schema: Dict[str, Any]):
        self.json_schema = json_schema
        self.generated_classes: Dict[str, ast.ClassDef] = {}

    def _map_json_type_to_python_type(self, json_type: str, json_format: Optional[str] = None) -> str:
        # Basic mapping logic: string -> str, integer -> int, etc.
        # Handle arrays, objects, and potentially union types.
        # Placeholder
        return "Any"

    def _generate_class_ast(self, schema_name: str, properties: Dict[str, Any], required: List[str]) -> ast.ClassDef:
        # Generate __init__ parameters, type hints, and field() calls
        # Placeholder
        return ast.ClassDef(name=schema_name, bases=[], keywords=[], body=[], decorator_list=[])

    def convert_to_module_ast(self) -> ast.Module:
        # Traverse self.json_schema to find top-level definitions and components.schemas
        # Call _generate_class_ast for each schema
        # Construct the final ast.Module with imports (lodum, field, List, Dict, Optional, etc.)
        # Placeholder
        return ast.Module(body=[], type_ignores=[])

    def generate_code(self) -> str:
        module_ast = self.convert_to_module_ast()
        return ast.unparse(module_ast) # ast.unparse requires Python 3.9+
```

#### 2. `tests/test_codegen.py`: Add new test file for code generation logic
**Changes**:
- Create a new test file `tests/test_codegen.py`.
- Add test cases covering:
    - Conversion of simple JSON Schema (e.g., basic types, required fields) to Python code.
    - Conversion of complex JSON Schema (e.g., nested objects, arrays, `enum`, `rename` via `x-`properties).
    - Verification that generated code is syntactically valid and runnable.
    - Verification that generated classes are correctly `@lodum`-decorated and use `field()`.

```python
# tests/test_codegen.py

import pytest
import json as std_json
from lodum.ext.codegen import SchemaToLodumConverter

def test_simple_schema_to_code():
    json_schema = {
        "title": "User",
        "type": "object",
        "properties": {
            "id": {"type": "integer"},
            "name": {"type": "string"}
        },
        "required": ["id", "name"]
    }
    converter = SchemaToLodumConverter(json_schema)
    generated_code = converter.generate_code()
    
    assert "@lodum" in generated_code
    assert "class User:" in generated_code
    assert "def __init__(self, id: int, name: str):" in generated_code
    # More assertions for type hints, imports, etc.

def test_nested_schema_to_code():
    # Test a schema with nested objects that should become separate classes
    pass
```

### Success Criteria:
#### Automated:
- [ ] `PYTHONPATH=src pytest tests/test_codegen.py` passes.
#### Manual:
- [ ] Inspect generated Python code for correctness, readability, and adherence to `lodum`'s coding style.

---

## Phase 2: CLI Interface Development

### Overview
Build a command-line interface around the core code generation logic, allowing users to specify input JSON Schema files and output Python file paths.

### Changes Required:

#### 1. `src/lodum/cli.py`: Create new module for CLI
**Changes**:
- Create a new file `src/lodum/cli.py`.
- Use `argparse` or `click` to define CLI arguments (e.g., `--input-schema`, `--output-file`).
- Integrate `SchemaToLodumConverter` to parse the input schema and write the generated code to the output file.

#### 2. `pyproject.toml`: Add CLI entry point
**Changes**:
- Add an entry point to `pyproject.toml` to make the CLI executable (e.g., `lodum-codegen = "lodum.cli:main"`).

#### 3. `tests/test_cli.py`: Add new test file for CLI
**Changes**:
- Create a new test file `tests/test_cli.py`.
- Use `subprocess` or `pytest.cli` (if `click` is used) to test the CLI commands.
    - Test successful code generation from a schema file.
    - Test error handling for invalid input files or schemas.

### Success Criteria:
#### Automated:
- [ ] `PYTHONPATH=src pytest tests/test_cli.py` passes.
#### Manual:
- [ ] Run the CLI tool from the terminal with various JSON Schema inputs and verify correct Python output.

## Review Criteria (Self-Critique)
- **Specificity**: High, providing explicit code modifications, test examples, and outlining the use of `ast` for code generation.
- **Verification**: Includes both automated and manual success criteria for each phase.
- **Phasing**: Logically separates core logic from CLI development, ensuring modularity.

## Future Enhancements
*   **External Schema References:** Handle `$ref` to external schema files.
*   **Customization Options:** Allow users to specify custom base classes, field mapping rules, or type conversion overrides via CLI arguments or configuration files.
*   **IDE Integration:** (Long-term, as per roadmap) Provide language server features for JSON Schema directly in IDEs.
