# IDE Plugin Implementation Plan

## Overview
This plan details the phased implementation of an IDE plugin for `lodum`, addressing issue #48. The goal is to provide real-time assistance for `lodum` users, including auto-generating `field()` definitions and validating schema compliance within the IDE. Given the significant architectural differences between VS Code and PyCharm extension ecosystems, we will prioritize VS Code with a Python-based Language Server Protocol (LSP) server.

## Current State Analysis
*   `lodum` relies on `@lodum` decorated classes and `field()` for metadata, with `__init__` type hints defining the schema.
*   `lodum.schema()` generates JSON Schema from `lodum` classes.
*   VS Code extensions typically use TypeScript/JavaScript for the client and LSP for language intelligence, with servers implementable in any language.
*   PyCharm plugins use Kotlin/Java and the IntelliJ Platform SDK, requiring deep integration with the IDE's internal APIs.

## Implementation Approach
We will focus on a VS Code extension with a Python-based Language Server. This leverages `lodum`'s native language (Python) for the core logic of the LSP server, making it more maintainable and potentially reusable.

---

## Phase 1: VS Code Extension with Python LSP Server (Diagnostics & Completion)

### Overview
Develop a VS Code extension that communicates with a Python-based LSP server. This server will provide basic diagnostics (e.g., schema compliance warnings) and code completion for `field()` arguments.

### Changes Required:

#### 1. `src/lodum/ext/lsp_server.py`: Create new module for LSP server logic
**Changes**:
- Create a new file `src/lodum/ext/lsp_server.py`.
- Implement a basic LSP server using a Python LSP library (e.g., `python-lsp-server` or `lsprotocol`).
- The server will:
    - Parse Python files to identify `@lodum` decorated classes.
    - Provide diagnostics (warnings/errors) if a class decorated with `@lodum` violates inferred schema rules or `field()` usage. This might involve using `lodum.schema()` internally for validation.
    - Offer code completion for `field()` parameters (e.g., `rename`, `skip_serializing`, `default`).

```python
# src/lodum/ext/lsp_server.py

from lsprotocol import types as lsp
from pygls.server import LanguageServer
from pygls.workspace import TextDocument
import re

# Assume we'll have a lodum specific validator
# from ..schema import validate_lodum_class_against_schema # (Hypothetical)

class LodumLanguageServer(LanguageServer):
    CONFIGURATION_SECTION = "lodumLSP"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.diagnostics_per_uri: dict[str, list[lsp.Diagnostic]] = {}

# Example: provide diagnostics for a simple rule
@LodumLanguageServer.feature(lsp.TEXT_DOCUMENT_DID_CHANGE)
def did_change(server: LodumLanguageServer, params: lsp.DidChangeTextDocumentParams):
    _validate(server, params.text_document)

@LodumLanguageServer.feature(lsp.TEXT_DOCUMENT_DID_OPEN)
def did_open(server: LodumLanguageServer, params: lsp.DidOpenTextDocumentParams):
    _validate(server, params.text_document)

def _validate(server: LodumLanguageServer, text_doc: lsp.TextDocument):
    diagnostics: list[lsp.Diagnostic] = []
    text = server.workspace.get_document(text_doc.uri).source
    
    # Simple example: warn if "@lodum" is used without an __init__
    if "@lodum" in text and "def __init__" not in text:
        match = re.search(r"@lodum", text)
        if match:
            line = text.count("
", 0, match.start())
            diagnostics.append(
                lsp.Diagnostic(
                    range=lsp.Range(
                        start=lsp.Position(line=line, character=match.start() - text.rfind("
", 0, match.start()) -1),
                        end=lsp.Position(line=line, character=match.end() - text.rfind("
", 0, match.end()) -1),
                    ),
                    message="Classes decorated with @lodum usually require an __init__ method for field definition.",
                    severity=lsp.DiagnosticSeverity.Warning,
                    source="lodum LSP",
                )
            )
    server.publish_diagnostics(text_doc.uri, diagnostics)
```

#### 2. `vscode-lodum-extension/`: Create new VS Code extension project
**Changes**:
- Create a new directory `vscode-lodum-extension/`.
- Use `yo code` to scaffold a new VS Code extension (TypeScript/JavaScript).
- Configure the extension to launch the Python LSP server (`src/lodum/ext/lsp_server.py`) and act as its client.
- Define activation events and language configurations.

#### 3. `tests/test_lsp_server.py` and `tests/vscode_extension_tests/`: Add new test files
**Changes**:
- Create `tests/test_lsp_server.py` to test the Python LSP server's logic (diagnostics, completion) independently.
- Create `tests/vscode_extension_tests/` with integration tests for the VS Code extension, simulating user interaction and verifying LSP responses.

### Success Criteria:
#### Automated:
- [ ] `PYTHONPATH=src pytest tests/test_lsp_server.py` passes.
- [ ] VS Code extension integration tests pass.
#### Manual:
- [ ] Install the VS Code extension locally.
- [ ] Verify real-time diagnostics for `lodum` code (e.g., missing `__init__` for `@lodum` class).
- [ ] Verify code completion suggestions for `field()` parameters.

---

## Phase 2: VS Code Extension (Auto-generate `field()` Definitions)

### Overview
Enhance the VS Code extension to provide Code Actions or Quick Fixes for auto-generating `field()` definitions based on class attributes or inferring from basic JSON Schema.

### Changes Required:

#### 1. `src/lodum/ext/lsp_server.py`: Add Code Action logic
**Changes**:
- Implement LSP `CodeAction` capabilities in the Python server.
- The server will detect contexts where `field()` definitions are missing or could be improved.
- It will suggest a `CodeAction` to insert `field()` with default values or inferred metadata.

#### 2. `vscode-lodum-extension/`: Add Code Action client logic
**Changes**:
- Implement the client-side logic in the VS Code extension to request and display Code Actions from the LSP server.
- Handle applying the suggested edits (e.g., inserting `field()` calls).

#### 3. `tests/test_lsp_server.py` and `tests/vscode_extension_tests/`: Add Tests
**Changes**:
- Add test cases for the new Code Action functionality.

### Success Criteria:
#### Automated:
- [ ] New tests for Code Actions pass.
#### Manual:
- [ ] Verify that the VS Code extension can auto-generate `field()` definitions as expected.

---

## Phase 3: PyCharm Plugin Exploration (Future)
*This phase will be implemented after Phase 1 and 2 are complete and stable.*

### Overview
Explore the feasibility of developing a PyCharm plugin, potentially by integrating with the Python LSP server or by directly developing using the IntelliJ Platform SDK.

**Implementation Note**: This phase is a separate, significant project due to the different technology stack (Kotlin/Java) and will only be pursued if demand and resources allow.

## Review Criteria (Self-Critique)
- **Specificity**: High for Phase 1 and 2, providing explicit code modifications, test examples, and detailing the LSP server approach. Phase 3 is appropriately high-level.
- **Verification**: Includes both automated and manual success criteria for each phase.
- **Phasing**: Logically prioritizes VS Code (Python-centric) over PyCharm, and diagnostics/completion over more complex code generation features.

## Future Enhancements
*   **Real-time Schema Compliance (Advanced):** Integrate `lodum.schema()` and JSON Schema validation to provide real-time feedback on `@lodum` class compliance with a separate JSON Schema.
*   **`_lodum_fields` Generation from JSON Schema:** A Code Action to generate an entire `@lodum` class from an existing JSON Schema.
*   **Refactoring Tools:** Provide refactoring actions (e.g., `rename` field, `move` field) that correctly update `@lodum` classes and `field()` metadata.
