// @ts-check
const { test, expect } = require("@playwright/test");

test("My Theme", async ({ page }) => {
  await page.goto("https://manoj-m.com/");

  await page.getByRole("button").nth(0).click();

  // Expect a menu "to contain" a substring.
  await expect(page.getByRole("menuitem", { name: "Light" })).toBeVisible();
});

test("Github link exist", async ({ page }) => {
  await page.goto("https://manoj-m.com/");

  // Github Link exist
  await expect(page.getByRole("link", { name: "Github" })).toBeVisible();
});

test("Linkedin link exist", async ({ page }) => {
  await page.goto("https://manoj-m.com/");
  // Linkedin Link exist
  await expect(page.getByRole("link", { name: "Linkedin" })).toBeVisible();
});
