import { test, expect } from '@playwright/test';

test('Products list can be opened within the frame', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/IFrame/index.html');

  const frameLocator = page.frameLocator('iframe');
  await frameLocator.getByRole('link', { name: 'Our Products' }).click();

  await expect(frameLocator.getByRole('link', { name: 'Special Offers' })).toBeVisible();
  await expect(frameLocator.getByRole('link', { name: 'Cameras' })).toBeVisible();
  await expect(frameLocator.getByRole('link', { name: 'New Laptops' })).toBeVisible();
  await expect(frameLocator.getByRole('link', { name: 'Used Laptops' })).toBeVisible();
  await expect(frameLocator.getByRole('link', { name: 'Game Consoles' })).toBeVisible();
  await expect(frameLocator.getByRole('link', { name: 'Components' })).toBeVisible();
  await expect(frameLocator.getByRole('link', { name: 'Desktop Systems' })).toBeVisible();
});
