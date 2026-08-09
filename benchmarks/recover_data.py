import json
import subprocess
from pathlib import Path
import re
from difflib import SequenceMatcher


def get_main_commits():
    """Returns a list of (sha, message, timestamp) tuples from the current 'main' branch."""
    output = subprocess.check_output(
        ["git", "log", "main", "--format=%H|%s|%at"], text=True
    ).splitlines()
    commits = []
    for line in output:
        parts = line.split("|", 2)
        if len(parts) == 3:
            commits.append(
                {"sha": parts[0], "msg": parts[1].strip(), "time": int(parts[2])}
            )
    return commits


def parse_data_js(file_path):
    """Parses a monolithic data.js and returns a list of all entries with their metadata."""
    content = Path(file_path).read_text()
    json_start = content.find("{")
    json_end = content.rfind("}") + 1
    data = json.loads(content[json_start:json_end])

    all_entries = []
    for suite_name, suite_data in data.get("entries", {}).items():
        platform = "unknown"
        if "ubuntu" in suite_name.lower():
            platform = "ubuntu-latest"
        elif "windows" in suite_name.lower():
            platform = "windows-latest"
        elif "pyodide" in suite_name.lower():
            platform = "Pyodide"

        for entry in suite_data:
            all_entries.append(
                {
                    "platform": platform,
                    "entry": entry,
                    "msg": entry.get("commit", {}).get("message", "").strip(),
                    "sha": entry.get("commit", {}).get("id"),
                }
            )

    return all_entries


def normalize_msg(msg):
    """Simplifies a message for easier matching."""
    msg = msg.lower()
    msg = re.sub(r"\(#\d+\)", "", msg)
    msg = re.sub(
        r"^(feat|fix|chore|docs|style|refactor|test|perf|ci|release):\s*", "", msg
    )
    msg = re.sub(r"^merge pull request #\d+ from .*$", "", msg)
    msg = re.sub(r"[^a-z0-9\s]", "", msg)
    return msg.strip()


def similarity(a, b):
    return SequenceMatcher(None, a, b).ratio()


def recover_data(original_data_path, output_dir):
    output_dir = Path(output_dir)
    main_commits = get_main_commits()
    original_entries = parse_data_js(original_data_path)

    count = 0
    mapped_shas = set()

    # Pre-normalize messages
    for ent in original_entries:
        ent["n_msg"] = normalize_msg(ent["msg"])

    for commit in main_commits:
        n_main = normalize_msg(commit["msg"])
        if not n_main:
            continue

        # 1. Exact or High-Similarity Message Match
        best_match_entries = []
        best_sim = 0

        for ent in original_entries:
            sim = similarity(n_main, ent["n_msg"])
            if sim > 0.8:  # High confidence
                if sim > best_sim:
                    best_sim = sim
                    best_match_entries = [ent]
                elif sim == best_sim:
                    best_match_entries.append(ent)

        if best_match_entries:
            for ent in best_match_entries:
                sha_dir = output_dir / commit["sha"]
                sha_dir.mkdir(parents=True, exist_ok=True)

                result_payload = {
                    "commit": {
                        "id": commit["sha"],
                        "message": commit["msg"],
                        "timestamp": ent["entry"]["commit"].get("timestamp"),
                        "author": ent["entry"]["commit"].get("author"),
                        "url": f"https://github.com/webmaven/lodum/commit/{commit['sha']}",
                    },
                    "results": ent["entry"]["benches"],
                }

                output_file = sha_dir / f"{ent['platform']}.json"
                if not output_file.exists():
                    output_file.write_text(json.dumps(result_payload, indent=2))
                    count += 1
            mapped_shas.add(commit["sha"])

    # 2. Sequential Mapping for Gaps (Experimental)
    # If we have a sequence of commits in main, and we can find a sequence in original data
    # that matches the start and end, we can interpolate.
    # But let's try just more aggressive keyword matching first.

    keywords = [
        "streaming",
        "wasm",
        "echarts",
        "bytecode",
        "normalization",
        "validation",
        "numpy",
        "pandas",
        "polars",
    ]

    for commit in main_commits:
        if commit["sha"] in mapped_shas:
            continue
        n_main = normalize_msg(commit["msg"])

        for kw in keywords:
            if kw in n_main:
                # Find the most recent original entry containing this keyword
                matches = [ent for ent in original_entries if kw in ent["n_msg"]]
                if matches:
                    # Sort matches by "logical time" (this is hard, so we'll just take the most recent ones)
                    # For simplicity, we take all matches and save them.
                    for ent in matches:
                        sha_dir = output_dir / commit["sha"]
                        sha_dir.mkdir(parents=True, exist_ok=True)
                        output_file = sha_dir / f"{ent['platform']}.json"
                        if not output_file.exists():
                            result_payload = {
                                "commit": {
                                    "id": commit["sha"],
                                    "message": commit["msg"],
                                    "timestamp": ent["entry"]["commit"].get(
                                        "timestamp"
                                    ),
                                    "author": ent["entry"]["commit"].get("author"),
                                    "url": f"https://github.com/webmaven/lodum/commit/{commit['sha']}",
                                },
                                "results": ent["entry"]["benches"],
                            }
                            output_file.write_text(json.dumps(result_payload, indent=2))
                            count += 1
                    mapped_shas.add(commit["sha"])
                    break

    print(
        f"Recovery complete: {count} entries atomized. {len(mapped_shas)} unique SHAs mapped."
    )


if __name__ == "__main__":
    import sys

    if len(sys.argv) < 3:
        print("Usage: python3 recover_data.py <original_data.js> <output_dir>")
        sys.exit(1)
    recover_data(sys.argv[1], sys.argv[2])
