# Implementation Plan: Dashboard Legend & Tooltip Fix

## Objective
Refactor the benchmarking dashboard to resolve ECharts tooltip rendering issues by moving the legend to an external HTML control and optimizing the chart layout.

## Proposed Changes

### 1. `benchmarks/index.html` Refactoring
- **External Legend**: 
    - Add a `<div id="external-legend">` above the `trend-chart`.
    - Style it with flexbox and custom buttons for 'Linux', 'Windows', and 'WASM'.
- **Layout Optimization**:
    - Update `.chart-container` CSS to remove `touch-action: none`.
    - Adjust ECharts `grid` settings:
        - `bottom`: Reduce from 110 to 60.
        - `legend`: Set `show: false`.
- **JavaScript Logic**:
    - Implement interactive legend buttons using `legendToggleSelect`.
    - Clean up ECharts config and remove custom tooltip listeners.

### 2. Remote Verification Protocol
I will verify the fix directly on the live site:

1.  **Push to gh-pages**: Commit and push the changes to the `gh-pages` branch.
2.  **Monitor Deployment**: 
    - Use `gh run list --workflow "pages-build-deployment"` to track the GitHub Pages build.
    - Wait for the "Success" status.
3.  **Live Inspection (Chrome DevTools)**:
    - Open `https://webmaven.github.io/lodum/benchmarks` using `chrome-devtools`.
    - **DOM Audit**: Confirm `#external-legend` and buttons exist.
    - **Interaction Test**:
        - Simulate mouse hover over the chart.
        - Verify the ECharts tooltip `div` appears in the DOM.
        - Verify `#tooltip-debug` content updates.
    - **Legend Test**: Toggle each legend button and verify the chart series visibility changes.
4.  **Console Check**: Ensure no JavaScript errors appear on the live page.

## Verification Tasks
- [ ] Task: Apply refactoring to `benchmarks/index.html`.
- [ ] Task: Push changes to `gh-pages`.
- [ ] Task: Monitor and confirm GitHub Pages deployment success.
- [ ] Task: Perform live verification via `chrome-devtools` on the public URL.
