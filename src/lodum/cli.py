# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import argparse
import json
import sys
from typing import TextIO

from lodum.ext.codegen import SchemaToLodumConverter

def main():
    parser = argparse.ArgumentParser(description="Generate Lodum models from JSON Schema or JSON data.")
    parser.add_argument("input", nargs="?", type=argparse.FileType("r"), default=sys.stdin, help="Input JSON file (Schema or Data). Defaults to stdin.")
    parser.add_argument("-o", "--output", type=argparse.FileType("w"), default=sys.stdout, help="Output Python file. Defaults to stdout.")
    parser.add_argument("-n", "--name", default="Root", help="Name of the root class.")
    parser.add_argument("--infer", action="store_true", help="Force inference of schema from data (treat input as raw JSON).")

    args = parser.parse_args()

    try:
        data = json.load(args.input)
    except json.JSONDecodeError as e:
        sys.stderr.write(f"Error: Invalid JSON input: {e}\n")
        sys.exit(1)

    # Auto-detection logic:
    # If it has "type": "object" or "$schema", it's likely a schema.
    # Otherwise, or if --infer is passed, treat as data.
    is_schema = False
    if isinstance(data, dict):
        if "$schema" in data or ("type" in data and data["type"] in ["object", "array"]):
             is_schema = True
    
    if args.infer:
        is_schema = False

    if is_schema:
        schema = data
    else:
        # Infer schema
        schema = SchemaToLodumConverter.infer_schema(data)
        # Wrap in title if needed?
        if "title" not in schema:
            schema["title"] = args.name

    converter = SchemaToLodumConverter(schema, root_classname=args.name)
    try:
        code = converter.generate_code()
    except Exception as e:
        sys.stderr.write(f"Error generating code: {e}\n")
        import traceback
        traceback.print_exc()
        sys.exit(1)

    args.output.write(code)
    # Ensure newline at end
    if not code.endswith("\n"):
        args.output.write("\n")

if __name__ == "__main__":
    main()