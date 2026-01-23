import pytest
import json as std_json
from lodum import lodum, json
from lodum.exception import DeserializationError
from typing import Union

@lodum
class VariantA:
    def __init__(self, name: str, value: int):
        self.name = name
        self.value = value

@lodum
class VariantB:
    def __init__(self, name: str, value: int):
        self.name = name
        self.value = value

@lodum
class Container:
    def __init__(self, item: Union[VariantA, VariantB]):
        self.item = item

def test_union_ambiguity():
    # Currently, this will probably pick VariantA because it's first in Union
    data = {"name": "test", "value": 42}
    c = json.loads(Container, std_json.dumps({"item": data}))
    # VariantA and VariantB are identical in structure.
    # The current implementation of _load_union will try them in order.
    # It should pick VariantA because it's first.
    assert isinstance(c.item, VariantA)

def test_tagged_union_resolution():
    @lodum(tag="type")
    class TaggedA:
        def __init__(self, name: str):
            self.name = name

    @lodum(tag="type")
    class TaggedB:
        def __init__(self, name: str):
            self.name = name

    @lodum
    class TaggedContainer:
        def __init__(self, item: Union[TaggedA, TaggedB]):
            self.item = item

    data_a = {"type": "TaggedA", "name": "Alice"}
    data_b = {"type": "TaggedB", "name": "Bob"}

    ca = json.loads(TaggedContainer, std_json.dumps({"item": data_a}))
    assert isinstance(ca.item, TaggedA)
    assert ca.item.name == "Alice"

    cb = json.loads(TaggedContainer, std_json.dumps({"item": data_b}))
    assert isinstance(cb.item, TaggedB)
    assert cb.item.name == "Bob"

def test_tagged_union_serialization():
    @lodum(tag="type")
    class TaggedA:
        def __init__(self, name: str):
            self.name = name

    a = TaggedA(name="Alice")
    data_str = json.dumps(a)
    data = std_json.loads(data_str)
    assert "type" in data
    assert data["type"] == "TaggedA"
    assert data["name"] == "Alice"

def test_custom_tag_value():
    @lodum(tag="kind", tag_value="rect")
    class Rectangle:
        def __init__(self, w: int, h: int):
            self.w = w
            self.h = h

    r = Rectangle(w=10, h=20)
    data_str = json.dumps(r)
    data = std_json.loads(data_str)
    assert data["kind"] == "rect"

    loaded = json.loads(Rectangle, data_str)
    assert loaded.w == 10
    assert loaded.h == 20

def test_invalid_tag():
    @lodum(tag="type")
    class TaggedA:
        def __init__(self, name: str):
            self.name = name

    with pytest.raises(DeserializationError) as exc_info:
        json.loads(TaggedA, std_json.dumps({"type": "TaggedB", "name": "Alice"}))
    assert "Invalid tag value" in str(exc_info.value)

def test_tagged_union_schema():
    @lodum(tag="type")
    class TaggedA:
        def __init__(self, name: str):
            self.name = name

    @lodum(tag="type")
    class TaggedB:
        def __init__(self, name: str):
            self.name = name

    @lodum
    class TaggedContainer:
        def __init__(self, item: Union[TaggedA, TaggedB]):
            self.item = item

    schema = json.schema(TaggedContainer)
    item_schema = schema["properties"]["item"]

    assert "discriminator" in item_schema
    assert item_schema["discriminator"]["propertyName"] == "type"

    assert "anyOf" in item_schema
    assert len(item_schema["anyOf"]) == 2

    # One of them should be TaggedA
    tag_values = [v["properties"]["type"]["const"] for v in item_schema["anyOf"]]
    assert "TaggedA" in tag_values
    assert "TaggedB" in tag_values

    for v in item_schema["anyOf"]:
        assert "type" in v["required"]

def test_tag_with_quote():
    @lodum(tag="type", tag_value="O'Reilly")
    class Book:
        def __init__(self, title: str):
            self.title = title

    b = Book(title="Learning Python")
    data_str = json.dumps(b)
    data = std_json.loads(data_str)
    assert data["type"] == "O'Reilly"

    loaded = json.loads(Book, data_str)
    assert loaded.title == "Learning Python"
