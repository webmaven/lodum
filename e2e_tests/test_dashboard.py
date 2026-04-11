import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        # Launch headed browser as requested
        browser = await p.chromium.launch(headless=False)
        context = await browser.new_context()
        page = await context.new_page()

        print("Navigating to dashboard...")
        await page.goto("https://webmaven.github.io/lodum/benchmarks/")
        
        # Wait for ECharts to render
        await page.wait_for_selector("#trend-chart canvas")
        print("Dashboard loaded successfully.")

        # Test 1: Check KPIs
        speedup = await page.inner_text("#kpi-speedup")
        print(f"Speedup KPI: {speedup}")
        assert "x" in speedup

        # Test 2: Check Trend chart series markers (data existence)
        # Verify chart title/labels
        title = await page.inner_text("header h1")
        assert "Lodum Performance Index" in title
        print("KPIs and Title verified.")

        # Test 3: Interactivity (Hover trend chart to show tooltip)
        trend_chart = await page.query_selector("#trend-chart")
        box = await trend_chart.bounding_box()
        # Move to middle of chart
        await page.mouse.move(box['x'] + box['width']/2, box['y'] + box['height']/2)
        
        # Wait for tooltip
        await page.wait_for_selector(".echarts-tooltip")
        print("Tooltip interactivity verified.")

        print("All E2E checks passed.")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
