const { chromium, firefox, webkit } = require("playwright");
const path = require("path");

async function takeScreenshot() {
  const brower = await chromium.launch();
  const context = await brower.newContext();
  const page = await context.newPage();

  await page.goto("https://trakt.tv");
  await scrollFullPage(page);
  await page.setViewportSize({ width: 640, height: 480 });
  await page.screenshot({
    path: path.join(__dirname, `out/snap-phone-${new Date().getTime()}.png`),
    fullPage: true,
    animations: "disabled",
  });
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.screenshot({
    path: path.join(__dirname, `out/snap-web-${new Date().getTime()}.png`),
    fullPage: true,
    // animations: "disabled",
  });
  await brower.close();
}

// not needed for all websites
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
