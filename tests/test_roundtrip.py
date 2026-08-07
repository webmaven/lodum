# SPDX-FileCopyrightText: 2025-present Jules <jules@example.com>
#
# SPDX-License-Identifier: Apache-2.0
from lodum import json, lodum, yaml


@lodum
class RoundTripObject:
    def __init__(self, a: int, b: str):
        self.a = a
        self.b = b

    def __eq__(self, other):
        return (
            isinstance(other, RoundTripObject)
            and self.a == other.a
            and self.b == other.b
        )


def test_json_to_yaml_roundtrip():
    """
    Tests that an object can be encoded to JSON, decoded, then
    encoded to YAML, and finally decoded back to the original object.
    """
    instance = RoundTripObject(a=10, b="world")

    json_str = json.dumps(instance)
    from_json_instance = json.loads(RoundTripObject, json_str)

    yaml_str = yaml.dumps(from_json_instance)
    final_instance = yaml.loads(RoundTripObject, yaml_str)

    assert instance == final_instance


def test_yaml_to_json_roundtrip():
    """
    Tests that an object can be encoded to YAML, decoded, then
    encoded to JSON, and finally decoded back to the original object.
    """
    instance = RoundTripObject(a=10, b="world")

    yaml_str = yaml.dumps(instance)
    from_yaml_instance = yaml.loads(RoundTripObject, yaml_str)

    json_str = json.dumps(from_yaml_instance)
    final_instance = json.loads(RoundTripObject, json_str)

    assert instance == final_instance
