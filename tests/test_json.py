# SPDX-FileCopyrightText: 2025-present Jules <jules@example.com>
#
# SPDX-License-Identifier: MIT
from typing import Any, Generic, List, Optional, Set, Tuple, TypeVar, Union
import pytest
from datetime import datetime
from enum import Enum

from lodum import lodum, field, json
from lodum.exception import DeserializationError

# --- Test Data Structures ---

@lodum
class Simple:
    def __init__(self, a: int, b: str):
        self.a = a
        self.b = b

@lodum
class Nested:
    def __init__(self, simple: Simple, c: bool):
        self.simple = simple
        self.c = c

class UserRole(Enum):
    ADMIN = "admin"
    USER = "user"
    GUEST = "guest"

@lodum
class ComplexObject:
    def __init__(self, created_at: datetime, role: UserRole, permissions: Set[str]):
        self.created_at = created_at
        self.role = role
        self.permissions = permissions

@lodum
class TypingObject:
    def __init__(
        self,
        optional_field: Optional[int],
        union_field: Union[str, bool, UserRole],
        any_field: Any,
    ):
        self.optional_field = optional_field
        self.union_field = union_field
        self.any_field = any_field

T = TypeVar("T")

@lodum
class GenericObject(Generic[T]):
    def __init__(self, value: T):
        self.value = value

@lodum
class CustomizedUser:
    def __init__(
        self,
        full_name: str,
        user_id: int = field(rename="id", default=0),
        password_hash: str = field(skip_serializing=True, default=""),
        prefs: dict = field(default_factory=dict),
        company: str = field(default="Pyserde Inc.")
    ):
        self.user_id = user_id
        self.full_name = full_name
        self.password_hash = password_hash
        self.prefs = prefs
        self.company = company

# --- Test Cases ---

def test_serialize_primitives():
    """Tests encoding of basic primitive types."""
    assert json.dumps(123) == "123"
    assert json.dumps("hello") == '"hello"'
    assert json.dumps(3.14) == "3.14"
    assert json.dumps(True) == "true"
    assert json.dumps(None) == "null"

def test_deserialize_primitives():
    """Tests decoding of basic primitive types."""
    assert json.loads(int, "123") == 123
    assert json.loads(str, '"hello"') == "hello"
    assert json.loads(float, "3.14") == 3.14
    assert json.loads(bool, "true") is True
    assert json.loads(type(None), "null") is None

def test_serialize_simple_class():
    """Tests encoding of a simple user-defined class."""
    instance = Simple(a=10, b="world")
    expected_json = '{"a": 10, "b": "world"}'
    assert json.dumps(instance) == expected_json

def test_deserialize_simple_class():
    """Tests decoding of a simple user-defined class."""
    json_string = '{"a": 10, "b": "world"}'
    instance = json.loads(Simple, json_string)
    assert isinstance(instance, Simple)
    assert instance.a == 10
    assert instance.b == "world"

def test_serialize_nested_class():
    """Tests encoding of a nested user-defined class."""
    nested_instance = Nested(simple=Simple(a=5, b="test"), c=False)
    expected_json = '{"simple": {"a": 5, "b": "test"}, "c": false}'
    assert json.dumps(nested_instance) == expected_json

def test_deserialize_nested_class():
    """Tests decoding of a nested user-defined class."""
    json_string = '{"simple": {"a": 5, "b": "test"}, "c": false}'
    instance = json.loads(Nested, json_string)
    assert isinstance(instance, Nested)
    assert isinstance(instance.simple, Simple)
    assert instance.simple.a == 5
    assert instance.simple.b == "test"
    assert instance.c is False

def test_serialize_list_of_objects():
    """Tests encoding of a list containing user-defined objects."""
    obj_list = [Simple(a=1, b="one"), Simple(a=2, b="two")]
    expected_json = '[{"a": 1, "b": "one"}, {"a": 2, "b": "two"}]'
    assert json.dumps(obj_list) == expected_json

def test_deserialize_list_of_objects():
    """Tests decoding of a list containing user-defined objects."""
    json_string = '[{"a": 1, "b": "one"}, {"a": 2, "b": "two"}]'
    # Note: The type hint List[Simple] is crucial here.
    obj_list = json.loads(List[Simple], json_string)
    assert isinstance(obj_list, list)
    assert len(obj_list) == 2
    assert isinstance(obj_list[0], Simple)
    assert obj_list[0].a == 1
    assert obj_list[0].b == "one"
    assert obj_list[1].a == 2
    assert obj_list[1].b == "two"

def test_deserialization_missing_field_raises_error():
    """Tests that decoding an object with a missing field raises an error."""
    json_string = '{"a": 10}' # Missing field 'b' for Simple class
    with pytest.raises(DeserializationError) as exc_info:
        json.loads(Simple, json_string)
    assert "Missing required field 'b' for class Simple" in str(exc_info.value)

def test_datetime_serialization():
    """Tests encoding of datetime objects."""
    dt = datetime(2025, 11, 21, 10, 30, 0)
    assert json.dumps(dt) == '"2025-11-21T10:30:00"'

def test_datetime_deserialization():
    """Tests decoding of datetime objects."""
    dt_str = '"2025-11-21T10:30:00"'
    dt = json.loads(datetime, dt_str)
    assert dt == datetime(2025, 11, 21, 10, 30, 0)

def test_enum_serialization():
    """Tests encoding of Enum members."""
    assert json.dumps(UserRole.ADMIN) == '"admin"'
    assert json.dumps(UserRole.USER) == '"user"'

def test_enum_deserialization():
    """Tests decoding of Enum members."""
    assert json.loads(UserRole, '"admin"') == UserRole.ADMIN
    assert json.loads(UserRole, '"user"') == UserRole.USER

def test_tuple_serialization():
    """Tests encoding of tuples."""
    assert json.dumps((1, "a", True)) == '[1, "a", true]'

def test_tuple_deserialization():
    """Tests decoding of tuples."""
    result = json.loads(Tuple[int, str, bool], '[1, "a", true]')
    assert isinstance(result, tuple)
    assert result == (1, "a", True)

def test_set_serialization():
    """Tests encoding of sets."""
    # Note: set order is not guaranteed, so we test the elements.
    # Use `2` instead of `1` to avoid hash collision with `True`.
    result = json.dumps({2, "a", True})
    assert '"a"' in result
    assert '2' in result
    assert 'true' in result

def test_set_deserialization():
    """Tests decoding of sets."""
    result = json.loads(Set[str], '["a", "b", "c"]')
    assert isinstance(result, set)
    assert result == {"a", "b", "c"}

def test_nested_new_types_serialization():
    """Tests encoding of an object containing the new types."""
    dt = datetime(2025, 1, 1)
    instance = ComplexObject(created_at=dt, role=UserRole.ADMIN, permissions={"read", "write"})

    json_str = json.dumps(instance)

    assert '"created_at": "2025-01-01T00:00:00"' in json_str
    assert '"role": "admin"' in json_str
    assert '"permissions":' in json_str
    assert '"read"' in json_str
    assert '"write"' in json_str

def test_nested_new_types_deserialization():
    """Tests decoding of an object containing the new types."""
    json_str = '{"created_at": "2025-01-01T00:00:00", "role": "admin", "permissions": ["read", "write"]}'

    instance = json.loads(ComplexObject, json_str)

    assert isinstance(instance, ComplexObject)
    assert instance.created_at == datetime(2025, 1, 1)
    assert instance.role == UserRole.ADMIN
    assert instance.permissions == {"read", "write"}

# --- Tests for Typing Module ---
def test_optional_field():
    """Tests that Optional fields are correctly decoded."""
    # Test with the value present
    instance = json.loads(TypingObject, '{"optional_field": 10, "union_field": "a", "any_field": null}')
    assert instance.optional_field == 10

    # Test with the value missing (should be None)
    instance = json.loads(TypingObject, '{"optional_field": null, "union_field": "a", "any_field": null}')
    assert instance.optional_field is None

def test_union_field():
    """Tests that Union fields are correctly decoded."""
    # Test with a string value
    instance = json.loads(TypingObject, '{"optional_field": null, "union_field": "hello", "any_field": null}')
    assert instance.union_field == "hello"

    # Test with a boolean value
    instance = json.loads(TypingObject, '{"optional_field": null, "union_field": true, "any_field": null}')
    assert instance.union_field is True

    # Test with an Enum value
    instance = json.loads(TypingObject, '{"optional_field": null, "union_field": "admin", "any_field": null}')
    assert instance.union_field == UserRole.ADMIN

def test_any_field():
    """Tests that Any fields are correctly decoded."""
    # Test with a string
    instance = json.loads(TypingObject, '{"optional_field": null, "union_field": "a", "any_field": "a string"}')
    assert instance.any_field == "a string"

    # Test with a list
    instance = json.loads(TypingObject, '{"optional_field": null, "union_field": "a", "any_field": [1, 2, 3]}')
    assert instance.any_field == [1, 2, 3]

def test_typevar_field():
    """Tests that TypeVar fields are correctly decoded."""
    instance = json.loads(GenericObject[int], '{"value": 10}')
    assert instance.value == 10

    instance = json.loads(GenericObject[str], '{"value": "hello"}')
    assert instance.value == "hello"

# --- Tests for Field Customizations ---
def test_field_rename():
    """Tests that the `rename` option works for both encoding and decoding."""
    instance = CustomizedUser(user_id=123, full_name="Jules", password_hash="secret")

    # encoding should use the new name "id"
    json_str = json.dumps(instance)
    assert '"id": 123' in json_str
    assert '"user_id"' not in json_str

    # decoding should look for the new name "id"
    json_data = '{"id": 456, "full_name": "Test", "password_hash": "abc"}'
    deserialized_instance = json.loads(CustomizedUser, json_data)
    assert deserialized_instance.user_id == 456

def test_field_skip_serializing():
    """Tests that `skip_serializing` prevents a field from being in the output."""
    instance = CustomizedUser(user_id=1, full_name="J", password_hash="should-not-be-serialized")
    json_str = json.dumps(instance)
    assert "password_hash" not in json_str

def test_field_default():
    """Tests that a `default` value is used when a field is missing."""
    # `company` is missing from the JSON input
    json_data = '{"id": 1, "full_name": "J", "password_hash": "abc"}'
    instance = json.loads(CustomizedUser, json_data)

    # The default value should be applied
    assert instance.company == "Pyserde Inc."

def test_field_default_factory():
    """Tests that a `default_factory` is used when a field is missing."""
    # `prefs` is missing from the JSON input
    json_data = '{"id": 1, "full_name": "J", "password_hash": "abc"}'
    instance = json.loads(CustomizedUser, json_data)

    # The default factory should have been called
    assert instance.prefs == {}

    # Ensure it's a new object each time
    instance2 = json.loads(CustomizedUser, json_data)
    assert instance.prefs is not instance2.prefs

def test_custom_serializer_and_deserializer():
    """
    Tests that custom dumper and loader functions are correctly used.
    """
    # Encode a datetime object to a Unix timestamp
    def serialize_dt(dt: datetime) -> float:
        return dt.timestamp()

    # Decode a Unix timestamp to a datetime object
    def deserialize_dt(ts: float) -> datetime:
        return datetime.fromtimestamp(ts)

    @lodum
    class Event:
        def __init__(
            self,
            name: str,
            timestamp: datetime = field(
                serializer=serialize_dt,
                deserializer=deserialize_dt,
            ),
        ):
            self.name = name
            self.timestamp = timestamp

    # Test encoding
    dt = datetime(2025, 1, 1, 12, 0, 0)
    event = Event(name="New Year", timestamp=dt)
    json_str = json.dumps(event)
    assert f'"timestamp": {dt.timestamp()}' in json_str

    # Test decoding
    json_data = f'{{"name": "Another Event", "timestamp": {dt.timestamp()}}}'
    event = json.loads(Event, json_data)
    assert event.timestamp == dt

    # This test is more about ensuring the caching doesn't break anything.
    # We decode the same type of object multiple times.
    users = [Simple(20 + i, f"User {i}") for i in range(5)]
    json_outputs = [json.dumps(u) for u in users]
    assert len(json_outputs) == 5
    assert json_outputs[0] == '{"a": 20, "b": "User 0"}'

    json_str = '{"a": "this should be an int", "b": "thirty"}'
    with pytest.raises(DeserializationError) as exc_info:
        json.loads(Simple, json_str)
    assert "Error decoding field 'a'" in str(exc_info.value)
    assert "Expected int, got str" in str(exc_info.value)

    json_list = '[{"a": "Alice", "b": 30}]'
    with pytest.raises(DeserializationError) as exc_info:
        json.loads(Simple, json_list)
    assert "Expected a dictionary to decode into class Simple" in str(exc_info.value)

@lodum
class UserWithList:
    def __init__(self, name: str, posts: List[str]):
        self.name = name
        self.posts = posts

def test_nested_list_deserialization():
    json_str = '{"name": "Blog Pwner", "posts": ["First post", "Second post"]}'
    user = json.loads(UserWithList, json_str)
    assert user.name == "Blog Pwner"
    assert user.posts == ["First post", "Second post"]
