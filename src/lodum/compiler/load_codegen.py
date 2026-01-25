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
)

from ..field import Field
from ..exception import DeserializationError, SerializationError
from .analyzer import _sanitize_name


def _build_load_expr(
    ftype: Type[Any],
    loader_node: ast.expr,
    context: Dict[str, Any],
    cls: Type[Any],
    i: int,
    path_node: ast.expr,
    get_load_handler_fn: Any,
) -> ast.expr:
    """
    Builds an optimized AST expression to load a value of type 'ftype'.
    Inlines primitive calls and comprehensions for common containers.
    """
    PRIMITIVE_LOADERS = {
        int: "load_int",
        str: "load_str",
        float: "load_float",
        bool: "load_bool",
        bytes: "load_bytes",
    }

    if ftype in PRIMITIVE_LOADERS:
        load_meth = PRIMITIVE_LOADERS[ftype]
        # if is_raw: ... else: loader_node.load_X()
        # For simplicity in _build_load_expr, we use the attribute call.
        # The is_raw optimization is handled in the main loop for primitives.
        return ast.Call(
            func=ast.Attribute(value=loader_node, attr=load_meth, ctx=ast.Load()),
            args=[],
            keywords=[],
        )

    # Pre-resolve handler
    load_call_args: list[ast.expr] = [
        ast.Name(id=f"type_{i}", ctx=ast.Load()),
        loader_node,
        path_node,
        ast.BinOp(
            left=ast.Name(id="depth", ctx=ast.Load()),
            op=ast.Add(),
            right=ast.Constant(value=1),
        ),
    ]
    context[f"type_{i}"] = ftype

    try:
        handler = get_load_handler_fn(ftype, excluding=cls)
        handler_name = f"h_{i}"
        context[handler_name] = handler
        return ast.Call(
            func=ast.Name(id=handler_name, ctx=ast.Load()),
            args=load_call_args,
            keywords=[],
        )
    except ValueError:
        return ast.Call(
            func=ast.Name(id="load_fn", ctx=ast.Load()),
            args=load_call_args,
            keywords=[],
        )


def _build_load_function_ast(
    cls: Type[Any], get_load_handler_fn: Any
) -> Tuple[ast.FunctionDef, Dict[str, Any]]:
    """
    Builds the AST for the optimized load handler of a lodum-enabled class.
    Returns the FunctionDef node and the context dictionary.
    """
    fields: Dict[str, Field] = getattr(cls, "_lodum_fields", {})
    safe_name = _sanitize_name(cls.__name__)
    func_name = f"load_{safe_name}"

    context: Dict[str, Any] = {
        "cls": cls,
        "_cls": cls,
        "DeserializationError": DeserializationError,
        "SerializationError": SerializationError,
        "type": type,
        "isinstance": isinstance,
        "dict": dict,
        "bool": bool,
        "float": float,
        "int": int,
        "str": str,
    }

    # Parameters: (loader, load_fn, path, depth)
    args = ast.arguments(
        args=[
            ast.arg(arg="loader", annotation=None),
            ast.arg(arg="load_fn", annotation=None),
            ast.arg(arg="path", annotation=None),
            ast.arg(arg="depth", annotation=None),
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

    # raw_data = loader.get_dict()
    body.append(
        ast.Assign(
            targets=[ast.Name(id="raw_data", ctx=ast.Store())],
            value=ast.Call(
                func=ast.Attribute(
                    value=ast.Name(id="loader", ctx=ast.Load()),
                    attr="get_dict",
                    ctx=ast.Load(),
                ),
                args=[],
                keywords=[],
            ),
        )
    )

    # if isinstance(raw_data, dict): ... else: ...
    # data = raw_data; is_raw = True
    # try: data = {k: v for k, v in loader.load_dict()}; is_raw = False
    # except DeserializationError: raise ...
    body.append(
        ast.If(
            test=ast.Call(
                func=ast.Name(id="isinstance", ctx=ast.Load()),
                args=[
                    ast.Name(id="raw_data", ctx=ast.Load()),
                    ast.Name(id="dict", ctx=ast.Load()),
                ],
                keywords=[],
            ),
            body=[
                ast.Assign(
                    targets=[ast.Name(id="data", ctx=ast.Store())],
                    value=ast.Name(id="raw_data", ctx=ast.Load()),
                ),
                ast.Assign(
                    targets=[ast.Name(id="is_raw", ctx=ast.Store())],
                    value=ast.Constant(value=True),
                ),
            ],
            orelse=[
                ast.Try(
                    body=[
                        ast.Assign(
                            targets=[ast.Name(id="data", ctx=ast.Store())],
                            value=ast.DictComp(
                                key=ast.Name(id="k", ctx=ast.Load()),
                                value=ast.Name(id="v", ctx=ast.Load()),
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
                                                value=ast.Name(
                                                    id="loader", ctx=ast.Load()
                                                ),
                                                attr="load_dict",
                                                ctx=ast.Load(),
                                            ),
                                            args=[],
                                            keywords=[],
                                        ),
                                        ifs=[],
                                        is_async=0,
                                    )
                                ],
                            ),
                        ),
                        ast.Assign(
                            targets=[ast.Name(id="is_raw", ctx=ast.Store())],
                            value=ast.Constant(value=False),
                        ),
                    ],
                    handlers=[
                        ast.ExceptHandler(
                            type=ast.Name(id="DeserializationError", ctx=ast.Load()),
                            name=None,
                            body=[
                                ast.Raise(
                                    exc=ast.Call(
                                        func=ast.Name(
                                            id="DeserializationError", ctx=ast.Load()
                                        ),
                                        args=[
                                            ast.JoinedStr(
                                                values=[
                                                    ast.Constant(
                                                        value="Expected a dictionary to decode into class "
                                                    ),
                                                    ast.FormattedValue(
                                                        value=ast.Attribute(
                                                            value=ast.Name(
                                                                id="_cls",
                                                                ctx=ast.Load(),
                                                            ),
                                                            attr="__name__",
                                                            ctx=ast.Load(),
                                                        ),
                                                        conversion=-1,
                                                    ),
                                                    ast.Constant(
                                                        value=", but received a different type."
                                                    ),
                                                ]
                                            ),
                                            ast.Name(id="path", ctx=ast.Load()),
                                        ],
                                        keywords=[],
                                    )
                                )
                            ],
                        )
                    ],
                    orelse=[],
                    finalbody=[],
                )
            ],
        )
    )

    # args_dict = {}
    body.append(
        ast.Assign(
            targets=[ast.Name(id="args_dict", ctx=ast.Store())],
            value=ast.Dict(keys=[], values=[]),
        )
    )

    tag = getattr(cls, "_lodum_tag", None)
    tag_value = getattr(cls, "_lodum_tag_value", None)

    if tag:
        context["tag_name"] = tag
        context["tag_value"] = tag_value
        # if tag_name in data:
        #     actual_tag = data[tag_name] if is_raw else data[tag_name].load_any()
        #     if actual_tag != tag_value: raise ...
        body.append(
            ast.If(
                test=ast.Compare(
                    left=ast.Name(id="tag_name", ctx=ast.Load()),
                    ops=[ast.In()],
                    comparators=[ast.Name(id="data", ctx=ast.Load())],
                ),
                body=[
                    ast.Assign(
                        targets=[ast.Name(id="actual_tag", ctx=ast.Store())],
                        value=ast.IfExp(
                            test=ast.Name(id="is_raw", ctx=ast.Load()),
                            body=ast.Subscript(
                                value=ast.Name(id="data", ctx=ast.Load()),
                                slice=ast.Name(id="tag_name", ctx=ast.Load()),
                                ctx=ast.Load(),
                            ),
                            orelse=ast.Call(
                                func=ast.Attribute(
                                    value=ast.Subscript(
                                        value=ast.Name(id="data", ctx=ast.Load()),
                                        slice=ast.Name(id="tag_name", ctx=ast.Load()),
                                        ctx=ast.Load(),
                                    ),
                                    attr="load_any",
                                    ctx=ast.Load(),
                                ),
                                args=[],
                                keywords=[],
                            ),
                        ),
                    ),
                    ast.If(
                        test=ast.Compare(
                            left=ast.Name(id="actual_tag", ctx=ast.Load()),
                            ops=[ast.NotEq()],
                            comparators=[ast.Name(id="tag_value", ctx=ast.Load())],
                        ),
                        body=[
                            ast.Raise(
                                exc=ast.Call(
                                    func=ast.Name(
                                        id="DeserializationError", ctx=ast.Load()
                                    ),
                                    args=[
                                        ast.JoinedStr(
                                            values=[
                                                ast.Constant(
                                                    value="Invalid tag value: expected "
                                                ),
                                                ast.FormattedValue(
                                                    value=ast.Name(
                                                        id="tag_value", ctx=ast.Load()
                                                    ),
                                                    conversion=-1,
                                                ),
                                                ast.Constant(value=", got "),
                                                ast.FormattedValue(
                                                    value=ast.Name(
                                                        id="actual_tag", ctx=ast.Load()
                                                    ),
                                                    conversion=-1,
                                                ),
                                            ]
                                        ),
                                        ast.Name(id="path", ctx=ast.Load()),
                                    ],
                                    keywords=[],
                                )
                            )
                        ],
                        orelse=[],
                    ),
                ],
                orelse=[],
            )
        )

    PRIMITIVE_LOADERS = {
        int: "load_int",
        str: "load_str",
        float: "load_float",
        bool: "load_bool",
        bytes: "load_bytes",
    }

    for i, (field_name, field_info) in enumerate(fields.items()):
        field_json_name = field_info.rename if field_info.rename else field_info.name

        # field_path = f'{path}.{field_json_name}' if path else field_json_name
        body.append(
            ast.Assign(
                targets=[ast.Name(id="field_path", ctx=ast.Store())],
                value=ast.IfExp(
                    test=ast.Name(id="path", ctx=ast.Load()),
                    body=ast.JoinedStr(
                        values=[
                            ast.FormattedValue(
                                value=ast.Name(id="path", ctx=ast.Load()), conversion=-1
                            ),
                            ast.Constant(value=f".{field_json_name}"),
                        ]
                    ),
                    orelse=ast.Constant(value=field_json_name),
                ),
            )
        )

        # if field_json_name in data:
        field_present_body: list[ast.stmt] = []
        val_loader_assign = ast.Assign(
            targets=[ast.Name(id="val_loader", ctx=ast.Store())],
            value=ast.Subscript(
                value=ast.Name(id="data", ctx=ast.Load()),
                slice=ast.Constant(value=field_json_name),
                ctx=ast.Load(),
            ),
        )
        field_present_body.append(val_loader_assign)

        if field_info.deserializer:
            deser_name = f"deser_{i}"
            context[deser_name] = field_info.deserializer
            # try: args_dict['field_name'] = deser_n(val_loader if is_raw else val_loader.load_any())
            # except DeserializationError as e: raise DeserializationError(e.raw_message, e.path or field_path)
            field_present_body.append(
                ast.Try(
                    body=[
                        ast.Assign(
                            targets=[
                                ast.Subscript(
                                    value=ast.Name(id="args_dict", ctx=ast.Load()),
                                    slice=ast.Constant(value=field_name),
                                    ctx=ast.Store(),
                                )
                            ],
                            value=ast.Call(
                                func=ast.Name(id=deser_name, ctx=ast.Load()),
                                args=[
                                    ast.IfExp(
                                        test=ast.Name(id="is_raw", ctx=ast.Load()),
                                        body=ast.Name(id="val_loader", ctx=ast.Load()),
                                        orelse=ast.Call(
                                            func=ast.Attribute(
                                                value=ast.Name(
                                                    id="val_loader", ctx=ast.Load()
                                                ),
                                                attr="load_any",
                                                ctx=ast.Load(),
                                            ),
                                            args=[],
                                            keywords=[],
                                        ),
                                    )
                                ],
                                keywords=[],
                            ),
                        )
                    ],
                    handlers=[
                        ast.ExceptHandler(
                            type=ast.Name(id="DeserializationError", ctx=ast.Load()),
                            name="e",
                            body=[
                                ast.Raise(
                                    exc=ast.Call(
                                        func=ast.Name(
                                            id="DeserializationError", ctx=ast.Load()
                                        ),
                                        args=[
                                            ast.Attribute(
                                                value=ast.Name(id="e", ctx=ast.Load()),
                                                attr="raw_message",
                                                ctx=ast.Load(),
                                            ),
                                            ast.BoolOp(
                                                op=ast.Or(),
                                                values=[
                                                    ast.Attribute(
                                                        value=ast.Name(
                                                            id="e", ctx=ast.Load()
                                                        ),
                                                        attr="path",
                                                        ctx=ast.Load(),
                                                    ),
                                                    ast.Name(
                                                        id="field_path", ctx=ast.Load()
                                                    ),
                                                ],
                                            ),
                                        ],
                                        keywords=[],
                                    )
                                )
                            ],
                        )
                    ],
                    orelse=[],
                    finalbody=[],
                )
            )
        else:
            ftype = field_info.type
            if ftype in PRIMITIVE_LOADERS:
                load_meth = PRIMITIVE_LOADERS[ftype]
                # if is_raw: check type and assign; else: val_loader.load_X()
                raw_body: list[ast.stmt] = []
                if ftype is int:
                    raw_body.append(
                        ast.If(
                            test=ast.BoolOp(
                                op=ast.Or(),
                                values=[
                                    ast.UnaryOp(
                                        op=ast.Not(),
                                        operand=ast.Call(
                                            func=ast.Name(
                                                id="isinstance", ctx=ast.Load()
                                            ),
                                            args=[
                                                ast.Name(
                                                    id="val_loader", ctx=ast.Load()
                                                ),
                                                ast.Name(id="int", ctx=ast.Load()),
                                            ],
                                            keywords=[],
                                        ),
                                    ),
                                    ast.Call(
                                        func=ast.Name(id="isinstance", ctx=ast.Load()),
                                        args=[
                                            ast.Name(id="val_loader", ctx=ast.Load()),
                                            ast.Name(id="bool", ctx=ast.Load()),
                                        ],
                                        keywords=[],
                                    ),
                                ],
                            ),
                            body=[
                                ast.Raise(
                                    exc=ast.Call(
                                        func=ast.Name(
                                            id="DeserializationError", ctx=ast.Load()
                                        ),
                                        args=[
                                            ast.JoinedStr(
                                                values=[
                                                    ast.Constant(
                                                        value="Expected int, got "
                                                    ),
                                                    ast.FormattedValue(
                                                        value=ast.Attribute(
                                                            value=ast.Call(
                                                                func=ast.Name(
                                                                    id="type",
                                                                    ctx=ast.Load(),
                                                                ),
                                                                args=[
                                                                    ast.Name(
                                                                        id="val_loader",
                                                                        ctx=ast.Load(),
                                                                    )
                                                                ],
                                                                keywords=[],
                                                            ),
                                                            attr="__name__",
                                                            ctx=ast.Load(),
                                                        ),
                                                        conversion=-1,
                                                    ),
                                                ]
                                            ),
                                            ast.Name(id="field_path", ctx=ast.Load()),
                                        ],
                                        keywords=[],
                                    )
                                )
                            ],
                            orelse=[],
                        )
                    )
                    raw_body.append(
                        ast.Assign(
                            targets=[
                                ast.Subscript(
                                    value=ast.Name(id="args_dict", ctx=ast.Load()),
                                    slice=ast.Constant(value=field_name),
                                    ctx=ast.Store(),
                                )
                            ],
                            value=ast.Name(id="val_loader", ctx=ast.Load()),
                        )
                    )
                elif ftype is str:
                    raw_body.append(
                        ast.If(
                            test=ast.UnaryOp(
                                op=ast.Not(),
                                operand=ast.Call(
                                    func=ast.Name(id="isinstance", ctx=ast.Load()),
                                    args=[
                                        ast.Name(id="val_loader", ctx=ast.Load()),
                                        ast.Name(id="str", ctx=ast.Load()),
                                    ],
                                    keywords=[],
                                ),
                            ),
                            body=[
                                ast.Raise(
                                    exc=ast.Call(
                                        func=ast.Name(
                                            id="DeserializationError", ctx=ast.Load()
                                        ),
                                        args=[
                                            ast.JoinedStr(
                                                values=[
                                                    ast.Constant(
                                                        value="Expected str, got "
                                                    ),
                                                    ast.FormattedValue(
                                                        value=ast.Attribute(
                                                            value=ast.Call(
                                                                func=ast.Name(
                                                                    id="type",
                                                                    ctx=ast.Load(),
                                                                ),
                                                                args=[
                                                                    ast.Name(
                                                                        id="val_loader",
                                                                        ctx=ast.Load(),
                                                                    )
                                                                ],
                                                                keywords=[],
                                                            ),
                                                            attr="__name__",
                                                            ctx=ast.Load(),
                                                        ),
                                                        conversion=-1,
                                                    ),
                                                ]
                                            ),
                                            ast.Name(id="field_path", ctx=ast.Load()),
                                        ],
                                        keywords=[],
                                    )
                                )
                            ],
                            orelse=[],
                        )
                    )
                    raw_body.append(
                        ast.Assign(
                            targets=[
                                ast.Subscript(
                                    value=ast.Name(id="args_dict", ctx=ast.Load()),
                                    slice=ast.Constant(value=field_name),
                                    ctx=ast.Store(),
                                )
                            ],
                            value=ast.Name(id="val_loader", ctx=ast.Load()),
                        )
                    )
                elif ftype is float:
                    raw_body.append(
                        ast.If(
                            test=ast.UnaryOp(
                                op=ast.Not(),
                                operand=ast.Call(
                                    func=ast.Name(id="isinstance", ctx=ast.Load()),
                                    args=[
                                        ast.Name(id="val_loader", ctx=ast.Load()),
                                        ast.Tuple(
                                            elts=[
                                                ast.Name(id="float", ctx=ast.Load()),
                                                ast.Name(id="int", ctx=ast.Load()),
                                            ],
                                            ctx=ast.Load(),
                                        ),
                                    ],
                                    keywords=[],
                                ),
                            ),
                            body=[
                                ast.Raise(
                                    exc=ast.Call(
                                        func=ast.Name(
                                            id="DeserializationError", ctx=ast.Load()
                                        ),
                                        args=[
                                            ast.JoinedStr(
                                                values=[
                                                    ast.Constant(
                                                        value="Expected float, got "
                                                    ),
                                                    ast.FormattedValue(
                                                        value=ast.Attribute(
                                                            value=ast.Call(
                                                                func=ast.Name(
                                                                    id="type",
                                                                    ctx=ast.Load(),
                                                                ),
                                                                args=[
                                                                    ast.Name(
                                                                        id="val_loader",
                                                                        ctx=ast.Load(),
                                                                    )
                                                                ],
                                                                keywords=[],
                                                            ),
                                                            attr="__name__",
                                                            ctx=ast.Load(),
                                                        ),
                                                        conversion=-1,
                                                    ),
                                                ]
                                            ),
                                            ast.Name(id="field_path", ctx=ast.Load()),
                                        ],
                                        keywords=[],
                                    )
                                )
                            ],
                            orelse=[],
                        )
                    )
                    raw_body.append(
                        ast.Assign(
                            targets=[
                                ast.Subscript(
                                    value=ast.Name(id="args_dict", ctx=ast.Load()),
                                    slice=ast.Constant(value=field_name),
                                    ctx=ast.Store(),
                                )
                            ],
                            value=ast.Call(
                                func=ast.Name(id="float", ctx=ast.Load()),
                                args=[ast.Name(id="val_loader", ctx=ast.Load())],
                                keywords=[],
                            ),
                        )
                    )
                elif ftype is bool:
                    raw_body.append(
                        ast.If(
                            test=ast.UnaryOp(
                                op=ast.Not(),
                                operand=ast.Call(
                                    func=ast.Name(id="isinstance", ctx=ast.Load()),
                                    args=[
                                        ast.Name(id="val_loader", ctx=ast.Load()),
                                        ast.Name(id="bool", ctx=ast.Load()),
                                    ],
                                    keywords=[],
                                ),
                            ),
                            body=[
                                ast.Raise(
                                    exc=ast.Call(
                                        func=ast.Name(
                                            id="DeserializationError", ctx=ast.Load()
                                        ),
                                        args=[
                                            ast.JoinedStr(
                                                values=[
                                                    ast.Constant(
                                                        value="Expected bool, got "
                                                    ),
                                                    ast.FormattedValue(
                                                        value=ast.Attribute(
                                                            value=ast.Call(
                                                                func=ast.Name(
                                                                    id="type",
                                                                    ctx=ast.Load(),
                                                                ),
                                                                args=[
                                                                    ast.Name(
                                                                        id="val_loader",
                                                                        ctx=ast.Load(),
                                                                    )
                                                                ],
                                                                keywords=[],
                                                            ),
                                                            attr="__name__",
                                                            ctx=ast.Load(),
                                                        ),
                                                        conversion=-1,
                                                    ),
                                                ]
                                            ),
                                            ast.Name(id="field_path", ctx=ast.Load()),
                                        ],
                                        keywords=[],
                                    )
                                )
                            ],
                            orelse=[],
                        )
                    )
                    raw_body.append(
                        ast.Assign(
                            targets=[
                                ast.Subscript(
                                    value=ast.Name(id="args_dict", ctx=ast.Load()),
                                    slice=ast.Constant(value=field_name),
                                    ctx=ast.Store(),
                                )
                            ],
                            value=ast.Name(id="val_loader", ctx=ast.Load()),
                        )
                    )
                elif ftype is bytes:
                    raw_body.append(
                        ast.Try(
                            body=[
                                ast.Assign(
                                    targets=[
                                        ast.Subscript(
                                            value=ast.Name(
                                                id="args_dict", ctx=ast.Load()
                                            ),
                                            slice=ast.Constant(value=field_name),
                                            ctx=ast.Store(),
                                        )
                                    ],
                                    value=ast.Call(
                                        func=ast.Attribute(
                                            value=ast.Name(id="loader", ctx=ast.Load()),
                                            attr="load_bytes_value",
                                            ctx=ast.Load(),
                                        ),
                                        args=[
                                            ast.Name(id="val_loader", ctx=ast.Load())
                                        ],
                                        keywords=[],
                                    ),
                                )
                            ],
                            handlers=[
                                ast.ExceptHandler(
                                    type=ast.Name(
                                        id="DeserializationError", ctx=ast.Load()
                                    ),
                                    name="e",
                                    body=[
                                        ast.Raise(
                                            exc=ast.Call(
                                                func=ast.Name(
                                                    id="DeserializationError",
                                                    ctx=ast.Load(),
                                                ),
                                                args=[
                                                    ast.Attribute(
                                                        value=ast.Name(
                                                            id="e", ctx=ast.Load()
                                                        ),
                                                        attr="raw_message",
                                                        ctx=ast.Load(),
                                                    ),
                                                    ast.BoolOp(
                                                        op=ast.Or(),
                                                        values=[
                                                            ast.Attribute(
                                                                value=ast.Name(
                                                                    id="e",
                                                                    ctx=ast.Load(),
                                                                ),
                                                                attr="path",
                                                                ctx=ast.Load(),
                                                            ),
                                                            ast.Name(
                                                                id="field_path",
                                                                ctx=ast.Load(),
                                                            ),
                                                        ],
                                                    ),
                                                ],
                                                keywords=[],
                                            )
                                        )
                                    ],
                                )
                            ],
                            orelse=[],
                            finalbody=[],
                        )
                    )

                field_present_body.append(
                    ast.If(
                        test=ast.Name(id="is_raw", ctx=ast.Load()),
                        body=raw_body,
                        orelse=[
                            ast.Try(
                                body=[
                                    ast.Assign(
                                        targets=[
                                            ast.Subscript(
                                                value=ast.Name(
                                                    id="args_dict", ctx=ast.Load()
                                                ),
                                                slice=ast.Constant(value=field_name),
                                                ctx=ast.Store(),
                                            )
                                        ],
                                        value=ast.Call(
                                            func=ast.Attribute(
                                                value=ast.Name(
                                                    id="val_loader", ctx=ast.Load()
                                                ),
                                                attr=load_meth,
                                                ctx=ast.Load(),
                                            ),
                                            args=[],
                                            keywords=[],
                                        ),
                                    )
                                ],
                                handlers=[
                                    ast.ExceptHandler(
                                        type=ast.Name(
                                            id="DeserializationError", ctx=ast.Load()
                                        ),
                                        name="e",
                                        body=[
                                            ast.Raise(
                                                exc=ast.Call(
                                                    func=ast.Name(
                                                        id="DeserializationError",
                                                        ctx=ast.Load(),
                                                    ),
                                                    args=[
                                                        ast.Attribute(
                                                            value=ast.Name(
                                                                id="e", ctx=ast.Load()
                                                            ),
                                                            attr="raw_message",
                                                            ctx=ast.Load(),
                                                        ),
                                                        ast.BoolOp(
                                                            op=ast.Or(),
                                                            values=[
                                                                ast.Attribute(
                                                                    value=ast.Name(
                                                                        id="e",
                                                                        ctx=ast.Load(),
                                                                    ),
                                                                    attr="path",
                                                                    ctx=ast.Load(),
                                                                ),
                                                                ast.Name(
                                                                    id="field_path",
                                                                    ctx=ast.Load(),
                                                                ),
                                                            ],
                                                        ),
                                                    ],
                                                    keywords=[],
                                                )
                                            )
                                        ],
                                    )
                                ],
                                orelse=[],
                                finalbody=[],
                            )
                        ],
                    )
                )
            else:
                type_name = f"type_{i}"
                context[type_name] = ftype
                # val_to_load = val_loader if not is_raw else type(loader)(val_loader)
                # try: args_dict['field_name'] = load_fn(type_name, val_to_load, field_path, depth + 1)
                field_present_body.append(
                    ast.Assign(
                        targets=[ast.Name(id="val_to_load", ctx=ast.Store())],
                        value=ast.IfExp(
                            test=ast.UnaryOp(
                                op=ast.Not(),
                                operand=ast.Name(id="is_raw", ctx=ast.Load()),
                            ),
                            body=ast.Name(id="val_loader", ctx=ast.Load()),
                            orelse=ast.Call(
                                func=ast.Call(
                                    func=ast.Name(id="type", ctx=ast.Load()),
                                    args=[ast.Name(id="loader", ctx=ast.Load())],
                                    keywords=[],
                                ),
                                args=[ast.Name(id="val_loader", ctx=ast.Load())],
                                keywords=[],
                            ),
                        ),
                    )
                )

                load_expr = _build_load_expr(
                    ftype,
                    ast.Name(id="val_to_load", ctx=ast.Load()),
                    context,
                    cls,
                    i,
                    ast.Name(id="field_path", ctx=ast.Load()),
                    get_load_handler_fn,
                )

                field_present_body.append(
                    ast.Try(
                        body=[
                            ast.Assign(
                                targets=[
                                    ast.Subscript(
                                        value=ast.Name(id="args_dict", ctx=ast.Load()),
                                        slice=ast.Constant(value=field_name),
                                        ctx=ast.Store(),
                                    )
                                ],
                                value=load_expr,
                            )
                        ],
                        handlers=[
                            ast.ExceptHandler(
                                type=ast.Name(
                                    id="DeserializationError", ctx=ast.Load()
                                ),
                                name="e",
                                body=[
                                    ast.Raise(
                                        exc=ast.Call(
                                            func=ast.Name(
                                                id="DeserializationError",
                                                ctx=ast.Load(),
                                            ),
                                            args=[
                                                ast.Attribute(
                                                    value=ast.Name(
                                                        id="e", ctx=ast.Load()
                                                    ),
                                                    attr="raw_message",
                                                    ctx=ast.Load(),
                                                ),
                                                ast.BoolOp(
                                                    op=ast.Or(),
                                                    values=[
                                                        ast.Attribute(
                                                            value=ast.Name(
                                                                id="e", ctx=ast.Load()
                                                            ),
                                                            attr="path",
                                                            ctx=ast.Load(),
                                                        ),
                                                        ast.Name(
                                                            id="field_path",
                                                            ctx=ast.Load(),
                                                        ),
                                                    ],
                                                ),
                                            ],
                                            keywords=[],
                                        )
                                    )
                                ],
                            )
                        ],
                        orelse=[],
                        finalbody=[],
                    )
                )

        field_missing_body: list[ast.stmt] = []
        if field_info.has_default:
            default_getter = f"default_{i}"
            context[default_getter] = field_info.get_default
            field_missing_body.append(
                ast.Assign(
                    targets=[
                        ast.Subscript(
                            value=ast.Name(id="args_dict", ctx=ast.Load()),
                            slice=ast.Constant(value=field_name),
                            ctx=ast.Store(),
                        )
                    ],
                    value=ast.Call(
                        func=ast.Name(id=default_getter, ctx=ast.Load()),
                        args=[],
                        keywords=[],
                    ),
                )
            )
        else:
            field_missing_body.append(
                ast.Raise(
                    exc=ast.Call(
                        func=ast.Name(id="DeserializationError", ctx=ast.Load()),
                        args=[
                            ast.JoinedStr(
                                values=[
                                    ast.Constant(value="Missing required field '"),
                                    ast.Constant(value=field_json_name),
                                    ast.Constant(value="' for class "),
                                    ast.FormattedValue(
                                        value=ast.Attribute(
                                            value=ast.Name(id="_cls", ctx=ast.Load()),
                                            attr="__name__",
                                            ctx=ast.Load(),
                                        ),
                                        conversion=-1,
                                    ),
                                ]
                            ),
                            ast.Name(id="path", ctx=ast.Load()),
                        ],
                        keywords=[],
                    )
                )
            )

        body.append(
            ast.If(
                test=ast.Compare(
                    left=ast.Constant(value=field_json_name),
                    ops=[ast.In()],
                    comparators=[ast.Name(id="data", ctx=ast.Load())],
                ),
                body=field_present_body,
                orelse=field_missing_body,
            )
        )

        if field_info.validate:
            validators = (
                field_info.validate
                if isinstance(field_info.validate, list)
                else [field_info.validate]
            )
            for j, v in enumerate(validators):
                v_name = f"v_{i}_{j}"
                context[v_name] = v
                body.append(
                    ast.Try(
                        body=[
                            ast.Expr(
                                value=ast.Call(
                                    func=ast.Name(id=v_name, ctx=ast.Load()),
                                    args=[
                                        ast.Subscript(
                                            value=ast.Name(
                                                id="args_dict", ctx=ast.Load()
                                            ),
                                            slice=ast.Constant(value=field_name),
                                            ctx=ast.Load(),
                                        )
                                    ],
                                    keywords=[],
                                )
                            )
                        ],
                        handlers=[
                            ast.ExceptHandler(
                                type=ast.Name(
                                    id="DeserializationError", ctx=ast.Load()
                                ),
                                name="e",
                                body=[
                                    ast.Raise(
                                        exc=ast.Call(
                                            func=ast.Name(
                                                id="DeserializationError",
                                                ctx=ast.Load(),
                                            ),
                                            args=[
                                                ast.Attribute(
                                                    value=ast.Name(
                                                        id="e", ctx=ast.Load()
                                                    ),
                                                    attr="raw_message",
                                                    ctx=ast.Load(),
                                                ),
                                                ast.BoolOp(
                                                    op=ast.Or(),
                                                    values=[
                                                        ast.Attribute(
                                                            value=ast.Name(
                                                                id="e", ctx=ast.Load()
                                                            ),
                                                            attr="path",
                                                            ctx=ast.Load(),
                                                        ),
                                                        ast.Name(
                                                            id="field_path",
                                                            ctx=ast.Load(),
                                                        ),
                                                    ],
                                                ),
                                            ],
                                            keywords=[],
                                        )
                                    )
                                ],
                            )
                        ],
                        orelse=[],
                        finalbody=[],
                    )
                )

    # try: return _cls(**args_dict)
    # except TypeError as e: raise DeserializationError(f'Failed to instantiate {_cls.__name__}. Original error: {e}', path)
    body.append(
        ast.Try(
            body=[
                ast.Return(
                    value=ast.Call(
                        func=ast.Name(id="_cls", ctx=ast.Load()),
                        args=[],
                        keywords=[
                            ast.keyword(
                                arg=None, value=ast.Name(id="args_dict", ctx=ast.Load())
                            )
                        ],
                    )
                )
            ],
            handlers=[
                ast.ExceptHandler(
                    type=ast.Name(id="TypeError", ctx=ast.Load()),
                    name="e",
                    body=[
                        ast.Raise(
                            exc=ast.Call(
                                func=ast.Name(
                                    id="DeserializationError", ctx=ast.Load()
                                ),
                                args=[
                                    ast.JoinedStr(
                                        values=[
                                            ast.Constant(
                                                value="Failed to instantiate "
                                            ),
                                            ast.FormattedValue(
                                                value=ast.Attribute(
                                                    value=ast.Name(
                                                        id="_cls", ctx=ast.Load()
                                                    ),
                                                    attr="__name__",
                                                    ctx=ast.Load(),
                                                ),
                                                conversion=-1,
                                            ),
                                            ast.Constant(value=". Original error: "),
                                            ast.FormattedValue(
                                                value=ast.Name(id="e", ctx=ast.Load()),
                                                conversion=-1,
                                            ),
                                        ]
                                    ),
                                    ast.Name(id="path", ctx=ast.Load()),
                                ],
                                keywords=[],
                            )
                        )
                    ],
                )
            ],
            orelse=[],
            finalbody=[],
        )
    )

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
