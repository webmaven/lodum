import json
import sys
import subprocess
from pathlib import Path
from datetime import datetime, timezone

def merge_results(gh_pages_dir, artifacts_dir):
    data_js_path = Path(gh_pages_dir) / "benchmarks" / "data.js"
    history_json_path = Path(gh_pages_dir) / "benchmarks" / "metadata" / "history.json"
    
    # Always initialize data structure
    data = {"entries": {}, "history": [], "tags": {}}
    
    if data_js_path.exists():
        try:
            with open(data_js_path, "r") as f:
                content = f.read()
            json_start = content.find("{")
            json_end = content.rfind("}") + 1
            data = json.loads(content[json_start:json_end])
        except Exception as e:
            print(f"Warning: Could not load existing data.js: {e}")

    # 1. Process all new JSON artifacts
    artifacts = list(Path(artifacts_dir).glob("**/*.json"))
    for artifact_path in artifacts:
        try:
            with open(artifact_path, "r") as f:
                payload = json.load(f)
            
            commit_info = payload.get("commit")
            new_benches = payload.get("results")
            if not commit_info or not new_benches: continue
            
            platform_name = ""
            dir_name = artifact_path.parent.name
            if "ubuntu" in dir_name: platform_name = "ubuntu-latest"
            elif "windows" in dir_name: platform_name = "windows-latest"
            elif "Pyodide" in dir_name: platform_name = "Pyodide"
            
            if not platform_name: continue

            suite_name = f"Lodum Performance Index - {platform_name}"
            if suite_name not in data["entries"]: data["entries"][suite_name] = []
            
            sha = commit_info["id"]
            existing = next((p for p in data["entries"][suite_name] if p["commit"]["id"] == sha), None)
            entry = {
                'commit': commit_info, 
                'date': int(datetime.now(timezone.utc).timestamp() * 1000), 
                'tool': 'customSmallerIsBetter', 
                'benches': new_benches
            }
            
            if existing:
                existing["benches"] = new_benches
                existing["date"] = entry["date"]
            else:
                data["entries"][suite_name].append(entry)
        except Exception as e:
            print(f"Error processing {artifact_path}: {e}")

    # 2. Re-resolve all tags
    try:
        tags_raw = subprocess.check_output(
            ["git", "for-each-ref", "--format=%(refname:short) %(objectname)", "refs/tags"],
            text=True,
        ).splitlines()
        
        resolved_tags = data.get("tags", {})
        for line in tags_raw:
            parts = line.split()
            if len(parts) == 2:
                tag_name, tag_sha = parts
                try:
                    best_sha = subprocess.check_output(["git", "merge-base", tag_sha, "HEAD"], text=True).strip()
                    resolved_tags[best_sha] = tag_name
                except:
                    resolved_tags[tag_sha] = tag_name
        data["tags"] = resolved_tags
    except Exception as e:
        print(f"Warning: Tag resolution failed: {e}")

    # 3. RECONSTRUCT HISTORY (Chronological Sort)
    all_data_shas = set(data.get("tags", {}).keys())
    for suite in data["entries"].values():
        for p in suite:
            all_data_shas.add(p["commit"]["id"])

    sha_dates = []
    for sha in all_data_shas:
        dt = None
        try:
            # Use ISO 8601 for precise timestamp sorting
            iso_date = subprocess.check_output(["git", "show", "-s", "--format=%ci", sha], text=True).strip()
            dt = datetime.strptime(iso_date, "%Y-%m-%d %H:%M:%S %z")
        except:
            # Fallback to entry metadata
            for suite in data["entries"].values():
                entry = next((e for e in suite if e["commit"]["id"] == sha), None)
                if entry and "timestamp" in entry["commit"]:
                    try:
                        dt = datetime.fromisoformat(entry["commit"]["timestamp"].replace('Z', '+00:00'))
                        break
                    except: pass
        
        if dt is None:
            # Absolute fallback: far past
            dt = datetime(1970, 1, 1, tzinfo=timezone.utc)
        
        # Ensure dt is timezone-aware for comparison
        if dt.tzinfo is None:
            dt = dt.replace(tzinfo=timezone.utc)
            
        sha_dates.append((dt, sha))

    # Sort strictly ASCENDING by timestamp, then by SHA for stability
    sha_dates.sort(key=lambda x: (x[0], x[1]))
    data["history"] = [s for _, s in sha_dates]
    
    print(f"Final history length: {len(data['history'])} points (Chronologically sorted).")

    # Update metadata/history.json if possible
    if history_json_path.parent.exists():
        with open(history_json_path, "w") as f:
            json.dump(data["history"], f, indent=2)

    # Save
    data["lastUpdate"] = int(datetime.now(timezone.utc).timestamp() * 1000)
    with open(data_js_path, "w") as f:
        f.write("window.BENCHMARK_DATA = ")
        json.dump(data, f, indent=2)
        f.write(";")

if __name__ == "__main__":
    if len(sys.argv) < 3: sys.exit(1)
    merge_results(sys.argv[1], sys.argv[2])
