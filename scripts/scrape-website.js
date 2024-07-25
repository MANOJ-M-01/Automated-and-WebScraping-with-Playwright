const { chromium, firefox, webkit } = require("playwright");
const fs = require("fs/promises");
const path = require("path");

async function scarapeWebsite() {
  const brower = await chromium.launch();
  const context = await brower.newContext();
  const page = await context.newPage();

  await page.goto(
    "https://forecast.weather.gov/MapClick.php?lat=40.7130466&lon=-74.0072301"
  );

  const [temperature] = await page
    .locator(".myforecast-current-lrg")
    .allInnerTexts();

  const [Humidity] = await page
    .locator(
      "#current_conditions_detail > table > tbody > tr:nth-child(1) > td:nth-child(2)"
    )
    .allInnerTexts();

  const data = {
    temperature,
    Humidity,
  };
  await fs.writeFile(
    path.join(__dirname, "out/weather.json"),
    JSON.stringify(data)
  );

  await brower.close();
}

scarapeWebsite();
