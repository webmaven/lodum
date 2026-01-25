import pytest
from lodum import lodum, field, json
from lodum.exception import DeserializationError
from typing import List

from typing import Dict


@lodum
class AllPrimitives:
    def __init__(self, i: int, f: float, b: bool, s: str, by: bytes):
        self.i = i
        self.f = f
        self.b = b
        self.s = s
        self.by = by


def test_all_primitives_success():
    data = {"i": 1, "f": 1.1, "b": True, "s": "hello", "by": "Ynl0ZXM="}
    obj = json.loads(AllPrimitives, json.dumps(data))
    assert obj.i == 1
    assert obj.f == 1.1
    assert obj.b is True
    assert obj.s == "hello"
    assert obj.by == b"bytes"


def test_all_primitives_errors():
    # Int error
    with pytest.raises(DeserializationError) as exc:
        json.loads(AllPrimitives, '{"i": "not int", "f": 1.1, "b": true, "s": "a", "by": "a"}')
    assert "i" in str(exc.value)

    # Float error
    with pytest.raises(DeserializationError) as exc:
        json.loads(AllPrimitives, '{"i": 1, "f": "not float", "b": true, "s": "a", "by": "a"}')
    assert "f" in str(exc.value)

    # Bool error
    with pytest.raises(DeserializationError) as exc:
        json.loads(AllPrimitives, '{"i": 1, "f": 1.1, "b": "not bool", "s": "a", "by": "a"}')
    assert "b" in str(exc.value)

    # Str error
    with pytest.raises(DeserializationError) as exc:
        json.loads(AllPrimitives, '{"i": 1, "f": 1.1, "b": true, "s": 1, "by": "a"}')
    assert "s" in str(exc.value)

    # Bytes error
    with pytest.raises(DeserializationError) as exc:
        json.loads(AllPrimitives, '{"i": 1, "f": 1.1, "b": true, "s": "a", "by": 1}')
    assert "by" in str(exc.value)


@lodum
class PrimitiveLists:
    def __init__(
        self,
        ints: List[int],
        floats: List[float],
        bools: List[bool],
        strs: List[str],
        dict_ints: Dict[str, int] = field(default_factory=dict),
    ):
        self.ints = ints
        self.floats = floats
        self.bools = bools
        self.strs = strs
        self.dict_ints = dict_ints


def test_primitive_list_success():
    data = {
        "ints": [1, 2, 3],
        "floats": [1.1, 2, 3.3],  # Note: int should be allowed for float
        "bools": [True, False],
        "strs": ["a", "b"],
        "dict_ints": {"a": 1, "b": 2},
    }
    encoded = json.dumps(data)
    decoded = json.loads(PrimitiveLists, encoded)
    assert decoded.ints == [1, 2, 3]
    assert decoded.floats == [1.1, 2.0, 3.3]
    assert decoded.bools == [True, False]
    assert decoded.strs == ["a", "b"]
    assert decoded.dict_ints == {"a": 1, "b": 2}


def test_primitive_list_float_error():
    data = (
        '{"ints": [1], "floats": [1.1, "not a float"], "bools": [true], "strs": ["a"]}'
    )
    with pytest.raises(DeserializationError) as excinfo:
        json.loads(PrimitiveLists, data)
    assert "Expected float, got str" in str(excinfo.value)
    assert "floats[1]" in str(excinfo.value)


def test_primitive_list_int_error():
    data = '{"ints": [1, 1.1], "floats": [1.1], "bools": [true], "strs": ["a"]}'
    with pytest.raises(DeserializationError) as excinfo:
        json.loads(PrimitiveLists, data)
    assert "Expected int, got float" in str(excinfo.value)
    assert "ints[1]" in str(excinfo.value)


def test_primitive_list_bool_error():
    data = '{"ints": [1], "floats": [1.1], "bools": [true, 0], "strs": ["a"]}'
    with pytest.raises(DeserializationError) as excinfo:
        json.loads(PrimitiveLists, data)
    # In some formats 0 might be bool, but in JSON it's int
    assert "Expected bool, got int" in str(excinfo.value)
    assert "bools[1]" in str(excinfo.value)


def test_primitive_list_str_error():
    data = '{"ints": [1], "floats": [1.1], "bools": [true], "strs": ["a", 1]}'
    with pytest.raises(DeserializationError) as excinfo:
        json.loads(PrimitiveLists, data)
    assert "Expected str, got int" in str(excinfo.value)
    assert "strs[1]" in str(excinfo.value)


def test_primitive_dict_error():
    data = '{"ints": [], "floats": [], "bools": [], "strs": [], "dict_ints": {"a": "not int"}}'
    with pytest.raises(DeserializationError) as excinfo:
        json.loads(PrimitiveLists, data)
    assert "Expected int, got str" in str(excinfo.value)
    assert "dict_ints.a" in str(excinfo.value)


def test_generic_load_list_primitive():
    # To hit the non-compiled path, we can call load() directly with a List[int] type
    from lodum.internal import load
    from lodum.json import JsonLoader

    loader = JsonLoader([1, "a"])
    with pytest.raises(DeserializationError) as excinfo:
        load(List[int], loader)
    assert "Expected int, got str" in str(excinfo.value)
    assert "[1]" in str(excinfo.value)

    loader = JsonLoader([1, 2.2])
    with pytest.raises(DeserializationError) as excinfo:
        load(List[int], loader)
    assert "Expected int, got float" in str(excinfo.value)

    loader = JsonLoader([1.1, "a"])
    with pytest.raises(DeserializationError) as excinfo:
        load(List[float], loader)
    assert "Expected float, got str" in str(excinfo.value)

    # Test other primitives in generic load_list_primitive
    assert load(List[str], JsonLoader(["a", "b"])) == ["a", "b"]
    with pytest.raises(DeserializationError):
        load(List[str], JsonLoader(["a", 1]))

    assert load(List[bool], JsonLoader([True, False])) == [True, False]
    with pytest.raises(DeserializationError):
        load(List[bool], JsonLoader([True, 1]))

    assert load(List[float], JsonLoader([1.1, 2])) == [1.1, 2.0]
