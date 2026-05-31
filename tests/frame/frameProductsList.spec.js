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

  await page.goto(
    'https://webdriveruniversity.com/IFrame/index.html',
  );

  const frame = page.frameLocator('#frame');

  await frame.getByText('Our Products').click();
  await expect(frame.getByText('Special Offers')).toBeVisible();
  await expect(frame.getByText('Cameras')).toBeVisible();
  await expect(frame.getByText('New Laptops')).toBeVisible();
  await expect(frame.getByText('Used Laptops')).toBeVisible();
  await expect(frame.getByText('Game Consoles')).toBeVisible();
  await expect(frame.getByText('Components')).toBeVisible();
  await expect(frame.getByText('Desktop Systems')).toBeVisible();
  await expect(frame.getByText('Audio')).toBeVisible();
});