# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
from typing import Optional

import pytest

from lodum import json, lodum
from lodum.exception import DeserializationError, SerializationError
from lodum.internal import DEFAULT_MAX_DEPTH, dump, load


def test_resolve_forward_ref_gap():
    """Target the _resolve_forward_ref logic in analyzer.py and internal.py."""

    @lodum
    class Node:
        def __init__(self, next_node: Optional["Node"] = None):
            self.next_node = next_node

    # The AST compiler usually handles this, but we can force it
    # by calling _get_load_handler with a ForwardRef string.
    from typing import ForwardRef

    from lodum.internal import _get_load_handler

    handler = _get_load_handler(ForwardRef("Node"))
    assert handler is not None


def test_inheritance_handler_lookup():
    """Target the inheritance lookup loop in _get_dump_handler and _get_load_handler."""

    class MyDict(dict):
        pass

    # MyDict is not @lodum enabled, but its parent 'dict' is registered.
    # This should trigger the loop: for super_t, h_obj in ctx.registry._handlers.items()
    data = MyDict({"a": 1})
    res = json.dumps(data)
    assert res == '{"a": 1}'

    # Same for loading
    decoded = json.loads(MyDict, '{"b": 2}')
    assert isinstance(decoded, MyDict)
    assert decoded["b"] == 2


def test_primitive_dump_fallback():
    """Target the fallback _dump_primitive branches in base.py."""
    from lodum.handlers.base import _dump_primitive
    from lodum.json import JsonDumper

    dumper = JsonDumper()
    assert _dump_primitive(True, dumper, 0, None) is True
    assert _dump_primitive(123, dumper, 0, None) == 123
    assert _dump_primitive("s", dumper, 0, None) == "s"
    assert _dump_primitive(1.1, dumper, 0, None) == 1.1
    assert _dump_primitive(None, dumper, 0, None) is None

    with pytest.raises(SerializationError, match="Unsupported primitive type"):
        _dump_primitive(complex(1, 2), dumper, 0, None)


def test_max_depth_errors():
    """Ensure max depth errors are raised correctly in load and dump."""

    @lodum
    class Deep:
        def __init__(self, child: Optional["Deep"] = None):
            self.child = child

    # Manually trigger depth error by passing a high depth
    with pytest.raises(SerializationError, match="Max recursion depth"):
        dump(Deep(), None, depth=DEFAULT_MAX_DEPTH + 1)

    with pytest.raises(DeserializationError, match="Max recursion depth"):
        load(Deep, None, depth=DEFAULT_MAX_DEPTH + 1)


def test_union_priority_logic():
    """Target the complex priority-based scoring in _load_union."""
    import datetime
    from typing import Union

    # Union[datetime, str] -> datetime should have higher priority for an ISO string
    T = Union[datetime.datetime, str]
    val = "2026-01-24T20:00:00"
    res = json.loads(T, f'"{val}"')
    assert isinstance(res, datetime.datetime)

    # Union[int, float] -> int should have higher priority for an integer
    T2 = Union[float, int]
    assert type(json.loads(T2, "1")) is int
    assert type(json.loads(T2, "1.1")) is float
