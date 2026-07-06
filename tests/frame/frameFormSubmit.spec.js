import { test } from '@playwright/test';

test('The form can be submited within the frame', async ({page}) => {

  await page.goto('https://webdriveruniversity.com/IFrame/index.html',
      );
  await page.frameLocator('#frame').getByRole('link', { name: 'Contact Us' }).click();
  await page.frameLocator('#frame').getByPlaceholder('First Name').fill('Monika');
  await page.frameLocator('#frame').getByPlaceholder('Last Name').fill('Letic');
  await page.frameLocator('#frame').getByPlaceholder('Email Address').fill('monika.letic@example.com');
  await page.frameLocator('#frame').getByRole('button', { name: 'Submit' }).click();
  await page.frameLocator('#frame').getByText('Thank You for your Message!').isVisible();
  /*
  Test:
  1. Open the page
   https://webdriveruniversity.com/IFrame/index.html
  2. Click 'Contact Us' link
  3. Fill all the fields
  4. Click submit
  5. Assert the message 'Thank You for your Message'

  Tip:
  Remember, that you need firstly to define the frame locator, 
  and then find other elements within it. 
  */
});
