# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import pytest
from lodum import lodum, field, json
from lodum.validators import Range, Length, Match, OneOf
from lodum.exception import DeserializationError


@lodum
class ValidatedUser:
    def __init__(
        self,
        age: int = field(validate=Range(min=18, max=120)),
        username: str = field(validate=Length(min=3, max=20)),
        tag: str = field(validate=Match(r"^#[a-z]+$")),
        role: str = field(validate=OneOf(["admin", "user", "guest"])),
    ):
        self.age = age
        self.username = username
        self.tag = tag
        self.role = role


def test_validation_success():
    data = '{"age": 25, "username": "jdoe", "tag": "#python", "role": "admin"}'
    user = json.loads(ValidatedUser, data)
    assert user.age == 25
    assert user.username == "jdoe"


def test_validation_range_fail():
    data = '{"age": 15, "username": "jdoe", "tag": "#python", "role": "admin"}'
    with pytest.raises(DeserializationError) as excinfo:
        json.loads(ValidatedUser, data)
    assert "Value 15 is less than minimum 18" in str(excinfo.value)


def test_validation_length_fail():
    data = '{"age": 25, "username": "jd", "tag": "#python", "role": "admin"}'
    with pytest.raises(DeserializationError) as excinfo:
        json.loads(ValidatedUser, data)
    assert "Length 2 is less than minimum 3" in str(excinfo.value)


def test_validation_match_fail():
    data = '{"age": 25, "username": "jdoe", "tag": "python", "role": "admin"}'
    with pytest.raises(DeserializationError) as excinfo:
        json.loads(ValidatedUser, data)
    assert "does not match pattern" in str(excinfo.value)


def test_validation_oneof_fail():
    data = '{"age": 25, "username": "jdoe", "tag": "#python", "role": "superuser"}'
    with pytest.raises(DeserializationError) as excinfo:
        json.loads(ValidatedUser, data)
    assert "is not one of" in str(excinfo.value)


def test_multiple_validators():
    @lodum
    class MultiValidated:
        def __init__(self, val: int = field(validate=[Range(min=10), Range(max=20)])):
            self.val = val

    # Success
    json.loads(MultiValidated, '{"val": 15}')

    # Fail min
    with pytest.raises(DeserializationError):
        json.loads(MultiValidated, '{"val": 5}')

    # Fail max
    with pytest.raises(DeserializationError):
        json.loads(MultiValidated, '{"val": 25}')


def test_custom_validator():
    def is_even(v):
        if v % 2 != 0:
            raise DeserializationError("Value must be even")

    @lodum
    class EvenOnly:
        def __init__(self, val: int = field(validate=is_even)):
            self.val = val

    json.loads(EvenOnly, '{"val": 4}')
    with pytest.raises(DeserializationError) as excinfo:
        json.loads(EvenOnly, '{"val": 5}')
    assert "Value must be even" in str(excinfo.value)
