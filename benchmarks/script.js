        const UI = {
            status: (msg) => document.getElementById('status-bar').innerText = msg,
            updateKPIs: (sha) => {
                const getVal = (pid, bench) => Sync.getVal(sha, pid, bench);
                try {
                    const lodum = getVal('ubuntu-latest', 'JSON Serialization Lodum simple');
                    const mm = getVal('ubuntu-latest', 'JSON Serialization Marshmallow simple');
                    if (lodum && mm) document.getElementById('kpi-speedup').innerText = (mm / lodum).toFixed(1) + 'x';
                    
                    const stdMem = getVal('ubuntu-latest', 'Standard (loads) Memory');
                    const strmMem = getVal('ubuntu-latest', 'Streaming (load_stream) Memory');
                    if (stdMem && strmMem) document.getElementById('kpi-memory').innerText = ((1 - (strmMem / stdMem)) * 100).toFixed(1) + '%';
                    
                    const wasm = getVal('Pyodide', 'JSON Serialization Lodum simple');
                    if (lodum && wasm) document.getElementById('kpi-wasm').innerText = ((lodum / wasm) * 100).toFixed(0) + '%';
                    
                    const strmTime = getVal('ubuntu-latest', 'Streaming (load_stream) Time');
                    if (strmTime) document.getElementById('kpi-throughput').innerText = (45 / strmTime).toFixed(1) + ' MB/s';
                } catch(e) { console.error('KPI error', e); }
            },
            updateHeatmap: (sha) => {
                const c = Sync.commitMap.get(sha);
                if (!c) return;
                const grid = document.getElementById('regression-heatmap');
                if (grid) {
                    grid.innerHTML = '';
                    document.getElementById('hover-details').innerHTML = `<b>${c.short}</b>: ${c.msg}`;
                    const platforms = {'ubuntu-latest':'Linux', 'windows-latest':'Windows', 'Pyodide':'WASM'};
                    ['simple', 'complex', 'nested'].forEach(s => {
                        Object.entries(platforms).forEach(([pid, label]) => {
                            const cur = Sync.getVal(sha, pid, `JSON Serialization Lodum ${s}`);
                            const base = Sync.getVal(Sync.baselineSha, pid, `JSON Serialization Lodum ${s}`);
                            let delta = 0, cls = 'cell-neutral';
                            if (cur && base) {
                                delta = ((cur / base) - 1) * 100;
                                cls = delta < -5 ? 'cell-good' : (delta > 15 ? 'cell-bad' : (delta > 5 ? 'cell-warn' : 'cell-neutral'));
                            }
                            const cell = document.createElement('div');
                            cell.className = `heatmap-cell ${cls}`;
                            cell.innerHTML = `<span class="cell-label">${label} / ${s}</span><span class="cell-value">${cur ? (delta>0?'+':'') + delta.toFixed(0) + '%' : 'N/A'}</span>`;
                            grid.appendChild(cell);
                        });
                    });
                }
            }
        };

        const Sync = {
            history: [],
            commitMap: new Map(),
            tags: {},
            charts: {},
            selectedSha: null,
            baselineSha: null,
            isRefreshing: false,
            init: () => {
                const data = window.BENCHMARK_DATA;
                Sync.history = data.history || [];
                Sync.tags = data.tags || {};
                Object.entries(data.entries).forEach(([suite, points]) => {
                    points.forEach(p => {
                        const id = p.commit.id;
                        if (!id || !Sync.history.includes(id)) return;
                        if (!Sync.commitMap.has(id)) Sync.commitMap.set(id, { id, short: id.substring(0,7), msg: p.commit.message, data: {} });
                        const c = Sync.commitMap.get(id);
                        c.data[suite] = p;
                    });
                });
                Object.entries(Sync.tags).forEach(([sha, label]) => {
                    if (label === 'v0.3.0') Sync.baselineSha = sha;
                });
                if (!Sync.baselineSha) Sync.baselineSha = Sync.history[0];
                if (data.lastUpdate) document.getElementById('last-updated').innerText = 'Sync: ' + new Date(data.lastUpdate).toLocaleString();
            },
            getVal: (sha, pid, bench) => {
                const c = Sync.commitMap.get(sha); if (!c) return null;
                const suiteKey = Object.keys(c.data).find(k => k.toLowerCase().includes(pid.toLowerCase()));
                if (!suiteKey) return null;
                const b = c.data[suiteKey].benches.find(x => x.name.toLowerCase().includes(bench.toLowerCase()));
                return b ? b.value : null;
            },
            refresh: (sha, source) => {
                if (Sync.isRefreshing) return;
                Sync.isRefreshing = true;
                try {
                    UI.status(`[${source.toUpperCase()}] ${sha.substring(0,7)}`);
                    UI.updateKPIs(sha);
                    UI.updateHeatmap(sha);
                    Sync.updateFormats(sha);
                    
                    const idx = Sync.history.indexOf(sha);
                    const fIdx = Sync.frontierData.findIndex(d => d && d[3] === sha);

                    if (idx !== -1 && source !== 'trend') {
                        Sync.charts.trend.dispatchAction({ type: 'downplay' });
                        Sync.charts.trend.dispatchAction({ type: 'showTip', seriesIndex: 0, dataIndex: idx });
                        Sync.charts.trend.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: idx });
                    }
                    if (fIdx !== -1 && source !== 'frontier') {
                        Sync.charts.frontier.dispatchAction({ type: 'downplay' });
                        Sync.charts.frontier.dispatchAction({ type: 'showTip', seriesIndex: 0, dataIndex: fIdx });
                        Sync.charts.frontier.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: fIdx });
                    }

                    if (source === 'click' || source === 'init') {
                        Sync.updateSelectionMarkers(sha);
                    }
                } finally {
                    Sync.isRefreshing = false;
                }
            },
            updateSelectionMarkers: (sha) => {
                const idx = Sync.history.indexOf(sha);
                const fPt = Sync.frontierData.find(d => d && d[3] === sha);
                const scenario = document.getElementById('scenario-selector').value;
                
                if (idx !== -1) {
                    const yVal = Sync.getVal(sha, 'ubuntu-latest', `JSON Serialization Lodum ${scenario}`) || 0;
                    Sync.charts.trend.setOption({
                        series: Sync.charts.trend.getOption().series.map((s, i) => ({
                            markLine: i === 0 ? {
                                symbol: ['none', 'none'], label: { show: false },
                                lineStyle: { color: '#ef4444', type: 'dotted', width: 1, opacity: 0.8 },
                                data: [{ xAxis: idx }, { yAxis: yVal }]
                            } : undefined,
                            markPoint: i === 0 ? {
                                symbol: 'circle', symbolSize: 10,
                                data: [{ coord: [idx, yVal] }],
                                itemStyle: { color: '#ef4444', borderColor: '#fff', borderWidth: 2 }
                            } : undefined
                        }))
                    });
                }
                if (fPt) {
                    Sync.charts.frontier.setOption({
                        series: [{
                            markLine: {
                                symbol: ['none', 'none'], label: { show: false },
                                lineStyle: { color: '#ef4444', type: 'dotted', width: 1, opacity: 0.8 },
                                data: [{ xAxis: fPt[0] }, { yAxis: fPt[1] }]
                            },
                            markPoint: {
                                symbol: 'circle', symbolSize: 12,
                                data: [{ coord: [fPt[0], fPt[1]] }],
                                itemStyle: { color: '#ef4444', borderColor: '#fff', borderWidth: 2 }
                            }
                        }]
                    });
                }
            },
            updateFormats: (sha) => {
                const c = Sync.commitMap.get(sha);
                if (!c) return;
                const platforms = [{n:'JSON', p:'JSON Serialization Lodum complex'}, {n:'MsgPack', p:'MsgPack Serialization Lodum complex'}, {n:'CBOR', p:'CBOR Serialization Lodum complex'}, {n:'Pickle', p:'Pickle Serialization Lodum (Safe) complex'}];
                const colors = ['#94a3b8', '#fbc929', '#3b82f6', '#10b981'];
                const vals = platforms.map((f, i) => {
                    const suiteKey = Object.keys(c.data).find(k => k.includes('ubuntu-latest'));
                    if (!suiteKey) return { value: 0, itemStyle: { color: colors[i] } };
                    const b = c.data[suiteKey].benches.find(x => x.name.includes(f.p));
                    return { value: b ? b.value : 0, itemStyle: { color: colors[i] } };
                });
                Sync.charts.formats.setOption({
                    xAxis: { type: 'value', show: false },
                    yAxis: { type: 'category', data: platforms.map(p => p.n), inverse: true },
                    grid: { top: 10, bottom: 10, left: 60, right: 40 },
                    series: [{ type: 'bar', data: vals, label: { show: true, position: 'right', formatter: '{c}us' } }]
                });
            }
        };

        document.addEventListener('DOMContentLoaded', () => {
            Sync.init();
            const latestSha = Sync.history[Sync.history.length - 1];
            Sync.selectedSha = latestSha;

            const trend = echarts.init(document.getElementById('trend-chart'));
            Sync.charts.trend = trend;
            trend.setOption({ xAxis: { type: 'category' }, yAxis: { type: 'value' }, series: [] });

            const updateTrend = (scenario) => {
                const data = window.BENCHMARK_DATA;
                const markLines = Object.entries(Sync.tags).map(([sha, label]) => {
                    let idx = Sync.history.indexOf(sha);
                    if (idx === -1) {
                        const commitIdx = data.history.indexOf(sha);
                        if (commitIdx !== -1) {
                            const laterShas = data.history.slice(commitIdx);
                            const nextSha = laterShas.find(s => Sync.history.includes(s));
                            if (nextSha) idx = Sync.history.indexOf(nextSha);
                        }
                    }
                    return idx !== -1 ? { xAxis: idx, label: { show: true, formatter: label, position: 'end', distance: [0, 10] }, lineStyle: { color: '#fbc929', type: 'dashed', width: 2 } } : null;
                }).filter(m => m !== null);

                const getPlatformSeries = (pid, name, color) => ({
                    name, type: 'line', smooth: true, showSymbol: true, symbolSize: 6, color,
                    data: Sync.history.map(sha => Sync.getVal(sha, pid, `JSON Serialization Lodum ${scenario}`)),
                    markLine: name === 'Linux' ? { symbol: 'none', data: markLines } : undefined,
                    emphasis: { 
                        scale: 2,
                        itemStyle: { color: '#fbc929', borderColor: '#1f2937', borderWidth: 2 }
                    }
                });

                trend.setOption({
                    tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } },
                    legend: { bottom: 0 },
                    grid: { top: 40, left: 40, right: 20, bottom: 80 },
                    xAxis: { type: 'category', data: Sync.history.map(s => s.substring(0,7)), triggerEvent: true },
                    yAxis: { type: 'value', name: 'us/op', splitLine: { lineStyle: { type: 'dashed' } } },
                    series: [
                        getPlatformSeries('ubuntu-latest', 'Linux', '#fbc929'),
                        getPlatformSeries('windows-latest', 'Windows', '#3b82f6'),
                        getPlatformSeries('Pyodide', 'WASM', '#10b981')
                    ],
                    dataZoom: [{ type: 'slider', bottom: 30 }, { type: 'inside' }]
                });
            };

            const frontier = echarts.init(document.getElementById('frontier-chart'));
            Sync.charts.frontier = frontier;
            
            Sync.frontierData = Sync.history.map(sha => {
                const t = Sync.getVal(sha, 'ubuntu-latest', 'Streaming (load_stream) Time') || Sync.getVal(sha, 'ubuntu-latest', 'Standard (loads) Time');
                const m = Sync.getVal(sha, 'ubuntu-latest', 'Streaming (load_stream) Memory') || Sync.getVal(sha, 'ubuntu-latest', 'Standard (loads) Memory');
                return (t && m) ? [t, m, sha.substring(0,7), sha] : null;
            }).filter(p => p !== null);

            frontier.setOption({
                tooltip: { 
                    trigger: 'item',
                    formatter: (p) => {
                        if (!p.data || !Array.isArray(p.data)) return '';
                        return `<b>${p.data[2]}</b><br/>Time: ${p.data[0].toFixed(3)}s<br/>Mem: ${p.data[1].toFixed(1)}MB`;
                    }
                },
                xAxis: { type: 'value', name: 'Time (s)', splitLine: { show: true, lineStyle: { type: 'dashed' } } },
                yAxis: { type: 'value', name: 'RAM (MB)', splitLine: { show: true, lineStyle: { type: 'dashed' } } },
                series: [{ 
                    type: 'line', data: Sync.frontierData, symbolSize: 8, smooth: true,
                    lineStyle: { width: 2, color: '#e2e8f0' },
                    itemStyle: { color: '#94a3b8' },
                    emphasis: { 
                        scale: 2,
                        itemStyle: { color: '#fbc929', borderColor: '#1f2937', borderWidth: 2 }
                    }
                }]
            });

            const formatC = echarts.init(document.getElementById('format-chart'));
            Sync.charts.formats = formatC;

            trend.on('updateAxisPointer', (event) => {
                const idx = event.axesInfo[0]?.value;
                if (idx !== undefined) {
                    const sha = Sync.history[idx];
                    Sync.refresh(sha, 'trend');
                }
            });

            trend.getZr().on('click', (params) => {
                const pointInPixel = [params.offsetX, params.offsetY];
                if (trend.containPixel('grid', pointInPixel)) {
                    const data = trend.convertFromPixel({ seriesIndex: 0 }, pointInPixel);
                    const idx = Math.round(data[0]);
                    const sha = Sync.history[idx];
                    if (sha) { Sync.selectedSha = sha; Sync.refresh(sha, 'click'); }
                }
            });

            frontier.on('updateAxisPointer', (event) => {
                if (event.dataIndex !== undefined) {
                    const sha = Sync.frontierData[event.dataIndex][3];
                    Sync.refresh(sha, 'frontier');
                }
            });
            
            frontier.on('mouseover', (params) => {
                if (params.data && params.data[3]) Sync.refresh(params.data[3], 'frontier');
            });

            frontier.getZr().on('click', (params) => {
                const pointInPixel = [params.offsetX, params.offsetY];
                if (frontier.containPixel('grid', pointInPixel)) {
                    const data = frontier.convertFromPixel({ seriesIndex: 0 }, pointInPixel);
                    let closest = null, minDist = Infinity;
                    Sync.frontierData.forEach(d => {
                        const dist = Math.pow(d[0] - data[0], 2) + Math.pow(d[1] - data[1], 2);
                        if (dist < minDist) { minDist = dist; closest = d; }
                    });
                    if (closest) { 
                        Sync.selectedSha = closest[3]; 
                        Sync.refresh(closest[3], 'click'); 
                    }
                }
            });

            updateTrend('simple');
            setTimeout(() => Sync.refresh(latestSha, 'init'), 100);
            document.getElementById('scenario-selector').onchange = (e) => updateTrend(e.target.value);

            window.addEventListener('mousemove', (e) => {
                const trendRect = document.getElementById('trend-chart').getBoundingClientRect();
                const frontierRect = document.getElementById('frontier-chart').getBoundingClientRect();
                const isOverTrend = (e.clientX >= trendRect.left && e.clientX <= trendRect.right && e.clientY >= trendRect.top && e.clientY <= trendRect.bottom);
                const isOverFrontier = (e.clientX >= frontierRect.left && e.clientX <= frontierRect.right && e.clientY >= frontierRect.top && e.clientY <= frontierRect.bottom);
                
                if (!isOverTrend && !isOverFrontier && !Sync.isRefreshing) {
                    Sync.charts.trend.dispatchAction({ type: 'downplay' });
                    Sync.charts.frontier.dispatchAction({ type: 'downplay' });
                    Sync.charts.trend.dispatchAction({ type: 'hideTip' });
                    Sync.charts.frontier.dispatchAction({ type: 'hideTip' });
                }
            });
        });
