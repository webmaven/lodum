import json
import sys
import subprocess
from pathlib import Path
from datetime import datetime


def merge_results(gh_pages_dir, artifacts_dir):
    data_js_path = Path(gh_pages_dir) / "benchmarks" / "data.js"
    if not data_js_path.exists():
        print(f"Error: {data_js_path} not found.")
        return

    # Load existing data.js
    with open(data_js_path, "r") as f:
        content = f.read()

    json_start = content.find("{")
    json_end = content.rfind("}") + 1
    data = json.loads(content[json_start:json_end])

    # Add history and tags from git
    try:
        # Get existing history
        existing_history = data.get("history", [])
        
        # Get full topological history from current HEAD
        git_history = subprocess.check_output(
            ["git", "rev-list", "--topo-order", "--reverse", "HEAD"], text=True
        ).splitlines()
        
        # Merge histories: start with existing, append new ones from git
        # This preserves historical SHAs that might have been rebased out or are from deleted branches.
        history_set = set(existing_history)
        merged_history = list(existing_history)
        for sha in git_history:
            if sha not in history_set:
                merged_history.append(sha)
                history_set.add(sha)
        
        data["history"] = merged_history

        # Get all tags and resolve them to the closest commit on main
        tags_raw = subprocess.check_output(
            [
                "git",
                "for-each-ref",
                "--format=%(refname:short) %(objectname)",
                "refs/tags",
            ],
            text=True,
        ).splitlines()

        # Preserve existing tags
        resolved_tags = data.get("tags", {})
        for line in tags_raw:
            parts = line.split()
            if len(parts) != 2:
                continue
            tag_name, tag_sha = parts
            if tag_sha in resolved_tags:
                continue
            try:
                # Find the first commit on main that contains this tag's changes
                # or is the tag itself.
                best_sha = subprocess.check_output(
                    ["git", "merge-base", tag_sha, "HEAD"], text=True
                ).strip()
                resolved_tags[best_sha] = tag_name
            except subprocess.CalledProcessError:
                resolved_tags[tag_sha] = tag_name

        data["tags"] = resolved_tags
        print(f"Captured {len(data['history'])} total history points and {len(data['tags'])} tags.")
    except Exception as e:
        print(f"Warning: Could not retrieve history or tags: {e}")

    # Process all JSON artifacts
    artifacts = list(Path(artifacts_dir).glob("**/*.json"))
    print(f"Found {len(artifacts)} result files.")

    for artifact_path in artifacts:
        print(f"Processing {artifact_path}...")
        try:
            with open(artifact_path, "r") as f:
                payload = json.load(f)
        except Exception as e:
            print(f"  Error reading {artifact_path}: {e}")
            continue

        if not payload or "results" not in payload:
            print(f"  Skipping {artifact_path}: No results found.")
            continue

        commit_info = payload.get("commit")
        new_benches = payload.get("results")

        if not commit_info or new_benches is None:
            print(f"  Skipping {artifact_path}: Missing commit info or benches.")
            continue

        if not isinstance(new_benches, list):
            print(
                f"  Error: 'results' in {artifact_path} is not a list! Type: {type(new_benches)}"
            )
            print(f"  Payload keys: {list(payload.keys())}")
            continue

        # Determine platform from artifact path or benchmark names
        platform_name = ""

        # 1. Try artifact path first (more reliable)
        dir_name = artifact_path.parent.name
        if "ubuntu" in dir_name:
            platform_name = "ubuntu-latest"
        elif "windows" in dir_name:
            platform_name = "windows-latest"
        elif "Pyodide" in dir_name:
            platform_name = "Pyodide"

        # 2. Fallback to benchmark names if not in path
        if not platform_name:
            for b in new_benches:
                if not isinstance(b, dict):
                    continue
                name = b.get("name", "")
                if "(" in name and ")" in name:
                    content = name.split("(")[1].split(")")[0]
                    if content not in ["Cold Start", "Safe"]:
                        platform_name = content
                        break

        if not platform_name:
            print(f"  Warning: Could not determine platform for {artifact_path}")
            continue

        suite_name = f"Lodum Performance Index - {platform_name}"
        if suite_name not in data["entries"]:
            data["entries"][suite_name] = []

        sha = commit_info["id"]
        # Check if this SHA already exists in this suite
        existing = next(
            (p for p in data["entries"][suite_name] if p["commit"]["id"] == sha), None
        )

        entry = {
            "commit": commit_info,
            "date": int(datetime.now().timestamp() * 1000),
            "tool": "customSmallerIsBetter",
            "benches": new_benches,
        }

        if existing:
            print(f"  Updating existing entry for {sha[:7]} in {suite_name}")
            existing["benches"] = new_benches
            existing["date"] = entry["date"]
        else:
            print(f"  Adding new entry for {sha[:7]} to {suite_name}")
            data["entries"][suite_name].append(entry)

    # Ensure all SHAs with data are in history
    all_data_shas = set()
    for suite in data["entries"].values():
        for p in suite:
            all_data_shas.add(p["commit"]["id"])
    
    current_history_set = set(data["history"])
    for sha in all_data_shas:
        if sha not in current_history_set:
            print(f"  Adding missing entry SHA to history: {sha[:7]}")
            data["history"].append(sha)
            current_history_set.add(sha)

    # Save updated data.js
    data["lastUpdate"] = int(datetime.now().timestamp() * 1000)
    with open(data_js_path, "w") as f:
        f.write("window.BENCHMARK_DATA = ")
        json.dump(data, f, indent=2)
        f.write(";")
    print("Done merging results.")


if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python merge_data.py <gh_pages_dir> <artifacts_dir>")
        sys.exit(1)
    merge_results(sys.argv[1], sys.argv[2])
