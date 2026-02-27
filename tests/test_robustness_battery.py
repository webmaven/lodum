# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import enum
import pytest
import datetime
import uuid
import array
import collections
from dataclasses import dataclass
from pathlib import Path
from typing import List, Dict, Tuple, Set, Union, Optional, Any
from lodum import json, lodum
from lodum.exception import DeserializationError


@lodum
@dataclass
class RobustNode:
    value: int
    next_node: Optional["RobustNode"] = None


def test_error_datetime_invalid():
    with pytest.raises(DeserializationError, match="Invalid ISO datetime format"):
        json.loads(datetime.datetime, '"not-a-date"')


def test_error_uuid_invalid():
    with pytest.raises(DeserializationError, match="Invalid UUID format"):
        json.loads(uuid.UUID, '"not-a-uuid"')


def test_error_enum_empty():
    class RealEmpty(enum.Enum):
        pass

    with pytest.raises(DeserializationError, match="Cannot load into empty Enum"):
        json.loads(RealEmpty, '"anything"')


class Color(enum.Enum):
    RED = "red"
    BLUE = "blue"


@lodum
@dataclass
class Simple:
    x: int


def test_error_enum_invalid_value():
    with pytest.raises(DeserializationError, match="Invalid value for Enum"):
        json.loads(Color, '"not-a-color"')


def test_error_path_invalid():
    # Path loader expects string
    from lodum.handlers.stdlib import _load_path
    from lodum.core import BaseLoader

    with pytest.raises(DeserializationError, match="Expected str, got int"):
        _load_path(Path, BaseLoader(123))


def test_error_bytes_invalid():
    from lodum.handlers.stdlib import _load_bytes
    from lodum.core import BaseLoader

    with pytest.raises(
        DeserializationError, match="Expected bytes or base64 string: Expected bytes"
    ):
        _load_bytes(bytes, BaseLoader(123))


def test_error_bytearray_invalid():
    from lodum.handlers.stdlib import _load_bytearray
    from lodum.core import BaseLoader

    with pytest.raises(
        DeserializationError, match="Invalid bytearray data: Expected bytes"
    ):
        _load_bytearray(bytearray, BaseLoader(123))


def test_error_defaultdict_invalid():
    with pytest.raises(DeserializationError, match="Expected dict, got list"):
        json.loads(
            collections.defaultdict[str, int], "[1, 2, 3]"
        )  # list instead of dict


def test_error_ordered_dict_invalid():
    with pytest.raises(DeserializationError, match="Expected dict, got list"):
        json.loads(collections.OrderedDict[str, int], "[1, 2, 3]")


def test_error_counter_invalid():
    with pytest.raises(DeserializationError, match="Expected dict, got list"):
        json.loads(collections.Counter[str], "[1, 2, 3]")


def test_error_tuple_mismatch():
    with pytest.raises(DeserializationError, match="Tuple length mismatch"):
        json.loads(Tuple[int, int], "[1]")  # Too short


def test_error_set_unhashable():
    with pytest.raises(DeserializationError, match="elements must be hashable"):
        # JSON list of lists into a Set[List[int]]
        json.loads(Set[List[int]], "[[1], [2]]")


def test_error_array_invalid():
    with pytest.raises(DeserializationError, match="Failed to create array"):
        # array doesn't support strings in most typecodes
        json.loads(array.array, '["a", "b"]')


def test_union_priority_matrix():
    # 1. None -> type(None)
    assert json.loads(Union[int, None], "null") is None

    # 2. bool -> bool
    assert json.loads(Union[int, bool], "true") is True

    # 3. int -> int (over float)
    assert type(json.loads(Union[float, int], "1")) is int

    # 4. float -> float
    assert type(json.loads(Union[int, float], "1.1")) is float

    # 5. str -> datetime
    dt = datetime.datetime(2026, 1, 24)
    assert json.loads(Union[str, datetime.datetime], f'"{dt.isoformat()}"') == dt

    # 6. str -> Enum
    assert json.loads(Union[str, Color], '"red"') == Color.RED

    # 7. list -> list/tuple/set
    assert json.loads(Union[int, List[int]], "[1, 2]") == [1, 2]

    # 8. dict -> dict
    assert json.loads(Union[int, Dict[str, int]], '{"a": 1}') == {"a": 1}

    # 9. dict -> lodum_enabled
    @lodum
    @dataclass
    class SimpleModel:
        x: int

    res = json.loads(Union[dict, SimpleModel], '{"x": 1}')
    assert isinstance(res, SimpleModel)


def test_union_priority_enum_int():
    # int -> Enum
    class IntEnum(enum.Enum):
        A = 1

    assert json.loads(Union[str, IntEnum], "1") == IntEnum.A


def test_union_fallback_to_any():
    # Variant is Any -> should match anything with lowest priority
    assert json.loads(Union[int, Any], '"string"') == "string"


def test_dump_array_fallback():
    from lodum.handlers.collections import _dump_array
    from lodum.json import JsonDumper

    arr = array.array("i", [1, 2, 3])
    assert _dump_array(arr, JsonDumper(), 0, None) == [1, 2, 3]


def test_dump_enum_fallback():
    from lodum.handlers.stdlib import _dump_enum
    from lodum.json import JsonDumper

    assert _dump_enum(Color.RED, JsonDumper(), 0, None) == "red"
