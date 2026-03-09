# Technical Debt and Performance Analysis Report (v0.4.0-dev)

## 1. Performance Regression Analysis

Following the implementation of Stateful Orchestration and the Polymorphic API, we observed significant performance regressions (1.5x to 3.8x slower). Local benchmarking isolated the following overheads:

- **Runtime `Field` Resolution**: The `isinstance(val, Field)` check in compiled handlers is **~2x slower** than direct access.
- **Orchestration Calls**: Calling `dumper.field()` for every field is **~35% slower** than direct dictionary assignment.
- **AST Bloat**: Inlined cycle detection and depth checks add substantial instruction overhead to every compiled function.

## 2. Architectural Technical Debt

### Polymorphic Boilerplate
- **Observation**: Duplicated `load`/`dump`/`stream` logic across all format modules (`json.py`, `msgpack.py`, `cbor.py`, `bson.py`, `yaml.py`, `toml.py`, `pickle.py`).
- **Impact**: Maintenance burden. Standardizing error wrapping or size checks requires 7+ file updates.

### Mapping Loader Duplication
- **Observation**: Redundant logic for mapping types (`dict`, `defaultdict`, `OrderedDict`, `Counter`) exists in both `internal.py` and `handlers/collections.py`.

## 3. Implementation Recommendations (Phases 3+)

### Priority 1: Restore Performance
1.  **Wrap `__init__`**: Modify `@lodum` to wrap the class constructor. Resolve `Field` defaults at instantiation time. This removes the need for `isinstance(Field)` checks during serialization.
2.  **Runtime Recursion Helper**: Move cycle detection and depth checks from inlined AST into a single `_check_recursion()` call.
3.  **Full-Speed IR Mode**: Investigate "Fast-Path Branching" in the compiler where it generates `dict` building logic if the dumper is a `BaseDumper`, bypassing orchestration for non-streaming scenarios.

### Priority 2: Refactor for Maintainability
1.  **Unify IO Logic**: Create `FormatHelper` in `internal.py` to consolidate source/target resolution and error wrapping.
2.  **Consolidate Mapping Loaders**: Unify mapping handlers into a single generic implementation.

## 4. Immediate Next Steps
- [ ] Implement `__init__` wrapping to resolve `Field` objects.
- [ ] Refactor compiler to use a runtime recursion helper.
- [ ] Re-run benchmarks to verify recovery.
