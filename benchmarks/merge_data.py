import json
import sys
import subprocess
from pathlib import Path
from datetime import datetime

def merge_results(gh_pages_dir, artifacts_dir):
    data_js_path = Path(gh_pages_dir) / "benchmarks" / "data.js"
    history_json_path = Path(gh_pages_dir) / "benchmarks" / "metadata" / "history.json"
    
    # Always initialize data structure
    data = {"entries": {}, "history": [], "tags": {}}
    
    # Load existing data.js if exists
    if data_js_path.exists():
        try:
            with open(data_js_path, "r") as f:
                content = f.read()
            json_start = content.find("{")
            json_end = content.rfind("}") + 1
            data = json.loads(content[json_start:json_end])
        except Exception as e:
            print(f"Warning: Could not load existing data.js, starting fresh: {e}")

    # Process all JSON artifacts
    artifacts = list(Path(artifacts_dir).glob("**/*.json"))
    for artifact_path in artifacts:
        try:
            with open(artifact_path, "r") as f:
                payload = json.load(f)
            
            commit_info = payload.get("commit")
            new_benches = payload.get("results")
            if not commit_info or new_benches is None: continue
            
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
            if suite_name not in data["entries"]: data["entries"][suite_name] = []
            
            sha = commit_info["id"]
            existing = next((p for p in data["entries"][suite_name] if p["commit"]["id"] == sha), None)
            entry = {'commit': commit_info, 'date': int(datetime.now().timestamp() * 1000), 'tool': 'customSmallerIsBetter', 'benches': new_benches}
            
            if existing:
                existing["benches"] = new_benches
                existing["date"] = entry["date"]
            else:
                data["entries"][suite_name].append(entry)

        except Exception as e:
            print(f"Error processing {artifact_path}: {e}")

    # Reconstruct history and tags
    try:
        # Collect all SHAs that have data
        all_data_shas = set()
        for suite in data["entries"].values():
            for p in suite:
                all_data_shas.add(p["commit"]["id"])

        # Update tags
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
        tag_shas = set(resolved_tags.keys())

        # SHAs that MUST be in history
        required_shas = all_data_shas | tag_shas

        # Get full topological history from HEAD
        full_git_history = subprocess.check_output(
            ["git", "rev-list", "--topo-order", "--reverse", "HEAD"], text=True
        ).splitlines()
        
        # New history is the intersection of required SHAs and full project history
        # (Preserves chronological order of the project)
        new_history = [sha for sha in full_git_history if sha in required_shas]
        
        # Handle SHAs that have data but are no longer in the current git history
        # (e.g. from deleted branches or rebased commits)
        remaining_shas = required_shas - set(new_history)
        if remaining_shas:
            old_history = data.get("history", [])
            # Try to preserve their previous order if they were already in history
            for sha in old_history:
                if sha in remaining_shas and sha not in new_history:
                    new_history.append(sha)
            # Add any entirely new ones at the end
            for sha in sorted(list(remaining_shas)):
                if sha not in new_history:
                    new_history.append(sha)

        data["history"] = new_history
        
        # Update history anchor file if it exists
        if history_json_path.exists():
            with open(history_json_path, "w") as f:
                json.dump(new_history, f, indent=2)
        
    except Exception as e:
        print(f"Warning: History management failed: {e}")

    # Save data.js
    data["lastUpdate"] = int(datetime.now().timestamp() * 1000)
    with open(data_js_path, "w") as f:
        f.write("window.BENCHMARK_DATA = ")
        json.dump(data, f, indent=2)
        f.write(";")

if __name__ == "__main__":
    merge_results(sys.argv[1], sys.argv[2])
