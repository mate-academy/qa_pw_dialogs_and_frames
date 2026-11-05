import { test, expect } from '@playwright/test';

test('The form can be submited within the frame', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/IFrame/index.html');

  const frame = page.frameLocator('iframe');

  await frame.getByRole('link', { name: 'Contact Us' }).click();
  await frame.getByRole('textbox', { name: 'First Name' }).fill('First Name');
  await frame.getByRole('textbox', { name: 'Last Name' }).fill('Last Name');
  await frame
    .getByRole('textbox', { name: 'Email Address' })
    .fill('test@email.com');
  await frame.getByRole('textbox', { name: 'Comments' }).fill('Test comment');
  await frame.getByRole('button', { name: 'SUBMIT' }).click();
  await expect(
    frame.getByRole('heading', { name: 'Thank You for your Message!' }),
  ).toBeVisible();
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
