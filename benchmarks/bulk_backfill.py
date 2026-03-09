import json
import subprocess


def run_cmd(cmd):
    return subprocess.run(cmd, shell=True, capture_output=True, text=True)


def discover_gaps():
    print("Fetching latest benchmark data from gh-pages...")
    run_cmd("git fetch origin gh-pages")
    data_js = run_cmd("git show origin/gh-pages:benchmarks/data.js").stdout

    # Extract JSON from window.BENCHMARK_DATA = {...}
    json_start = data_js.find("window.BENCHMARK_DATA = ") + len(
        "window.BENCHMARK_DATA = "
    )
    json_str = data_js[json_start:].rstrip().rstrip(";")
    data = json.loads(json_str)
    print(f"data.js lastUpdate: {data.get('lastUpdate')}")

    suites = data["entries"]
    print(f"Suites found: {list(suites.keys())}")

    linux_shas = {
        p["commit"]["id"]
        for p in suites.get("Lodum Performance Index - ubuntu-latest", [])
    }
    print(f"Linux SHAs found: {len(linux_shas)}")
    if linux_shas:
        print(f"Sample Linux SHA: {list(linux_shas)[0]}")

    windows_shas = {
        p["commit"]["id"]
        for p in suites.get("Lodum Performance Index - windows-latest", [])
    }
    pyodide_shas = {
        p["commit"]["id"] for p in suites.get("Lodum Performance Index - Pyodide", [])
    }

    print(
        f"Stats: Linux({len(linux_shas)}), Windows({len(windows_shas)}), Pyodide({len(pyodide_shas)})"
    )

    # Get all commits on main for the last 30 days
    all_commits = run_cmd(
        "git log main --since='30 days ago' --format='%H'"
    ).stdout.splitlines()

    gaps = []
    for sha in all_commits:
        if sha == "48c124eabdebb36f4f464e673d171d28da800bce":
            print(f"DEBUG: Checking {sha}")
            print(f"DEBUG: In linux_shas? {sha in linux_shas}")
            if sha not in linux_shas:
                print(f"DEBUG: linux_shas contains: {list(linux_shas)[:5]}")
        missing = []
        if sha not in linux_shas:
            missing.append("ubuntu-latest")
        if sha not in windows_shas:
            missing.append("windows-latest")
        if sha not in pyodide_shas:
            missing.append("Pyodide")

        if missing:
            gaps.append((sha, missing))

    return gaps


if __name__ == "__main__":
    gaps = discover_gaps()
    print(f"\nFound {len(gaps)} commits with missing data:")
    for sha, platforms in gaps[:20]:  # Show first 20
        print(f" - {sha}: {', '.join(platforms)}")

    if len(gaps) > 20:
        print(f" ... and {len(gaps) - 20} more.")

    # Group by platform for easier backfilling
    by_platform: dict[str, list[str]] = {
        "ubuntu-latest": [],
        "windows-latest": [],
        "Pyodide": [],
    }
    for sha, platforms in gaps:
        for p in platforms:
            by_platform[p].append(sha)

    print("\nSummary by platform:")
    for p, shas in by_platform.items():
        print(f" - {p}: {len(shas)} missing commits")
        if shas:
            # Print in chunks of 5 for easier management
            for i in range(0, min(20, len(shas)), 5):
                print(f"   Batch {i // 5 + 1}: {' '.join(shas[i : i + 5])}")
