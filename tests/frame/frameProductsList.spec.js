import { test, expect } from '@playwright/test';

test('Products list can be opened within the frame', async ({page}) => {
  let frame = page.frameLocator('#frame');

  await page.goto('https://webdriveruniversity.com/IFrame/index.html');
  await frame.getByRole('link', {name: 'Our Products'}).click();
  await expect(frame.locator('#special-offers')).toBeVisible();
  await expect(frame.locator('#cameras')).toBeVisible();
  await expect(frame.locator('#new-laptops')).toBeVisible();
  await expect(frame.locator('#used-laptops')).toBeVisible();
  await expect(frame.locator('#game-consoles')).toBeVisible();
  await expect(frame.locator('#components')).toBeVisible();
  await expect(frame.locator('#desktop-systems')).toBeVisible();
  await expect(frame.locator('#audio')).toBeVisible();
});
