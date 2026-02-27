# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import pytest
from lodum import lodum, msgpack
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


def test_msgpack_primitives():
    # MsgPack returns bytes
    assert msgpack.dumps(42) == b"*"
    assert msgpack.loads(int, b"*") == 42

    assert msgpack.dumps("hello") == b"\xa5hello"
    assert msgpack.loads(str, b"\xa5hello") == "hello"


def test_msgpack_serialize_class():
    instance = Simple(a=42, b="universe")
    packed = msgpack.dumps(instance)
    # The order of keys in the dict matters for the exact byte sequence
    # {'a': 42, 'b': 'universe'} -> \x82\xa1a*\xa1b\xa8universe
    assert isinstance(packed, bytes)

    unpacked = msgpack.loads(Simple, packed)
    assert unpacked.a == 42
    assert unpacked.b == "universe"


def test_msgpack_serialize_nested():
    instance = Nested(name="Outer", simple=Simple(a=5, b="inner"))
    packed = msgpack.dumps(instance)
    assert isinstance(packed, bytes)

    unpacked = msgpack.loads(Nested, packed)
    assert unpacked.name == "Outer"
    assert unpacked.simple.a == 5
    assert unpacked.simple.b == "inner"


def test_msgpack_decode_error():
    with pytest.raises(DeserializationError) as excinfo:
        msgpack.loads(Simple, b"\xc1")  # Invalid msgpack (reserved byte)
    assert "Failed to parse MsgPack" in str(excinfo.value)


def test_msgpack_roundtrip_complex():
    @lodum
    class Complex:
        def __init__(self, items: list[int], d: dict[str, float], s: set[str]):
            self.items = items
            self.d = d
            self.s = s

    instance = Complex(items=[1, 2, 3], d={"pi": 3.14}, s={"a", "b"})
    packed = msgpack.dumps(instance)
    unpacked = msgpack.loads(Complex, packed)

    assert unpacked.items == [1, 2, 3]
    assert unpacked.d == {"pi": 3.14}
    assert unpacked.s == {"a", "b"}
