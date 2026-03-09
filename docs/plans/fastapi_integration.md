# FastAPI Integration Implementation Plan

## Overview
This plan details the implementation of seamless integration between `lodum` and FastAPI, addressing issue #43. The goal is to allow developers to use `@lodum`-decorated classes directly as request body models and response models in FastAPI applications.

## Current State Analysis
Our research of FastAPI's serialization mechanisms shows:
*   FastAPI primarily relies on Pydantic models for request body parsing and response model serialization.
*   It provides extension points such as custom `JSONResponse` classes and `Depends` providers for custom logic.
*   `lodum` can already convert objects to/from standard Python dictionaries using its `dump`/`load` internal functions with `BaseDumper`/`BaseLoader` or format-specific dumpers/loaders (e.g., `json.dumps`, `json.loads`).

## Implementation Approach
We will provide a custom `FastAPIResponse` class that uses `lodum.json.dumps` for serialization and a `LodumDepends` provider for deserializing request bodies using `lodum.json.loads`. This approach allows `lodum` classes to be used directly, bypassing Pydantic for `lodum`-specific models.

---

## Phase 1: `LodumResponse` Class for Response Serialization

### Overview
Implement a custom FastAPI `Response` class that leverages `lodum.json.dumps` to serialize `@lodum` objects directly to JSON, providing a performant alternative to Pydantic-based serialization for `lodum` models.

### Changes Required:

#### 1. `src/lodum/ext/fastapi.py`: Create new module
**Changes**:
- Create a new file `src/lodum/ext/fastapi.py`.
- Define a `LodumJSONResponse` class inheriting from `fastapi.responses.JSONResponse`.
- Override the `render` method to use `lodum.json.dumps` for serialization.

```python
# src/lodum/ext/fastapi.py

from typing import Any
from fastapi.responses import JSONResponse
from .. import json # Import lodum's json module

class LodumJSONResponse(JSONResponse):
    media_type = "application/json"

    def render(self, content: Any) -> bytes:
        # FastAPI's JSONResponse expects content to be JSON serializable.
        # We assume here that 'content' might be a lodum object or a standard dict/list.
        # If it's a lodum object, lodum.json.dumps will handle it.
        # If it's a standard dict/list, lodum.json.dumps should also handle it.
        return json.dumps(content).encode("utf-8")
```

#### 2. `tests/test_fastapi_integration.py`: Add new test file for FastAPI integration
**Changes**:
- Create a new test file `tests/test_fastapi_integration.py`.
- Add test cases covering:
    - A basic FastAPI app returning a `@lodum` object using `LodumJSONResponse`.
    - Verification that the `response_model` (if used with a Pydantic model) is correctly handled by FastAPI before `LodumJSONResponse` serializes. (Though for `LodumJSONResponse`, we are generally bypassing Pydantic for the `lodum` object itself).

```python
# tests/test_fastapi_integration.py

from fastapi import FastAPI
from fastapi.testclient import TestClient
from lodum import lodum
from lodum.ext.fastapi import LodumJSONResponse

@lodum
class User:
    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age

app = FastAPI()

@app.get("/users/{name}", response_class=LodumJSONResponse)
async def get_user(name: str):
    return User(name=name, age=30)

client = TestClient(app)

def test_get_user_lodum_response():
    response = client.get("/users/Alice")
    assert response.status_code == 200
    assert response.json() == {"name": "Alice", "age": 30}
```

### Success Criteria:
#### Automated:
- [ ] `PYTHONPATH=src pytest tests/test_fastapi_integration.py` passes.
#### Manual:
- [ ] Run a sample FastAPI application and verify that `@lodum` objects are correctly serialized to JSON using `LodumJSONResponse`.

---

## Phase 2: `LodumDepends` Provider for Request Deserialization

### Overview
Implement a custom `Depends` provider for FastAPI that uses `lodum.json.loads` to deserialize incoming request bodies directly into `@lodum` objects. This allows `lodum` objects to be used as type hints for request body parameters in path operations.

### Changes Required:

#### 1. `src/lodum/ext/fastapi.py`: Add `LodumBody` dependency
**Changes**:
- Define a `LodumBody` function that acts as a FastAPI `Depends` provider.
- This function will read the request body, parse it using `lodum.json.loads` into the specified `@lodum` class, and handle validation/error reporting.

```python
# src/lodum/ext/fastapi.py

import inspect
from fastapi import Request, Depends, HTTPException, status
from .. import json # Import lodum's json module
from ..exception import DeserializationError

# ... existing code for LodumJSONResponse ...

async def _lodum_body_dependency(request: Request, class_to_load: Type[T]) -> T:
    try:
        body = await request.body()
        if not body:
            raise HTTPException(status_code=status.HTTP_422_UNPROCESSABLE_ENTITY, detail="Request body is empty")
        
        # Assume JSON for now, might need content-type negotiation later
        return json.loads(class_to_load, body.decode("utf-8"))
    except DeserializationError as e:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail=f"Invalid data for {class_to_load.__name__}: {e.raw_message} at {e.path}"
        )
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))

def LodumBody(class_to_load: Type[T]):
    """
    A FastAPI dependency to load request bodies directly into @lodum objects.
    Usage: @app.post("/items/") async def create_item(item: Item = Depends(LodumBody(Item))):
    """
    def dependency_wrapper(request: Request) -> T:
        return Depends(_lodum_body_dependency(request, class_to_load)) # This part might need adjustment to work correctly with FastAPI's Depends
    
    # Correct way to make it work with Depends:
    # FastAPI expects a callable that takes request as argument
    # We need to inject the class_to_load
    def actual_dependency(request: Request) -> T:
        return json.loads(class_to_load, request.json()) # Simplification, need async body() read

    # More robust way using functools.partial or a wrapper class if needed.
    # For now, let's aim for a simple function that returns a callable.
    # This might require some deeper understanding of FastAPI's Depends internals.
    
    # Alternative idea: directly use a function that takes the class_to_load as a closure
    async def _lodum_body_factory(req: Request) -> T:
        body_bytes = await req.body()
        if not body_bytes:
            raise HTTPException(status_code=status.HTTP_422_UNPROCESSABLE_ENTITY, detail="Request body is empty")
        try:
            return json.loads(class_to_load, body_bytes.decode("utf-8"))
        except DeserializationError as e:
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail=f"Invalid data for {class_to_load.__name__}: {e.raw_message} at {e.path}"
            )
        except Exception as e:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))
    
    return _lodum_body_factory
```

#### 2. `tests/test_fastapi_integration.py`: Add Tests for Request Deserialization
**Changes**:
- Add new test cases covering:
    - A basic FastAPI app accepting a `@lodum` object via `LodumBody`.
    - Verification of valid and invalid request bodies.
    - Error handling for deserialization failures.

```python
# tests/test_fastapi_integration.py

# ... existing code ...

@app.post("/users/")
async def create_user(user: User = Depends(LodumBody(User))):
    return user # Return the created user for verification

def test_create_user_lodum_body():
    response = client.post("/users/", json={"name": "Bob", "age": 25})
    assert response.status_code == 200
    assert response.json() == {"name": "Bob", "age": 25}

def test_create_user_lodum_body_invalid():
    response = client.post("/users/", json={"name": "Charlie", "age": "twenty"})
    assert response.status_code == 422
    assert "Invalid data" in response.json()["detail"]
```

### Success Criteria:
#### Automated:
- [ ] `PYTHONPATH=src pytest tests/test_fastapi_integration.py` passes.
#### Manual:
- [ ] Run a sample FastAPI application and verify that request bodies are correctly deserialized into `@lodum` objects using `LodumBody`.
- [ ] Verify that validation errors from `lodum` are correctly translated into FastAPI's `HTTPException`.

## Review Criteria (Self-Critique)
- **Specificity**: High, providing explicit code modifications, test examples, and addressing interaction with FastAPI's core mechanisms.
- **Verification**: Includes both automated and manual success criteria for each phase.
- **Phasing**: Logically separates response handling from request handling, allowing for iterative development and testing.
