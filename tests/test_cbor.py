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


def test_cbor_bytes():
    data = b"hello world"
    packed = cbor.dumps(data)
    assert cbor.loads(bytes, packed) == data


def test_cbor_collections():
    lst = [1, 2, 3]
    packed_lst = cbor.dumps(lst)
    assert cbor.loads(list[int], packed_lst) == lst

    dct = {"a": 1, "b": 2}
    packed_dct = cbor.dumps(dct)
    assert cbor.loads(dict[str, int], packed_dct) == dct


def test_cbor_load_errors():
    from lodum.cbor import CborLoader

    # load_int error
    loader = CborLoader("not an int")
    with pytest.raises(DeserializationError) as exc:
        loader.load_int()
    assert "Expected int" in str(exc.value)

    # load_str error
    loader = CborLoader(123)
    with pytest.raises(DeserializationError) as exc:
        loader.load_str()
    assert "Expected str" in str(exc.value)

    # load_float error
    loader = CborLoader("not a float")
    with pytest.raises(DeserializationError) as exc:
        loader.load_float()
    assert "Expected float" in str(exc.value)

    # load_bool error
    loader = CborLoader(1)
    with pytest.raises(DeserializationError) as exc:
        loader.load_bool()
    assert "Expected bool" in str(exc.value)

    # load_list error
    loader = CborLoader({})
    with pytest.raises(DeserializationError) as exc:
        loader.load_list()
    assert "Expected list" in str(exc.value)

    # load_dict error
    loader = CborLoader([])
    with pytest.raises(DeserializationError) as exc:
        loader.load_dict()
    assert "Expected dict" in str(exc.value)

    # load_bytes error
    loader = CborLoader("not bytes")
    with pytest.raises(DeserializationError) as exc:
        loader.load_bytes()
    assert "Expected bytes" in str(exc.value)
