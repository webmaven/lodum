# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: MIT
import pickle
import builtins
import io
from typing import Any, Type, TypeVar

from .core import Serializer
from .json import serialize as validate_serializable_structure

T = TypeVar("T")

# --- Safe Serialization ---

class ValidationSerializer(Serializer):
    """A no-op serializer used only for validation."""
    def serialize_int(self, value: int) -> None: pass
    def serialize_str(self, value: str) -> None: pass
    def serialize_float(self, value: float) -> None: pass
    def serialize_bool(self, value: bool) -> None: pass
    def begin_struct(self, cls: Type) -> dict: return {} # Return a dummy dict
    def end_struct(self) -> None: pass


def to_pickle(obj: Any) -> bytes:
    """
    Serializes a Python object to a pickle byte string, ensuring it is safe.
    """
    validator = ValidationSerializer()
    validate_serializable_structure(obj, validator)
    return pickle.dumps(obj)


# --- Safe Deserialization ---

class SafeUnpickler(pickle.Unpickler):
    """
    A custom unpickler that only allows safe, serializable classes to be loaded.
    """
    def find_class(self, module_name: str, class_name: str) -> Type:
        if "os" in module_name or "sys" in module_name or "subprocess" in module_name:
            raise pickle.UnpicklingError(f"Unsafe module '{module_name}' is forbidden.")

        if module_name == "builtins" and hasattr(builtins, class_name):
            return getattr(builtins, class_name)

        cls = super().find_class(module_name, class_name)

        if getattr(cls, '_lodum_serializable', False):
            return cls

        raise pickle.UnpicklingError(f"Attempted to unpickle a non-serializable type: {module_name}.{class_name}")


def from_pickle(cls: Type[T], data: bytes) -> T:
    """
    Deserializes a pickle byte string to a Python object, ensuring it is safe.
    """
    with io.BytesIO(data) as f:
        unpickler = SafeUnpickler(f)
        obj = unpickler.load()

    if not isinstance(obj, cls):
        raise TypeError(f"Deserialized object is of type {type(obj).__name__}, but expected {cls.__name__}")

    return obj
