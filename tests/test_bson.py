# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import pytest
from lodum import lodum, bson
from lodum.exception import DeserializationError

@lodum
class Simple:
    def __init__(self, a: int, b: str):
        self.a = a
        self.b = b

@lodum
class Nested:
    def __init__(self, name: str, simple: Simple):
        self.name = name
        self.simple = simple

def test_bson_primitives():
    # BSON requires a root dict, our implementation handles wrapping
    assert bson.loads(int, bson.dumps(42)) == 42
    assert bson.loads(str, bson.dumps("hello")) == "hello"
    assert bson.loads(float, bson.dumps(3.14)) == 3.14
    assert bson.loads(bool, bson.dumps(True)) is True

def test_bson_serialize_class():
    instance = Simple(a=42, b="universe")
    packed = bson.dumps(instance)
    assert isinstance(packed, bytes)
    
    unpacked = bson.loads(Simple, packed)
    assert unpacked.a == 42
    assert unpacked.b == "universe"

def test_bson_serialize_nested():
    instance = Nested(name="Outer", simple=Simple(a=5, b="inner"))
    packed = bson.dumps(instance)
    assert isinstance(packed, bytes)
    
    unpacked = bson.loads(Nested, packed)
    assert unpacked.name == "Outer"
    assert unpacked.simple.a == 5
    assert unpacked.simple.b == "inner"

def test_bson_decode_error():
    with pytest.raises(DeserializationError) as excinfo:
        bson.loads(Simple, b'\x00\x00\x00\x00') # Invalid BSON
    assert "Failed to parse BSON" in str(excinfo.value)
