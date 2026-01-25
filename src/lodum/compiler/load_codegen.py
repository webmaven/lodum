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
        return b.call(b.attr(loader_node, load_meth))

    # Pre-resolve handler
    load_call_args: list[ast.expr] = [
        b.load(f"type_{i}"),
        loader_node,
        path_node,
        b.add(b.load("depth"), b.const(1)),
    ]
    context[f"type_{i}"] = ftype

    try:
        handler = get_load_handler_fn(ftype, excluding=cls)
        handler_name = f"h_{i}"
        context[handler_name] = handler
        return b.call(handler_name, load_call_args)
    except ValueError:
        return b.call("load_fn", load_call_args)


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
    args = b.arguments(["loader", "load_fn", "path", "depth"])

    body: list[ast.stmt] = []

    # _cls = cls
    body.append(b.assign("_cls", b.load("cls")))

    # raw_data = loader.get_dict()
    body.append(b.assign("raw_data", b.call(b.attr("loader", "get_dict"))))

    # if isinstance(raw_data, dict): ... else: ...
    body.append(
        b.if_stmt(
            test=b.isinstance("raw_data", b.load("dict")),
            body=[
                b.assign("data", b.load("raw_data")),
                b.assign("is_raw", b.const(True)),
            ],
            orelse=[
                b.try_except(
                    body=[
                        b.assign(
                            "data",
                            b.dict_comp(
                                key=b.load("k"),
                                value=b.load("v"),
                                targets=["k", "v"],
                                iter_node=b.call(b.attr("loader", "load_dict")),
                            ),
                        ),
                        b.assign("is_raw", b.const(False)),
                    ],
                    handlers=[
                        b.except_handler(
                            type_node=b.load("DeserializationError"),
                            name=None,
                            body=[
                                b.raise_stmt(
                                    b.call(
                                        "DeserializationError",
                                        [
                                            b.joined_str(
                                                [
                                                    b.const(
                                                        "Expected a dictionary to decode into class "
                                                    ),
                                                    b.formatted_value(
                                                        b.attr("_cls", "__name__")
                                                    ),
                                                    b.const(
                                                        ", but received a different type."
                                                    ),
                                                ]
                                            ),
                                            b.load("path"),
                                        ],
                                    )
                                )
                            ],
                        )
                    ],
                )
            ],
        )
    )

    # args_dict = {}
    body.append(b.assign("args_dict", ast.Dict(keys=[], values=[])))

    tag = getattr(cls, "_lodum_tag", None)
    tag_value = getattr(cls, "_lodum_tag_value", None)

    if tag:
        context["tag_name"] = tag
        context["tag_value"] = tag_value
        # if tag_name in data:
        body.append(
            b.if_stmt(
                test=b.compare(b.load("tag_name"), ast.In(), b.load("data")),
                body=[
                    b.assign(
                        "actual_tag",
                        b.if_exp(
                            test=b.load("is_raw"),
                            body=b.subscript("data", b.load("tag_name")),
                            orelse=b.call(
                                b.attr(
                                    b.subscript("data", b.load("tag_name")), "load_any"
                                )
                            ),
                        ),
                    ),
                    b.if_stmt(
                        test=b.compare(
                            b.load("actual_tag"), ast.NotEq(), b.load("tag_value")
                        ),
                        body=[
                            b.raise_stmt(
                                b.call(
                                    "DeserializationError",
                                    [
                                        b.joined_str(
                                            [
                                                b.const("Invalid tag value: expected "),
                                                b.formatted_value(b.load("tag_value")),
                                                b.const(", got "),
                                                b.formatted_value(b.load("actual_tag")),
                                            ]
                                        ),
                                        b.load("path"),
                                    ],
                                )
                            )
                        ],
                    ),
                ],
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
            b.assign(
                "field_path",
                b.if_exp(
                    test=b.load("path"),
                    body=b.joined_str(
                        [
                            b.formatted_value(b.load("path")),
                            b.const(f".{field_json_name}"),
                        ]
                    ),
                    orelse=b.const(field_json_name),
                ),
            )
        )

        # if field_json_name in data:
        field_present_body: list[ast.stmt] = []
        field_present_body.append(
            b.assign("val_loader", b.subscript("data", b.const(field_json_name)))
        )

        if field_info.deserializer:
            deser_name = f"deser_{i}"
            context[deser_name] = field_info.deserializer
            field_present_body.append(
                b.try_except(
                    body=[
                        b.assign(
                            b.subscript("args_dict", b.const(field_name), load=False),
                            b.call(
                                deser_name,
                                [
                                    b.if_exp(
                                        test=b.load("is_raw"),
                                        body=b.load("val_loader"),
                                        orelse=b.call(b.attr("val_loader", "load_any")),
                                    )
                                ],
                            ),
                        )
                    ],
                    handlers=[
                        b.except_handler(
                            type_node=b.load("DeserializationError"),
                            name="e",
                            body=[
                                b.raise_stmt(
                                    b.call(
                                        "DeserializationError",
                                        [
                                            b.attr("e", "raw_message"),
                                            ast.BoolOp(
                                                op=ast.Or(),
                                                values=[
                                                    b.attr("e", "path"),
                                                    b.load("field_path"),
                                                ],
                                            ),
                                        ],
                                    )
                                )
                            ],
                        )
                    ],
                )
            )
        else:
            ftype = field_info.type
            if ftype in PRIMITIVE_LOADERS:
                load_meth = PRIMITIVE_LOADERS[ftype]
                raw_body: list[ast.stmt] = []
                if ftype is int:
                    raw_body.append(
                        b.if_stmt(
                            test=ast.BoolOp(
                                op=ast.Or(),
                                values=[
                                    b.sub(
                                        b.const(True),
                                        b.isinstance("val_loader", b.load("int")),
                                    ),
                                    b.isinstance("val_loader", b.load("bool")),
                                ],
                            ),
                            body=[
                                b.raise_stmt(
                                    b.call(
                                        "DeserializationError",
                                        [
                                            b.joined_str(
                                                [
                                                    b.const("Expected int, got "),
                                                    b.formatted_value(
                                                        b.attr(
                                                            b.call(
                                                                "type",
                                                                [b.load("val_loader")],
                                                            ),
                                                            "__name__",
                                                        )
                                                    ),
                                                ]
                                            ),
                                            b.load("field_path"),
                                        ],
                                    )
                                )
                            ],
                        )
                    )
                    raw_body.append(
                        b.assign(
                            b.subscript("args_dict", b.const(field_name), load=False),
                            b.load("val_loader"),
                        )
                    )
                elif ftype is str:
                    raw_body.append(
                        b.if_stmt(
                            test=b.sub(
                                b.const(True), b.isinstance("val_loader", b.load("str"))
                            ),
                            body=[
                                b.raise_stmt(
                                    b.call(
                                        "DeserializationError",
                                        [
                                            b.joined_str(
                                                [
                                                    b.const("Expected str, got "),
                                                    b.formatted_value(
                                                        b.attr(
                                                            b.call(
                                                                "type",
                                                                [b.load("val_loader")],
                                                            ),
                                                            "__name__",
                                                        )
                                                    ),
                                                ]
                                            ),
                                            b.load("field_path"),
                                        ],
                                    )
                                )
                            ],
                        )
                    )
                    raw_body.append(
                        b.assign(
                            b.subscript("args_dict", b.const(field_name), load=False),
                            b.load("val_loader"),
                        )
                    )
                elif ftype is float:
                    raw_body.append(
                        b.if_stmt(
                            test=b.sub(
                                b.const(True),
                                b.isinstance(
                                    "val_loader",
                                    ast.Tuple(
                                        elts=[b.load("float"), b.load("int")],
                                        ctx=ast.Load(),
                                    ),
                                ),
                            ),
                            body=[
                                b.raise_stmt(
                                    b.call(
                                        "DeserializationError",
                                        [
                                            b.joined_str(
                                                [
                                                    b.const("Expected float, got "),
                                                    b.formatted_value(
                                                        b.attr(
                                                            b.call(
                                                                "type",
                                                                [b.load("val_loader")],
                                                            ),
                                                            "__name__",
                                                        )
                                                    ),
                                                ]
                                            ),
                                            b.load("field_path"),
                                        ],
                                    )
                                )
                            ],
                        )
                    )
                    raw_body.append(
                        b.assign(
                            b.subscript("args_dict", b.const(field_name), load=False),
                            b.call("float", [b.load("val_loader")]),
                        )
                    )
                elif ftype is bool:
                    raw_body.append(
                        b.if_stmt(
                            test=b.sub(
                                b.const(True),
                                b.isinstance("val_loader", b.load("bool")),
                            ),
                            body=[
                                b.raise_stmt(
                                    b.call(
                                        "DeserializationError",
                                        [
                                            b.joined_str(
                                                [
                                                    b.const("Expected bool, got "),
                                                    b.formatted_value(
                                                        b.attr(
                                                            b.call(
                                                                "type",
                                                                [b.load("val_loader")],
                                                            ),
                                                            "__name__",
                                                        )
                                                    ),
                                                ]
                                            ),
                                            b.load("field_path"),
                                        ],
                                    )
                                )
                            ],
                        )
                    )
                    raw_body.append(
                        b.assign(
                            b.subscript("args_dict", b.const(field_name), load=False),
                            b.load("val_loader"),
                        )
                    )
                elif ftype is bytes:
                    raw_body.append(
                        b.try_except(
                            body=[
                                b.assign(
                                    b.subscript(
                                        "args_dict", b.const(field_name), load=False
                                    ),
                                    b.call(
                                        b.attr("loader", "load_bytes_value"),
                                        [b.load("val_loader")],
                                    ),
                                )
                            ],
                            handlers=[
                                b.except_handler(
                                    type_node=b.load("DeserializationError"),
                                    name="e",
                                    body=[
                                        b.raise_stmt(
                                            b.call(
                                                "DeserializationError",
                                                [
                                                    b.attr("e", "raw_message"),
                                                    ast.BoolOp(
                                                        op=ast.Or(),
                                                        values=[
                                                            b.attr("e", "path"),
                                                            b.load("field_path"),
                                                        ],
                                                    ),
                                                ],
                                            )
                                        )
                                    ],
                                )
                            ],
                        )
                    )

                field_present_body.append(
                    b.if_stmt(
                        test=b.load("is_raw"),
                        body=raw_body,
                        orelse=[
                            b.try_except(
                                body=[
                                    b.assign(
                                        b.subscript(
                                            "args_dict", b.const(field_name), load=False
                                        ),
                                        b.call(b.attr("val_loader", load_meth)),
                                    )
                                ],
                                handlers=[
                                    b.except_handler(
                                        type_node=b.load("DeserializationError"),
                                        name="e",
                                        body=[
                                            b.raise_stmt(
                                                b.call(
                                                    "DeserializationError",
                                                    [
                                                        b.attr("e", "raw_message"),
                                                        ast.BoolOp(
                                                            op=ast.Or(),
                                                            values=[
                                                                b.attr("e", "path"),
                                                                b.load("field_path"),
                                                            ],
                                                        ),
                                                    ],
                                                )
                                            )
                                        ],
                                    )
                                ],
                            )
                        ],
                    )
                )
            else:
                type_name = f"type_{i}"
                context[type_name] = ftype
                field_present_body.append(
                    b.assign(
                        "val_to_load",
                        b.if_exp(
                            test=b.sub(b.const(True), b.load("is_raw")),
                            body=b.load("val_loader"),
                            orelse=b.call(
                                b.call("type", [b.load("loader")]),
                                [b.load("val_loader")],
                            ),
                        ),
                    )
                )

                load_expr = _build_load_expr(
                    ftype,
                    b.load("val_to_load"),
                    context,
                    cls,
                    i,
                    b.load("field_path"),
                    get_load_handler_fn,
                )

                field_present_body.append(
                    b.try_except(
                        body=[
                            b.assign(
                                b.subscript(
                                    "args_dict", b.const(field_name), load=False
                                ),
                                load_expr,
                            )
                        ],
                        handlers=[
                            b.except_handler(
                                type_node=b.load("DeserializationError"),
                                name="e",
                                body=[
                                    b.raise_stmt(
                                        b.call(
                                            "DeserializationError",
                                            [
                                                b.attr("e", "raw_message"),
                                                ast.BoolOp(
                                                    op=ast.Or(),
                                                    values=[
                                                        b.attr("e", "path"),
                                                        b.load("field_path"),
                                                    ],
                                                ),
                                            ],
                                        )
                                    )
                                ],
                            )
                        ],
                    )
                )

        field_missing_body: list[ast.stmt] = []
        if field_info.has_default:
            default_getter = f"default_{i}"
            context[default_getter] = field_info.get_default
            field_missing_body.append(
                b.assign(
                    b.subscript("args_dict", b.const(field_name), load=False),
                    b.call(default_getter),
                )
            )
        else:
            field_missing_body.append(
                b.raise_stmt(
                    b.call(
                        "DeserializationError",
                        [
                            b.joined_str(
                                [
                                    b.const("Missing required field '"),
                                    b.const(field_json_name),
                                    b.const("' for class "),
                                    b.formatted_value(b.attr("_cls", "__name__")),
                                ]
                            ),
                            b.load("path"),
                        ],
                    )
                )
            )

        body.append(
            b.if_stmt(
                test=b.compare(b.const(field_json_name), ast.In(), b.load("data")),
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
                    b.try_except(
                        body=[
                            ast.Expr(
                                value=b.call(
                                    v_name,
                                    [b.subscript("args_dict", b.const(field_name))],
                                )
                            )
                        ],
                        handlers=[
                            b.except_handler(
                                type_node=b.load("DeserializationError"),
                                name="e",
                                body=[
                                    b.raise_stmt(
                                        b.call(
                                            "DeserializationError",
                                            [
                                                b.attr("e", "raw_message"),
                                                ast.BoolOp(
                                                    op=ast.Or(),
                                                    values=[
                                                        b.attr("e", "path"),
                                                        b.load("field_path"),
                                                    ],
                                                ),
                                            ],
                                        )
                                    )
                                ],
                            )
                        ],
                    )
                )

    body.append(
        b.try_except(
            body=[
                b.return_stmt(
                    b.call(
                        "_cls",
                        [],
                        [ast.keyword(arg=None, value=b.load("args_dict"))],
                    )
                )
            ],
            handlers=[
                b.except_handler(
                    type_node=b.load("TypeError"),
                    name="e",
                    body=[
                        b.raise_stmt(
                            b.call(
                                "DeserializationError",
                                [
                                    b.joined_str(
                                        [
                                            b.const("Failed to instantiate "),
                                            b.formatted_value(
                                                b.attr("_cls", "__name__")
                                            ),
                                            b.const(". Original error: "),
                                            b.formatted_value(b.load("e")),
                                        ]
                                    ),
                                    b.load("path"),
                                ],
                            )
                        )
                    ],
                )
            ],
        )
    )

    func_def = b.function_def(func_name, args, body)
    return func_def, context
