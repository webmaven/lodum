# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import ast
import pytest
from lodum.ext.codegen import SchemaToLodumConverter, to_snake_case

def test_snake_case_conversion():
    assert to_snake_case("camelCase") == "camel_case"
    assert to_snake_case("PascalCase") == "pascal_case"
    assert to_snake_case("simple") == "simple"
    assert to_snake_case("HTMLParser") == "html_parser"
    assert to_snake_case("user_id") == "user_id"

def test_simple_schema_generation():
    schema = {
        "title": "User",
        "type": "object",
        "properties": {
            "id": {"type": "integer"},
            "name": {"type": "string"},
            "isActive": {"type": "boolean"}
        },
        "required": ["id", "name"]
    }
    
    converter = SchemaToLodumConverter(schema, root_classname="User")
    code = converter.generate_code()
    
    print(code)
    
    # Check for core components
    assert "@lodum" in code
    assert "class User:" in code
    
    # Check __init__ signature
    # id and name should be first (required), isActive last (optional/default)
    # Note: isActive should become is_active and have a rename
    assert "id: int" in code
    assert "name: str" in code
    assert "is_active: Optional[bool]" in code or "is_active: bool" in code 
    # With field(), the type hint depends on how we constructed AST.
    # In my logic: not required -> Optional[bool].
    
    assert "field(rename='isActive'" in code
    assert 'default=None' in code

def test_nested_schema_generation():
    schema = {
        "type": "object",
        "properties": {
            "user": {
                "type": "object",
                "properties": {
                    "name": {"type": "string"}
                },
                "required": ["name"]
            },
            "tags": {
                "type": "array",
                "items": {"type": "string"}
            }
        },
        "required": ["user"]
    }
    
    converter = SchemaToLodumConverter(schema, root_classname="Response")
    code = converter.generate_code()
    
    # Should define the nested class first (implicitly by dict order or explicitly)
    # Or just referenced.
    
    assert "class User:" in code
    assert "class Response:" in code
    
    assert "user: User" in code
    assert "tags: Optional[List[str]]" in code

def test_compilation_and_execution():
    """Verify generated code is valid Python"""
    schema = {
        "type": "object",
        "properties": {
            "count": {"type": "integer"}
        },
        "required": ["count"]
    }
    
    converter = SchemaToLodumConverter(schema, root_classname="Counter")
    code = converter.generate_code()
    
    # Try to compile it
    try:
        compile(code, "<string>", "exec")
    except SyntaxError as e:
        pytest.fail(f"Generated code raised SyntaxError: {e}")

