from typing import List, Dict
from lodum import lodum
from pydantic import BaseModel
from marshmallow import Schema, fields, post_load

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

# --- Marshmallow Schemas ---

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
    def make_obj(self, data, **kwargs):
        return MarshmallowSimple(**data)

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
    def make_obj(self, data, **kwargs):
        return MarshmallowComplex(**data)

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
    def make_obj(self, data, **kwargs):
        return MarshmallowNested(**data)
