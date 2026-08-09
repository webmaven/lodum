import json
import subprocess
from pathlib import Path


def get_valid_shas():
    """Returns a set of SHAs present in the current 'main' branch or project tags."""
    try:
        # Get all SHAs in 'main'
        main_shas = subprocess.check_output(
            ["git", "rev-list", "main"], text=True
        ).splitlines()

        # Get all tag SHAs
        tag_shas = subprocess.check_output(
            ["git", "rev-list", "--tags"], text=True
        ).splitlines()

        return set(main_shas + tag_shas)
    except Exception as e:
        print(f"Warning: Could not get valid SHAs: {e}")
        return set()


def migrate_data(data_js_path, output_dir):
    """
    Extracts benchmark results from a monolithic data.js and saves them as atomic
    JSON files in output_dir/<sha>/<platform>.json, only for SHAs in 'main'.
    """
    data_js_path = Path(data_js_path)
    output_dir = Path(output_dir)

    if not data_js_path.exists():
        print(f"Error: {data_js_path} does not exist.")
        return

    # 1. Parse data.js
    content = data_js_path.read_text()
    json_start = content.find("{")
    json_end = content.rfind("}") + 1
    if json_start == -1 or json_end == 0:
        print("Error: Could not find JSON in data.js")
        return

    data = json.loads(content[json_start:json_end])
    valid_shas = get_valid_shas()

    # 2. Process entries
    entries = data.get("entries", {})
    count = 0
    ghost_count = 0

    for suite_name, suite_data in entries.items():
        # Infer platform from suite name
        platform = "unknown"
        if "ubuntu" in suite_name.lower():
            platform = "ubuntu-latest"
        elif "windows" in suite_name.lower():
            platform = "windows-latest"
        elif "pyodide" in suite_name.lower():
            platform = "Pyodide"

        for entry in suite_data:
            sha = entry.get("commit", {}).get("id")
            if not sha:
                continue

            # Filter by 'main' SHAs
            if sha not in valid_shas:
                # For testing purposes, we might want to check against our mock in the test
                # But in real use, we want strictly main.
                # Since we are mocking subprocess in the test, it should work.
                ghost_count += 1
                continue

            # Create atomic file
            sha_dir = output_dir / sha
            sha_dir.mkdir(parents=True, exist_ok=True)

            result_payload = {"commit": entry["commit"], "results": entry["benches"]}

            output_file = sha_dir / f"{platform}.json"
            output_file.write_text(json.dumps(result_payload, indent=2))
            count += 1

    print(
        f"Migration complete: {count} entries atomized. {ghost_count} ghost entries skipped."
    )


if __name__ == "__main__":
    import sys

    if len(sys.argv) < 3:
        print("Usage: python3 migrate_data.py <data.js_path> <output_dir>")
        sys.exit(1)
    migrate_data(sys.argv[1], sys.argv[2])
