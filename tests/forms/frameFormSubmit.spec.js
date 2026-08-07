import { expect, test } from '@playwright/test';

test('The form can be submited within the frame', async ({ page }) => {
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

  const frame = page.frameLocator('#frame');

  await page.goto('https://webdriveruniversity.com/IFrame/index.html');
  await frame.getByRole('link', { name: 'Contact Us' }).click();
  await frame.getByPlaceholder('First Name').fill('John');
  await frame.getByPlaceholder('Last Name').fill('Doe');
  await frame.getByPlaceholder('Email Address').fill('test@gmail.com');
  await frame.getByPlaceholder('Comments').fill('Test comment');
  await frame.getByRole('button', { name: 'SUBMIT' }).click();

  await expect(frame.getByText('Thank You for your Message!')).toBeVisible();
});
