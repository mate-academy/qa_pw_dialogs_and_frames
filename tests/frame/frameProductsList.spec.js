import { test, expect } from '@playwright/test';

test('Products list can be opened within the frame', async ({ page }) => {

  await page.goto(
    'https://webdriveruniversity.com/IFrame/index.html',
  );

  const frameLocator = page.frameLocator('#frame');

  await frameLocator.getByRole('link', {name: 'Our Products'}).click();

  await expect(frameLocator.locator('#container-special-offers p')).toContainText('Special Offers');
  await expect(frameLocator.locator('#container-product1 p')).toContainText('Cameras');
  await expect(frameLocator.locator('#container-product2 p')).toContainText('New Laptops');
  await expect(frameLocator.locator('#container-product3 p')).toContainText('Used Laptops');
  await expect(frameLocator.locator('#container-product4 p')).toContainText('Game Consoles');
  await expect(frameLocator.locator('#container-product5 p')).toContainText('Components');
  await expect(frameLocator.locator('#container-product6 p')).toContainText('Desktop Systems');
  await expect(frameLocator.locator('#container-product7 p')).toContainText('Audio');
});
