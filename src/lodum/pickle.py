# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import pickle
import builtins
import io
from typing import Any, Type, TypeVar

from .core import Dumper
from .internal import dump as validate_lodum_structure

T = TypeVar("T")

# --- Safe Encoding ---


class ValidationDumper(Dumper):
    """A no-op dumper used only for validation."""

    def dump_int(self, value: int) -> None:
        pass

    def dump_str(self, value: str) -> None:
        pass

    def dump_float(self, value: float) -> None:
        pass

    def dump_bool(self, value: bool) -> None:
        pass

    def dump_list(self, value: list) -> None:
        pass

    def dump_dict(self, value: dict) -> None:
        pass

    def begin_struct(self, cls: Type) -> dict:
        return {}  # Return a dummy dict

    def end_struct(self) -> None:
        pass


def dumps(obj: Any) -> bytes:
    """
    Encodes a Python object to a pickle byte string, ensuring it is safe.
    """
    validator = ValidationDumper()
    validate_lodum_structure(obj, validator)
    return pickle.dumps(obj)


# --- Safe Decoding ---


class SafeUnpickler(pickle.Unpickler):
    """
    A custom unpickler that only allows safe, lodum-enabled classes to be loaded.
    """

    def find_class(self, module_name: str, class_name: str) -> Type:
        if "os" in module_name or "sys" in module_name or "subprocess" in module_name:
            raise pickle.UnpicklingError(f"Unsafe module '{module_name}' is forbidden.")

        if module_name == "builtins" and hasattr(builtins, class_name):
            return getattr(builtins, class_name)

        cls = super().find_class(module_name, class_name)

        if getattr(cls, "_lodum_enabled", False):
            return cls

        raise pickle.UnpicklingError(
            f"Attempted to unpickle a non-lodum type: {module_name}.{class_name}"
        )


def loads(cls: Type[T], data: bytes) -> T:
    """
    Decodes a pickle byte string to a Python object, ensuring it is safe.
    """
    with io.BytesIO(data) as f:
        unpickler = SafeUnpickler(f)
        obj = unpickler.load()

    if not isinstance(obj, cls):
        raise TypeError(
            f"Deserialized object is of type {type(obj).__name__}, but expected {cls.__name__}"
        )

    return obj
