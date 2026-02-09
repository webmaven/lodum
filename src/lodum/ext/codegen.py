# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import ast
import re
from typing import Any, Dict, List, Optional, Set, Tuple

def to_snake_case(name: str) -> str:
    """Converts a string to snake_case."""
    # Handle already snake_case or simple names
    if "_" in name and name.islower():
        return name
    
    # Handle PascalCase or camelCase
    # Insert underscore between lower and upper
    s1 = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', name)
    # Insert underscore between lower/digit and upper
    return re.sub('([a-z0-9])([A-Z])', r'\1_\2', s1).lower()

class SchemaToLodumConverter:
    def __init__(self, json_schema: Dict[str, Any], root_classname: str = "Root"):
        self.json_schema = json_schema
        self.root_classname = root_classname
        # Map of class_name -> ast.ClassDef
        self.generated_classes: Dict[str, ast.ClassDef] = {}
        # Track generated class names to avoid duplicates
        self.class_names: Set[str] = set()
        
        # We need an AST Builder similar to the compiler's, but we'll construct manually 
        # for now to keep this module self-contained or use simple helpers.

    @staticmethod
    def infer_schema(data: Any) -> Dict[str, Any]:
        """Infers a JSON Schema from a Python object (raw JSON data)."""
        if isinstance(data, dict):
            properties = {}
            required = []
            for k, v in data.items():
                properties[k] = SchemaToLodumConverter.infer_schema(v)
                required.append(k) # Assume all fields in example are required? Or make them optional?
                # For safety in codegen, let's make them required for now, or maybe not.
                # If we assume the example is complete, required is fine.
            return {"type": "object", "properties": properties, "required": required}
        elif isinstance(data, list):
            if not data:
                return {"type": "array", "items": {}}
            # Infer item type from first element (naive) or merge types?
            # For MVP, take first item.
            return {"type": "array", "items": SchemaToLodumConverter.infer_schema(data[0])}
        elif isinstance(data, bool):
             return {"type": "boolean"}
        elif isinstance(data, int):
             return {"type": "integer"}
        elif isinstance(data, float):
             return {"type": "number"}
        elif isinstance(data, str):
             return {"type": "string"}
        elif data is None:
             return {"type": "null"}
        else:
             return {}

    def generate_code(self) -> str:
        """Main entry point to generate the Python code string."""
        module_ast = self.convert_to_module_ast()
        # Ensure all nodes have lineno/col_offset
        ast.fix_missing_locations(module_ast)
        # ast.unparse is available in Python 3.9+
        return ast.unparse(module_ast)

    def convert_to_module_ast(self) -> ast.Module:
        """Generates the full module AST."""
        imports = [
            ast.ImportFrom(
                module="lodum",
                names=[ast.alias(name="lodum"), ast.alias(name="field")],
                level=0
            ),
            ast.ImportFrom(
                module="typing",
                names=[
                    ast.alias(name="List"),
                    ast.alias(name="Dict"),
                    ast.alias(name="Optional"),
                    ast.alias(name="Any"),
                ],
                level=0
            )
        ]

        # Process definitions/refs first if they exist (handling shared types)
        # For now, we'll just process the root schema which handles nested objects recursively.
        
        self._process_schema(self.root_classname, self.json_schema)

        # Collect all generated classes
        # We want to ensure dependent classes are defined before they are used if possible,
        # but Python handles forward refs with strings if needed. 
        # For simple scripts, order might not strictly matter if we don't execute at import time, 
        # but usually definition order is best. 
        # Since we use recursion, nested classes are generated first.
        body = imports + list(self.generated_classes.values())
        
        return ast.Module(body=body, type_ignores=[])

    def _process_schema(self, class_name: str, schema: Dict[str, Any]) -> str:
        """
        Process a schema node. 
        If it's an object, generate a class and return the class name.
        If it's a primitive, return the type name (e.g. 'int', 'str').
        """
        schema_type = schema.get("type", "any")
        
        if schema_type == "object" and "properties" in schema:
            return self._generate_class_from_object(class_name, schema)
        elif schema_type == "array":
            item_type = self._process_schema(f"{class_name}Item", schema.get("items", {}))
            return f"List[{item_type}]"
        else:
            return self._map_json_type_to_python_type(schema_type, schema.get("format"))

    def _generate_class_from_object(self, name: str, schema: Dict[str, Any]) -> str:
        """Generates an @lodum class and returns its name."""
        # Ensure unique class name
        original_name = name
        counter = 1
        while name in self.generated_classes and self.generated_classes[name] is not None:
             # If strictly equal schema, maybe reuse? For now, we assume distinct.
             name = f"{original_name}{counter}"
             counter += 1
        
        properties = schema.get("properties", {})
        required_fields = set(schema.get("required", []))
        
        init_args = []
        body_stmts = []

        # __init__ arguments
        # We need 'self'
        init_args.append(ast.arg(arg="self"))

        assignments = []
        
        for prop_name, prop_schema in properties.items():
            py_name = to_snake_case(prop_name)
            
            # Determine type
            # We recurse here using a derived name for nested objects
            prop_type_str = self._process_schema(prop_name.capitalize(), prop_schema)
            
            # Check if optional
            is_required = prop_name in required_fields
            if not is_required:
                prop_type_str = f"Optional[{prop_type_str}]"
            
            # Create annotation node
            # We parse the string back to AST to handle complex types like List[User]
            annotation = ast.parse(prop_type_str, mode='eval').body
            
            # Determine default value / field() call
            default_val = None
            
            needs_field = False
            field_keywords = []
            
            # Rename if necessary
            if py_name != prop_name:
                needs_field = True
                field_keywords.append(ast.keyword(arg="rename", value=ast.Constant(value=prop_name)))
                
            if not is_required:
                # Default to None for optionals
                default_val = ast.Constant(value=None)
            
            # If we have a field(), the default value becomes part of the field() call
            # or the default of the argument if no factory needed.
            # lodum.field(default=...)
            
            if needs_field:
                if default_val is not None:
                    field_keywords.append(ast.keyword(arg="default", value=default_val))
                    default_val = None # Moved inside field()
                
                field_call = ast.Call(
                    func=ast.Name(id="field", ctx=ast.Load()),
                    args=[],
                    keywords=field_keywords
                )
                default_node = field_call
            else:
                default_node = default_val

            # Add to init args
            init_args.append(ast.arg(arg=py_name, annotation=annotation))
            
            # Add self.x = x assignment
            assignments.append(
                ast.Assign(
                    targets=[ast.Attribute(value=ast.Name(id="self", ctx=ast.Load()), attr=py_name, ctx=ast.Store())],
                    value=ast.Name(id=py_name, ctx=ast.Load())
                )
            )

            # NOTE: ast.arguments structure is complex.
            # We need defaults list matching the tail of args.
            
        # Reconstruct defaults list for ast.arguments
        # This is tricky because defaults correspond to the last N arguments.
        # We'll need to separate args with defaults from those without.
        
        final_args = []
        final_defaults = []
        
        # Sort logic: Required args first, then Defaults.
        # But wait, we want to preserve order if possible, but Python syntax forces defaults at end.
        # Alternatively, we can make everything keyword-only or just reorder.
        # Reordering is standard.
        
        args_with_defaults = []
        args_without_defaults = []
        
        # We iterate the constructed args/defaults (skipping self)
        # Wait, the loop above mixed them. Let's redo the loop logic slightly to separate them.
        
        # We need to map py_name -> (annotation, default_node)
        prop_definitions = []
        
        for prop_name, prop_schema in properties.items():
             py_name = to_snake_case(prop_name)
             prop_type_str = self._process_schema(prop_name.capitalize(), prop_schema)
             is_required = prop_name in required_fields
             
             if not is_required:
                 prop_type_str = f"Optional[{prop_type_str}]"
             
             annotation = ast.parse(prop_type_str, mode='eval').body
             
             default_node = None
             needs_field = False
             field_keywords = []
             
             if py_name != prop_name:
                 needs_field = True
                 field_keywords.append(ast.keyword(arg="rename", value=ast.Constant(value=prop_name)))
                 
             if not is_required:
                 if needs_field:
                     field_keywords.append(ast.keyword(arg="default", value=ast.Constant(value=None)))
                 else:
                     default_node = ast.Constant(value=None)
             elif needs_field:
                 # Required, but needs rename -> field(rename="x")
                 # This acts as a default value in the signature!
                 pass
            
             if needs_field:
                 default_node = ast.Call(
                    func=ast.Name(id="field", ctx=ast.Load()),
                    args=[],
                    keywords=field_keywords
                 )
             
             prop_definitions.append({
                 "name": py_name,
                 "annotation": annotation,
                 "default": default_node,
                 "is_required_logic": is_required and not needs_field
             })

        # Now sort: Required args (no default node) first.
        # Args with default nodes (literals or field() calls) second.
        
        sorted_props = sorted(prop_definitions, key=lambda x: 0 if x["default"] is None else 1)
        
        arguments_node = ast.arguments(
            posonlyargs=[],
            args=[ast.arg(arg="self")] + [ast.arg(arg=p["name"], annotation=p["annotation"]) for p in sorted_props],
            kwonlyargs=[],
            kw_defaults=[],
            defaults=[p["default"] for p in sorted_props if p["default"] is not None],
            vararg=None,
            kwarg=None
        )
        
        # Assignments
        # We need to assign in the order of args? Or just all of them.
        body = [
            ast.Assign(
                targets=[ast.Attribute(value=ast.Name(id="self", ctx=ast.Load()), attr=p["name"], ctx=ast.Store())],
                value=ast.Name(id=p["name"], ctx=ast.Load())
            ) for p in sorted_props
        ]
        
        if not body:
            body = [ast.Pass()]

        init_method = ast.FunctionDef(
            name="__init__",
            args=arguments_node,
            body=body,
            decorator_list=[],
            returns=ast.Constant(value=None)
        )
        
        class_def = ast.ClassDef(
            name=name,
            bases=[],
            keywords=[],
            body=[init_method],
            decorator_list=[ast.Name(id="lodum", ctx=ast.Load())]
        )
        
        self.generated_classes[name] = class_def
        return name

    def _map_json_type_to_python_type(self, json_type: str, json_format: Optional[str] = None) -> str:
        if json_type == "string":
            return "str"
        elif json_type == "integer":
            return "int"
        elif json_type == "number":
            return "float"
        elif json_type == "boolean":
            return "bool"
        elif json_type == "null":
            return "None"
        # Fallback
        return "Any"
