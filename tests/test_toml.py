# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
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
    assert toml.dumps({"a": 1}) == 'a = 1\n'
    assert toml.dumps({"s": "hello"}) == 's = "hello"\n'
    assert toml.dumps({"f": 3.14}) == 'f = 3.14\n'
    assert toml.dumps({"b": True}) == 'b = true\n'

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
