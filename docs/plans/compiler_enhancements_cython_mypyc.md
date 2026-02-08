# Compiler Enhancements (Cython/MyPyC) Implementation Plan

## Overview
This plan outlines a phased approach to exploring and implementing compiler enhancements for `lodum` using Cython or MyPyC, addressing issue #46. The goal is to achieve even greater serialization/deserialization speeds by compiling the dynamically generated `lodum` handlers into C extensions.

## Current State Analysis
Our research (`src/lodum/compiler/dump_codegen.py`, `src/lodum/compiler/load_codegen.py`) shows:
*   `lodum` currently generates Python Abstract Syntax Trees (ASTs) at runtime using a custom DSL.
*   These ASTs are then compiled into Python bytecode functions (`code` objects).
*   The generated handlers are optimized for Python execution (inlining primitives, pre-resolving handlers).
*   The generated code relies on a `context` dictionary for external references (e.g., exceptions, other handlers).

## Implementation Approach
Integrating Cython or MyPyC with `lodum`'s dynamic AST generation is complex, as these tools primarily compile static Python source code. A direct API to compile `ast.FunctionDef` with these tools does not exist. Therefore, a phased approach focusing on profiling, targeted optimization, and then full code generation will be pursued.

---

## Phase 1: Performance Profiling and Bottleneck Identification

### Overview
Before investing in complex C extension integration, this phase focuses on thoroughly profiling the existing Python bytecode handlers to identify actual performance bottlenecks. This will determine if Cython/MyPyC compilation is truly the most impactful next step.

### Changes Required:

#### 1. `benchmarks/run.py`: Enhance profiling capabilities
**Changes**:
- Integrate a robust profiling tool (e.g., `cProfile`, `py-spy`, `line_profiler`) into the existing benchmark suite.
- Add an option to run benchmarks with detailed profiling data collection.

```python
# benchmarks/run.py

import cProfile
import pstats
# ... existing imports ...

def run_benchmarks(profile_output_file: Optional[str] = None):
    if profile_output_file:
        pr = cProfile.Profile()
        pr.enable()

    # ... existing benchmark execution logic ...

    if profile_output_file:
        pr.disable()
        with open(profile_output_file, "w") as f:
            ps = pstats.Stats(pr, stream=f).sort_stats('cumtime')
            ps.print_stats()
```

#### 2. `docs/PERFORMANCE_ANALYSIS.md`: Update to include profiling methodology
**Changes**:
- Add a new section detailing the profiling methodology, tools used, and how to interpret the results.

### Success Criteria:
#### Automated:
- [ ] Profiling runs successfully generate output files without errors.
#### Manual:
- [ ] Analyze profiling reports to pinpoint specific functions or lines within the dynamically generated `lodum` handlers that consume the most CPU time.
- [ ] Determine if Python interpreter overhead (e.g., function call setup, object allocation) or specific Python-level operations (e.g., string manipulation, dictionary access) are the primary bottlenecks.

**Implementation Note**: Pause for manual review of profiling results to inform Phase 2.

---

## Phase 2: Targeted Optimization / PoC for Cython/MyPyC

### Overview
Based on profiling results, this phase will explore targeted optimizations. If Python bytecode execution is a bottleneck, a Proof-of-Concept (PoC) will be developed to compile a minimal `lodum` handler or a critical internal helper function using Cython/MyPyC.

### Changes Required:
1.  **New `src/lodum/compiler/_compiled_helpers.py` (or similar):**
    **Changes**:
    - Identify a small, performance-critical portion of the generated code (e.g., a primitive type conversion loop or object instantiation helper) that can be isolated.
    - Write this helper function in Python, potentially with type hints suitable for MyPyC or Cython.
2.  **`setup.py` / `pyproject.toml` (Build System):**
    **Changes**:
    - Integrate Cython/MyPyC into `lodum`'s build process to compile the new helper module into a C extension.
3.  **`src/lodum/compiler/dump_codegen.py` / `load_codegen.py`:**
    **Changes**:
    - Modify the AST generation to call the newly compiled C extension helper for relevant operations, replacing the pure Python equivalent.
4.  **`benchmarks/run.py` & `tests/`:**
    **Changes**:
    - Update benchmarks to measure the performance impact of the compiled helper.
    - Add tests to ensure the compiled helper functions correctly.

### Success Criteria:
#### Automated:
- [ ] Compiled C extension integrates into the build process without errors.
- [ ] All existing `lodum` tests pass with the compiled helper.
- [ ] New benchmarks show a measurable performance improvement for the targeted operations.
#### Manual:
- [ ] Verify that the PoC correctly leverages the C extension.

---

## Phase 3: Full Generated Code Compilation (If Justified)
*This phase will only be pursued if Phases 1 and 2 demonstrate significant benefits and justify the increased complexity.*

### Overview
If targeted optimizations prove insufficient, this phase will explore a more ambitious approach: generating Python *source code* from `lodum`'s ASTs, writing it to temporary files, compiling these files with Cython/MyPyC, and dynamically loading the resulting C extensions.

### Changes Required:
1.  **`src/lodum/compiler/codegen_to_source.py`:**
    **Changes**:
    - Create a utility to convert `ast.FunctionDef` objects to Python source code strings (`ast.unparse`).
2.  **Temporary File Management:**
    **Changes**:
    - Implement a robust system for writing generated source code to temporary `.py` files.
3.  **Dynamic Compilation/Loading System:**
    **Changes**:
    - Develop a module to invoke Cython/MyPyC compilers on the temporary files.
    - Implement a mechanism to load the resulting `.so` / `.pyd` files dynamically.
    - Implement a caching layer to store and reuse compiled modules.
4.  **Error Handling and Debugging:**
    **Changes**:
    - Design a strategy for handling compilation errors and providing meaningful debugging information.

### Success Criteria:
#### Automated:
- [ ] The full code generation and compilation pipeline runs successfully.
- [ ] Benchmarks show further significant performance improvements.
#### Manual:
- [ ] Verify the entire compilation and loading process, including error handling.

## Review Criteria (Self-Critique)
- **Specificity**: Phase 1 is highly specific. Phases 2 and 3 are detailed but acknowledge their conditional nature.
- **Verification**: Includes automated and manual success criteria for each phase.
- **Phasing**: A logical, risk-averse phased approach, starting with evidence-based profiling.
