# OpenAPI Support Implementation Plan

## Overview
This plan details the implementation of utilities to convert `lodum` schemas into OpenAPI/Swagger specifications, addressing issue #44. The goal is to allow developers to generate OpenAPI-compliant schema definitions directly from their `@lodum`-decorated classes, facilitating API documentation and client generation.

## Current State Analysis
Our research (`tests/test_schema.py`) indicates that `lodum.schema()` already produces JSON Schema output that is highly compatible with OpenAPI:
*   Correctly infers basic types (`string`, `integer`, `array`, `object`).
*   Adds `format: "date-time"` for `datetime` types.
*   Maps Python `Enum` to OpenAPI `enum`.
*   Uses `anyOf` for `Union` types, aligning with OpenAPI.
*   Handles `required` fields and `rename` correctly.
*   Supports nested object definitions.

The primary gaps are OpenAPI-specific conventions like explicit `nullable` for `Optional` types and the mechanism for defining reusable schemas in `components.schemas` with `$ref` references. `lodum` also lacks native support for `description` in field metadata, which is crucial for good OpenAPI documentation.

## Implementation Approach
We will implement a utility function `lodum.schema_to_openapi` that takes a `@lodum` class and converts its `lodum.schema()` output into an OpenAPI schema definition. This utility will handle OpenAPI-specific transformations and manage `components.schemas`.

---

## Phase 1: `schema_to_openapi` Utility and `nullable` handling

### Overview
This phase will create a core utility function that transforms a `lodum` JSON Schema into an OpenAPI Schema Object, correctly handling `nullable: true` for optional fields and identifying reusable components.

### Changes Required:

#### 1. `src/lodum/ext/openapi.py`: Create new module
**Changes**:
- Create a new file `src/lodum/ext/openapi.py`.
- Define a `schema_to_openapi(lodum_class: Type[Any]) -> Dict[str, Any]` function.
- This function will:
    - Call `lodum.schema(lodum_class)` to get the base JSON Schema.
    - Traverse the schema, identifying optional fields and adding `nullable: true` where appropriate (OpenAPI 3.0+ convention).
    - Collect all unique nested `lodum` schemas into a dictionary that can be placed under `components.schemas`.
    - Replace nested schema definitions with `$ref` pointers (e.g., `{"$ref": "#/components/schemas/SubModel"}`).

```python
# src/lodum/ext/openapi.py

from typing import Any, Dict, Type
from .. import schema as lodum_schema # Import lodum's schema generator

def schema_to_openapi(lodum_class: Type[Any]) -> Dict[str, Any]:
    # Placeholder for collected components. Will be managed during traversal.
    components_schemas: Dict[str, Dict[str, Any]] = {}

    def _convert_schema_recursive(current_schema: Dict[str, Any], class_name: Optional[str] = None) -> Dict[str, Any]:
        # Logic to handle nullable, $ref, etc.
        # This will be the core of the conversion.
        # If class_name is provided, store in components_schemas and return $ref
        pass # To be implemented

    # Generate base lodum schema
    base_lodum_schema = lodum_schema(lodum_class)
    # Convert and collect components
    openapi_schema = _convert_schema_recursive(base_lodum_schema, lodum_class.__name__)

    # Add components to the final output
    final_openapi_schema = {
        "type": "object", # Root schema will likely be an object for the class itself
        # ... other properties from openapi_schema
    }
    if components_schemas:
        final_openapi_schema["components"] = {"schemas": components_schemas}
    
    return openapi_schema # Needs to return the actual schema for the root class, not components yet.
                         # A wrapper function could structure it with components.
```

#### 2. `src/lodum/field.py`: Add `description` parameter to `Field`
**Changes**:
- Add a `description: Optional[str]` parameter to the `Field` class and the `field()` function.
- This `description` will be used to populate the `description` field in the generated OpenAPI schema.

```python
# src/lodum/field.py

# ... existing code ...

class Field:
    def __init__(
        self,
        # ... existing params ...
        description: Optional[str] = None, # NEW
    ) -> None:
        # ... existing assignments ...
        self.description = description # NEW

def field(
    *,
    # ... existing params ...
    description: Optional[str] = None, # NEW
) -> Any:
    return Field(
        # ... existing assignments ...
        description=description, # NEW
    )
```

#### 3. `tests/test_openapi.py`: Add new test file for OpenAPI support
**Changes**:
- Create a new test file `tests/test_openapi.py`.
- Add test cases covering:
    - Conversion of a simple `@lodum` class to an OpenAPI schema, verifying types, formats, and `required` fields.
    - Conversion of a class with `Optional` fields, verifying `nullable: true`.
    - Conversion of a class with nested `@lodum` objects, verifying `$ref` usage in `components.schemas`.
    - Verification that `field(description=...)` correctly populates the schema's `description`.

```python
# tests/test_openapi.py

import pytest
from lodum import lodum, field
from lodum.ext.openapi import schema_to_openapi

@lodum
class UserProfile:
    def __init__(self, id: int, username: str, bio: Optional[str] = field(description="A short biography")):
        self.id = id
        self.username = username
        self.bio = bio

def test_user_profile_openapi_schema():
    openapi_schema = schema_to_openapi(UserProfile)
    
    # Verify root schema
    assert openapi_schema["type"] == "object"
    assert "id" in openapi_schema["properties"]
    assert openapi_schema["properties"]["id"]["type"] == "integer"
    assert "username" in openapi_schema["properties"]
    assert openapi_schema["properties"]["username"]["type"] == "string"
    
    # Verify optional field with description
    assert "bio" in openapi_schema["properties"]
    assert openapi_schema["properties"]["bio"]["type"] == "string"
    assert openapi_schema["properties"]["bio"]["nullable"] == True
    assert openapi_schema["properties"]["bio"]["description"] == "A short biography"
```

### Success Criteria:
#### Automated:
- [ ] `PYTHONPATH=src pytest tests/test_openapi.py` passes.
#### Manual:
- [ ] Verify that the generated OpenAPI schemas are valid against an OpenAPI validator (e.g., Swagger UI or an online validator).

---

## Phase 2: FastAPI Integration for OpenAPI (Future)
*This phase will be implemented after Phase 1 is complete and merged.*

### Overview
Integrate `lodum`'s OpenAPI schema generation with FastAPI's automatic OpenAPI documentation. This would involve teaching FastAPI to recognize `@lodum` classes and use `lodum.ext.openapi.schema_to_openapi` when generating the API's overall OpenAPI specification.

**Implementation Note**: This phase is dependent on FastAPI's extension points for custom schema generators and will be explored after the core `schema_to_openapi` utility is stable.

## Review Criteria (Self-Critique)
- **Specificity**: High, providing explicit code modifications and test examples, particularly for Phase 1.
- **Verification**: Includes both automated and manual success criteria.
- **Phasing**: Logically separates the core conversion utility from FastAPI integration, ensuring modular development.
