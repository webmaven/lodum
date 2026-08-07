# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import pytest

from lodum import bson, lodum
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
        bson.loads(Simple, b"\x00\x00\x00\x00")  # Invalid BSON
    assert "Failed to parse BSON" in str(excinfo.value)


def test_bson_bytes():
    data = b"hello world"
    packed = bson.dumps(data)
    assert bson.loads(bytes, packed) == data


def test_bson_collections():
    lst = [1, 2, 3]
    packed_lst = bson.dumps(lst)
    assert bson.loads(list[int], packed_lst) == lst

    dct = {"a": 1, "b": 2}
    packed_dct = bson.dumps(dct)
    assert bson.loads(dict[str, int], packed_dct) == dct


def test_bson_load_errors():
    from lodum.bson import BsonLoader

    # load_int error
    loader = BsonLoader("not an int")
    with pytest.raises(DeserializationError) as exc:
        loader.load_int()
    assert "Expected int" in str(exc.value)

    # load_str error
    loader = BsonLoader(123)
    with pytest.raises(DeserializationError) as exc:
        loader.load_str()
    assert "Expected str" in str(exc.value)

    # load_float error
    loader = BsonLoader("not a float")
    with pytest.raises(DeserializationError) as exc:
        loader.load_float()
    assert "Expected float" in str(exc.value)

    # load_bool error
    loader = BsonLoader(1)
    with pytest.raises(DeserializationError) as exc:
        loader.load_bool()
    assert "Expected bool" in str(exc.value)

    # load_list error
    loader = BsonLoader({})
    with pytest.raises(DeserializationError) as exc:
        loader.load_list()
    assert "Expected list" in str(exc.value)

    # load_dict error
    loader = BsonLoader([])
    with pytest.raises(DeserializationError) as exc:
        loader.load_dict()
    assert "Expected dict" in str(exc.value)

    # load_bytes error
    loader = BsonLoader("not bytes")
    with pytest.raises(DeserializationError) as exc:
        loader.load_bytes()
    assert "Expected bytes" in str(exc.value)
