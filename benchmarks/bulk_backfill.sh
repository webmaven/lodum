#!/bin/bash
# Lodum Bulk Backfill Automation
# Processes SHAs in batches and waits for completion.

BATCH_SIZE=7
MAX_BATCHES=${1:-3}
BATCH_COUNT=0

while [ $BATCH_COUNT -lt $MAX_BATCHES ]; do
    echo "--- Starting Batch $((BATCH_COUNT + 1)) of $MAX_BATCHES ---"
    
    # 1. Update missing SHA list
    git fetch origin gh-pages --quiet
    git checkout origin/gh-pages -- benchmarks/history/ 2>/dev/null
    ls -d benchmarks/history/* | xargs -n 1 basename | sort > existing_shas.txt
    MISSING=$(comm -23 all_shas.txt existing_shas.txt | head -n $BATCH_SIZE)
    
    if [ -z "$MISSING" ]; then
        echo "No more missing SHAs found. Task complete."
        exit 0
    fi
    
    # 2. Trigger Batch
    for SHA in $MISSING; do
        echo "Triggering backfill for $SHA..."
        gh workflow run benchmarks.yml -f repair_sha=$SHA -f platform=all
    done
    
    echo "Waiting for runs to register..."
    sleep 45
    
    # 3. Monitor Batch
    # We get the IDs of the runs we just triggered (filtering for non-completed ones)
    RUNS=$(gh run list --workflow benchmarks.yml --limit $BATCH_SIZE --json databaseId,status --jq '.[] | select(.status != "completed") | .databaseId')
    
    for RUN in $RUNS; do
        echo "Watching run $RUN..."
        gh run watch $RUN --exit-status
        if [ $? -ne 0 ]; then
            echo "Warning: Run $RUN failed or was cancelled."
        fi
    done
    
    echo "Batch $((BATCH_COUNT + 1)) complete."
    BATCH_COUNT=$((BATCH_COUNT + 1))
    
    if [ $BATCH_COUNT -lt $MAX_BATCHES ]; then
        echo "Cooling down for 60s before next batch..."
        sleep 60
    fi
done

echo "Bulk processing finished: $BATCH_COUNT batches processed."
