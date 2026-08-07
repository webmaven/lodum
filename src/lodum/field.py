# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
from collections.abc import Callable
from typing import Any

from .concurrency import RLock

# Global registry for lodum-enabled classes to support ForwardRef resolution
_NAME_TO_TYPE_CACHE: dict[str, type[Any]] = {}
_REGISTRY_LOCK = RLock()


def register_type(cls: type[Any]) -> None:
    """Registers a class in the global name-to-type cache."""
    with _REGISTRY_LOCK:
        _NAME_TO_TYPE_CACHE[cls.__name__] = cls


# A sentinel object to detect if a parameter is supplied or not.
class _MISSING_TYPE:
    pass


_MISSING = _MISSING_TYPE()


class Field:
    """
    A class that stores metadata for a field in a lodum-enabled class.

    This is not intended to be instantiated directly. Instead, use the `field()`
    function, which provides a more convenient API.
    """

    def __init__(
        self,
        rename: str | None = None,
        skip_serializing: bool = False,
        default: Any = _MISSING,
        default_factory: Callable[[], Any] | None = None,
        serializer: Callable[[Any], Any] | None = None,
        deserializer: Callable[[Any], Any] | None = None,
        validate: Callable[[Any], None] | list[Callable[[Any], None]] | None = None,
    ) -> None:
        if default is not _MISSING and default_factory is not None:
            raise ValueError("cannot specify both default and default_factory")

        self.rename = rename
        self.skip_serializing = skip_serializing
        self.default = default
        self.default_factory = default_factory
        self.serializer = serializer
        self.deserializer = deserializer
        self.validate = validate
        self.name: str = ""  # Will be populated by the decorator
        self.type: Any = None  # Will be populated by the decorator

    @property
    def has_default(self) -> bool:
        return self.default is not _MISSING or self.default_factory is not None

    def get_default(self) -> Any:
        if self.default_factory is not None:
            return self.default_factory()
        return self.default

    def __repr__(self) -> str:
        parts = []
        if self.name:
            parts.append(f"name={self.name!r}")
        if self.type:
            parts.append(f"type={self.type!r}")
        if self.rename:
            parts.append(f"rename={self.rename!r}")
        if self.skip_serializing:
            parts.append(f"skip_serializing={self.skip_serializing!r}")
        if self.default is not _MISSING:
            parts.append(f"default={self.default!r}")
        if self.default_factory:
            parts.append(f"default_factory={self.default_factory!r}")
        if self.serializer:
            parts.append(f"serializer={self.serializer!r}")
        if self.deserializer:
            parts.append(f"deserializer={self.deserializer!r}")
        if self.validate:
            parts.append(f"validate={self.validate!r}")
        return f"Field({', '.join(parts)})"

    def __eq__(self, other: object) -> bool:
        if not isinstance(other, Field):
            return NotImplemented
        return (
            self.name == other.name
            and self.type == other.type
            and self.rename == other.rename
            and self.skip_serializing == other.skip_serializing
            and self.default == other.default
            and self.default_factory == other.default_factory
            and self.serializer == other.serializer
            and self.deserializer == other.deserializer
            and self.validate == other.validate
        )


def field(
    *,
    rename: str | None = None,
    skip_serializing: bool = False,
    default: Any = _MISSING,
    default_factory: Callable[[], Any] | None = None,
    serializer: Callable[[Any], Any] | None = None,
    deserializer: Callable[[Any], Any] | None = None,
    validate: Callable[[Any], None] | list[Callable[[Any], None]] | None = None,
) -> Any:
    """
    Provides metadata to the `@lodum` decorator for a single field.

    Args:
        rename: The name to use for the field in the output.
        skip_serializing: If `True`, the field will not be included in the
            output.
        default: A default value to use for the field during decoding
            if it is missing from the input data.
        default_factory: A zero-argument function that will be called to
            create a default value for a missing field.
        serializer: A function to call to encode the field's value.
        deserializer: A function to call to decode the field's value.
        validate: A callable or list of callables to validate the field's value during decoding.
    """
    return Field(
        rename=rename,
        skip_serializing=skip_serializing,
        default=default,
        default_factory=default_factory,
        serializer=serializer,
        deserializer=deserializer,
        validate=validate,
    )
