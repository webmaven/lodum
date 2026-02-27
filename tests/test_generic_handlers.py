# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import datetime
import enum
import uuid
import array
import collections
from decimal import Decimal
from dataclasses import dataclass
from pathlib import Path
from typing import List, Dict, Tuple, Set, Union, Optional, Any

import pytest
from lodum import json, lodum
from lodum.exception import DeserializationError


def test_top_level_list():
    assert json.loads(List[int], "[1, 2, 3]") == [1, 2, 3]


def test_top_level_dict():
    assert json.loads(Dict[str, int], '{"a": 1, "b": 2}') == {"a": 1, "b": 2}


def test_dict_key_error():
    with pytest.raises(DeserializationError, match="keys must be strings"):
        # This bypasses the normal Loader structure which usually provides strings
        # but the handler itself should be robust.
        from lodum.handlers.collections import _load_dict
        from lodum.core import BaseLoader

        class BadLoader(BaseLoader):
            def load_dict(self):
                yield (1, self)  # non-string key

        _load_dict(Dict[int, int], BadLoader({}))


def test_defaultdict():
    res = json.loads(collections.defaultdict[str, int], '{"a": 1}')
    assert isinstance(res, collections.defaultdict)
    assert res["a"] == 1
    assert res["b"] == 0


def test_ordered_dict():
    res = json.loads(collections.OrderedDict[str, int], '{"a": 1, "b": 2}')
    assert isinstance(res, collections.OrderedDict)
    assert list(res.keys()) == ["a", "b"]


def test_counter():
    res = json.loads(collections.Counter[str], '{"a": 1, "b": 2}')
    assert isinstance(res, collections.Counter)
    assert res["a"] == 1


def test_tuple():
    assert json.loads(Tuple[int, str], '[1, "s"]') == (1, "s")


def test_set():
    assert json.loads(Set[int], "[1, 2, 2, 3]") == {1, 2, 3}


def test_array():
    res = json.loads(array.array, "[1, 2, 3]")
    assert isinstance(res, array.array)
    assert res.tolist() == [1, 2, 3]

    res_f = json.loads(array.array, "[1.1, 2.2]")
    assert res_f.typecode == "d"


def test_union_fallback():
    # Force the complex fallback logic in _load_union
    res = json.loads(Union[int, str], "1")
    assert res == 1
    res2 = json.loads(Union[int, str], '"s"')
    assert res2 == "s"


def test_union_error():
    with pytest.raises(
        DeserializationError, match="Could not decode data into any of the types"
    ):
        json.loads(Union[int, bool], '"not a number or bool"')


def test_datetime():
    dt = datetime.datetime(2026, 1, 24, 20, 0)
    assert json.loads(datetime.datetime, f'"{dt.isoformat()}"') == dt


class Color(enum.Enum):
    RED = "red"
    BLUE = "blue"


def test_enum():
    assert json.loads(Color, '"red"') == Color.RED
    assert json.loads(Color, '"blue"') == Color.BLUE


def test_uuid():
    u = uuid.uuid4()
    assert json.loads(uuid.UUID, f'"{u}"') == u


def test_decimal():
    assert json.loads(Decimal, '"1.23"') == Decimal("1.23")
    assert json.loads(Decimal, "1.23") == Decimal("1.23")

    # Test direct Decimal (internal fallback)
    from lodum.handlers.stdlib import _load_decimal
    from lodum.core import BaseLoader

    class DirectLoader(BaseLoader):
        pass

    assert _load_decimal(Decimal, DirectLoader(Decimal("1.23"))) == Decimal("1.23")

    with pytest.raises(DeserializationError, match="Expected string, float or int"):
        _load_decimal(Decimal, DirectLoader([]))


def test_bytearray():
    encoded = "aGVsbG8="
    assert json.loads(bytearray, f'"{encoded}"') == bytearray(b"hello")
    p = Path("/tmp/test")
    # On Windows, Path("/tmp/test") becomes WindowsPath('/tmp/test')
    # but loading it from JSON might normalize it.
    # We compare as strings or normalized paths.
    assert json.loads(Path, f'"{p.as_posix()}"').as_posix() == p.as_posix()


def test_bytes():
    b = b"hello"
    # JSON handles bytes via base64 in lodum
    import base64

    encoded = base64.b64encode(b).decode("ascii")
    assert json.loads(bytes, f'"{encoded}"') == b
    assert json.loads(bytearray, f'"{encoded}"') == bytearray(b)


def test_load_any():
    assert json.loads(Any, '{"a": 1}') == {"a": 1}


def test_optional():
    assert json.loads(Optional[int], "null") is None
    assert json.loads(Optional[int], "1") == 1


@lodum
@dataclass
class Simple:
    x: int


def test_format_parity_schema():
    import lodum
    from lodum import yaml

    # Top-level schema generation (Primary API)
    s = lodum.schema(Simple)
    assert s["type"] == "object"
    assert "x" in s["properties"]

    # Format-specific schema generation (JSON/YAML only)
    for fmt in [json, yaml]:
        fs = fmt.schema(Simple)
        assert fs == s


def test_format_parity_bytes():
    from lodum import yaml, msgpack, cbor, bson, toml

    b_data = b"hello world"

    # YAML
    y_enc = yaml.dumps(b_data)
    assert yaml.loads(bytes, y_enc) == b_data

    # MsgPack
    m_enc = msgpack.dumps(b_data)
    assert msgpack.loads(bytes, m_enc) == b_data

    # CBOR
    c_enc = cbor.dumps(b_data)
    assert cbor.loads(bytes, c_enc) == b_data

    # BSON (requires dict wrap if top level is not dict, handled in dumps)
    b_enc = bson.dumps(b_data)
    assert bson.loads(bytes, b_enc) == b_data

    # TOML
    t_enc = toml.dumps({"data": b_data})
    assert toml.loads(Dict[str, bytes], t_enc)["data"] == b_data


def test_tagged_union_direct():
    # Force use of tagged union logic
    @lodum(tag="type")
    @dataclass
    class A:
        val: int

    @lodum(tag="type")
    @dataclass
    class B:
        val: str

    T = Union[A, B]
    res = json.loads(T, '{"type": "A", "val": 1}')
    assert isinstance(res, A)
    assert res.val == 1

    res2 = json.loads(T, '{"type": "B", "val": "s"}')
    assert isinstance(res2, B)
    assert res2.val == "s"


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
