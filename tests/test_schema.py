# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
from datetime import datetime
from enum import Enum

from lodum import field, json, lodum


class Color(Enum):
    RED = "red"
    GREEN = "green"


@lodum
class SubModel:
    def __init__(self, name: str):
        self.name = name


@lodum
class MainModel:
    def __init__(
        self,
        id: int,
        tags: list[str],
        metadata: dict[str, int],
        sub: SubModel,
        color: Color,
        optional_note: str | None = None,
        created: datetime = field(default_factory=datetime.now),
    ):
        self.id = id
        self.tags = tags
        self.metadata = metadata
        self.sub = sub
        self.color = color
        self.optional_note = optional_note
        self.created = created


def test_basic_schema():
    schema = json.schema(MainModel)

    assert schema["type"] == "object"
    assert schema["properties"]["id"]["type"] == "integer"
    assert schema["properties"]["tags"]["type"] == "array"
    assert schema["properties"]["tags"]["items"]["type"] == "string"
    assert schema["properties"]["metadata"]["type"] == "object"
    assert schema["properties"]["metadata"]["additionalProperties"]["type"] == "integer"
    assert schema["properties"]["sub"]["type"] == "object"
    assert schema["properties"]["sub"]["properties"]["name"]["type"] == "string"
    assert schema["properties"]["color"]["enum"] == ["red", "green"]
    assert schema["properties"]["created"]["type"] == "string"
    assert schema["properties"]["created"]["format"] == "date-time"

    # Required fields
    assert "id" in schema["required"]
    assert "tags" in schema["required"]
    assert "metadata" in schema["required"]
    assert "sub" in schema["required"]
    assert "color" in schema["required"]

    # Optional fields (those with defaults) should NOT be in required
    assert "optional_note" not in schema["required"]
    assert "created" not in schema["required"]


def test_union_schema():
    @lodum
    class UnionModel:
        def __init__(self, val: int | str):
            self.val = val

    schema = json.schema(UnionModel)
    assert "anyOf" in schema["properties"]["val"]
    types = [t["type"] for t in schema["properties"]["val"]["anyOf"]]
    assert "integer" in types
    assert "string" in types


def test_rename_schema():
    @lodum
    class RenameModel:
        def __init__(self, old_name: int = field(rename="new_name")):
            self.old_name = old_name

    schema = json.schema(RenameModel)
    assert "new_name" in schema["properties"]
    assert "old_name" not in schema["properties"]


def test_complex_nesting_schema():
    @lodum
    class Nested:
        def __init__(self, data: dict[str, list[int | None]]):
            self.data = data

    schema = json.schema(Nested)
    prop = schema["properties"]["data"]
    assert prop["type"] == "object"
    array_schema = prop["additionalProperties"]
    assert array_schema["type"] == "array"
    any_of = array_schema["items"]["anyOf"]
    types = [t["type"] for t in any_of]
    assert "integer" in types
    assert "null" in types
