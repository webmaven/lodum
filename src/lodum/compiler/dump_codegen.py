# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import ast
import sys
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
                elts=[
                    ast.Name(id="float", ctx=ast.Load()),
                    ast.Name(id="int", ctx=ast.Load()),
                ],
                ctx=ast.Load(),
            )
        else:
            type_test = ast.Name(id=ftype.__name__, ctx=ast.Load())

        return ast.IfExp(
            test=ast.Call(
                func=ast.Name(id="isinstance", ctx=ast.Load()),
                args=[val_node, type_test],
                keywords=[],
            ),
            body=ast.Call(
                func=ast.Attribute(
                    value=ast.Name(id="dumper", ctx=ast.Load()),
                    attr=dump_meth,
                    ctx=ast.Load(),
                ),
                args=[val_node],
                keywords=[],
            ),
            orelse=ast.Call(
                func=ast.Name(id="dump_fn", ctx=ast.Load()),
                args=[
                    val_node,
                    ast.Name(id="dumper", ctx=ast.Load()),
                    ast.BinOp(
                        left=ast.Name(id="depth", ctx=ast.Load()),
                        op=ast.Add(),
                        right=ast.Constant(value=1),
                    ),
                    ast.Name(id="seen", ctx=ast.Load()),
                ],
                keywords=[],
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
                    elts=[
                        ast.Name(id="float", ctx=ast.Load()),
                        ast.Name(id="int", ctx=ast.Load()),
                    ],
                    ctx=ast.Load(),
                )
            else:
                item_type_test = ast.Name(id=item_type.__name__, ctx=ast.Load())

            elt_dump_expr = ast.IfExp(
                test=ast.Call(
                    func=ast.Name(id="isinstance", ctx=ast.Load()),
                    args=[ast.Name(id="item", ctx=ast.Load()), item_type_test],
                    keywords=[],
                ),
                body=ast.Call(
                    func=ast.Attribute(
                        value=ast.Name(id="dumper", ctx=ast.Load()),
                        attr=item_dump_meth,
                        ctx=ast.Load(),
                    ),
                    args=[ast.Name(id="item", ctx=ast.Load())],
                    keywords=[],
                ),
                orelse=ast.Call(
                    func=ast.Name(id="dump_fn", ctx=ast.Load()),
                    args=[
                        ast.Name(id="item", ctx=ast.Load()),
                        ast.Name(id="dumper", ctx=ast.Load()),
                        ast.BinOp(
                            left=ast.Name(id="depth", ctx=ast.Load()),
                            op=ast.Add(),
                            right=ast.Constant(value=1),
                        ),
                        ast.Name(id="seen", ctx=ast.Load()),
                    ],
                    keywords=[],
                ),
            )

            # Note: For set/tuple we still produce a list here because lodum dumpers expect list-like for sequences in JSON/MsgPack etc.
            comprehension = ast.ListComp(
                elt=elt_dump_expr,
                generators=[
                    ast.comprehension(
                        target=ast.Name(id="item", ctx=ast.Store()),
                        iter=val_node,
                        ifs=[],
                        is_async=0,
                    )
                ],
            )
            return comprehension

    if origin is dict:
        args = get_args(ftype)
        if len(args) == 2:
            k_type, v_type = args
            if k_type is str and v_type in PRIMITIVE_TYPES:
                v_dump_meth = PRIMITIVE_TYPES[v_type]
                v_type_test: ast.expr
                if v_type is float:
                    v_type_test = ast.Tuple(
                        elts=[
                            ast.Name(id="float", ctx=ast.Load()),
                            ast.Name(id="int", ctx=ast.Load()),
                        ],
                        ctx=ast.Load(),
                    )
                else:
                    v_type_test = ast.Name(id=v_type.__name__, ctx=ast.Load())

                val_dump_expr = ast.IfExp(
                    test=ast.Call(
                        func=ast.Name(id="isinstance", ctx=ast.Load()),
                        args=[ast.Name(id="v", ctx=ast.Load()), v_type_test],
                        keywords=[],
                    ),
                    body=ast.Call(
                        func=ast.Attribute(
                            value=ast.Name(id="dumper", ctx=ast.Load()),
                            attr=v_dump_meth,
                            ctx=ast.Load(),
                        ),
                        args=[ast.Name(id="v", ctx=ast.Load())],
                        keywords=[],
                    ),
                    orelse=ast.Call(
                        func=ast.Name(id="dump_fn", ctx=ast.Load()),
                        args=[
                            ast.Name(id="v", ctx=ast.Load()),
                            ast.Name(id="dumper", ctx=ast.Load()),
                            ast.BinOp(
                                left=ast.Name(id="depth", ctx=ast.Load()),
                                op=ast.Add(),
                                right=ast.Constant(value=1),
                            ),
                            ast.Name(id="seen", ctx=ast.Load()),
                        ],
                        keywords=[],
                    ),
                )

                # {str(k): dumper.dump_X(v) for k, v in val_node.items()}
                dict_comp = ast.DictComp(
                    key=ast.Call(
                        func=ast.Name(id="str", ctx=ast.Load()),
                        args=[ast.Name(id="k", ctx=ast.Load())],
                        keywords=[],
                    ),
                    value=val_dump_expr,
                    generators=[
                        ast.comprehension(
                            target=ast.Tuple(
                                elts=[
                                    ast.Name(id="k", ctx=ast.Store()),
                                    ast.Name(id="v", ctx=ast.Store()),
                                ],
                                ctx=ast.Store(),
                            ),
                            iter=ast.Call(
                                func=ast.Attribute(
                                    value=val_node, attr="items", ctx=ast.Load()
                                ),
                                args=[],
                                keywords=[],
                            ),
                            ifs=[],
                            is_async=0,
                        )
                    ],
                )
                return dict_comp

    # Pre-resolve handler
    try:
        handler = get_dump_handler_fn(ftype, excluding=cls)
        handler_name = f"h_{i}"
        context[handler_name] = handler
        return ast.Call(
            func=ast.Name(id=handler_name, ctx=ast.Load()),
            args=[
                val_node,
                ast.Name(id="dumper", ctx=ast.Load()),
                ast.BinOp(
                    left=ast.Name(id="depth", ctx=ast.Load()),
                    op=ast.Add(),
                    right=ast.Constant(value=1),
                ),
                ast.Name(id="seen", ctx=ast.Load()),
            ],
            keywords=[],
        )
    except ValueError:
        # Recursive reference, fall back to global dump_fn
        return ast.Call(
            func=ast.Name(id="dump_fn", ctx=ast.Load()),
            args=[
                val_node,
                ast.Name(id="dumper", ctx=ast.Load()),
                ast.BinOp(
                    left=ast.Name(id="depth", ctx=ast.Load()),
                    op=ast.Add(),
                    right=ast.Constant(value=1),
                ),
                ast.Name(id="seen", ctx=ast.Load()),
            ],
            keywords=[],
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
    args = ast.arguments(
        args=[
            ast.arg(arg="obj", annotation=None),
            ast.arg(arg="dumper", annotation=None),
            ast.arg(arg="dump_fn", annotation=None),
            ast.arg(arg="depth", annotation=None),
            ast.arg(arg="seen", annotation=None),
        ],
        posonlyargs=[],
        kwonlyargs=[],
        kw_defaults=[],
        defaults=[],
        vararg=None,
        kwarg=None,
    )

    body: list[ast.stmt] = []

    # _cls = cls
    body.append(
        ast.Assign(
            targets=[ast.Name(id="_cls", ctx=ast.Store())],
            value=ast.Name(id="cls", ctx=ast.Load()),
        )
    )

    # data = dumper.begin_struct(_cls)
    body.append(
        ast.Assign(
            targets=[ast.Name(id="data", ctx=ast.Store())],
            value=ast.Call(
                func=ast.Attribute(
                    value=ast.Name(id="dumper", ctx=ast.Load()),
                    attr="begin_struct",
                    ctx=ast.Load(),
                ),
                args=[ast.Name(id="_cls", ctx=ast.Load())],
                keywords=[],
            ),
        )
    )

    tag = getattr(cls, "_lodum_tag", None)
    tag_value = getattr(cls, "_lodum_tag_value", None)

    if tag:
        context["tag_value"] = tag_value
        # data[tag_name] = dumper.dump_str(tag_value)
        body.append(
            ast.Assign(
                targets=[
                    ast.Subscript(
                        value=ast.Name(id="data", ctx=ast.Load()),
                        slice=ast.Constant(value=tag),
                        ctx=ast.Store(),
                    )
                ],
                value=ast.Call(
                    func=ast.Attribute(
                        value=ast.Name(id="dumper", ctx=ast.Load()),
                        attr="dump_str",
                        ctx=ast.Load(),
                    ),
                    args=[ast.Name(id="tag_value", ctx=ast.Load())],
                    keywords=[],
                ),
            )
        )

    for i, (field_name, field_info) in enumerate(fields.items()):
        if field_info.skip_serializing:
            continue

        key = field_info.rename if field_info.rename else field_info.name
        safe_key = f"key_{i}"
        context[safe_key] = key

        # val = obj.field_name
        body.append(
            ast.Assign(
                targets=[ast.Name(id="val", ctx=ast.Store())],
                value=ast.Attribute(
                    value=ast.Name(id="obj", ctx=ast.Load()),
                    attr=field_name,
                    ctx=ast.Load(),
                ),
            )
        )

        target_subscript = ast.Subscript(
            value=ast.Name(id="data", ctx=ast.Load()),
            slice=ast.Constant(value=key),
            ctx=ast.Store(),
        )

        dump_expr: ast.expr
        if field_info.serializer:
            ser_name = f"ser_{i}"
            context[ser_name] = field_info.serializer
            # data[key] = ser_n(val)
            dump_expr = ast.Call(
                func=ast.Name(id=ser_name, ctx=ast.Load()),
                args=[ast.Name(id="val", ctx=ast.Load())],
                keywords=[],
            )
        else:
            dump_expr = _build_dump_expr(
                field_info.type,
                ast.Name(id="val", ctx=ast.Load()),
                context,
                cls,
                i,
                get_dump_handler_fn,
            )

        body.append(
            ast.Assign(
                targets=[target_subscript],
                value=dump_expr,
            )
        )

    # dumper.end_struct()
    body.append(
        ast.Expr(
            value=ast.Call(
                func=ast.Attribute(
                    value=ast.Name(id="dumper", ctx=ast.Load()),
                    attr="end_struct",
                    ctx=ast.Load(),
                ),
                args=[],
                keywords=[],
            )
        )
    )

    # return data
    body.append(ast.Return(value=ast.Name(id="data", ctx=ast.Load())))

    func_def_kwargs: Dict[str, Any] = {
        "name": func_name,
        "args": args,
        "body": body,
        "decorator_list": [],
        "returns": None,
    }
    if sys.version_info >= (3, 12):
        func_def_kwargs["type_params"] = []

    func_def = ast.FunctionDef(**func_def_kwargs)
    return func_def, context
