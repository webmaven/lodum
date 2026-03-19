# Dashboard Prototype Status & Restoration Plan

This document tracks the current state of the ECharts and uPlot dashboard prototypes, identifying extant issues and outlining the roadmap for a functional, high-fidelity replacement for the ApexCharts dashboard.

## 1. Apache ECharts Prototype (`index_echarts.html`)

### **Current Implementation (v1.3.0 - COMPLETED)**
- **Library**: `echarts@5.5.0`
- **Charts**: Trend (Latency), Evolution Path (Frontier), and Binary Formats.
- **Sync Method**: Manual `Sync.refresh(sha)` bridge for multi-axis synchronization and global state management.
- **Annotations**: `markLine` for release tags (v0.1.0, v0.2.0, v0.3.0).
- **Features**: Timeline scrubbing via `dataZoom`, persistent selection logic, and Regression Heatmap.

### **Status**
- [x] **Enable `dataZoom`**: Both `slider` and `inside` types added to the Trend chart.
- [x] **Manual Sync Bridge**: bidirectional sync between Trend and Evolution charts via `dispatchAction({type: 'showTip'})`.
- [x] **Selection Logic**: Click events update `Sync.selectedSha` and trigger global UI refresh.
- [x] **Regression Heatmap**: "Regression vs v0.3.0" heatmap grid fully implemented in the sidebar.
- [x] **Full KPI Logic**: All 4 KPI cards (Speedup, Memory, WASM, Throughput) are dynamically updated.

### **Next Steps**
1. **Migration**: Move `index_echarts.html` to `index.html` once finalized and validated.
2. **Pruning**: Ensure `data_v123.js` contains only high-signal milestones to keep the ECharts initialization performant.

---

## 2. uPlot Prototype (`index_uplot.html`)

### **Current Implementation**
- **Library**: `uPlot@1.6.30`
- **Charts**: Trend (Latency) and Evolution Path (Frontier).
- **Sync Method**: `uPlot.sync("dash")` bus.
- **Data Model**: Columnar mapping of benchmark milestones.

### **Extant Issues**
- [ ] **Incomplete Metrics**: 3 of 4 KPI cards remain unpopulated ("--").
- [ ] **Missing Components**: No Binary Formats chart and no Regression Heatmap.
- [ ] **No Brush**: Timeline zooming/scrubbing is not implemented.
- [ ] **Static View**: No support for milestone selection via click.

### **Status**: *STALLED*
Refinement of the uPlot prototype has been deprioritized in favor of the ECharts version, which provides a more polished look and natively handles the required annotations/interaction complex.

---

## 3. Comparative Summary (Updated)

| Feature | ECharts | uPlot |
| :--- | :--- | :--- |
| **Sync Maturity** | High (Manual Bridge + Connect). | Ultra-low latency, optimized for time-series. |
| **Aesthetics** | Polished, SVG/Canvas hybrid, easy tooltips. | Minimalist, high-performance Canvas. |
| **Implementation** | Feature Complete (v1.3.0). | Prototype only. |
| **Stability** | Very High. | Extreme (Stateless). |

**Final Decision**: **ECharts** is the selected engine for the Lodum Performance Dashboard replacement.

---

## 4. Deployment & Synchronization Workflow (`gh-pages`)

This section documents how the dashboard is served and how to synchronize changes between the development environment and the live site.

### **Serving Architecture**
- **Platform**: GitHub Pages.
- **Root URL**: `https://webmaven.github.io/lodum/benchmarks/`
- **Branch**: `gh-pages` serves the contents of the `benchmarks/` directory at the project root.

### **Key Files & Locations**
- `benchmarks/index.html`: The default dashboard (currently ApexCharts).
- `benchmarks/index_echarts.html`: The NEW ECharts-based dashboard.
- `benchmarks/index_uplot.html`: The uPlot prototype (deprecated).
- `benchmarks/data_v123.js`: The canonical, pruned milestone data (27 entries).

### **Synchronization Protocol**
To deploy changes from the `main` branch to the live site:
1.  **Stage in `main`**: Modify the files in the `benchmarks/` directory on the `main` branch.
2.  **Hard Sync to `gh-pages`**:
    ```bash
    git checkout gh-pages
    git reset --hard main
    git push origin gh-pages --force
    git checkout main
    ```
3.  **Verify Deployment**:
    - Monitor the `pages-build-deployment` workflow in GitHub Actions.
    - Use `curl -I` or `Cache-Control: no-cache` headers to verify the updated `last-modified` timestamp on the live site.

### **Cache Breaking Strategy**
- **Data File**: The milestone data is versioned (`data_v123.js`) to bypass aggressive browser/edge caching of the large (1.2MB+) JSON object.
- **Dashboard**: The `index.html` files include a `<!-- Cache Buster: <timestamp> -->` comment and a version string in the `<head>` to facilitate manual verification of the live version.

### **Pruning History (Retcon)**
If the `data.js` history becomes polluted with empty milestones:
1.  Use the `benchmarks/merge_data.py` or a surgical Python script to filter `window.BENCHMARK_DATA.history`.
2.  The `history` array must *exactly* match the order of SHAs that contain valid benchmarking entries in the `entries` object.
3.  Force-sync the updated `data_v123.js` to `gh-pages` immediately after pruning.
