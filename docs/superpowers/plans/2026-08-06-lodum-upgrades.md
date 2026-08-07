# Lodum Upgrades & Tech Debt Remediation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade Lodum with zero-copy buffer extraction & normalization, explicit collection subclass reconstitution (the `ConfigDict` pattern), dataclass support, and technical debt remediation for protocol compliance and streaming safety.

**Architecture:** Extend Lodum's AST compiler and handler dispatcher (`internal.py`, `core.py`, `handlers/`) to support zero-copy buffer view extraction during `asdict()`, instantiate explicitly typed collection subclasses (`UserDict`, `UserList`, `dict`/`list` descendants) during `fromdict()`, support standard `@dataclass` types, and enforce strict protocol parameter propagation (`depth`, `seen`) across all format handlers.

**Tech Stack:** Python 3.9+, `typing`, `ast`, `collections`, `dataclasses`, `numpy`, `pytest`, `pytest-cov`.

## Global Constraints

- **Python Version Compatibility**: Supports Python 3.9 through 3.14.
- **Protocol Compliance**: Dumpers and load/dump handlers must handle `depth: int = 0` and `seen: Optional[set] = None` parameters.
- **Streaming Safety**: Prefer dumper orchestration methods (`begin_struct`, `field`, `list_item`, `begin_list`, `end_list`, `end_struct`) over creating intermediate collections.
- **WASM Compatibility**: Maintain Pyodide compatibility; use `lodum.concurrency` for concurrency primitives.
- **TDD Enforcement**: Every feature and fix must follow Red-Green-Refactor with failing tests written first.

---

### Task 1: Zero-Copy Buffer Extraction & Normalization in `asdict()` and Handlers

**Files:**
- Create: `tests/test_buffer_normalization.py`
- Modify: `src/lodum/core.py:112-246`
- Modify: `src/lodum/handlers/stdlib.py:23-30`
- Modify: `src/lodum/handlers/collections.py:40-50`
- Modify: `src/lodum/extensions/numpy.py:10-23`
- Modify: `src/lodum/internal.py:150-165`

**Interfaces:**
- Consumes: `lodum.asdict(obj: Any) -> Any`
- Produces: Normalized buffer objects (`memoryview`, `bytearray`, `bytes`, `array.array`, `numpy.ndarray`) passed zero-copy without mutating or copying local Python caller references.

- [ ] **Step 1: Write the failing test for zero-copy buffer extraction**

Create `tests/test_buffer_normalization.py`:
```python
import array
import numpy as np
import pytest
from lodum import asdict, lodum

@lodum
class MatrixContainer:
    name: str
    data_bytes: bytes
    data_buffer: bytearray
    data_view: memoryview
    arr: array.array
    matrix: np.ndarray

def test_zero_copy_buffer_extraction():
    raw = b"12345678"
    ba = bytearray(raw)
    mv = memoryview(ba)
    arr = array.array("i", [1, 2, 3, 4])
    np_arr = np.array([10, 20, 30], dtype=np.int32)

    container = MatrixContainer(
        name="test",
        data_bytes=raw,
        data_buffer=ba,
        data_view=mv,
        arr=arr,
        matrix=np_arr,
    )

    res = asdict(container)

    assert res["name"] == "test"
    assert res["data_bytes"] == raw
    assert isinstance(res["data_buffer"], memoryview) or isinstance(res["data_buffer"], bytearray)
    assert bytes(res["data_buffer"]) == raw
    assert res["data_view"] == mv
    assert res["arr"] == arr
    assert res["matrix"] is np_arr or isinstance(res["matrix"], memoryview) or np.array_equal(res["matrix"], np_arr)

    # Verify caller local references were NOT corrupted or mutated
    assert ba == bytearray(b"12345678")
    assert np_arr.tolist() == [10, 20, 30]
```

- [ ] **Step 2: Run test to verify it fails**

Run: `.venv/bin/pytest tests/test_buffer_normalization.py -v`
Expected: FAIL with `SerializationError` or `AttributeError` (memoryview / numpy array not handled zero-copy).

- [ ] **Step 3: Implement minimal zero-copy buffer handling in dumpers and handlers**

Modify `src/lodum/core.py` to add `dump_buffer` method to `Dumper` protocol and `BaseDumper`:
```python
    def dump_buffer(
        self, value: Any, depth: int = 0, seen: Optional[set] = None
    ) -> Any:
        return memoryview(value) if isinstance(value, (bytearray, bytes)) else value
```

Modify `src/lodum/handlers/stdlib.py`:
```python
def _dump_bytes(obj: Any, d: Dumper, depth: int, seen: Optional[set]) -> Any:
    return d.dump_bytes(obj, depth, seen)


def _dump_bytearray(obj: Any, d: Dumper, depth: int, seen: Optional[set]) -> Any:
    if hasattr(d, "dump_buffer"):
        return d.dump_buffer(obj, depth, seen)
    return d.dump_bytes(bytes(obj), depth, seen)
```

Modify `src/lodum/extensions/numpy.py`:
```python
def _dump_numpy_array(obj: Any, dumper: Dumper, depth: int, seen: Optional[set]) -> Any:
    if hasattr(dumper, "dump_buffer"):
        return dumper.dump_buffer(obj.data, depth, seen)
    from ..internal import dump
    return dump(obj.tolist(), dumper, depth + 1, seen)
```

- [ ] **Step 4: Run test to verify it passes**

Run: `.venv/bin/pytest tests/test_buffer_normalization.py -v`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add tests/test_buffer_normalization.py src/lodum/core.py src/lodum/handlers/stdlib.py src/lodum/extensions/numpy.py
git commit -m "feat: add zero-copy buffer extraction & normalization for lodum.asdict"
```

---

### Task 2: Explicit Collection Subclass Reconstitution (`ConfigDict`, `UserDict`, `UserList` Pattern)

**Files:**
- Create: `tests/test_subclass_reconstitution.py`
- Modify: `src/lodum/internal.py:439-476`
- Modify: `src/lodum/compiler/load_codegen.py:100-150`

**Interfaces:**
- Consumes: `lodum.fromdict(cls: Type[T], data: Any) -> T`
- Produces: Reconstituted instances of explicit collection subclasses (e.g., `ConfigDict(UserDict)`, `CustomList(UserList)`), preserving methods and subclass identity.

- [ ] **Step 1: Write failing tests for subclass reconstitution**

Create `tests/test_subclass_reconstitution.py`:
```python
import collections
import pytest
from lodum import fromdict, lodum

class ConfigDict(collections.UserDict):
    def get_theme(self) -> str:
        return self.data.get("theme", "light")

class CustomList(collections.UserList):
    def total(self) -> int:
        return sum(self.data)

@lodum
class AppConfig:
    title: str
    metadata: ConfigDict
    scores: CustomList

def test_fromdict_reconstitutes_explicit_subclasses():
    data = {
        "title": "My Application",
        "metadata": {"theme": "dark", "version": "1.0"},
        "scores": [10, 20, 30]
    }

    config = fromdict(AppConfig, data)

    assert isinstance(config.metadata, ConfigDict)
    assert config.metadata.get_theme() == "dark"
    assert isinstance(config.scores, CustomList)
    assert config.scores.total() == 60

def test_direct_fromdict_configdict():
    data = {"theme": "solarized", "debug": True}
    res = fromdict(ConfigDict, data)

    assert isinstance(res, ConfigDict)
    assert res.get_theme() == "solarized"
    assert res["debug"] is True
```

- [ ] **Step 2: Run test to verify it fails**

Run: `.venv/bin/pytest tests/test_subclass_reconstitution.py -v`
Expected: FAIL with `AssertionError: assert isinstance({}, ConfigDict)` because `fromdict` returned a plain `dict`.

- [ ] **Step 3: Implement explicit subclass reconstitution in `internal.py` load dispatcher**

Modify `src/lodum/internal.py` in `_get_load_handler`:
```python
    # Check if origin is a subclass of UserDict or UserList or dict or list
    if inspect.isclass(origin):
        if issubclass(origin, (collections.UserDict, dict)) and origin not in (dict, collections.defaultdict, collections.OrderedDict, collections.Counter):
            args = get_args(t)
            v_type = args[1] if len(args) == 2 else Any
            v_loader_fn = _get_load_handler(v_type, excluding=excluding)

            def load_custom_dict(cls_target, loader, path, depth):
                data = {
                    k: v_loader_fn(v_type, v_l, f"{path}.{k}" if path else k, depth + 1)
                    for k, v_l in loader.load_dict()
                }
                return origin(data)

            with ctx.cache_lock:
                ctx.load_cache[t] = load_custom_dict
            return load_custom_dict

        if issubclass(origin, (collections.UserList, list)) and origin not in (list, array.array, collections.deque):
            args = get_args(t)
            item_type = args[0] if args else Any
            item_loader_fn = _get_load_handler(item_type, excluding=excluding)

            def load_custom_list(cls_target, loader, path, depth):
                data = [
                    item_loader_fn(item_type, item_l, f"{path}[{i}]" if path else f"[{i}]", depth + 1)
                    for i, item_l in enumerate(loader.load_list())
                ]
                return origin(data)

            with ctx.cache_lock:
                ctx.load_cache[t] = load_custom_list
            return load_custom_list
```

- [ ] **Step 4: Run test to verify it passes**

Run: `.venv/bin/pytest tests/test_subclass_reconstitution.py -v`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add tests/test_subclass_reconstitution.py src/lodum/internal.py
git commit -m "feat: add explicit collection subclass reconstitution (ConfigDict pattern) for lodum.fromdict"
```

---

### Task 3: Standard `@dataclass` Reconstitution & Seamless Lodum Integration

**Files:**
- Create: `tests/test_dataclass_reconstitution.py`
- Modify: `src/lodum/compiler/analyzer.py:15-80`
- Modify: `src/lodum/internal.py:280-320`

**Interfaces:**
- Consumes: Standard Python classes decorated with `@dataclasses.dataclass`
- Produces: Full serialization and deserialization via `asdict()` and `fromdict()` for standard dataclasses without mandatory `@lodum` decorator.

- [ ] **Step 1: Write failing test for dataclass reconstitution**

Create `tests/test_dataclass_reconstitution.py`:
```python
from dataclasses import dataclass
import pytest
from lodum import asdict, fromdict

@dataclass
class Point:
    x: float
    y: float

@dataclass
class Polygon:
    name: str
    vertices: list[Point]

def test_dataclass_roundtrip():
    poly = Polygon(name="Triangle", vertices=[Point(0.0, 0.0), Point(1.0, 0.0), Point(0.0, 1.0)])

    d = asdict(poly)
    assert d == {
        "name": "Triangle",
        "vertices": [{"x": 0.0, "y": 0.0}, {"x": 1.0, "y": 0.0}, {"x": 0.0, "y": 1.0}]
    }

    reconstituted = fromdict(Polygon, d)
    assert isinstance(reconstituted, Polygon)
    assert len(reconstituted.vertices) == 3
    assert isinstance(reconstituted.vertices[0], Point)
    assert reconstituted.vertices[0].x == 0.0
```

- [ ] **Step 2: Run test to verify it fails**

Run: `.venv/bin/pytest tests/test_dataclass_reconstitution.py -v`
Expected: FAIL with `SerializationError: Object of type Polygon is not lodum-enabled`.

- [ ] **Step 3: Implement automatic dataclass analysis and handler compilation**

Modify `src/lodum/compiler/analyzer.py`:
```python
import dataclasses

def _analyze_class(cls: Type[Any]) -> None:
    if getattr(cls, "_lodum_analyzed", False):
        return

    if dataclasses.is_dataclass(cls):
        setattr(cls, "_lodum_enabled", True)
        if not hasattr(cls, "_lodum_tag"):
            setattr(cls, "_lodum_tag", None)
            setattr(cls, "_lodum_tag_value", cls.__name__)

    # proceed with existing analysis logic
```

Modify `src/lodum/internal.py` in `_get_dump_handler` and `_get_load_handler`:
```python
    if inspect.isclass(t) and (getattr(t, "_lodum_enabled", False) or dataclasses.is_dataclass(t)):
        handler = _compile_dump_handler(t)
        with ctx.cache_lock:
            ctx.dump_cache[t] = handler
        return handler
```
and similarly in `_get_load_handler`:
```python
    if inspect.isclass(origin) and (getattr(origin, "_lodum_enabled", False) or dataclasses.is_dataclass(origin)):
        handler = _compile_load_handler(origin)
        with ctx.cache_lock:
            ctx.load_cache[origin] = handler
        return handler
```

- [ ] **Step 4: Run test to verify it passes**

Run: `.venv/bin/pytest tests/test_dataclass_reconstitution.py -v`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add tests/test_dataclass_reconstitution.py src/lodum/compiler/analyzer.py src/lodum/internal.py
git commit -m "feat: add automatic dataclass analysis and reconstitution in lodum"
```

---

### Task 4: Tech Debt Remediation — Protocol Compliance & Dumper Cleanups

**Files:**
- Create: `tests/test_protocol_compliance.py`
- Modify: `src/lodum/core.py:112-246`
- Modify: `src/lodum/handlers/base.py:1-60`
- Modify: `src/lodum/handlers/stdlib.py:20-55`
- Modify: `src/lodum/handlers/collections.py:1-60`

**Interfaces:**
- Consumes: Dumper interface implementations (`BaseDumper`, `StreamingDumper`, format dumpers)
- Produces: Strict parameter forwarding (`depth: int`, `seen: Optional[set]`) across all dump calls, maintaining cycle safety and recursion limit checks.

- [ ] **Step 1: Write failing test for Dumper protocol compliance and recursion depth forwarding**

Create `tests/test_protocol_compliance.py`:
```python
from typing import Optional, Any
import pytest
from lodum.core import Dumper, BaseDumper
from lodum.internal import dump

class MockCustomDumper(BaseDumper):
    def __init__(self):
        super().__init__()
        self.recorded_depths = []

    def dump_int(self, value: int, depth: int = 0, seen: Optional[set] = None) -> Any:
        self.recorded_depths.append(depth)
        return value

def test_dumper_protocol_depth_propagation():
    dumper = MockCustomDumper()
    nested_data = {"a": {"b": 42}}

    dump(nested_data, dumper)

    assert 42 in dumper.recorded_depths or len(dumper.recorded_depths) > 0
    # Depth must be incremented appropriately
    assert dumper.recorded_depths[0] >= 2
```

- [ ] **Step 2: Run test to verify it fails or passes**

Run: `.venv/bin/pytest tests/test_protocol_compliance.py -v`
Expected: FAIL if depth was reset to 0 in internal handler calls.

- [ ] **Step 3: Refactor handler signatures and dumper calls for strict depth & seen forwarding**

Update all dumper handler calls in `src/lodum/handlers/collections.py`, `src/lodum/handlers/stdlib.py`, and `src/lodum/handlers/base.py` to ensure `depth` and `seen` are passed consistently:
```python
def _dump_dict(obj: Any, dumper: Dumper, depth: int = 0, seen: Optional[set] = None) -> Any:
    dumper.begin_struct(type(obj))
    for k, v in obj.items():
        dumper.field(str(k), v, dump, depth + 1, seen)
    return dumper.end_struct()
```

- [ ] **Step 4: Run all tests to verify suite passes clean**

Run: `.venv/bin/pytest -v`
Expected: PASS (all tests green)

- [ ] **Step 5: Commit**

```bash
git add tests/test_protocol_compliance.py src/lodum/handlers/base.py src/lodum/handlers/collections.py src/lodum/handlers/stdlib.py src/lodum/core.py
git commit -m "fix(tech-debt): enforce strict dumper protocol depth and seen propagation"
```

---

## Verification Plan

### Automated Tests
- Run full test suite: `.venv/bin/pytest -v`
- Measure coverage: `.venv/bin/pytest --cov=lodum` (Target: > 90%)

### Manual Verification
- Re-run Pyodide / WASM compatibility check script: `node run_pyodide_node.js` (if node/pyodide environment available).
