# SPDX-FileCopyrightText: 2025-present Michael R. Bernstein <zopemaven@gmail.com>
#
# SPDX-License-Identifier: Apache-2.0
import pytest
import subprocess
import sys
import os
from lodum.cli import main

def test_cli_help():
    result = subprocess.run(
        [sys.executable, "-m", "lodum.cli", "--help"],
        capture_output=True,
        text=True
    )
    assert result.returncode == 0
    assert "Generate Lodum models" in result.stdout

def test_cli_codegen_stdin(tmp_path):
    # Test reading from stdin and writing to stdout
    input_json = '{"type": "object", "properties": {"name": {"type": "string"}}}'
    
    result = subprocess.run(
        [sys.executable, "-m", "lodum.cli", "--name", "MyUser"],
        input=input_json,
        capture_output=True,
        text=True,
        env={**os.environ, "PYTHONPATH": "src"}
    )
    
    assert result.returncode == 0
    assert "class MyUser:" in result.stdout
    assert "name: Optional[str]" in result.stdout # Not required, so optional

def test_cli_inference(tmp_path):
    # Test raw JSON inference
    input_data = '{"id": 123, "username": "test"}'
    
    result = subprocess.run(
        [sys.executable, "-m", "lodum.cli", "--name", "User", "--infer"],
        input=input_data,
        capture_output=True,
        text=True,
        env={**os.environ, "PYTHONPATH": "src"}
    )
    
    assert result.returncode == 0
    assert "class User:" in result.stdout
    # In inference, I made fields required by default
    assert "id: int" in result.stdout
    assert "username: str" in result.stdout

def test_cli_file_io(tmp_path):
    input_file = tmp_path / "schema.json"
    output_file = tmp_path / "model.py"
    
    input_file.write_text('{"type": "object", "properties": {"val": {"type": "integer"}}}')
    
    result = subprocess.run(
        [sys.executable, "-m", "lodum.cli", str(input_file), "-o", str(output_file)],
        capture_output=True,
        text=True,
        env={**os.environ, "PYTHONPATH": "src"}
    )
    
    assert result.returncode == 0
    assert output_file.exists()
    content = output_file.read_text()
    assert "val: Optional[int]" in content
