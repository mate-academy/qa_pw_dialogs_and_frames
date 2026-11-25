import { test, expect } from '@playwright/test';

test('Products list can be opened within the frame', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/IFrame/index.html');

  const frame = page.frameLocator('#frame');

  await frame.getByRole('link', { name: 'Our Products' }).click();

  const products = [
    'Special Offers',
    'Cameras',
    'New Laptops',
    'Used Laptops',
    'Game Consoles',
    'Components',
    'Desktop Systems',
    'Audio',
  ];

  for (const product of products) {
    await expect(frame.getByText(product, { exact: true })).toBeVisible();
  }
});
