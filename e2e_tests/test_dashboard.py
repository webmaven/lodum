import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        # Launch browser (headless for CI/automated checks)
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context()
        page = await context.new_page()

        print("Navigating to dashboard...")
        await page.goto("https://webmaven.github.io/lodum/benchmarks/")
        
        # Wait for ECharts to render
        await page.wait_for_selector("#trend-chart canvas", timeout=60000)
        print("Dashboard loaded successfully.")

        # Test 1: Check KPIs
        speedup = await page.inner_text("#kpi-speedup")
        print(f"Speedup KPI: {speedup}")
        assert "x" in speedup or speedup != "--"

        # Test 2: Check Title
        title = await page.inner_text("header h1")
        assert "Lodum Performance Index" in title
        print("KPIs and Title verified.")

        # Test 3: Interactivity Check
        # Click a point in the chart
        trend_chart = await page.query_selector("#trend-chart")
        box = await trend_chart.bounding_box()
        await page.mouse.click(box['x'] + box['width']/2, box['y'] + box['height']/2)
        print("Interactivity check done.")

        print("All essential E2E checks passed.")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
