# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import re
from collections.abc import Container
from typing import Any

from .exception import DeserializationError


class Validator:
    def __call__(self, value: Any) -> None:
        raise NotImplementedError


class Range(Validator):
    def __init__(self, min: Any | None = None, max: Any | None = None) -> None:
        self.min = min
        self.max = max

    def __call__(self, value: Any) -> None:
        if self.min is not None and value < self.min:
            raise DeserializationError(f"Value {value} is less than minimum {self.min}")
        if self.max is not None and value > self.max:
            raise DeserializationError(
                f"Value {value} is greater than maximum {self.max}"
            )


class Length(Validator):
    def __init__(self, min: int | None = None, max: int | None = None) -> None:
        self.min = min
        self.max = max

    def __call__(self, value: Any) -> None:
        try:
            length = len(value)
        except TypeError:
            raise DeserializationError(
                f"Value {value} of type {type(value).__name__} has no length"
            )

        if self.min is not None and length < self.min:
            raise DeserializationError(
                f"Length {length} is less than minimum {self.min}"
            )
        if self.max is not None and length > self.max:
            raise DeserializationError(
                f"Length {length} is greater than maximum {self.max}"
            )


class Match(Validator):
    def __init__(self, pattern: str) -> None:
        self.pattern = re.compile(pattern)

    def __call__(self, value: Any) -> None:
        if not isinstance(value, str):
            raise DeserializationError(
                f"Value {value} is not a string, cannot match regex"
            )
        if not self.pattern.match(value):
            raise DeserializationError(
                f"Value '{value}' does not match pattern '{self.pattern.pattern}'"
            )


class OneOf(Validator):
    def __init__(self, options: Container[Any]) -> None:
        self.options = options

    def __call__(self, value: Any) -> None:
        if value not in self.options:
            raise DeserializationError(f"Value {value} is not one of {self.options}")
