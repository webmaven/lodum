# Lodum Upgrades & Tech Debt Remediation Implementation Plan (v2)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade Lodum with zero-copy buffer extraction (avoiding O(N) numpy list conversions), explicit collection subclass reconstitution (the `ConfigDict` pattern), native `@dataclass` field parsing, tech debt remediation (fixing compilation thread-safety crashes and strict protocol compliance), and updated documentation.

**Architecture:** 
1. **Performance (Zero-Copy):** Extend `Dumper` with `dump_buffer` and update `_load_numpy_array` to use `np.frombuffer` instead of lists.
2. **DX (Subclasses & Dataclasses):** Update `internal.py` to instantiate explicit `dict`/`list` subclasses, and modify `analyzer.py` to use `dataclasses.fields()` for accurate native dataclass support.
3. **Tech Debt:** Fix the compilation thread-safety issue (the `int is not lodum-enabled` error in `test_robustness.py`) and ensure strict `depth` & `seen` parameter forwarding.
4. **Documentation:** Update docstrings and user guides to reflect `dump_buffer`, `@dataclass` support, and `ConfigDict` reconstitution capabilities.

**Tech Stack:** Python 3.9+, `typing`, `ast`, `collections`, `dataclasses`, `numpy`, `pytest`.

## Global Constraints

- **Python Version Compatibility**: Supports Python 3.9 through 3.14.
- **Protocol Compliance**: Dumpers and load/dump handlers must handle `depth: int = 0` and `seen: Optional[set] = None` parameters.
- **Performance**: Operations on numpy arrays and large buffers must be O(1) in memory footprint when utilizing `asdict()` or binary dumpers.
- **TDD Enforcement**: Every feature and fix must follow Red-Green-Refactor.

---

### Task 1: Zero-Copy Buffer Extraction & O(1) Numpy Reconstitution

**Files:**
- Create: `tests/test_buffer_normalization.py`
- Modify: `src/lodum/core.py`
- Modify: `src/lodum/handlers/stdlib.py`
- Modify: `src/lodum/extensions/numpy.py`

**Interfaces:**
- Consumes: `lodum.asdict(obj)` and `lodum.fromdict(cls, data)`
- Produces: `memoryview` objects for `numpy.ndarray` and `bytearray` on dump; uses `np.frombuffer(data)` on load.

- [ ] **Step 1: Write the failing test**

Create `tests/test_buffer_normalization.py`:
```python
import numpy as np
import pytest
from lodum import asdict, fromdict, lodum

@lodum
class MatrixContainer:
    data_buffer: bytearray
    matrix: np.ndarray

def test_zero_copy_buffer_extraction():
    ba = bytearray(b"12345678")
    np_arr = np.array([10, 20, 30], dtype=np.int32)
    container = MatrixContainer(data_buffer=ba, matrix=np_arr)

    # 1. Zero-Copy Dump
    res = asdict(container)
    assert isinstance(res["data_buffer"], (memoryview, bytearray))
    assert bytes(res["data_buffer"]) == b"12345678"
    assert isinstance(res["matrix"], (memoryview, np.ndarray))
    
    # Caller references should NOT be copied/mutated
    assert ba == bytearray(b"12345678")
    assert np_arr.tolist() == [10, 20, 30]

    # 2. O(1) Reconstitution from memoryview/buffer
    reconstituted = fromdict(MatrixContainer, res)
    assert isinstance(reconstituted.matrix, np.ndarray)
    assert np.array_equal(reconstituted.matrix, np_arr)
```

- [ ] **Step 2: Run test to verify it fails**

Run: `.venv/bin/pytest tests/test_buffer_normalization.py -v`
Expected: FAIL (returns list of ints instead of memoryview/ndarray).

- [ ] **Step 3: Implement minimal zero-copy buffer handling**

In `src/lodum/core.py`, add `dump_buffer` to `Dumper` and `BaseDumper`:
```python
    def dump_buffer(self, value: Any, depth: int = 0, seen: Optional[set] = None) -> Any:
        return memoryview(value) if isinstance(value, (bytearray, bytes)) else value
```

In `src/lodum/handlers/stdlib.py`, modify `_dump_bytearray`:
```python
def _dump_bytearray(obj: Any, d: Dumper, depth: int, seen: Optional[set]) -> Any:
    if hasattr(d, "dump_buffer"):
        return d.dump_buffer(obj, depth, seen)
    return d.dump_bytes(bytes(obj), depth, seen)
```

In `src/lodum/extensions/numpy.py`, modify dump and load:
```python
def _dump_numpy_array(obj: Any, dumper: Dumper, depth: int, seen: Optional[set]) -> Any:
    if hasattr(dumper, "dump_buffer"):
        return dumper.dump_buffer(obj, depth, seen) # return ndarray directly for zero-copy asdict
    from ..internal import dump
    return dump(obj.tolist(), dumper, depth + 1, seen)

def _load_numpy_array(cls: Type[Any], loader: Loader, path: Optional[str] = None, depth: int = 0) -> Any:
    from ..internal import load
    raw_data = loader.load_any()
    if isinstance(raw_data, (memoryview, bytes, bytearray, np.ndarray)):
        # Fast path O(1) load
        return np.array(raw_data, copy=False)
    # Slow path fallback
    loader.rewind(raw_data)
    return np.array(load(List, loader, path, depth + 1))
```

- [ ] **Step 4: Run test to verify it passes**

Run: `.venv/bin/pytest tests/test_buffer_normalization.py -v`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add tests/test_buffer_normalization.py src/lodum/core.py src/lodum/handlers/stdlib.py src/lodum/extensions/numpy.py
git commit -m "perf: zero-copy buffer extraction and O(1) numpy array loading"
```

---

### Task 2: Explicit Collection Subclass Reconstitution (DX Improvement)

**Files:**
- Create: `tests/test_subclass_reconstitution.py`
- Modify: `src/lodum/internal.py`

**Interfaces:**
- Consumes: `lodum.fromdict` with subclass `ConfigDict(UserDict)` or `CustomList(UserList)`
- Produces: The specific subclass instantiated correctly.

- [ ] **Step 1: Write failing tests for subclass reconstitution**

Create `tests/test_subclass_reconstitution.py`:
```python
import collections
import pytest
from lodum import fromdict, lodum

class ConfigDict(collections.UserDict):
    def get_theme(self) -> str:
        return self.data.get("theme", "light")

@lodum
class AppConfig:
    metadata: ConfigDict

def test_fromdict_reconstitutes_explicit_subclasses():
    data = {"metadata": {"theme": "dark"}}
    config = fromdict(AppConfig, data)

    assert isinstance(config.metadata, ConfigDict)
    assert config.metadata.get_theme() == "dark"
```

- [ ] **Step 2: Run test to verify it fails**

Run: `.venv/bin/pytest tests/test_subclass_reconstitution.py -v`
Expected: FAIL (`AssertionError: assert isinstance({}, ConfigDict)`).

- [ ] **Step 3: Implement explicit subclass reconstitution in `internal.py` load dispatcher**

Modify `src/lodum/internal.py` inside `_get_load_handler`, before the standard `dict` handling:
```python
    if inspect.isclass(origin):
        if issubclass(origin, (collections.UserDict, dict)) and origin not in (dict, collections.defaultdict, collections.OrderedDict, collections.Counter):
            args = get_args(t)
            v_type = args[1] if len(args) == 2 else Any
            v_loader_fn = _get_load_handler(v_type, excluding=excluding)

            def load_custom_dict(cls_ignore, loader, path, depth):
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

            def load_custom_list(cls_ignore, loader, path, depth):
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
git commit -m "feat: explicit collection subclass reconstitution for ConfigDict pattern"
```

---

### Task 3: Native `@dataclass` Support via `dataclasses.fields()`

**Files:**
- Create: `tests/test_dataclass_reconstitution.py`
- Modify: `src/lodum/compiler/analyzer.py`
- Modify: `src/lodum/internal.py`

**Interfaces:**
- Consumes: Standard Python `@dataclass` classes without `@lodum` decorator.
- Produces: Correct field parsing using `dataclasses.fields()` ignoring InitVars or non-init fields properly.

- [ ] **Step 1: Write failing test**

Create `tests/test_dataclass_reconstitution.py`:
```python
from dataclasses import dataclass
import pytest
from lodum import asdict, fromdict

@dataclass
class Point:
    x: float
    y: float

def test_dataclass_roundtrip():
    pt = Point(0.5, 1.5)
    d = asdict(pt)
    assert d == {"x": 0.5, "y": 1.5}
    
    reconstituted = fromdict(Point, d)
    assert isinstance(reconstituted, Point)
    assert reconstituted.x == 0.5
```

- [ ] **Step 2: Run test to verify it fails**

Run: `.venv/bin/pytest tests/test_dataclass_reconstitution.py -v`
Expected: FAIL (`SerializationError: Object of type Point is not lodum-enabled`).

- [ ] **Step 3: Implement proper dataclass parsing**

In `src/lodum/compiler/analyzer.py`:
```python
import dataclasses

def _analyze_class(cls: Type[Any]) -> None:
    if getattr(cls, "_lodum_analyzed", False):
        return

    is_dc = dataclasses.is_dataclass(cls)
    if is_dc:
        setattr(cls, "_lodum_enabled", True)
        if not hasattr(cls, "_lodum_tag"):
            setattr(cls, "_lodum_tag", None)
            setattr(cls, "_lodum_tag_value", cls.__name__)

    # Inside field extraction, use dataclass fields if applicable:
    if is_dc:
        fields = {}
        for f in dataclasses.fields(cls):
            if not f.init:
                continue
            # Build lodum Field equivalent
            # ...
```

In `src/lodum/internal.py`, add fallback checks in `_get_dump_handler` and `_get_load_handler`:
```python
    import dataclasses
    if inspect.isclass(t) and (getattr(t, "_lodum_enabled", False) or dataclasses.is_dataclass(t)):
        # compile handler
```

- [ ] **Step 4: Run test to verify it passes**

Run: `.venv/bin/pytest tests/test_dataclass_reconstitution.py -v`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add tests/test_dataclass_reconstitution.py src/lodum/compiler/analyzer.py src/lodum/internal.py
git commit -m "feat: native dataclass reconstitution and field analysis"
```

---

### Task 4: Fix Thread-Safety Cache Crashes & Dumper Protocol Compliance

**Files:**
- Create: `tests/test_protocol_compliance.py`
- Modify: `src/lodum/internal.py`
- Modify: `src/lodum/handlers/stdlib.py`

**Interfaces:**
- Consumes: Multithreaded compilation in `test_robustness.py` and downstream dumpers missing `depth`/`seen` parameters.
- Produces: Thread-safe cache population and strict protocol propagation.

- [ ] **Step 1: Write strict protocol test & run multithreaded robustness test**

Create `tests/test_protocol_compliance.py`:
```python
from typing import Optional, Any
from lodum.core import BaseDumper
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
    dump({"a": {"b": 42}}, dumper)
    assert len(dumper.recorded_depths) > 0
    assert dumper.recorded_depths[0] >= 2
```

- [ ] **Step 2: Run tests to observe failures**

Run: `.venv/bin/pytest tests/test_protocol_compliance.py tests/test_robustness.py -v`
Expected: FAIL (Compilation thread crash & depth assert fail).

- [ ] **Step 3: Fix Thread-Safety and Protocol Forwarding**

In `src/lodum/internal.py`:
Ensure `_compile_dump_handler` and `_get_dump_handler` hold `ctx.cache_lock` when reading/writing handler caches or analyzing types under concurrency.
In `src/lodum/handlers/stdlib.py`, ensure all `_dump_*` signatures have `depth` and `seen` strictly passed.

- [ ] **Step 4: Run tests**

Run: `.venv/bin/pytest tests/test_protocol_compliance.py tests/test_robustness.py -v`
Expected: PASS

- [ ] **Step 5: Commit**
```bash
git add tests/test_protocol_compliance.py src/lodum/internal.py src/lodum/handlers/stdlib.py
git commit -m "fix(tech-debt): thread-safe compiler cache and strict dumper protocol"
```

---

### Task 5: Documentation Update

**Files:**
- Modify: `README.md` (or docs/ in lodum)
- Modify: `src/lodum/core.py` docstrings

**Interfaces:**
- Consumes: Updated capabilities (`dump_buffer`, `@dataclass`, `ConfigDict`).
- Produces: Updated docstrings and documentation explaining zero-copy buffers, dataclass reconstitution, and dumper protocol methods.

- [ ] **Step 1: Update docstrings and docs**

Update docstrings in `src/lodum/core.py` for `Dumper.dump_buffer` and add examples in `README.md` or relevant docs demonstrating `@dataclass` serialization and zero-copy `asdict` buffer extractions.

- [ ] **Step 2: Verify doc build or markdown correctness**

- [ ] **Step 3: Commit**
```bash
git add docs/ README.md src/lodum/core.py
git commit -m "docs: document dump_buffer, native dataclasses, and ConfigDict reconstitution"
```

## Verification Plan

### Automated Tests
- Run test suite: `.venv/bin/pytest -v`
- Measure coverage: `.venv/bin/pytest --cov=lodum` (Target: > 90%)
