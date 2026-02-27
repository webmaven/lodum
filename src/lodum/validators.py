# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import re
from typing import Any, Container, Optional

from .exception import DeserializationError

class Validator:
    def __call__(self, value: Any) -> None:
        raise NotImplementedError

class Range(Validator):
    def __init__(self, min: Optional[Any] = None, max: Optional[Any] = None):
        self.min = min
        self.max = max

    def __call__(self, value: Any) -> None:
        if self.min is not None and value < self.min:
            raise DeserializationError(f"Value {value} is less than minimum {self.min}")
        if self.max is not None and value > self.max:
            raise DeserializationError(f"Value {value} is greater than maximum {self.max}")

class Length(Validator):
    def __init__(self, min: Optional[int] = None, max: Optional[int] = None):
        self.min = min
        self.max = max

    def __call__(self, value: Any) -> None:
        try:
            length = len(value)
        except TypeError:
            raise DeserializationError(f"Value {value} of type {type(value).__name__} has no length")
            
        if self.min is not None and length < self.min:
            raise DeserializationError(f"Length {length} is less than minimum {self.min}")
        if self.max is not None and length > self.max:
            raise DeserializationError(f"Length {length} is greater than maximum {self.max}")

class Match(Validator):
    def __init__(self, pattern: str):
        self.pattern = re.compile(pattern)

    def __call__(self, value: Any) -> None:
        if not isinstance(value, str):
            raise DeserializationError(f"Value {value} is not a string, cannot match regex")
        if not self.pattern.match(value):
            raise DeserializationError(f"Value '{value}' does not match pattern '{self.pattern.pattern}'")

class OneOf(Validator):
    def __init__(self, options: Container[Any]):
        self.options = options

    def __call__(self, value: Any) -> None:
        if value not in self.options:
            raise DeserializationError(f"Value {value} is not one of {self.options}")
