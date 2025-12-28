import { test, expect } from '@playwright/test';

test('Products list can be opened within the frame', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/IFrame/index.html');

  const frame = page.frameLocator('#frame');
  await frame.locator('text=Our Products').click();

  await expect(frame.locator('text=Special Offers')).toBeVisible();
  await expect(frame.locator('text=Cameras')).toBeVisible();
  await expect(frame.locator('text=Laptops')).toBeVisible();
  await expect(frame.locator('text=Accessories')).toBeVisible();
});
