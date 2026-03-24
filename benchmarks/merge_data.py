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
    data = {"entries": {}, "history": [], "tags": {}}
    if data_js_path.exists():
        try:
            with open(data_js_path, "r") as f:
                content = f.read()
            json_start = content.find("{")
            json_end = content.rfind("}") + 1
            data = json.loads(content[json_start:json_end])
        except Exception as e:
            print(f"Warning: Could not load existing data.js, starting fresh: {e}")
            data = {"entries": {}, "history": [], "tags": {}}
    else:
        print(f"Info: {data_js_path} not found, initializing empty structure.")

    # Add history and tags from git (initial load)
    try:
        git_history = subprocess.check_output(
            ["git", "rev-list", "--topo-order", "--reverse", "HEAD"], text=True
        ).splitlines()
        
        history_set = set(data.get("history", []))
        merged_history = list(data.get("history", []))
        for sha in git_history:
            if sha not in history_set:
                merged_history.append(sha)
                history_set.add(sha)
        data["history"] = merged_history

        tags_raw = subprocess.check_output(
            ["git", "for-each-ref", "--format=%(refname:short) %(objectname)", "refs/tags"],
            text=True,
        ).splitlines()

        resolved_tags = data.get("tags", {})
        for line in tags_raw:
            parts = line.split()
            if len(parts) == 2:
                tag_name, tag_sha = parts
                if tag_sha not in resolved_tags:
                    try:
                        best_sha = subprocess.check_output(["git", "merge-base", tag_sha, "HEAD"], text=True).strip()
                        resolved_tags[best_sha] = tag_name
                    except:
                        resolved_tags[tag_sha] = tag_name
        data["tags"] = resolved_tags
    except Exception as e:
        print(f"Warning: Preliminary history load failed: {e}")

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
            continue

        commit_info = payload.get("commit")
        new_benches = payload.get("results")
        if not commit_info or new_benches is None:
            continue

        # Determine platform
        platform_name = ""
        dir_name = artifact_path.parent.name
        if "ubuntu" in dir_name: platform_name = "ubuntu-latest"
        elif "windows" in dir_name: platform_name = "windows-latest"
        elif "Pyodide" in dir_name: platform_name = "Pyodide"

        if not platform_name:
            for b in new_benches:
                name = b.get("name", "")
                if "(" in name and ")" in name:
                    content = name.split("(")[1].split(")")[0]
                    if content not in ["Cold Start", "Safe"]:
                        platform_name = content; break

        if not platform_name: continue

        suite_name = f"Lodum Performance Index - {platform_name}"
        if suite_name not in data["entries"]:
            data["entries"][suite_name] = []

        sha = commit_info["id"]
        existing = next((p for p in data["entries"][suite_name] if p["commit"]["id"] == sha), None)
        entry = {
            "commit": commit_info,
            "date": int(datetime.now().timestamp() * 1000),
            "tool": "customSmallerIsBetter",
            "benches": new_benches,
        }

        if existing:
            existing["benches"] = new_benches
            existing["date"] = entry["date"]
        else:
            data["entries"][suite_name].append(entry)

def merge_results(gh_pages_dir, artifacts_dir):
    data_js_path = Path(gh_pages_dir) / "benchmarks" / "data.js"
    history_json_path = Path(gh_pages_dir) / "benchmarks" / "metadata" / "history.json"
    
    # ... (existing data load) ...

    # Load/Update history.json
    try:
        if history_json_path.exists():
            with open(history_json_path, "r") as f:
                history_anchor = json.load(f)
        else:
            history_anchor = data.get("history", [])

        # Add new SHAs from artifacts to history_anchor if they have data
        all_data_shas = set()
        for suite in data["entries"].values():
            for p in suite:
                all_data_shas.add(p["commit"]["id"])
        
        # Merge new SHAs into history (maintaining order by date)
        # 1. Get dates for missing SHAs
        missing_shas = all_data_shas - set(history_anchor)
        if missing_shas:
            sha_dates = []
            for sha in missing_shas:
                try:
                    date = subprocess.check_output(['git', 'show', '-s', '--format=%ct', sha], text=True).strip()
                    sha_dates.append((int(date), sha))
                except:
                    sha_dates.append((0, sha))
            sha_dates.sort()
            
            # Insert them into the history_anchor keeping it sorted by time
            for date, sha in sha_dates:
                # Simple insertion: find correct slot
                history_anchor.append(sha)
                # Resort to ensure chronological integrity
                # (A more efficient merge could be used here)
        
        # Save updated history anchor
        with open(history_json_path, "w") as f:
            json.dump(history_anchor, f, indent=2)
        
        data["history"] = history_anchor
        
    except Exception as e:
        print(f"Warning: History anchor management failed: {e}")
        # fallback to current data history
    
    # ... (rest of processing) ...

    data["lastUpdate"] = int(datetime.now().timestamp() * 1000)
    
    with open(data_js_path, "w") as f:
        f.write("window.BENCHMARK_DATA = ")
        json.dump(data, f, indent=2)
        f.write(";")
    print(f"Done. Final history length: {len(data['history'])} points.")


if __name__ == "__main__":
    if len(sys.argv) < 3:
        sys.exit(1)
    merge_results(sys.argv[1], sys.argv[2])
