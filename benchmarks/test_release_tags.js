// Test script to verify release tag rendering in Trend chart
function verifyTrendMarkers() {
    const trend = echarts.getInstanceByDom(document.getElementById('trend-chart'));
    if (!trend) return "Error: Trend chart not found";
    
    const option = trend.getOption();
    const markLines = option.series[0].markLine ? option.series[0].markLine.data : [];
    
    // Find expected markers (v0.1.0 and v0.3.0)
    const v010 = markLines.find(m => m.label && m.label.formatter === 'v0.1.0');
    const v030 = markLines.find(m => m.label && m.label.formatter === 'v0.3.0');
    
    if (!v010 || !v030) {
        return "Fail: Release markers v0.1.0 or v0.3.0 not found in markLine data.";
    }
    
    return "Pass: Release markers found.";
}
console.log(verifyTrendMarkers());
