# Lodum Agent Guide

This document is intended for AI agents (like yourself) to quickly understand the architecture, conventions, and safety requirements of the `lodum` codebase.

## 🏗️ Architecture at a Glance

`lodum` is an AST-based serialization framework. Its core performance comes from compiling specialized Python bytecode for every `@lodum`-enabled class.

### Key Components
- **`lodum.core`**: Defines the `Dumper` and `Loader` protocols. All format-specific logic must adhere to these.
- **`lodum.compiler`**: The engine that walks class signatures and generates AST nodes.
- **`lodum.handlers`**: Modular type handlers for primitives, collections, and the standard library.
- **`lodum.internal`**: The central dispatcher and compilation coordinator.

## 🛠️ Core Mandates for Development

1.  **Protocol Compliance**: When modifying or adding dumpers, ensure all methods handle `depth: int` and `seen: Optional[set]` arguments. Use sensible defaults (`0` and `None`).
2.  **Streaming Safety**: Prefer orchestration methods (`begin_struct`, `field`, `list_item`) over direct collection creation in dumpers to maintain O(1) memory compatibility.
3.  **Eager Analysis**: The `@lodum` decorator performs eager analysis. Do not assume `_lodum_fields` is missing; if it is, the class might not be correctly decorated.
4.  **WASM Compatibility**: All core changes must be verified against Pyodide. Avoid using native modules or threading primitives directly; use `lodum.concurrency` instead.
5.  **Validation**: Every bug fix or feature implementation must include a reproduction script or a new test case in `tests/`.

## 🧬 AST Compiler Conventions

We use a specialized DSL in `src/lodum/compiler/dsl.py` (aliased as `b`) to make AST generation more readable.

**Example**:
```python
# Instead of:
node = ast.Call(func=ast.Name(id='print', ctx=ast.Load()), args=[ast.Constant(value='hello')], keywords=[])

# Use the DSL:
node = b.call('print', [b.const('hello')])
```

## 🧪 Testing and Coverage

-   **Test Runner**: `pytest`
-   **Coverage Target**: **90%+**
-   - Standard: `PYTHONPATH=src pytest --cov=lodum`
-   - Pyodide: `node run_pyodide_node.js`

## 🛡️ Security Note

The `lodum.pickle` module contains a `SafeUnpickler`. Any changes to this module must rigorously maintain the "Secure-by-Default" stance by blocking arbitrary module imports and code execution.
