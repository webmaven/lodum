# SPDX-FileCopyrightText: 2025-present Jules <jules@example.com>
#
# SPDX-License-Identifier: MIT
import pytest
from datetime import datetime
from enum import Enum
from typing import Any, List, Optional, Set, Tuple, TypeVar, Union

from lodum import lodum, field, yaml

# --- Test Data ---

@lodum
class Simple:
    def __init__(self, a: int, b: str):
        self.a = a
        self.b = b
    def __eq__(self, o): return isinstance(o, Simple) and self.a == o.a and self.b == o.b

class UserRole(Enum):
    ADMIN = "admin"
    USER = "user"

# --- Test Cases ---

def test_yaml_roundtrip_simple():
    """Tests a simple object can be encoded and decoded."""
    instance = Simple(a=10, b="world")
    yaml_str = yaml.dumps(instance)
    result = yaml.loads(Simple, yaml_str)
    assert result == instance

def test_yaml_datetime():
    """Tests datetime objects are handled correctly."""
    dt = datetime(2025, 1, 1, 12, 30, 0)
    yaml_str = yaml.dumps(dt)
    # ruamel.yaml may add quotes, so we decode to check correctness.
    result = yaml.loads(datetime, yaml_str)
    assert result == dt

def test_yaml_enum():
    """Tests Enum objects are handled correctly."""
    role = UserRole.ADMIN
    yaml_str = yaml.dumps(role)
    # ruamel.yaml may add a document end marker, so we check the content.
    assert "admin" in yaml_str
    result = yaml.loads(UserRole, yaml_str)
    assert result == role

@lodum
class Complex:
    def __init__(self, dt: datetime, role: UserRole, items: List[Simple]):
        self.dt = dt
        self.role = role
        self.items = items
    def __eq__(self, o):
        return isinstance(o, Complex) and self.dt == o.dt and self.role == o.role and self.items == o.items

def test_yaml_roundtrip_complex():
    """Tests a complex nested object can be encoded and decoded."""
    instance = Complex(
        dt=datetime.now(),
        role=UserRole.USER,
        items=[Simple(a=1, b="a"), Simple(a=2, b="b")]
    )
    yaml_str = yaml.dumps(instance)
    result = yaml.loads(Complex, yaml_str)
    assert result == instance

@lodum
class Customized:
    def __init__(
        self,
        user_id: int = field(rename="id"),
        is_active: bool = field(skip_serializing=True, default=True),
        tags: Set[str] = field(default_factory=set)
    ):
        self.user_id = user_id
        self.is_active = is_active
        self.tags = tags
    def __eq__(self, o):
        return isinstance(o, Customized) and self.user_id == o.user_id and self.is_active == o.is_active and self.tags == o.tags

def test_yaml_field_customization():
    """Tests that field customizations work correctly with YAML."""
    instance = Customized(user_id=123, is_active=False, tags={"a", "b"})

    # Test encoding with `rename` and `skip_serializing`
    yaml_str = yaml.dumps(instance)
    assert "id: 123" in yaml_str
    assert "user_id" not in yaml_str
    assert "is_active" not in yaml_str

    # Test decoding with `rename` and `default_factory`
    yaml_data = "id: 456\n"
    result = yaml.loads(Customized, yaml_data)
    assert result.user_id == 456
    assert result.is_active is True # The default was used
    assert result.tags == set() # The default_factory was used


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
        # The YAML library decodes lists/dicts as a custom type, so we need to
        # convert it back to a plain list/dict for comparison.
        any_field = self.any_field
        if isinstance(any_field, list):
            any_field = list(any_field)
        elif isinstance(any_field, dict):
            any_field = dict(any_field)

        o_any_field = o.any_field
        if isinstance(o_any_field, list):
            o_any_field = list(o_any_field)
        elif isinstance(o_any_field, dict):
            o_any_field = dict(o_any_field)

        return (isinstance(o, TypingObject) and
                self.optional_field == o.optional_field and
                self.union_field == o.union_field and
                any_field == o_any_field)


def test_yaml_typing_support():
    """Tests that `typing` module types are correctly handled."""
    instance = TypingObject(optional_field=10, union_field="hello", any_field=[1, 2, 3])
    yaml_str = yaml.dumps(instance)
    result = yaml.loads(TypingObject, yaml_str)
    assert result.optional_field == instance.optional_field
    assert result.union_field == instance.union_field
    assert list(result.any_field) == instance.any_field

    instance = TypingObject(optional_field=None, union_field=True, any_field={"a": "b"})
    yaml_str = yaml.dumps(instance)
    result = yaml.loads(TypingObject, yaml_str)
    assert result.optional_field == instance.optional_field
    assert result.union_field == instance.union_field
    assert dict(result.any_field) == instance.any_field
