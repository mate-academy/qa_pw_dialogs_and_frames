import { expect, test } from '@playwright/test';

const linkTitles = [
  'Special Offers',
  'Cameras',
  'New Laptops',
  'Used Laptops',
  'Game Consoles',
  'Components',
  'Desktop Systems',
  'Audio'
];

test('Products list can be opened within the frame', async ({ page }) => {
  const frame = page.frameLocator('#frame');
  await page.goto('https://webdriveruniversity.com/IFrame/index.html');
  await frame.getByText('Our Products').click();

  for (const linkTitle of linkTitles) {
    const link = frame.getByRole('link').filter({ hasText: linkTitle });
    await expect(link).toBeVisible();
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
