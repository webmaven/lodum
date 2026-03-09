# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import pytest
import array
import datetime
from pathlib import Path
from lodum.exception import DeserializationError, SerializationError
from lodum.core import BaseLoader, BaseDumper


def test_load_dict_invalid_key_type():
    from lodum.handlers.collections import _load_dict
    from typing import Dict

    loader = BaseLoader({"1": 1})
    # This should fail because we expect int keys but JSON only supports string keys
    with pytest.raises(DeserializationError, match="keys must be strings"):
        _load_dict(Dict[int, int], loader)


def test_load_defaultdict_error():
    from lodum.handlers.collections import _load_defaultdict
    from typing import DefaultDict

    # Passing a list instead of a dict to _load_defaultdict
    loader = BaseLoader([1, 2, 3])
    with pytest.raises(DeserializationError, match="Failed to create defaultdict"):
        _load_defaultdict(DefaultDict[str, int], loader)


def test_load_ordered_dict_error():
    from lodum.handlers.collections import _load_ordered_dict
    from typing import OrderedDict

    loader = BaseLoader([1, 2, 3])
    with pytest.raises(DeserializationError, match="Failed to create OrderedDict"):
        _load_ordered_dict(OrderedDict[str, int], loader)


def test_load_counter_error():
    from lodum.handlers.collections import _load_counter
    from typing import Counter

    loader = BaseLoader([1, 2, 3])
    with pytest.raises(DeserializationError, match="Failed to create Counter"):
        _load_counter(Counter[str], loader)


def test_load_tuple_mismatch():
    from lodum.handlers.collections import _load_tuple
    from typing import Tuple

    loader = BaseLoader([1])
    with pytest.raises(DeserializationError, match="Tuple length mismatch"):
        _load_tuple(Tuple[int, int], loader)


def test_load_union_priority_cases():
    from lodum.handlers.collections import _load_union
    from typing import Union
    import enum

    class MyEnum(enum.Enum):
        A = 1
        B = "b"

    # Test priority for int in Union[int, float]
    loader = BaseLoader(1)
    res = _load_union(Union[int, float], loader)
    assert isinstance(res, int)

    # Test priority for float in Union[int, float]
    loader = BaseLoader(1.5)
    res = _load_union(Union[int, float], loader)
    assert isinstance(res, float)

    # Test priority for Enum (int is 90, Enum is 70)
    loader = BaseLoader(1)
    res = _load_union(Union[MyEnum, int], loader)
    assert res == 1

    # Test priority for datetime
    loader = BaseLoader("2025-01-01T00:00:00")
    res = _load_union(Union[datetime.datetime, str], loader)
    assert isinstance(res, datetime.datetime)


def test_load_array_typecodes():
    from lodum.handlers.collections import _load_array

    # float -> 'd'
    loader = BaseLoader([1.0, 2.0])
    res = _load_array(array.array, loader)
    assert res.typecode == "d"

    # int -> 'i'
    loader = BaseLoader([1, 2])
    res = _load_array(array.array, loader)
    assert res.typecode == "i"

    # Error case
    loader = BaseLoader(["not an int"])
    with pytest.raises(DeserializationError, match="Failed to create array"):
        _load_array(array.array, loader)


def test_internal_resolve_target_path():
    from lodum.internal import _resolve_target
    import os

    p = Path("test_target_internal.tmp")
    try:
        with _resolve_target(p) as f:
            f.write("test")
        assert p.read_text() == "test"
    finally:
        if p.exists():
            os.remove(p)


def test_dump_circular_container():
    from lodum.internal import dump

    d = {}
    d["self"] = d

    with pytest.raises(SerializationError, match="Circular reference detected"):
        dump(d, BaseDumper())


def test_get_dump_handler_inheritance():
    class MyDict(dict):
        pass

    from lodum.internal import _get_dump_handler

    # Should find the 'dict' handler for MyDict
    h = _get_dump_handler(MyDict)
    assert h is not None


def test_get_load_handler_inheritance():
    class MyDict(dict):
        pass

    from lodum.internal import _get_load_handler

    # Should find the 'dict' handler for MyDict
    h = _get_load_handler(MyDict)
    assert h is not None


def test_load_dict_key_error_internal():
    from typing import Dict
    import lodum

    # Testing the internal.py load_dict logic
    with pytest.raises(DeserializationError, match="keys must be strings"):
        lodum.fromdict(Dict[int, int], {"1": 1})
