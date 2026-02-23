import platform
import os
import subprocess
import json
import sys


def get_cpu_info():
    try:
        if platform.system() == "Linux":
            command = "cat /proc/cpuinfo | grep 'model name' | head -1 | cut -d':' -f2"
            return subprocess.check_output(command, shell=True).decode().strip()
        elif platform.system() == "Windows":
            command = "wmic cpu get name"
            output = subprocess.check_output(command, shell=True).decode().split("\n")
            for line in output:
                if line.strip() and "Name" not in line:
                    return line.strip()
    except Exception:
        return "Unknown CPU"
    return "Unknown CPU"


def get_hw_info():
    info = {
        "os": platform.system(),
        "processor": get_cpu_info(),
        "python_version": platform.python_version(),
    }
    return info


if __name__ == "__main__":
    info = get_hw_info()
    if "--init" in sys.argv:
        os.makedirs("benchmarks/metadata", exist_ok=True)
        filename = f"benchmarks/metadata/hardware_{platform.system().lower()}.json"
        with open(filename, "w") as f:
            json.dump(info, f, indent=2)
        print(f"Initialized hardware signature for {platform.system()} at {filename}")
    elif "--check" in sys.argv:
        filename = f"benchmarks/metadata/hardware_{platform.system().lower()}.json"
        if not os.path.exists(filename):
            print(
                f"⚠️ No reference hardware found at {filename}. Use --init to create one."
            )
            sys.exit(0)

        with open(filename, "r") as f:
            ref = json.load(f)

        # Compare OS family and CPU model
        if info["processor"] != ref["processor"] or info["os"] != ref["os"]:
            print("❌ HARDWARE CHANGE DETECTED!")
            print(f"Current:   {info['processor']} ({info['os']})")
            print(f"Reference: {ref['processor']} ({ref['os']})")
            print(
                "\nAction required: Run historical benchmarks to update baseline, then run with --init to update signature."
            )
            sys.exit(1)
        else:
            print(f"✅ Hardware matches reference: {info['processor']} ({info['os']})")
    else:
        print(json.dumps(info, indent=2))
