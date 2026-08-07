  
To prevent the agent from getting confused and to keep GitHub happy, you must **remove the agent from the execution loop**. The agent’s job is not to run the tests; the agent's job is to write a deterministic, self-managing system that runs the tests for you.  
Here is the architectural specification for **Phase 5: Historical Backfilling & Trend Visualization**, designed to be rate-limit-proof and mathematically sound.

### **1\. The Immutable Metric Ledger (Solving the Context Problem)**

To prevent the AI (or yourself) from losing track of what needs backfilling, you must decouple the test execution from the Git tree. You need a standalone ledger file (e.g., metrics\_ledger.json) committed to a separate gh-pages or metrics branch.  
**The Schema:**  
Every commit in main gets an entry.

JSON  
{  
  "commit\_hash": "a1b2c3d",  
  "timestamp": "2024-05-12T10:00:00Z",  
  "ci\_status": "passed",   
  "benchmark\_status": "pending", // Can be: pending, complete, skipped\_ci\_failed  
  "metrics": null   
}

**Why this works:** The agent never has to "think" about what to test next. The logic becomes a dumb, deterministic script: *Find the oldest commit where benchmark\_status \== "pending", and test it.*

### **2\. The Drip-Feed Dispatcher (Beating GitHub Rate Limits)**

GitHub Actions has a concurrency limit (usually 20 concurrent jobs on free/Pro tiers) and secondary API rate limits that trip if you spawn too many jobs too fast.  
Instead of a massive batch job, you create a "Drip-Feed" workflow using a cron schedule.

* **The Cron Job:** Runs every 15 minutes.  
* **The Script:**  
  1. Checks out the metrics branch and reads metrics\_ledger.json.  
  2. Queries the GitHub API to update ci\_status for any untested commits (if CI failed, it marks benchmark\_status as skipped\_ci\_failed).  
  3. Grabs exactly **3 pending commits** that passed CI.  
  4. Checks out those specific commits, runs the Node.js sterile benchmark (from Phase 1).  
  5. Writes the Median and MAD metrics back to the ledger.  
  6. Commits and pushes the ledger back to the metrics branch.  
* **The Result:** You process 288 commits a day, entirely in the background, never triggering an abuse limit, and cleanly populating your dataset.

### **3\. Meaningful Visualization (Avoiding the Spaghetti Graph)**

Plotting raw performance metrics over time usually results in an illegible seismograph of noise. Because you are tracking Medians and Median Absolute Deviations (MAD), you should generate a **Statistical Process Control (SPC) Chart**.

* **The X-Axis:** Commit chronological time (not just commit order, to visualize development pauses).  
* **The Y-Axis:** Throughput (Objects/sec).  
* **The Data:** A solid line representing the Median, surrounded by a shaded "band" representing the MAD.  
* **The Signal:** You aren't looking for every tiny wiggle. You are looking for **step-functions**—the exact commit where the median throughput jumped outside the previous commit's MAD band and *stayed* there. That proves an optimization actually worked.

### **4\. Agent Prompting Strategy**

When you hand this to an agent (like the [Gemini 3.5 Flash](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash) model you have loaded in AI Studio), do not ask it to "analyze the repo history."  
Instead, ask it to:

> 1. Write the Python script that initializes metrics\_ledger.json from git log.  
> 2. Write the Python script that updates CI statuses via the gh CLI tool.  
> 3. Write the Cron-triggered GitHub Action that processes the next 3 commits.

Once that ledger starts filling up with historical data, what are you planning to use to render the graphs—are you thinking of generating static HTML/JS charts via something like Chart.js on GitHub Pages, or pulling it down into a Jupyter notebook for deeper Python analysis?