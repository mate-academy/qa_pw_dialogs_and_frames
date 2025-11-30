import { test, expect } from '@playwright/test';

test('Products list can be opened within the frame', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/IFrame/index.html');

  const frame = page.frameLocator('#frame');

  await frame.getByRole('link', { name: /Our Products/i }).click();

  // Wait for the products grid to render
  await expect(frame.getByRole('link', { name: /Special Offers/i })).toBeVisible();

  const tiles = [
    /Special Offers/i,
    /Cameras/i,
    /New Laptops/i,
    /Used Laptops/i,
    /Game Consoles/i,
    /Components/i,
    /Desktop Systems/i,
    /Audio/i,
  ];

  for (const name of tiles) {
    await expect(frame.getByRole('link', { name })).toBeVisible();
  }
});