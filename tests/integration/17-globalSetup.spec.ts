import { test, expect } from '@playwright/test'

test.beforeEach(async({ page }) => {
  await page.goto('https://demoblaze.com')

})

test('menu', async ({ page }) => {

  console.log('logged in')
  await expect(page.locator('#nameofuser')).toBeVisible()
})

test('menu validation', async ({ page }) => {

  console.log('logged in')
  await expect(page.locator('#logout2')).toBeVisible()
})
