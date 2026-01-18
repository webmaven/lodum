# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
from typing import List, Dict, Optional, Union
from enum import Enum
from datetime import datetime
from lodum import lodum, field, json


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
        tags: List[str],
        metadata: Dict[str, int],
        sub: SubModel,
        color: Color,
        optional_note: Optional[str] = None,
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
        def __init__(self, val: Union[int, str]):
            self.val = val

    schema = json.schema(UnionModel)
    assert "anyOf" in schema["properties"]["val"]
    types = [t["type"] for t in schema["properties"]["val"]["anyOf"]]
    assert "integer" in types
    assert "string" in types
