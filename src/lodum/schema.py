# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import collections
import inspect
from typing import (
    Any,
    get_args,
    get_origin,
)

from .compiler.analyzer import _analyze_class
from .core import DEFAULT_MAX_DEPTH, get_context
from .field import Field


def _sanitize_name(name: str) -> str:
    """Sanitizes a string to be a valid Python identifier part."""
    if not name:
        return "unknown"
    return "".join(c if c.isalnum() else "_" for c in name)


def generate_schema(
    t: type[Any], depth: int = 0, visited: set | None = None
) -> dict[str, Any]:
    """Generates a JSON Schema for a given type."""
    if depth > DEFAULT_MAX_DEPTH:
        raise ValueError(
            f"Max recursion depth ({DEFAULT_MAX_DEPTH}) exceeded during schema generation"
        )

    if visited is None:
        visited = set()

    # Ensure class metadata is populated if it's a lodum-enabled class
    if inspect.isclass(t) and getattr(t, "_lodum_enabled", False):
        _analyze_class(t)

    ctx = get_context()

    # Direct registry lookup
    if t in ctx.registry._handlers:
        return ctx.registry._handlers[t].schema_fn(t, depth, visited)

    origin = get_origin(t) or t

    # Generic lookup (exact match)
    if origin in ctx.registry._handlers:
        return ctx.registry._handlers[origin].schema_fn(t, depth, visited)

    # Inheritance lookup
    for super_t, h_obj in ctx.registry._handlers.items():
        try:
            if inspect.isclass(origin) and issubclass(origin, super_t):
                return h_obj.schema_fn(t, depth, visited)
        except TypeError:
            continue

    if inspect.isclass(t) and getattr(t, "_lodum_enabled", False):
        if t in visited:
            # Recursive reference
            return {"$ref": f"#/definitions/{_sanitize_name(t.__name__)}"}

        visited.add(t)
        fields: dict[str, Field] = getattr(t, "_lodum_fields", {})
        properties = {}
        required = []
        for field_name, field_info in fields.items():
            key = field_info.rename if field_info.rename else field_info.name
            properties[key] = generate_schema(field_info.type, depth + 1, visited)
            if not field_info.has_default:
                required.append(key)

        schema = {"type": "object", "properties": properties}

        tag_name = getattr(t, "_lodum_tag", None)
        if tag_name:
            tag_value = getattr(t, "_lodum_tag_value", t.__name__)
            properties[tag_name] = {"const": tag_value}
            if tag_name not in required:
                required.append(tag_name)

        if required:
            schema["required"] = required

        visited.remove(t)
        return schema

    return {}


def _schema_int(t: type[Any], depth: int, visited: set | None) -> dict[str, Any]:
    return {"type": "integer"}


def _schema_str(t: type[Any], depth: int, visited: set | None) -> dict[str, Any]:
    return {"type": "string"}


def _schema_float(t: type[Any], depth: int, visited: set | None) -> dict[str, Any]:
    return {"type": "number"}


def _schema_bool(t: type[Any], depth: int, visited: set | None) -> dict[str, Any]:
    return {"type": "boolean"}


def _schema_none(t: type[Any], depth: int, visited: set | None) -> dict[str, Any]:
    return {"type": "null"}


def _schema_any(t: type[Any], depth: int, visited: set | None) -> dict[str, Any]:
    return {}


def _schema_uuid(t: type[Any], depth: int, visited: set | None) -> dict[str, Any]:
    return {"type": "string", "format": "uuid"}


def _schema_decimal(t: type[Any], depth: int, visited: set | None) -> dict[str, Any]:
    return {"type": "string"}


def _schema_path(t: type[Any], depth: int, visited: set | None) -> dict[str, Any]:
    return {"type": "string"}


def _schema_bytes(t: type[Any], depth: int, visited: set | None) -> dict[str, Any]:
    return {"type": "string", "contentEncoding": "base64"}


def _schema_list(t: type[Any], depth: int, visited: set | None) -> dict[str, Any]:
    args = get_args(t)
    item_schema = generate_schema(args[0], depth + 1, visited) if args else {}
    return {"type": "array", "items": item_schema}


def _schema_dict(t: type[Any], depth: int, visited: set | None) -> dict[str, Any]:
    args = get_args(t)
    origin = get_origin(t) or t
    if origin is collections.Counter:
        val_schema = {"type": "integer"}
    else:
        val_schema = (
            generate_schema(args[1], depth + 1, visited) if len(args) == 2 else {}
        )
    return {"type": "object", "additionalProperties": val_schema}


def _schema_union(t: type[Any], depth: int, visited: set | None) -> dict[str, Any]:
    args = get_args(t)
    schema: dict[str, Any] = {
        "anyOf": [generate_schema(arg, depth + 1, visited) for arg in args]
    }

    tag_names = set()
    for arg in args:
        if inspect.isclass(arg) and getattr(arg, "_lodum_enabled", False):
            tag_names.add(getattr(arg, "_lodum_tag", None))
        else:
            tag_names.add(None)

    if len(tag_names) == 1 and None not in tag_names:
        tag_name = tag_names.pop()
        schema["discriminator"] = {"propertyName": tag_name}

    return schema


def _schema_tuple(t: type[Any], depth: int, visited: set | None) -> dict[str, Any]:
    args = get_args(t)
    return {
        "type": "array",
        "prefixItems": [generate_schema(arg, depth + 1, visited) for arg in args],
    }


def _schema_set(t: type[Any], depth: int, visited: set | None) -> dict[str, Any]:
    args = get_args(t)
    item_schema = generate_schema(args[0], depth + 1, visited) if args else {}
    return {"type": "array", "items": item_schema, "uniqueItems": True}


def _schema_datetime(
    t: type[Any], depth: int, visited: set | None
) -> dict[str, Any]:
    return {"type": "string", "format": "date-time"}


def _schema_enum(t: type[Any], depth: int, visited: set | None) -> dict[str, Any]:
    return {"enum": [m.value for m in t]}
