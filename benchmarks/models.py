from typing import List, Dict, Type, Any, Optional
import sys
import os

# --- Robust Instrumentation & Shims ---
print(f"DEBUG: sys.path = {sys.path}")

def get_lodum_decorator():
    print("DEBUG: Resolving lodum decorator...")
    
    # 1. Try modern public API
    try:
        from lodum import lodum
        print(f"DEBUG: Found 'lodum' in 'lodum' package: {lodum}")
        return lodum
    except (ImportError, AttributeError) as e:
        print(f"DEBUG: 'from lodum import lodum' failed: {e}")

    # 2. Try v0.2.0 internal location
    try:
        from lodum.core import lodum
        print(f"DEBUG: Found 'lodum' in 'lodum.core': {lodum}")
        return lodum
    except (ImportError, AttributeError) as e:
        print(f"DEBUG: 'from lodum.core import lodum' failed: {e}")

    # 3. Try v0.1.0 'serializable'
    try:
        from lodum.core import serializable as lodum
        print(f"DEBUG: Found 'serializable' in 'lodum.core': {lodum}")
        return lodum
    except (ImportError, AttributeError) as e:
        print(f"DEBUG: 'from lodum.core import serializable' failed: {e}")

    # 4. Last resort: manual attribute check
    try:
        import lodum.core
        print(f"DEBUG: lodum.core.__file__ = {getattr(lodum.core, '__file__', 'unknown')}")
        if hasattr(lodum.core, "lodum"):
            print("DEBUG: Found 'lodum' via hasattr on lodum.core")
            return lodum.core.lodum
        if hasattr(lodum.core, "serializable"):
            print("DEBUG: Found 'serializable' via hasattr on lodum.core")
            return lodum.core.serializable
    except Exception as e:
        print(f"DEBUG: Manual attribute check failed: {e}")

    print("WARNING: Could not find lodum or serializable decorator. Using dummy.")
    return lambda x: x

lodum = get_lodum_decorator()

try:
    from pydantic import BaseModel
except ImportError:
    BaseModel = object

try:
    from marshmallow import Schema, fields, post_load
except ImportError:
    Schema = object
    fields = None

# --- Lodum Models ---

@lodum
class LodumSimple:
    def __init__(self, name: str, age: int, active: bool):
        self.name = name
        self.age = age
        self.active = active

@lodum
class LodumComplex:
    def __init__(self, id: int, name: str, tags: List[str], metadata: Dict[str, str], score: float):
        self.id = id
        self.name = name
        self.tags = tags
        self.metadata = metadata
        self.score = score

@lodum
class LodumNested:
    def __init__(self, id: int, simple: LodumSimple, children: List[LodumSimple]):
        self.id = id
        self.simple = simple
        self.children = children

# --- Pydantic Models ---

if BaseModel is not object:
    class PydanticSimple(BaseModel):
        name: str
        age: int
        active: bool

    class PydanticComplex(BaseModel):
        id: int
        name: str
        tags: List[str]
        metadata: Dict[str, str]
        score: float

    class PydanticNested(BaseModel):
        id: int
        simple: PydanticSimple
        children: List[PydanticSimple]
else:
    PydanticSimple = PydanticComplex = PydanticNested = None

# --- Marshmallow Schemas ---

if fields:
    class MarshmallowSimple:
        def __init__(self, name, age, active):
            self.name = name
            self.age = age
            self.active = active

    class MarshmallowSimpleSchema(Schema):
        name = fields.Str()
        age = fields.Int()
        active = fields.Bool()
        @post_load
        def make_obj(self, data, **kwargs): return MarshmallowSimple(**data)

    class MarshmallowComplex:
        def __init__(self, id, name, tags, metadata, score):
            self.id = id
            self.name = name
            self.tags = tags
            self.metadata = metadata
            self.score = score

    class MarshmallowComplexSchema(Schema):
        id = fields.Int()
        name = fields.Str()
        tags = fields.List(fields.Str())
        metadata = fields.Dict(keys=fields.Str(), values=fields.Str())
        score = fields.Float()
        @post_load
        def make_obj(self, data, **kwargs): return MarshmallowComplex(**data)

    class MarshmallowNested:
        def __init__(self, id, simple, children):
            self.id = id
            self.simple = simple
            self.children = children

    class MarshmallowNestedSchema(Schema):
        id = fields.Int()
        simple = fields.Nested(MarshmallowSimpleSchema)
        children = fields.List(fields.Nested(MarshmallowSimpleSchema))
        @post_load
        def make_obj(self, data, **kwargs): return MarshmallowNested(**data)
else:
    MarshmallowSimpleSchema = MarshmallowComplexSchema = MarshmallowNestedSchema = None
