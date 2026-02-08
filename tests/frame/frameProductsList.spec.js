import { expect, test } from '@playwright/test';

test('Products list can be opened within the frame', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/IFrame/index.html');

  const frame = page.frameLocator('#frame');
  await frame.getByText('Our Products').click();

  const productsList = frame.getByText('Special Offers');
  const cameras = frame.getByText('Cameras');
  const newLaptops = frame.getByText('New Laptops');
  const usedLaptops = frame.getByText('Used Laptops');
  const gameConsoles = frame.getByText('Game Consoles');
  const components = frame.getByText('Components');
  const desktopSystems = frame.getByText('Desktop Systems');
  const audio = frame.getByText('Audio');

  await expect(productsList).toBeVisible();
  await expect(cameras).toBeVisible();
  await expect(newLaptops).toBeVisible();
  await expect(usedLaptops).toBeVisible();
  await expect(gameConsoles).toBeVisible();
  await expect(components).toBeVisible();
  await expect(desktopSystems).toBeVisible();
  await expect(audio).toBeVisible();

});
