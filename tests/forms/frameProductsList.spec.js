import { expect, test } from '@playwright/test';

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
  const url = 'https://webdriveruniversity.com/IFrame/index.html';
  const frame = page.frameLocator('#frame');
  const ourProductsLink = frame.getByRole('link', { name: 'Our Products' });
  const specialOffersBlock = frame.getByRole('link', {
    name: 'Special Offers',
  });
  const camerasBlock = frame.getByRole('link', {
    name: 'Cameras',
  });
  const newLaptopsBlock = frame.getByRole('link', {
    name: 'New Laptops',
  });
  const usedLaptopsBlock = frame.getByRole('link', {
    name: 'Used Laptops',
  });
  const gameConsolesBlock = frame.getByRole('link', {
    name: 'Game Consoles',
  });
  const componentsBlock = frame.getByRole('link', {
    name: 'Components',
  });
  const desktopSystemsBlock = frame.getByRole('link', {
    name: 'Desktop Systems',
  });
  const audioBlock = frame.getByRole('link', {
    name: 'Audio',
  });

  await page.goto(url);
  await ourProductsLink.click();
  await expect(specialOffersBlock).toBeVisible();
  await expect(camerasBlock).toBeVisible();
  await expect(newLaptopsBlock).toBeVisible();
  await expect(usedLaptopsBlock).toBeVisible();
  await expect(gameConsolesBlock).toBeVisible();
  await expect(componentsBlock).toBeVisible();
  await expect(desktopSystemsBlock).toBeVisible();
  await expect(audioBlock).toBeVisible();
});
