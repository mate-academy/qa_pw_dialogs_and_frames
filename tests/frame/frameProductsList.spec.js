import { test, expect } from '@playwright/test';

test('Products list can be opened within the frame', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/IFrame/index.html');

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
