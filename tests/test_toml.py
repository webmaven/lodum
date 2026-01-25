# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
from typing import Any, Dict
import pytest
from lodum import lodum, toml
from lodum.exception import DeserializationError


@lodum
class Simple:
    def __init__(self, a: int, b: str):
        self.a = a
        self.b = b


@lodum
class Config:
    def __init__(self, title: str, count: int, enabled: bool):
        self.title = title
        self.count = count
        self.enabled = enabled


@lodum
class Nested:
    def __init__(self, name: str, simple: Simple):
        self.name = name
        self.simple = simple


def test_toml_primitives():
    assert toml.dumps({"a": 1}) == "a = 1\n"
    assert toml.dumps({"s": "hello"}) == 's = "hello"\n'
    assert toml.dumps({"f": 3.14}) == "f = 3.14\n"
    assert toml.dumps({"b": True}) == "b = true\n"


def test_toml_serialize_class():
    instance = Simple(a=42, b="universe")
    assert toml.dumps(instance) == 'a = 42\nb = "universe"\n'


def test_toml_deserialize_class():
    toml_str = 'a = 10\nb = "world"\n'
    instance = toml.loads(Simple, toml_str)
    assert instance.a == 10
    assert instance.b == "world"


def test_toml_serialize_nested():
    instance = Nested(name="Outer", simple=Simple(a=5, b="inner"))
    expected = 'name = "Outer"\n\n[simple]\na = 5\nb = "inner"\n'
    assert toml.dumps(instance) == expected


def test_toml_deserialize_nested():
    toml_str = 'name = "Outer"\n\n[simple]\na = 5\nb = "inner"\n'
    instance = toml.loads(Nested, toml_str)
    assert instance.name == "Outer"
    assert instance.simple.a == 5
    assert instance.simple.b == "inner"


def test_toml_full_config():
    toml_str = """
title = "My App"
count = 100
enabled = true
"""
    config = toml.loads(Config, toml_str)
    assert config.title == "My App"
    assert config.count == 100
    assert config.enabled is True


def test_toml_decode_error():
    with pytest.raises(DeserializationError) as excinfo:
        toml.loads(Simple, "this is not toml")
    assert "Failed to parse TOML" in str(excinfo.value)


def test_toml_generic_types():
    from typing import Dict, List

    toml_str = "items = [1, 2, 3]\n"
    data = toml.loads(Dict[str, List[int]], toml_str)
    assert data == {"items": [1, 2, 3]}


def test_toml_generic_all_primitives():
    from typing import Dict

    toml_str = 'f = 1.1\nb = true\nby = "Ynl0ZXM="\n'
    # Use load() directly to hit non-raw paths for bytes specifically if needed,
    # but loads() with explicit types should also work.
    data = toml.loads(Dict[str, Any], toml_str)
    assert data["f"] == 1.1
    assert data["b"] is True

    # Test explicit float and bool in generic dict
    data2 = toml.loads(Dict[str, float], "f = 1.1\n")
    assert data2["f"] == 1.1
    data3 = toml.loads(Dict[str, bool], "b = true\n")
    assert data3["b"] is True


def test_toml_dump_bytes():
    data = {"by": b"hello"}
    res = toml.dumps(data)
    assert 'by = "aGVsbG8="' in res


def test_toml_load_bytes():
    from typing import Dict

    toml_str = 'by = "aGVsbG8="'
    data = toml.loads(Dict[str, bytes], toml_str)
    assert data["by"] == b"hello"


def test_toml_loads_max_size():
    """Tests that max_size is enforced in loads."""
    with pytest.raises(DeserializationError, match="exceeds maximum allowed"):
        toml.loads(Dict[str, int], "a = 1", max_size=1)
