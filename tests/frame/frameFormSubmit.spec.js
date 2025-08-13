import { test } from '@playwright/test';

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
  await page.goto('https://webdriveruniversity.com/IFrame/index.html');
  await page
    .getByText('&lt;span class="btn btn-')
    .contentFrame()
    .getByRole('link', { name: 'Contact Us' })
    .click();

  page.getByPlaceholder('First Name').fill('skmfc');
  page.getByPlaceholder('Last Name').fill('skmfcasdasd');
  page.getByPlaceholder('Email Address').fill('skmfcasdasd@gmail.com');
  page.getByPlaceholder('Comments').fill('skmfcasdasd@gmail.com zxczsxczxc');
});
