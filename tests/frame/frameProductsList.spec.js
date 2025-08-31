import { expect, test } from '@playwright/test';


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

  const url = 'https://webdriveruniversity.com/IFrame/index.html';
  await page.goto(url);
  await page.waitForURL(url);

  await page.goto(url);
  const generalFrame = page.frame({ url: /.*Page-Object-Model*/ });
  await generalFrame.getByRole('link', { name: 'Our Products' }).click();

  const ourProductFrame = page.frame({ url: /.*Page-Object-Model*/ });

  const ourProductsBlocks = [
    ourProductFrame.locator('#cameras'),
    ourProductFrame.locator('#special-offers'),
    ourProductFrame.locator('#container-product2'),
    ourProductFrame.locator('#used-laptops'),
    ourProductFrame.locator('#game-consoles'),
    ourProductFrame.locator('#components'),
    ourProductFrame.locator('#desktop-systems'),
    ourProductFrame.locator('#audio'),
  ];

  for (const blockLocator of ourProductsBlocks) {
    await expect(blockLocator).toBeVisible();
  }
});
