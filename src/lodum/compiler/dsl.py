# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import ast
import sys
from typing import Any


class ASTBuilder:
    """Helper class to build AST nodes with less boilerplate."""

    def load(self, name: str) -> ast.Name:
        return ast.Name(id=name, ctx=ast.Load())

    def store(self, name: str) -> ast.Name:
        return ast.Name(id=name, ctx=ast.Store())

    def attr(
        self, value: ast.expr | str, attr: str, load: bool = True
    ) -> ast.Attribute:
        if isinstance(value, str):
            value = self.load(value)
        return ast.Attribute(
            value=value, attr=attr, ctx=ast.Load() if load else ast.Store()
        )

    def call(
        self,
        func: ast.expr | str,
        args: list[ast.expr] | None = None,
        keywords: list[ast.keyword] | None = None,
    ) -> ast.Call:
        if isinstance(func, str):
            func = self.load(func)
        return ast.Call(func=func, args=args or [], keywords=keywords or [])

    def const(self, value: Any) -> ast.Constant:
        return ast.Constant(value=value)

    def arg(self, name: str) -> ast.arg:
        return ast.arg(arg=name, annotation=None)

    def arguments(self, names: list[str]) -> ast.arguments:
        return ast.arguments(
            args=[self.arg(name) for name in names],
            posonlyargs=[],
            kwonlyargs=[],
            kw_defaults=[],
            defaults=[],
            vararg=None,
            kwarg=None,
        )

    def assign(self, target: ast.expr | str, value: ast.expr) -> ast.Assign:
        if isinstance(target, str):
            target = self.store(target)
        return ast.Assign(targets=[target], value=value)

    def if_exp(self, test: ast.expr, body: ast.expr, orelse: ast.expr) -> ast.IfExp:
        return ast.IfExp(test=test, body=body, orelse=orelse)

    def isinstance(self, obj: ast.expr | str, type_node: ast.expr) -> ast.Call:
        if isinstance(obj, str):
            obj = self.load(obj)
        return self.call("isinstance", [obj, type_node])

    def add(self, left: ast.expr, right: ast.expr) -> ast.BinOp:
        return ast.BinOp(left=left, op=ast.Add(), right=right)

    def sub(self, left: ast.expr, right: ast.expr) -> ast.BinOp:
        return ast.BinOp(left=left, op=ast.Sub(), right=right)

    def subscript(
        self, value: ast.expr | str, slice_val: ast.expr, load: bool = True
    ) -> ast.Subscript:
        if isinstance(value, str):
            value = self.load(value)
        return ast.Subscript(
            value=value, slice=slice_val, ctx=ast.Load() if load else ast.Store()
        )

    def list_comp(
        self, elt: ast.expr, target: str, iter_node: ast.expr
    ) -> ast.ListComp:
        return ast.ListComp(
            elt=elt,
            generators=[
                ast.comprehension(
                    target=self.store(target), iter=iter_node, ifs=[], is_async=0
                )
            ],
        )

    def dict_comp(
        self, key: ast.expr, value: ast.expr, targets: list[str], iter_node: ast.expr
    ) -> ast.DictComp:
        target_node: ast.expr
        if len(targets) == 1:
            target_node = self.store(targets[0])
        else:
            target_node = ast.Tuple(
                elts=[self.store(t) for t in targets], ctx=ast.Store()
            )

        return ast.DictComp(
            key=key,
            value=value,
            generators=[
                ast.comprehension(
                    target=target_node, iter=iter_node, ifs=[], is_async=0
                )
            ],
        )

    def function_def(
        self,
        name: str,
        args: ast.arguments,
        body: list[ast.stmt],
        returns: ast.expr | None = None,
    ) -> ast.FunctionDef:
        kwargs: dict[str, Any] = {
            "name": name,
            "args": args,
            "body": body,
            "decorator_list": [],
            "returns": returns,
        }
        if sys.version_info >= (3, 12):
            kwargs["type_params"] = []
        return ast.FunctionDef(**kwargs)

    def try_except(
        self,
        body: list[ast.stmt],
        handlers: list[ast.ExceptHandler],
        orelse: list[ast.stmt] | None = None,
        finalbody: list[ast.stmt] | None = None,
    ) -> ast.Try:
        return ast.Try(
            body=body,
            handlers=handlers,
            orelse=orelse or [],
            finalbody=finalbody or [],
        )

    def except_handler(
        self, type_node: ast.expr | None, name: str | None, body: list[ast.stmt]
    ) -> ast.ExceptHandler:
        return ast.ExceptHandler(type=type_node, name=name, body=body)

    def if_stmt(
        self,
        test: ast.expr,
        body: list[ast.stmt],
        orelse: list[ast.stmt] | None = None,
    ) -> ast.If:
        return ast.If(test=test, body=body, orelse=orelse or [])

    def compare(self, left: ast.expr, op: ast.cmpop, right: ast.expr) -> ast.Compare:
        return ast.Compare(left=left, ops=[op], comparators=[right])

    def gt(self, left: ast.expr, right: ast.expr) -> ast.Compare:
        return self.compare(left, ast.Gt(), right)

    def return_stmt(self, value: ast.expr | None) -> ast.Return:
        return ast.Return(value=value)

    def raise_stmt(self, exc: ast.expr | None) -> ast.Raise:
        return ast.Raise(exc=exc)

    def joined_str(self, values: list[ast.expr]) -> ast.JoinedStr:
        return ast.JoinedStr(values=values)

    def formatted_value(self, value: ast.expr) -> ast.FormattedValue:
        return ast.FormattedValue(value=value, conversion=-1)


b = ASTBuilder()
