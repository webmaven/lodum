# SPDX-FileCopyrightText: 2025-present Jules <jules@example.com>
#
# SPDX-License-Identifier: MIT
from typing import Any, Callable, Optional

# A sentinel object to detect if a parameter is supplied or not.
_MISSING_TYPE = object
_MISSING = _MISSING_TYPE()

class Field:
    """
    A class that stores metadata for a field in a serializable class.

    This is not intended to be instantiated directly. Instead, use the `field()`
    function, which provides a more convenient API.
    """
    def __init__(
        self,
        rename: Optional[str] = None,
        skip_serializing: bool = False,
        default: Any = _MISSING,
        default_factory: Optional[Callable[[], Any]] = None,
        serializer: Optional[Callable[[Any], Any]] = None,
        deserializer: Optional[Callable[[Any], Any]] = None,
    ):
        if default is not _MISSING and default_factory is not None:
            raise ValueError("cannot specify both default and default_factory")

        self.rename = rename
        self.skip_serializing = skip_serializing
        self.default = default
        self.default_factory = default_factory
        self.serializer = serializer
        self.deserializer = deserializer
        self.name: str = "" # Will be populated by the decorator
        self.type: Any = None # Will be populated by the decorator

    @property
    def has_default(self) -> bool:
        return self.default is not _MISSING or self.default_factory is not None

    def get_default(self) -> Any:
        if self.default_factory is not None:
            return self.default_factory()
        return self.default


def field(
    *,
    rename: Optional[str] = None,
    skip_serializing: bool = False,
    default: Any = _MISSING,
    default_factory: Optional[Callable[[], Any]] = None,
    serializer: Optional[Callable[[Any], Any]] = None,
    deserializer: Optional[Callable[[Any], Any]] = None,
) -> Any:
    """
    Provides metadata to the `@serializable` decorator for a single field.

    Args:
        rename: The name to use for the field in the serialized output.
        skip_serializing: If `True`, the field will not be included in the
            serialized output.
        default: A default value to use for the field during deserialization
            if it is missing from the input data.
        default_factory: A zero-argument function that will be called to
            create a default value for a missing field.
        serializer: A function to call to serialize the field's value.
        deserializer: A function to call to deserialize the field's value.
    """
    return Field(
        rename=rename,
        skip_serializing=skip_serializing,
        default=default,
        default_factory=default_factory,
        serializer=serializer,
        deserializer=deserializer,
    )
