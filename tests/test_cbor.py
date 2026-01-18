# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import pytest
from lodum import lodum, cbor
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


def test_cbor_primitives():
    assert cbor.loads(int, cbor.dumps(42)) == 42
    assert cbor.loads(str, cbor.dumps("hello")) == "hello"
    assert cbor.loads(float, cbor.dumps(3.14)) == 3.14
    assert cbor.loads(bool, cbor.dumps(True)) is True


def test_cbor_serialize_class():
    instance = Simple(a=42, b="universe")
    packed = cbor.dumps(instance)
    assert isinstance(packed, bytes)

    unpacked = cbor.loads(Simple, packed)
    assert unpacked.a == 42
    assert unpacked.b == "universe"


def test_cbor_serialize_nested():
    instance = Nested(name="Outer", simple=Simple(a=5, b="inner"))
    packed = cbor.dumps(instance)
    assert isinstance(packed, bytes)

    unpacked = cbor.loads(Nested, packed)
    assert unpacked.name == "Outer"
    assert unpacked.simple.a == 5
    assert unpacked.simple.b == "inner"


def test_cbor_decode_error():
    with pytest.raises(DeserializationError) as excinfo:
        cbor.loads(Simple, b"\x81")  # Incomplete CBOR list
    assert "Failed to parse CBOR" in str(excinfo.value)
