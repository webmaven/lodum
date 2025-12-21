# SPDX-FileCopyrightText: 2025-present Jules <jules@example.com>
#
# SPDX-License-Identifier: MIT
import pickle
import pytest
import os

from typing import Any, Optional, Union, TypeVar
from lodum.core import serializable
from lodum.exception import SerializationError
from lodum.pickle import to_pickle, from_pickle

# --- Test Data ---

@serializable
class Simple:
    def __init__(self, a: int, b: str):
        self.a = a
        self.b = b

    def __eq__(self, other):
        return isinstance(other, Simple) and self.a == other.a and self.b == other.b

class NotSerializable:
    def __init__(self, message: str):
        self.message = message

# A classic malicious pickle payload that tries to run `os.system('echo malicious')`
MALICIOUS_PAYLOAD = b"c" + b"os\nsystem\n(S'echo malicious'\ntR."


@serializable
class TypingObject:
    def __init__(
        self,
        optional_field: Optional[int],
        union_field: Union[str, bool],
        any_field: Any,
    ):
        self.optional_field = optional_field
        self.union_field = union_field
        self.any_field = any_field
    def __eq__(self, o):
        return isinstance(o, TypingObject) and self.optional_field == o.optional_field and self.union_field == o.union_field and self.any_field == o.any_field


def test_pickle_typing_support():
    """Tests that `typing` module types are correctly handled."""
    instance = TypingObject(optional_field=10, union_field="hello", any_field=[1, 2, 3])
    pickled_data = to_pickle(instance)
    result = from_pickle(TypingObject, pickled_data)
    assert result == instance

    instance = TypingObject(optional_field=None, union_field=True, any_field={"a": "b"})
    pickled_data = to_pickle(instance)
    result = from_pickle(TypingObject, pickled_data)
    assert result == instance

# --- Test Cases ---

def test_pickle_roundtrip_simple_object():
    """Tests that a simple serializable object can be pickled and unpickled."""
    instance = Simple(a=42, b="hello")

    pickled_data = to_pickle(instance)
    unpickled_instance = from_pickle(Simple, pickled_data)

    assert instance == unpickled_instance

def test_to_pickle_fails_on_non_serializable_object():
    """
    Tests that `to_pickle` raises a TypeError when trying to serialize
    an object not marked with @serializable.
    """
    instance = NotSerializable("this should not be pickled")

    with pytest.raises(SerializationError) as excinfo:
        to_pickle(instance)

    assert "Object of type NotSerializable is not serializable" in str(excinfo.value)

def test_from_pickle_fails_on_non_serializable_object():
    """
    Tests that `from_pickle` raises an UnpicklingError when it encounters
    a type that is not marked with @serializable in the pickle data.
    """
    # We use the standard pickle.dumps to bypass our safe `to_pickle` check
    # and create a pickle with a forbidden type.
    instance = NotSerializable("this is a dangerous pickle")
    malicious_data = pickle.dumps(instance)

    with pytest.raises(pickle.UnpicklingError) as excinfo:
        from_pickle(NotSerializable, malicious_data)

    assert "Attempted to unpickle a non-serializable type" in str(excinfo.value)

def test_from_pickle_blocks_malicious_payload():
    """
    Tests that the SafeUnpickler correctly blocks a known-malicious pickle
    payload that attempts to execute arbitrary code.
    """
    with pytest.raises(pickle.UnpicklingError) as excinfo:
        from_pickle(dict, MALICIOUS_PAYLOAD) # The class doesn't matter here

    assert "Unsafe module 'os' is forbidden" in str(excinfo.value)

@serializable
class Nested:
    def __init__(self, simple: Simple, c: bool):
        self.simple = simple
        self.c = c

    def __eq__(self, other):
        return isinstance(other, Nested) and self.simple == other.simple and self.c == other.c

def test_pickle_roundtrip_nested_object():
    """Tests that a nested serializable object can be pickled and unpickled."""
    instance = Nested(simple=Simple(a=1, b="nested"), c=True)

    pickled_data = to_pickle(instance)
    unpickled_instance = from_pickle(Nested, pickled_data)

    assert instance == unpickled_instance

def test_to_pickle_fails_on_nested_non_serializable_object():
    """
    Tests that `to_pickle` fails if a nested object is not serializable.
    """
    @serializable
    class Container:
        def __init__(self, data: NotSerializable):
            self.data = data
        def __eq__(self, o):
            return isinstance(o, Container) and self.data == o.data

    instance = Container(data=NotSerializable("should fail"))

    with pytest.raises(SerializationError):
        to_pickle(instance)
