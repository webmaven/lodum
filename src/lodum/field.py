# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
from typing import Any, Callable, List, Optional, Union

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
        rename: Optional[str] = None,
        skip_serializing: bool = False,
        default: Any = _MISSING,
        default_factory: Optional[Callable[[], Any]] = None,
        serializer: Optional[Callable[[Any], Any]] = None,
        deserializer: Optional[Callable[[Any], Any]] = None,
        validate: Optional[
            Union[Callable[[Any], None], List[Callable[[Any], None]]]
        ] = None,
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


def field(
    *,
    rename: Optional[str] = None,
    skip_serializing: bool = False,
    default: Any = _MISSING,
    default_factory: Optional[Callable[[], Any]] = None,
    serializer: Optional[Callable[[Any], Any]] = None,
    deserializer: Optional[Callable[[Any], Any]] = None,
    validate: Optional[
        Union[Callable[[Any], None], List[Callable[[Any], None]]]
    ] = None,
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
