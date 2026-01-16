import { test } from '@playwright/test';

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

  await frame.locator('text=Our Products').click();

  await frame.locator('#laptop1').isVisible();
  await frame.locator('#laptop2').isVisible();
  await frame.locator('#nintendo').isVisible();
  await frame.locator('#camera-img').isVisible();
  await frame.locator('#graphic-card').isVisible();
  await frame.locator('#computer').isVisible();
  await frame.locator('#boombox').isVisible();
});
