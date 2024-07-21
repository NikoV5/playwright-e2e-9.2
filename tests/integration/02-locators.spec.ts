import { test, Locator } from "@playwright/test";

// test.use({
//   launchOptions: {
//     slowMo: 3000
//   }
// })

test.describe("Playwright Locators", () => {

  test("Playwright locator() API", async ({ page }) => {
    await page.goto("https://techglobal-training.com/");

    // await page.click('#myLocator')

    // let myLocator: Locator;

    // myLocator = page.locator('#myLocator')

    // await myLocator.click()

    await page.locator('#logo').click()

    await page.click('#logo')

    const myLogo = page.locator('#logo')
  });

  test("Playwright - Custom Pseudo Classes", async ({ page }) => {
    await page.goto("https://techglobal-training.com/frontend");

    const cards = page.locator('.card')

    await cards.locator(':has-text("HTML Elements")').click()

    // await page.locator('a', { hasText: "HTML Elements"}).click()
  });
});
