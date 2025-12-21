# SPDX-FileCopyrightText: 2025-present Jules <jules@example.com>
#
# SPDX-License-Identifier: MIT
from lodum.core import serializable
from lodum.json import to_json, from_json
from lodum.yaml import to_yaml, from_yaml

@serializable
class RoundTripObject:
    def __init__(self, a: int, b: str):
        self.a = a
        self.b = b

    def __eq__(self, other):
        return isinstance(other, RoundTripObject) and self.a == other.a and self.b == other.b

def test_json_to_yaml_roundtrip():
    """
    Tests that an object can be serialized to JSON, deserialized, then
    serialized to YAML, and finally deserialized back to the original object.
    """
    instance = RoundTripObject(a=10, b="world")

    json_str = to_json(instance)
    from_json_instance = from_json(RoundTripObject, json_str)

    yaml_str = to_yaml(from_json_instance)
    final_instance = from_yaml(RoundTripObject, yaml_str)

    assert instance == final_instance

def test_yaml_to_json_roundtrip():
    """
    Tests that an object can be serialized to YAML, deserialized, then
    serialized to JSON, and finally deserialized back to the original object.
    """
    instance = RoundTripObject(a=10, b="world")

    yaml_str = to_yaml(instance)
    from_yaml_instance = from_yaml(RoundTripObject, yaml_str)

    json_str = to_json(from_yaml_instance)
    final_instance = from_json(RoundTripObject, json_str)

    assert instance == final_instance
