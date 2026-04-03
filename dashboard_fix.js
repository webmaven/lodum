        document.addEventListener('DOMContentLoaded', () => {
            window.Sync.init();
            const latestSha = window.Sync.history[window.Sync.history.length - 1];
            window.Sync.selectedSha = latestSha;

            const trend = echarts.init(document.getElementById('trend-chart'));
            window.Sync.charts.trend = trend;
            trend.setOption({ xAxis: { type: 'category' }, yAxis: { type: 'value' }, series: [] });

            // Authoritative source for release markers
            window.updateTrendMarkers = () => {
                const data = window.BENCHMARK_DATA;
                return Object.entries(window.Sync.tags).map(([sha, label]) => {
                    const idx = window.Sync.history.indexOf(sha);
                    return idx !== -1 ? { 
                        xAxis: idx, 
                        label: { show: true, formatter: label, position: 'end', distance: [0, 10] }, 
                        lineStyle: { color: '#fbc929', type: 'dashed', width: 2 } 
                    } : null;
                }).filter(m => m !== null);
            };

            window.updateTrend = (scenario) => {
                const markLines = window.updateTrendMarkers();
                const getPlatformSeries = (pid, name, color) => ({
                    name, type: 'line', smooth: true, showSymbol: true, symbolSize: 6, color,
                    data: window.Sync.history.map(sha => window.Sync.getVal(sha, pid, `JSON Serialization Lodum ${scenario}`)),
                    markLine: name === 'Linux' ? { symbol: 'none', data: markLines } : undefined,
                    emphasis: { 
                        scale: 2,
                        itemStyle: { color: '#fbc929', borderColor: '#1f2937', borderWidth: 2 }
                    }
                });

                trend.setOption({
                    tooltip: { 
                        trigger: 'axis', 
                        axisPointer: { type: 'cross' },
                        formatter: (params) => {
                            const sha = window.Sync.history[params[0].dataIndex];
                            const c = window.Sync.commitMap.get(sha);
                            const dateStr = c ? new Date(c.data['Lodum Performance Index - ubuntu-latest'].commit.timestamp).toLocaleDateString() : 'Unknown';
                            return `<b>${sha.substring(0,7)}</b> (${dateStr})<br/>` + params.map(p => `${p.seriesName}: ${p.value}us`).join('<br/>');
                        }
                    },
                    legend: { bottom: 0 },
                    grid: { top: 40, left: 40, right: 20, bottom: 80 },
                    xAxis: { type: 'category', data: window.Sync.history.map(s => s.substring(0,7)), triggerEvent: true },
                    yAxis: { type: 'value', name: 'us/op', splitLine: { lineStyle: { type: 'dashed' } } },
                    series: [
                        getPlatformSeries('ubuntu-latest', 'Linux', '#fbc929'),
                        getPlatformSeries('windows-latest', 'Windows', '#3b82f6'),
                        getPlatformSeries('Pyodide', 'WASM', '#10b981')
                    ],
                    dataZoom: [{ type: 'slider', bottom: 30 }, { type: 'inside' }]
                });
            };
