import { test, expect } from '@playwright/test';

test('Products list can be opened within the frame', async ({ page }) => {
  /*
  Test:
  1. Open the page
   https://webdriveruniversity.com/IFrame/index.html
  2. Click 'Our Products' link
  3. Assert that all the block links are visible
   ('Specifal offers',  'Cameras', etc.) 

  Tip:
  Remember, that you need firstly to define the frame locator, 
  and then find other elements within it. 
  */
  await page.goto('https://webdriveruniversity.com/IFrame/index.html');

  const frame = page.frameLocator('#frame');

  await frame.getByRole('link', { name: 'Our Products' }).click();

  await expect(frame.locator('#special-offers')).toBeVisible();
  await expect(frame.locator('#cameras')).toBeVisible();
  await expect(frame.locator('#new-laptops')).toBeVisible();
  await expect(frame.locator('#used-laptops')).toBeVisible();
  await expect(frame.locator('#game-consoles')).toBeVisible();
  await expect(frame.locator('#components')).toBeVisible();
  await expect(frame.locator('#desktop-systems')).toBeVisible();
  await expect(frame.locator('#audio')).toBeVisible();
});
