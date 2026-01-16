import { test, expect } from '@playwright/test';

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
  const expectedProducts = [
    'Special Offers',
    'Cameras',
    'New Laptops',
    'Used Laptops',
    'Game Consoles',
    'Components',
    'Desktop Systems',
    'Audio',
  ];

  await page.goto('https://webdriveruniversity.com/IFrame/index.html');

  const mainFrame = page.frameLocator('#frame');
  const ourProductsButton = mainFrame.getByRole('link', {
    name: 'Our Products',
  });

  await ourProductsButton.click();
  const productsList = mainFrame.locator('.row').nth(1);
  const productItems = productsList.locator('.section-title .sub-heading');

  await productItems.first().waitFor({ state: 'visible' });
  const productTexts = await productItems.allTextContents();

  for (const product of expectedProducts) {
    expect(productTexts).toContain(product);
  }
});
