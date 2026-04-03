# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import ast
from typing import (
    Any,
    Dict,
    Type,
    Tuple,
)

from ..field import Field
from ..exception import DeserializationError, SerializationError
from .analyzer import _sanitize_name
from .dsl import b


def _build_dump_function_ast(
    cls: Type[Any], get_dump_handler_fn: Any, dump_orig: Any
) -> Tuple[ast.FunctionDef, Dict[str, Any]]:
    """
    Builds the AST for the optimized dump handler of a lodum-enabled class.
    Returns the FunctionDef node and the context dictionary.
    """
    fields: Dict[str, Field] = getattr(cls, "_lodum_fields", {})
    safe_name = _sanitize_name(cls.__name__)
    func_name = f"dump_{safe_name}"

    context: Dict[str, Any] = {
        "cls": cls,
        "_cls": cls,
        "Field": Field,
        "DeserializationError": DeserializationError,
        "SerializationError": SerializationError,
        "dump_fn_orig": dump_orig,
    }

    # Parameters: (obj, dumper, dump_fn, depth, seen)
    args = b.arguments(["obj", "dumper", "dump_fn", "depth", "seen"])

    body: list[ast.stmt] = []

    # Depth check
    from ..core import DEFAULT_MAX_DEPTH

    context["DEFAULT_MAX_DEPTH"] = DEFAULT_MAX_DEPTH
    body.append(
        ast.If(
            test=b.gt(b.load("depth"), b.load("DEFAULT_MAX_DEPTH")),
            body=[
                ast.Raise(
                    exc=b.call(
                        "SerializationError",
                        [
                            b.const(
                                f"Max recursion depth ({DEFAULT_MAX_DEPTH}) exceeded"
                            )
                        ],
                    )
                )
            ],
            orelse=[],
        )
    )

    # Cycle detection
    body.append(b.assign("obj_id", b.call("id", [b.load("obj")])))
    body.append(
        ast.If(
            test=ast.Compare(
                left=b.load("obj_id"),
                ops=[ast.In()],
                comparators=[b.load("seen")],
            ),
            body=[
                ast.Raise(
                    exc=b.call(
                        "SerializationError", [b.const("Circular reference detected")]
                    )
                )
            ],
            orelse=[],
        )
    )
    body.append(ast.Expr(value=b.call(b.attr("seen", "add"), [b.load("obj_id")])))

    main_body: list[ast.stmt] = []

    # dumper.begin_struct(_cls)
    main_body.append(
        ast.Expr(value=b.call(b.attr("dumper", "begin_struct"), [b.load("_cls")]))
    )

    tag = getattr(cls, "_lodum_tag", None)
    tag_value = getattr(cls, "_lodum_tag_value", None)

    if tag:
        from ..handlers.base import _dump_str

        context["tag_value"] = tag_value
        context["_dump_str"] = _dump_str
        # dumper.field(tag, tag_value, _dump_str, depth + 1, seen)
        main_body.append(
            ast.Expr(
                value=b.call(
                    b.attr("dumper", "field"),
                    [
                        b.const(tag),
                        b.load("tag_value"),
                        b.load("_dump_str"),
                        b.add(b.load("depth"), b.const(1)),
                        b.load("seen"),
                    ],
                )
            )
        )

    for i, (field_name, field_info) in enumerate(fields.items()):
        if field_info.skip_serializing:
            continue

        key = field_info.rename if field_info.rename else field_info.name
        safe_key = f"key_{i}"
        context[safe_key] = key

        # val = obj.field_name
        main_body.append(b.assign("val", b.attr("obj", field_name)))

        # Handle Field objects used as defaults in __init__
        main_body.append(
            ast.If(
                test=b.isinstance("val", b.load("Field")),
                body=[b.assign("val", b.call(b.attr("val", "get_default")))],
                orelse=[],
            )
        )

        if field_info.serializer:
            ser_name = f"ser_{i}"
            context[ser_name] = field_info.serializer
            # Custom serializers currently return IR, so we use dump_fn_orig to dump that IR.
            # We wrap it in a small handler for dumper.field
            wrapper_name = f"wrap_ser_{i}"

            def make_wrapper(ser):
                return lambda v, d, de, s: context["dump_fn_orig"](ser(v), d, de, s)

            context[wrapper_name] = make_wrapper(field_info.serializer)
            main_body.append(
                ast.Expr(
                    value=b.call(
                        b.attr("dumper", "field"),
                        [
                            b.const(key),
                            b.load("val"),
                            b.load(wrapper_name),
                            b.add(b.load("depth"), b.const(1)),
                            b.load("seen"),
                        ],
                    )
                )
            )
        else:
            ftype = field_info.type
            PRIMITIVE_TYPES = {
                int: "_dump_int",
                str: "_dump_str",
                float: "_dump_float",
                bool: "_dump_bool",
                bytes: "_dump_bytes",
            }

            # Resolve handler at compile time
            try:
                handler = get_dump_handler_fn(ftype, excluding=cls)
                h_name = f"h_{i}"
                context[h_name] = handler
            except ValueError:
                # Recursive reference
                h_name = "dump_fn"

            if ftype in PRIMITIVE_TYPES:
                # Inlined type check for speed for primitives
                type_test: ast.expr
                if ftype is float:
                    type_test = ast.Tuple(
                        elts=[b.load("float"), b.load("int")], ctx=ast.Load()
                    )
                else:
                    type_test = b.load(ftype.__name__)

                main_body.append(
                    ast.If(
                        test=b.isinstance("val", type_test),
                        body=[
                            ast.Expr(
                                value=b.call(
                                    b.attr("dumper", "field"),
                                    [
                                        b.const(key),
                                        b.load("val"),
                                        b.load(h_name),
                                        b.add(b.load("depth"), b.const(1)),
                                        b.load("seen"),
                                    ],
                                )
                            )
                        ],
                        orelse=[
                            ast.Expr(
                                value=b.call(
                                    b.attr("dumper", "field"),
                                    [
                                        b.const(key),
                                        b.load("val"),
                                        b.load("dump_fn"),
                                        b.add(b.load("depth"), b.const(1)),
                                        b.load("seen"),
                                    ],
                                )
                            )
                        ],
                    )
                )
            else:
                main_body.append(
                    ast.Expr(
                        value=b.call(
                            b.attr("dumper", "field"),
                            [
                                b.const(key),
                                b.load("val"),
                                b.load(h_name),
                                b.add(b.load("depth"), b.const(1)),
                                b.load("seen"),
                            ],
                        )
                    )
                )

    # return dumper.end_struct()
    main_body.append(b.return_stmt(b.call(b.attr("dumper", "end_struct"))))

    # Wrap in try-finally
    body.append(
        ast.Try(
            body=main_body,
            handlers=[],
            orelse=[],
            finalbody=[
                ast.Expr(value=b.call(b.attr("seen", "remove"), [b.load("obj_id")]))
            ],
        )
    )

    func_def = b.function_def(func_name, args, body)
    return func_def, context
