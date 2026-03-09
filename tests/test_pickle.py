# SPDX-FileCopyrightText: 2025-present Jules <jules@example.com>
#
# SPDX-License-Identifier: Apache-2.0
import pickle
import pytest

from typing import Any, Optional, Union
from lodum import lodum, pickle as lodum_pickle
from lodum.exception import SerializationError, DeserializationError

# --- Test Data ---


@lodum
class Simple:
    def __init__(self, a: int, b: str):
        self.a = a
        self.b = b

    def __eq__(self, other):
        return isinstance(other, Simple) and self.a == other.a and self.b == other.b


def test_pickle_load_type_mismatch():
    """Tests that DeserializationError is raised when loaded type doesn't match expected type."""
    instance = Simple(a=1, b="b")
    data = lodum_pickle.dumps(instance)

    with pytest.raises(DeserializationError) as excinfo:
        # Try to load a Simple object as a Nested object
        lodum_pickle.loads(Nested, data)

    assert "Deserialized object is of type Simple, but expected Nested" in str(
        excinfo.value
    )


class NotSerializable:
    def __init__(self, message: str):
        self.message = message


# A classic malicious pickle payload that tries to run `os.system('echo malicious')`
MALICIOUS_PAYLOAD = b"c" + b"os\nsystem\n(S'echo malicious'\ntR."


@lodum
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
        return (
            isinstance(o, TypingObject)
            and self.optional_field == o.optional_field
            and self.union_field == o.union_field
            and self.any_field == o.any_field
        )


def test_pickle_typing_support():
    """Tests that `typing` module types are correctly handled."""
    instance = TypingObject(optional_field=10, union_field="hello", any_field=[1, 2, 3])
    pickled_data = lodum_pickle.dumps(instance)
    result = lodum_pickle.loads(TypingObject, pickled_data)
    assert result == instance

    instance = TypingObject(optional_field=None, union_field=True, any_field={"a": "b"})
    pickled_data = lodum_pickle.dumps(instance)
    result = lodum_pickle.loads(TypingObject, pickled_data)
    assert result == instance


# --- Test Cases ---


def test_pickle_roundtrip_simple_object():
    """Tests that a simple lodum-enabled object can be encoded and decoded with pickle."""
    instance = Simple(a=42, b="hello")

    pickled_data = lodum_pickle.dumps(instance)
    unpickled_instance = lodum_pickle.loads(Simple, pickled_data)

    assert instance == unpickled_instance


def test_dumps_pickle_fails_on_non_lodum_object():
    """
    Tests that `lodum_pickle.dumps` raises a SerializationError when trying to encode
    an object not marked with @lodum.
    """
    instance = NotSerializable("this should not be pickled")

    with pytest.raises(SerializationError) as excinfo:
        lodum_pickle.dumps(instance)

    assert "Object of type NotSerializable is not lodum-enabled" in str(excinfo.value)


def test_loads_pickle_fails_on_non_lodum_object():
    """
    Tests that `lodum_pickle.loads` raises an UnpicklingError when it encounters
    a type that is not marked with @lodum in the pickle data.
    """
    # We use the standard pickle.dumps to bypass our safe `lodum_pickle.dumps` check
    # and create a pickle with a forbidden type.
    instance = NotSerializable("this is a dangerous pickle")
    malicious_data = pickle.dumps(instance)

    with pytest.raises(DeserializationError) as excinfo:
        lodum_pickle.loads(NotSerializable, malicious_data)

    assert "Attempted to unpickle a non-lodum type" in str(excinfo.value)


def test_loads_pickle_blocks_malicious_payload():
    """
    Tests that the SafeUnpickler correctly blocks a known-malicious pickle
    payload that attempts to execute arbitrary code.
    """
    with pytest.raises(DeserializationError) as excinfo:
        lodum_pickle.loads(dict, MALICIOUS_PAYLOAD)  # The class doesn't matter here

    assert "Unsafe module 'os' is forbidden" in str(excinfo.value)


@lodum
class Nested:
    def __init__(self, simple: Simple, c: bool):
        self.simple = simple
        self.c = c

    def __eq__(self, other):
        return (
            isinstance(other, Nested)
            and self.simple == other.simple
            and self.c == other.c
        )


def test_pickle_roundtrip_nested_object():
    """Tests that a nested lodum-enabled object can be encoded and decoded with pickle."""
    instance = Nested(simple=Simple(a=1, b="nested"), c=True)

    pickled_data = lodum_pickle.dumps(instance)
    unpickled_instance = lodum_pickle.loads(Nested, pickled_data)

    assert instance == unpickled_instance


def test_dumps_pickle_fails_on_nested_non_lodum_object():
    """
    Tests that `lodum_pickle.dumps` fails if a nested object is not lodum-enabled.
    """

    @lodum
    class Container:
        def __init__(self, data: NotSerializable):
            self.data = data

        def __eq__(self, o):
            return isinstance(o, Container) and self.data == o.data

    instance = Container(data=NotSerializable("should fail"))

    with pytest.raises(SerializationError):
        lodum_pickle.dumps(instance)
