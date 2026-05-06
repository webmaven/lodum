import json
import os
import shutil
import unittest
from unittest.mock import patch, MagicMock
from pathlib import Path

# Since migrate_data.py doesn't exist yet, this will fail.
from benchmarks.migrate_data import migrate_data

class TestMigrateData(unittest.TestCase):
    def setUp(self):
        self.test_dir = Path("tests/tmp_migrate_test")
        self.test_dir.mkdir(parents=True, exist_ok=True)
        self.data_js = self.test_dir / "data.js"
        self.output_dir = self.test_dir / "history"
        
        # Sample data.js content
        sample_data = {
            "entries": {
                "Lodum Performance Index - ubuntu-latest": [
                    {
                        "commit": {"id": "valid_sha_1", "message": "msg1"},
                        "benches": [{"name": "bench1", "value": 10}]
                    },
                    {
                        "commit": {"id": "ghost_sha", "message": "ghost"},
                        "benches": [{"name": "bench1", "value": 20}]
                    }
                ]
            }
        }
        with open(self.data_js, "w") as f:
            f.write(f"window.BENCHMARK_DATA = {json.dumps(sample_data)};")

    def tearDown(self):
        shutil.rmtree(self.test_dir)

    @patch("subprocess.check_output")
    def test_migration_filtering(self, mock_check_output):
        # Mock git rev-list to only return valid_sha_1
        mock_check_output.return_value = "valid_sha_1\n"
        
        if migrate_data:
            migrate_data(self.data_js, self.output_dir)
            
            # Check if valid_sha_1 was created
            self.assertTrue((self.output_dir / "valid_sha_1" / "ubuntu-latest.json").exists())
            # Check if ghost_sha was NOT created
            self.assertFalse((self.output_dir / "ghost_sha").exists())
            
            # Verify content
            with open(self.output_dir / "valid_sha_1" / "ubuntu-latest.json", "r") as f:
                saved_data = json.load(f)
                self.assertEqual(saved_data["results"][0]["value"], 10)

if __name__ == "__main__":
    unittest.main()
