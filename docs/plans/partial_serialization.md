# Partial Serialization Implementation Plan

## Overview
This plan details the implementation of partial serialization for `lodum`, allowing users to serialize only a subset of fields from a `@lodum`-decorated object. This functionality addresses issue #42 and will be exposed via `include` and `exclude` parameters in the `dumps` function.

## Current State Analysis
Our research (`src/lodum/core.py`, `src/lodum/field.py`, `src/lodum/compiler/dump_codegen.py`) highlights:
*   The `@lodum` decorator creates `Field` objects (stored in `_lodum_fields`) which contain metadata like `skip_serializing`.
*   `skip_serializing` provides a static mechanism to exclude fields.
*   The `_build_dump_function_ast` in `dump_codegen.py` iterates `_lodum_fields` and checks `field_info.skip_serializing`.
*   The generated dump function's signature is `(obj, dumper, dump_fn, depth, seen)`, lacking parameters for dynamic `include`/`exclude` sets.

## Implementation Approach
We will introduce `include` and `exclude` parameters to the `dumps` function and propagate them to the generated dump handlers. The codegen will be modified to conditionally skip fields based on these runtime parameters. The "fields that have changed" aspect will be noted as a future enhancement due to its significantly higher complexity.

---

## Phase 1: Dynamic Field Inclusion/Exclusion

### Overview
This phase introduces `include` and `exclude` parameters to the top-level `dumps` function. The generated dump handler for a class will check these parameters to dynamically decide which fields to serialize.

### Changes Required:

#### 1. `src/lodum/internal.py`: Modify `dump` function signature and logic
**Changes**:
- Add `include: Optional[Set[str]] = None` and `exclude: Optional[Set[str]] = None` parameters to the `dump` function.
- Pass these new parameters to the `_get_dump_handler` function.

```python
# src/lodum/internal.py

from typing import Any, Set, Optional
# ... existing imports ...

def dump(
    obj: Any,
    dumper: Dumper,
    depth: int = 0,
    seen: Optional[Set[int]] = None,
    include: Optional[Set[str]] = None, # NEW
    exclude: Optional[Set[str]] = None, # NEW
) -> Any:
    # ... existing depth and seen checks ...

    handler = _get_dump_handler(type(obj))
    # Pass include/exclude to handler
    return handler(obj, dumper, dump, depth, seen, include, exclude)
```

#### 2. `src/lodum/compiler/dump_codegen.py`: Modify `_build_dump_function_ast` and loop logic
**Changes**:
- Update the `args` of the generated function to accept `include` and `exclude`.
- Inside the `for` loop (`for i, (field_name, field_info) in enumerate(fields.items()):`), add conditional checks based on `include` and `exclude`.
- Ensure `dump_fn` (recursive calls) also passes `include` and `exclude` parameters for nested objects. A simple way for now is to pass the same `include`/`exclude` sets to nested calls. More advanced granular control (e.g., `include={'user': {'name'}}`) can be a future enhancement.

```python
# src/lodum/compiler/dump_codegen.py

# ... existing imports ...

def _build_dump_function_ast(
    cls: Type[Any], get_dump_handler_fn: Any, dump_orig: Any
) -> Tuple[ast.FunctionDef, Dict[str, Any]]:
    # ... existing code ...

    # Parameters: (obj, dumper, dump_fn, depth, seen, include, exclude) # MODIFIED
    args = b.arguments(["obj", "dumper", "dump_fn", "depth", "seen", "include", "exclude"])

    body: list[ast.stmt] = []

    # ... existing body initialization ...

    for i, (field_name, field_info) in enumerate(fields.items()):
        # NEW: Dynamic include/exclude checks
        # if include is not None and field_name not in include: continue
        body.append(
            b.if_stmt(
                test=b.and_exp(b.is_not_none("include"), b.not_in("field_name", "include")),
                body=[b.continue_stmt()]
            )
        )
        # if exclude is not None and field_name in exclude: continue
        body.append(
            b.if_stmt(
                test=b.and_exp(b.is_not_none("exclude"), b.in_exp("field_name", "exclude")),
                body=[b.continue_stmt()]
            )
        )

        if field_info.skip_serializing: # Existing static check, keep it
            continue

        # ... rest of existing field dumping logic ...

        # Modify recursive calls to dump_fn in _build_dump_expr
        # Ensure include/exclude are passed down
        # Example for dump_fn call:
        # b.call("dump_fn", [val_node, b.load("dumper"), b.add(b.load("depth"), b.const(1)), b.load("seen"), b.load("include"), b.load("exclude")])
```

#### 3. `src/lodum/json.py` (and other format `dumps` functions): Add `include`/`exclude` parameters
**Changes**:
- Update the public `dumps` functions in `json.py` (and potentially `yaml.py`, `msgpack.py`, etc.) to accept `include` and `exclude` and pass them to `lodum.internal.dump`.

```python
# src/lodum/json.py

from typing import Set, Optional
# ... existing imports ...

def dumps(obj: Any, include: Optional[Set[str]] = None, exclude: Optional[Set[str]] = None) -> str: # MODIFIED
    dumper = JSONDumper()
    # Pass include/exclude to internal.dump
    return json_lib.dumps(internal.dump(obj, dumper, include=include, exclude=exclude), default=str)
```

#### 4. `tests/test_partial_serialization.py`: Add new test file for partial serialization
**Changes**:
- Create a new test file `tests/test_partial_serialization.py`.
- Add test cases covering:
    - Serialization with `include` parameter.
    - Serialization with `exclude` parameter.
    - Interaction between `include` and `exclude` (e.g., `include` takes precedence).
    - Interaction with `field(skip_serializing=True)`.
    - Nested objects and how `include`/`exclude` might be passed (current plan is just pass top-level sets).

```python
# tests/test_partial_serialization.py

import pytest
from lodum import lodum, json, field
# ...

@lodum
class User:
    def __init__(self, id: int, name: str, email: str = field(skip_serializing=True), age: int = 30):
        self.id = id
        self.name = name
        self.email = email
        self.age = age

def test_dumps_with_include():
    user = User(id=1, name="Alice", email="alice@example.com")
    result = json.dumps(user, include={'id', 'name'})
    assert json.loads(dict, result) == {'id': 1, 'name': 'Alice'}

def test_dumps_with_exclude():
    user = User(id=1, name="Alice", email="alice@example.com")
    result = json.dumps(user, exclude={'age'})
    assert json.loads(dict, result) == {'id': 1, 'name': 'Alice', 'email': 'alice@example.com'} # Note email is still skipped by field(skip_serializing=True)
```

### Success Criteria:
#### Automated:
- [ ] `PYTHONPATH=src pytest tests/test_partial_serialization.py` passes.
#### Manual:
- [ ] Verify that `dumps` with `include` and `exclude` correctly filters fields for simple and nested objects.
- [ ] Verify that `include` takes precedence over `exclude` if both specify the same field.

---

## Future Enhancements
*   **Granular `include`/`exclude` for Nested Objects**: Allow specifying `include={'user': {'name', 'email'}}` for nested objects. This would require more complex logic to pass down filtered `include`/`exclude` sets.
*   **Fields That Have Changed**: Implement a mechanism to track changes in an object and serialize only fields that have been modified. This is a significant feature requiring object-level change tracking.

## Review Criteria (Self-Critique)
- **Specificity**: High, providing explicit code modifications and test examples.
- **Verification**: Includes both automated and manual success criteria.
- **Phasing**: The plan focuses on a single, well-defined phase for dynamic include/exclude, clearly outlining future enhancements.
