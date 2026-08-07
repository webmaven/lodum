# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import io
import json as std_json
from typing import Optional

from lodum import json, lodum
from lodum.core import reset_context


@lodum
class Point:
    def __init__(self, x: int, y: int):
        self.x = x
        self.y = y


@lodum
class User:
    def __init__(self, id: int, name: str, points: list[Point]):
        self.id = id
        self.name = name
        self.points = points


def test_json_streaming_dump_basic():
    reset_context()
    obj = User(1, "Alice", [Point(1, 2), Point(3, 4)])

    # Normal dump
    json_str = json.dumps(obj)

    # Streaming dump
    stream = io.StringIO()
    json.dump(obj, stream)
    streaming_json_str = stream.getvalue()

    assert std_json.loads(streaming_json_str) == std_json.loads(json_str)

    # Roundtrip
    decoded = json.loads(User, streaming_json_str)
    assert decoded.id == 1
    assert decoded.name == "Alice"
    assert len(decoded.points) == 2
    assert decoded.points[0].x == 1
    assert decoded.points[1].y == 4


def test_json_streaming_dump_large():
    reset_context()
    points = [Point(i, i * 2) for i in range(1000)]
    obj = User(1, "Large User", points)

    stream = io.StringIO()
    json.dump(obj, stream)
    json_str = stream.getvalue()

    decoded = std_json.loads(json_str)
    assert decoded["id"] == 1
    assert len(decoded["points"]) == 1000
    assert decoded["points"][999]["x"] == 999


def test_json_streaming_dump_primitives():
    reset_context()
    data = {
        "int": 42,
        "str": "hello",
        "float": 3.14,
        "bool": True,
        "none": None,
        "list": [1, 2, 3],
        "dict": {"a": 1},
    }

    stream = io.StringIO()
    json.dump(data, stream)
    json_str = stream.getvalue()

    decoded = std_json.loads(json_str)
    assert decoded == data


def test_json_streaming_dump_circular():
    reset_context()

    @lodum
    class Node:
        def __init__(self, name: str, next: Optional["Node"] = None):
            self.name = name
            self.next = next

    a = Node("a")
    b = Node("b")
    a.next = b
    b.next = a

    stream = io.StringIO()
    import pytest

    from lodum.exception import SerializationError

    with pytest.raises(SerializationError, match="Circular reference detected"):
        json.dump(a, stream)


def test_json_streaming_dump_max_depth():
    reset_context()

    @lodum
    class Node:
        def __init__(self, child=None):
            self.child = child

    root = Node()
    curr = root
    for _ in range(101):  # Default max depth is 100
        curr.child = Node()
        curr = curr.child

    stream = io.StringIO()
    import pytest

    from lodum.exception import SerializationError

    with pytest.raises(SerializationError, match="Max recursion depth .* exceeded"):
        json.dump(root, stream)


def test_json_streaming_dumper_direct_calls():
    # Test methods that are usually called via orchestration but can be called directly
    import io

    from lodum.json import JsonStreamingDumper

    stream = io.StringIO()
    dumper = JsonStreamingDumper(stream)

    # Test dump_float
    dumper.dump_float(1.5)
    assert stream.getvalue() == "1.5"

    # Test dump_bool
    stream.truncate(0)
    stream.seek(0)
    dumper.dump_bool(True)
    assert stream.getvalue() == "true"

    # Test dump_bytes
    stream.truncate(0)
    stream.seek(0)
    dumper.dump_bytes(b"hello")
    assert stream.getvalue() == '"aGVsbG8="'

    # Test dump_list (direct call)
    stream.truncate(0)
    stream.seek(0)
    dumper.dump_list([1, 2])
    assert stream.getvalue() == "[1,2]"

    # Test dump_dict (direct call)
    stream.truncate(0)
    stream.seek(0)
    dumper.dump_dict({"a": 1})
    assert stream.getvalue() == '{"a":1}'
