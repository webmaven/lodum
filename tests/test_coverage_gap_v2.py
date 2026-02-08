# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import pytest
import collections
import array
import enum
from typing import Dict, Any, DefaultDict, Tuple, Set, Union, List, TypeVar
from lodum import lodum, json, fromdict
from lodum.exception import DeserializationError
from lodum.handlers.collections import (
    _load_dict,
    _load_defaultdict,
    _load_ordered_dict,
    _load_counter,
    _load_tuple,
    _load_set,
    _load_union,
    _load_array
)
from lodum.core import BaseLoader

def test_load_dict_key_type_error():
    """Target lines 50-54 in handlers/collections.py: key_type must be str or Any."""
    loader = BaseLoader({"1": "a"})
    with pytest.raises(DeserializationError, match="JSON/YAML object keys must be strings"):
        _load_dict(Dict[int, str], loader)

def test_load_defaultdict_error():
    """Target line 83 in handlers/collections.py: error formatting."""
    from lodum.handlers.collections import _load_defaultdict
    loader = BaseLoader("not a dict")
    with pytest.raises(DeserializationError, match="Failed to create defaultdict: Expected dict, got str"):
        _load_defaultdict(collections.defaultdict, loader)

def test_load_ordered_dict_error():
    """Target error handling in _load_ordered_dict."""
    from lodum.handlers.collections import _load_ordered_dict
    loader = BaseLoader("not a dict")
    with pytest.raises(DeserializationError, match="Failed to create OrderedDict"):
        _load_ordered_dict(collections.OrderedDict, loader)

def test_load_counter_error():
    """Target error handling in _load_counter."""
    from lodum.handlers.collections import _load_counter
    loader = BaseLoader("not a dict")
    with pytest.raises(DeserializationError, match="Failed to create Counter"):
        _load_counter(collections.Counter, loader)

def test_tuple_mismatch_integrated():
    """Target _load_tuple length mismatch through json.loads."""
    with pytest.raises(DeserializationError, match="Tuple length mismatch"):
        json.loads(Tuple[int, int], "[1, 2, 3]")

def test_load_union_tagged_union_depth_error():
    """Target line 331 in internal.py: depth error in load_tagged_union."""
    @lodum(tag="type")
    class A: pass
    
    T = Union[A, int]
    loader = BaseLoader({"type": "A"})
    from lodum.internal import _get_load_handler
    handler = _get_load_handler(T)
    
    from lodum.internal import DEFAULT_MAX_DEPTH
    with pytest.raises(DeserializationError, match="Max recursion depth"):
        handler(T, loader, path="", depth=DEFAULT_MAX_DEPTH + 1)

def test_internal_load_string_type():
    """Target internal.py:268 - string type to ForwardRef conversion."""
    from lodum.internal import load
    @lodum
    class CoverageGapSimple:
        def __init__(self, x: int): self.x = x
    
    # Passing "CoverageGapSimple" as a string type
    res = load("CoverageGapSimple", BaseLoader({"x": 1}))
    assert isinstance(res, CoverageGapSimple)
    assert res.x == 1

def test_internal_get_dump_handler_forward_ref():
    """Target internal.py:170-173 - ForwardRef in _get_dump_handler."""
    from typing import ForwardRef
    from lodum.internal import _get_dump_handler
    @lodum
    class Node:
        def __init__(self, val: int = 0):
            self.val = val
    
    handler = _get_dump_handler(ForwardRef("Node"))
    assert handler is not None

def test_internal_get_dump_handler_unresolvable_forward_ref():
    """Target internal.py:173 - fallback to dump for unresolvable ForwardRef."""
    from typing import ForwardRef
    from lodum.internal import _get_dump_handler, dump
    handler = _get_dump_handler(ForwardRef("UnknownClass"))
    assert handler == dump

def test_validator_base_not_implemented():
    """Target line 12 in validators.py."""
    from lodum.validators import Validator
    with pytest.raises(NotImplementedError):
        Validator()(1)

def test_length_validator_no_length():
    """Target line 38 in validators.py."""
    from lodum.validators import Length
    with pytest.raises(DeserializationError, match="has no length"):
        Length(min=1)(123)

def test_length_validator_max():
    """Target line 47 in validators.py."""
    from lodum.validators import Length
    with pytest.raises(DeserializationError, match="greater than maximum"):
        Length(max=2)([1, 2, 3])

def test_match_validator_not_str():
    """Target line 58 in validators.py."""
    from lodum.validators import Match
    with pytest.raises(DeserializationError, match="is not a string"):
        Match(".*")(123)

def test_base_loader_load_dict_error():
    """Target line 266 in core.py."""
    loader = BaseLoader([1, 2])
    with pytest.raises(DeserializationError, match="Expected dict, got list"):
        loader.load_dict()

def test_base_loader_get_dict_none():
    """Target line 272 in core.py."""
    loader = BaseLoader(123)
    assert loader.get_dict() is None

def test_base_loader_load_bytes_error():
    """Target line 286 in core.py."""
    loader = BaseLoader(123)
    with pytest.raises(DeserializationError, match="Expected bytes, got int"):
        loader.load_bytes()

def test_load_set_unhashable():
    """Target _load_set unhashable elements."""
    # List is unhashable
    loader = BaseLoader([[1], [2]])
    with pytest.raises(DeserializationError, match="elements must be hashable"):
        _load_set(Set[List[int]], loader)

class Color(enum.Enum):
    RED = 1
    GREEN = 2

def test_load_union_enum_priority():
    """Target enum priority in _load_union."""
    # Using str instead of int to ensure Color (70) has higher priority than str (-1) for an int input
    T = Union[Color, str]
    # 1 matches Color.RED
    res = fromdict(T, 1)
    assert res == Color.RED
    
    # 3 does not match Color, should fail as Color and then fail as str (or vice versa)
    # Actually if both fail it raises DeserializationError
    with pytest.raises(DeserializationError):
        fromdict(T, 3)

def test_load_array_float():
    """Target _load_array with float typecode."""
    # array.array is not subscriptable in 3.10, so we just use the class
    loader = BaseLoader([1.1, 2.2])
    res = _load_array(array.array, loader)
    assert isinstance(res, array.array)
    assert res.typecode == 'd'

def test_load_array_error():
    """Target _load_array error cases."""
    loader = BaseLoader(["not an int"])
    with pytest.raises(DeserializationError):
        _load_array(array.array, loader)

def test_internal_load_typevar():
    """Target internal.py:268 - TypeVar loading."""
    T = TypeVar("T")
    loader = BaseLoader(123)
    from lodum.internal import load
    assert load(T, loader) == 123

def test_internal_unresolvable_forward_ref():
    """Target internal.py:279 - Unresolvable ForwardRef."""
    from typing import ForwardRef
    from lodum.internal import _get_load_handler
    with pytest.raises(DeserializationError, match="Cannot resolve ForwardRef"):
        _get_load_handler(ForwardRef("NonExistentClass"))

def test_internal_load_optional():
    """Target internal.py:285 - _load_optional."""
    from typing import Optional
    from lodum.internal import load
    loader = BaseLoader(None)
    assert load(Optional[int], loader) is None
    
    loader = BaseLoader(123)
    assert load(Optional[int], loader) == 123

def test_internal_array_deserialization_error():
    """Target internal.py:331 - array creation error in load_list."""
    # Use array.array directly
    T = array.array
    loader = BaseLoader(["invalid"])
    from lodum.internal import load
    with pytest.raises(DeserializationError, match="Failed to create array"):
        load(T, loader)
