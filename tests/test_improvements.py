# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import uuid
from decimal import Decimal
from pathlib import Path

import pytest

from lodum import json, lodum
from lodum.exception import DeserializationError


@lodum
class AllTypes:
    def __init__(self, u: uuid.UUID, d: Decimal, p: Path):
        self.u = u
        self.d = d
        self.p = p


def test_new_types_roundtrip():
    u = uuid.uuid4()
    d = Decimal("12.34")
    p = Path("/tmp/test.txt")

    obj = AllTypes(u=u, d=d, p=p)
    json_str = json.dumps(obj)

    loaded = json.loads(AllTypes, json_str)
    assert loaded.u == u
    assert loaded.d == d
    assert loaded.p == p


@lodum
class Nested:
    def __init__(self, name: str, value: int):
        self.name = name
        self.value = value


@lodum
class Root:
    def __init__(self, nested: Nested, items: list[int]):
        self.nested = nested
        self.items = items


def test_path_reporting():
    # Invalid type in nested object
    data = '{"nested": {"name": "test", "value": "not_an_int"}, "items": [1, 2, 3]}'
    with pytest.raises(DeserializationError) as excinfo:
        json.loads(Root, data)
    assert "nested.value" in str(excinfo.value)

    # Invalid type in list
    data = '{"nested": {"name": "test", "value": 123}, "items": [1, "two", 3]}'
    with pytest.raises(DeserializationError) as excinfo:
        json.loads(Root, data)
    assert "items[1]" in str(excinfo.value)


@lodum
class DeeplyNested:
    def __init__(self, root: Root):
        self.root = root


def test_deep_path_reporting():
    data = '{"root": {"nested": {"name": "test", "value": "fail"}, "items": []}}'
    with pytest.raises(DeserializationError) as excinfo:
        json.loads(DeeplyNested, data)
    assert "root.nested.value" in str(excinfo.value)


def test_schema_new_types():
    schema = json.schema(AllTypes)
    assert schema["properties"]["u"]["format"] == "uuid"
    assert schema["properties"]["d"]["type"] == "string"
    assert schema["properties"]["p"]["type"] == "string"
