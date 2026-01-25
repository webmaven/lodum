# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import ast
from typing import (
    Any,
    Dict,
    Type,
    Tuple,
    get_origin,
    get_args,
)

from ..field import Field
from ..exception import DeserializationError, SerializationError
from .analyzer import _sanitize_name
from .dsl import b


def _build_dump_expr(
    ftype: Type[Any],
    val_node: ast.expr,
    context: Dict[str, Any],
    cls: Type[Any],
    i: int,
    get_dump_handler_fn: Any,
) -> ast.expr:
    """
    Builds an optimized AST expression to dump a value of type 'ftype'.
    Inlines primitive calls and comprehensions for common containers.
    """
    PRIMITIVE_TYPES = {
        int: "dump_int",
        str: "dump_str",
        float: "dump_float",
        bool: "dump_bool",
        bytes: "dump_bytes",
    }

    if ftype in PRIMITIVE_TYPES:
        dump_meth = PRIMITIVE_TYPES[ftype]
        type_test: ast.expr
        if ftype is float:
            type_test = ast.Tuple(
                elts=[b.load("float"), b.load("int")],
                ctx=ast.Load(),
            )
        else:
            type_test = b.load(ftype.__name__)

        return b.if_exp(
            test=b.isinstance(val_node, type_test),
            body=b.call(b.attr("dumper", dump_meth), [val_node]),
            orelse=b.call(
                "dump_fn",
                [
                    val_node,
                    b.load("dumper"),
                    b.add(b.load("depth"), b.const(1)),
                    b.load("seen"),
                ],
            ),
        )

    origin = get_origin(ftype) or ftype
    if origin in (list, set, tuple):
        args = get_args(ftype)
        item_type = args[0] if args else Any
        # Inline comprehension if item_type is primitive
        if item_type in PRIMITIVE_TYPES:
            item_dump_meth = PRIMITIVE_TYPES[item_type]
            item_type_test: ast.expr
            if item_type is float:
                item_type_test = ast.Tuple(
                    elts=[b.load("float"), b.load("int")],
                    ctx=ast.Load(),
                )
            else:
                item_type_test = b.load(item_type.__name__)

            elt_dump_expr = b.if_exp(
                test=b.isinstance("item", item_type_test),
                body=b.call(b.attr("dumper", item_dump_meth), [b.load("item")]),
                orelse=b.call(
                    "dump_fn",
                    [
                        b.load("item"),
                        b.load("dumper"),
                        b.add(b.load("depth"), b.const(1)),
                        b.load("seen"),
                    ],
                ),
            )

            return b.list_comp(elt_dump_expr, "item", val_node)

    if origin is dict:
        args = get_args(ftype)
        if len(args) == 2:
            k_type, v_type = args
            if k_type is str and v_type in PRIMITIVE_TYPES:
                v_dump_meth = PRIMITIVE_TYPES[v_type]
                v_type_test: ast.expr
                if v_type is float:
                    v_type_test = ast.Tuple(
                        elts=[b.load("float"), b.load("int")],
                        ctx=ast.Load(),
                    )
                else:
                    v_type_test = b.load(v_type.__name__)

                val_dump_expr = b.if_exp(
                    test=b.isinstance("v", v_type_test),
                    body=b.call(b.attr("dumper", v_dump_meth), [b.load("v")]),
                    orelse=b.call(
                        "dump_fn",
                        [
                            b.load("v"),
                            b.load("dumper"),
                            b.add(b.load("depth"), b.const(1)),
                            b.load("seen"),
                        ],
                    ),
                )

                return b.dict_comp(
                    key=b.call("str", [b.load("k")]),
                    value=val_dump_expr,
                    targets=["k", "v"],
                    iter_node=b.call(b.attr(val_node, "items")),
                )

    # Pre-resolve handler
    try:
        handler = get_dump_handler_fn(ftype, excluding=cls)
        handler_name = f"h_{i}"
        context[handler_name] = handler
        return b.call(
            handler_name,
            [
                val_node,
                b.load("dumper"),
                b.add(b.load("depth"), b.const(1)),
                b.load("seen"),
            ],
        )
    except ValueError:
        # Recursive reference, fall back to global dump_fn
        return b.call(
            "dump_fn",
            [
                val_node,
                b.load("dumper"),
                b.add(b.load("depth"), b.const(1)),
                b.load("seen"),
            ],
        )


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
        "DeserializationError": DeserializationError,
        "SerializationError": SerializationError,
        "dump_fn_orig": dump_orig,
    }

    # Parameters: (obj, dumper, dump_fn, depth, seen)
    args = b.arguments(["obj", "dumper", "dump_fn", "depth", "seen"])

    body: list[ast.stmt] = []

    # _cls = cls
    body.append(b.assign("_cls", b.load("cls")))

    # data = dumper.begin_struct(_cls)
    body.append(
        b.assign("data", b.call(b.attr("dumper", "begin_struct"), [b.load("_cls")]))
    )

    tag = getattr(cls, "_lodum_tag", None)
    tag_value = getattr(cls, "_lodum_tag_value", None)

    if tag:
        context["tag_value"] = tag_value
        # data[tag_name] = dumper.dump_str(tag_value)
        body.append(
            b.assign(
                b.subscript("data", b.const(tag), load=False),
                b.call(b.attr("dumper", "dump_str"), [b.load("tag_value")]),
            )
        )

    for i, (field_name, field_info) in enumerate(fields.items()):
        if field_info.skip_serializing:
            continue

        key = field_info.rename if field_info.rename else field_info.name
        safe_key = f"key_{i}"
        context[safe_key] = key

        # val = obj.field_name
        body.append(b.assign("val", b.attr("obj", field_name)))

        target_subscript = b.subscript("data", b.const(key), load=False)

        dump_expr: ast.expr
        if field_info.serializer:
            ser_name = f"ser_{i}"
            context[ser_name] = field_info.serializer
            # data[key] = ser_n(val)
            dump_expr = b.call(ser_name, [b.load("val")])
        else:
            dump_expr = _build_dump_expr(
                field_info.type,
                b.load("val"),
                context,
                cls,
                i,
                get_dump_handler_fn,
            )

        body.append(b.assign(target_subscript, dump_expr))

    # dumper.end_struct()
    body.append(ast.Expr(value=b.call(b.attr("dumper", "end_struct"))))

    # return data
    body.append(b.return_stmt(b.load("data")))

    func_def = b.function_def(func_name, args, body)
    return func_def, context
