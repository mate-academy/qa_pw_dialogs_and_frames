import { test, expect } from '@playwright/test';

test('Products list can be opened within the frame', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/IFrame/index.html');

  const frame = page.frameLocator('iframe');

  await frame.getByRole('link', { name: 'Our Products' }).click();
  await expect(frame.getByRole('link', { name: 'Cameras' })).toBeVisible();
  await expect(frame.getByRole('link', { name: 'New Laptops' })).toBeVisible();
  await expect(
    frame.getByRole('link', { name: 'Special Offers' }),
  ).toBeVisible();
  await expect(frame.getByRole('link', { name: 'Used Laptops' })).toBeVisible();
  await expect(
    frame.getByRole('link', { name: 'Game Consoles' }),
  ).toBeVisible();
  await expect(frame.getByRole('link', { name: 'Components' })).toBeVisible();
  await expect(
    frame.getByRole('link', { name: 'Desktop Systems' }),
  ).toBeVisible();
  await expect(frame.getByRole('link', { name: 'Audio' })).toBeVisible();
});

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
