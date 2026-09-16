import { test, expect } from '@playwright/test';

test('Products list can be opened within the frame', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/IFrame/index.html');

  const frame = page.frameLocator('#frame');

  await frame.getByRole('link', { name: 'Our Products' }).click();

  const categories = [
    'Special Offers',
    'Cameras',
    'New Laptops',
    'Used Laptops',
    'Game Consoles',
    'Components',
    'Desktop Systems',
    'Audio',
  ];

  for (const category of categories) {
    await expect(frame.getByText(category)).toBeVisible();
  }
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
});
