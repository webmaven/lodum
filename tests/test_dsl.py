# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import ast
import sys
from lodum.compiler.dsl import b


def test_load():
    node = b.load("x")
    assert isinstance(node, ast.Name)
    assert node.id == "x"
    assert isinstance(node.ctx, ast.Load)


def test_store():
    node = b.store("x")
    assert isinstance(node, ast.Name)
    assert node.id == "x"
    assert isinstance(node.ctx, ast.Store)


def test_attr():
    # String input
    node = b.attr("obj", "attr")
    assert isinstance(node, ast.Attribute)
    assert isinstance(node.value, ast.Name)
    assert node.value.id == "obj"
    assert node.attr == "attr"
    assert isinstance(node.ctx, ast.Load)

    # Node input
    node2 = b.attr(node, "sub")
    assert node2.value == node
    assert node2.attr == "sub"

    # Store context
    node3 = b.attr("obj", "attr", load=False)
    assert isinstance(node3.ctx, ast.Store)


def test_call():
    # String func
    node = b.call("func", [b.load("a")], [ast.keyword(arg="k", value=b.const(1))])
    assert isinstance(node, ast.Call)
    assert isinstance(node.func, ast.Name)
    assert node.func.id == "func"
    assert len(node.args) == 1
    assert node.args[0].id == "a"
    assert len(node.keywords) == 1
    assert node.keywords[0].arg == "k"

    # Node func
    node2 = b.call(b.attr("obj", "meth"))
    assert isinstance(node2.func, ast.Attribute)


def test_const():
    assert b.const(1).value == 1
    assert b.const("s").value == "s"
    assert b.const(None).value is None


def test_arg():
    node = b.arg("x")
    assert isinstance(node, ast.arg)
    assert node.arg == "x"


def test_arguments():
    node = b.arguments(["a", "b"])
    assert isinstance(node, ast.arguments)
    assert len(node.args) == 2
    assert node.args[0].arg == "a"
    assert node.args[1].arg == "b"


def test_assign():
    # String target
    node = b.assign("x", b.const(1))
    assert isinstance(node, ast.Assign)
    assert len(node.targets) == 1
    assert node.targets[0].id == "x"
    assert node.value.value == 1

    # Node target
    node2 = b.assign(b.subscript("d", b.const("k"), load=False), b.const(2))
    assert isinstance(node2.targets[0], ast.Subscript)


def test_if_exp():
    node = b.if_exp(b.load("test"), b.const(1), b.const(2))
    assert isinstance(node, ast.IfExp)
    assert node.test.id == "test"
    assert node.body.value == 1
    assert node.orelse.value == 2


def test_isinstance():
    # String obj
    node = b.isinstance("x", b.load("int"))
    assert isinstance(node, ast.Call)
    assert node.func.id == "isinstance"
    assert node.args[0].id == "x"
    assert node.args[1].id == "int"

    # Node obj
    node2 = b.isinstance(b.load("y"), b.load("str"))
    assert node2.args[0].id == "y"


def test_add_sub():
    add = b.add(b.load("a"), b.load("b"))
    assert isinstance(add, ast.BinOp)
    assert isinstance(add.op, ast.Add)

    sub = b.sub(b.load("a"), b.load("b"))
    assert isinstance(sub, ast.BinOp)
    assert isinstance(sub.op, ast.Sub)


def test_subscript():
    # String value
    node = b.subscript("d", b.const("k"))
    assert isinstance(node, ast.Subscript)
    assert node.value.id == "d"
    assert node.slice.value == "k"
    assert isinstance(node.ctx, ast.Load)

    # Node value
    node_val = b.attr("obj", "data")
    node2 = b.subscript(node_val, b.const(0))
    assert node2.value == node_val
    assert node2.slice.value == 0

    # Store context
    node3 = b.subscript("d", b.const("k"), load=False)
    assert isinstance(node3.ctx, ast.Store)


def test_list_comp():
    node = b.list_comp(b.load("x"), "x", b.load("items"))
    assert isinstance(node, ast.ListComp)
    assert node.elt.id == "x"
    assert node.generators[0].target.id == "x"
    assert node.generators[0].iter.id == "items"


def test_dict_comp():
    # Single target
    node = b.dict_comp(b.load("k"), b.load("v"), ["item"], b.load("items"))
    assert isinstance(node, ast.DictComp)
    assert node.generators[0].target.id == "item"

    # Multiple targets
    node2 = b.dict_comp(b.load("k"), b.load("v"), ["k", "v"], b.load("items"))
    assert isinstance(node2.generators[0].target, ast.Tuple)
    assert len(node2.generators[0].target.elts) == 2


def test_function_def():
    args = b.arguments(["x"])
    body = [b.return_stmt(b.load("x"))]

    # Basic
    node = b.function_def("func", args, body)
    assert isinstance(node, ast.FunctionDef)
    assert node.name == "func"
    assert len(node.body) == 1
    assert node.returns is None
    if sys.version_info >= (3, 12):
        assert hasattr(node, "type_params")

    # With return annotation
    node2 = b.function_def("func2", args, body, returns=b.load("int"))
    assert node2.returns.id == "int"


def test_try_except():
    handler1 = b.except_handler(b.load("ValueError"), "ve", [ast.Pass()])
    handler2 = b.except_handler(b.load("TypeError"), "te", [ast.Pass()])

    # Multiple handlers
    node = b.try_except([ast.Pass()], [handler1, handler2])
    assert isinstance(node, ast.Try)
    assert len(node.handlers) == 2
    assert node.handlers[0].type.id == "ValueError"
    assert node.handlers[1].type.id == "TypeError"

    # No optional bodies
    assert node.orelse == []
    assert node.finalbody == []

    # All bodies
    node2 = b.try_except(
        [ast.Pass()], [handler1], orelse=[ast.Pass()], finalbody=[ast.Pass()]
    )
    assert len(node2.orelse) == 1
    assert len(node2.finalbody) == 1


def test_except_handler_variations():
    # No type, no name (bare except)
    h1 = b.except_handler(None, None, [ast.Pass()])
    assert h1.type is None
    assert h1.name is None

    # Type, no name
    h2 = b.except_handler(b.load("Exception"), None, [ast.Pass()])
    assert h2.type.id == "Exception"
    assert h2.name is None


def test_if_stmt():
    node = b.if_stmt(b.const(True), [ast.Pass()], [ast.Pass()])
    assert isinstance(node, ast.If)
    assert node.test.value is True
    assert len(node.body) == 1
    assert len(node.orelse) == 1


def test_compare():
    # Eq
    node = b.compare(b.load("x"), ast.Eq(), b.const(1))
    assert isinstance(node, ast.Compare)
    assert node.left.id == "x"
    assert isinstance(node.ops[0], ast.Eq)
    assert node.comparators[0].value == 1

    # In
    node2 = b.compare(b.const(1), ast.In(), b.load("my_list"))
    assert isinstance(node2.ops[0], ast.In)


def test_return_stmt():
    # With value
    node = b.return_stmt(b.const(1))
    assert isinstance(node, ast.Return)
    assert node.value.value == 1

    # Empty return
    node2 = b.return_stmt(None)
    assert node2.value is None


def test_raise_stmt():
    node = b.raise_stmt(b.call("ValueError"))
    assert isinstance(node, ast.Raise)
    assert isinstance(node.exc, ast.Call)


def test_fstrings():
    node = b.joined_str([b.const("val: "), b.formatted_value(b.load("x"))])
    assert isinstance(node, ast.JoinedStr)
    assert len(node.values) == 2
    assert isinstance(node.values[1], ast.FormattedValue)


def test_compilation():
    """Verify that a small function built with the DSL can actually be compiled and run."""
    args = b.arguments(["a", "b"])
    body = [
        b.assign("res", b.add(b.load("a"), b.load("b"))),
        b.return_stmt(b.load("res")),
    ]
    func_def = b.function_def("add_it", args, body)
    module = ast.Module(body=[func_def], type_ignores=[])
    ast.fix_missing_locations(module)

    code = compile(module, filename="<test>", mode="exec")
    namespace = {}
    exec(code, namespace)

    add_it = namespace["add_it"]
    assert add_it(1, 2) == 3
    assert add_it("a", "b") == "ab"
