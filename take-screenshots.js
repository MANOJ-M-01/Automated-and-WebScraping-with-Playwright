const { chromium, firefox, webkit } = require("playwright");

async function takeScreenshot() {
  const brower = await chromium.launch();
  const context = await brower.newContext();
  const page = await context.newPage();

  await page.goto("https://manoj-m.com");
  await scrollFullPage(page);
  await page.setViewportSize({ width: 640, height: 480 });
  await page.screenshot({ path: "snap-phone.png", fullPage: true });
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.screenshot({ path: "snap-web.png", fullPage: true });
  await brower.close();
}

// not needed for all codes
async function scrollFullPage(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
}

takeScreenshot();
