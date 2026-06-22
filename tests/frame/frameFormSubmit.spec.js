import { test, expect } from '@playwright/test';

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

  const frame = page.frameLocator('[id="frame"]');

  await page.goto('https://webdriveruniversity.com/IFrame/index.html');

  await frame.getByRole('link', { name: 'Contact Us' }).click();

  await frame.getByRole('textbox', { name: 'First Name' }).fill('john');
  await frame.getByRole('textbox', { name: 'Last Name' }).fill('dou');
  await frame
    .getByRole('textbox', { name: 'Email Address' })
    .fill('dou@dou.com');
  await frame.getByRole('textbox', { name: 'Comments' }).fill('hello');

  await frame.getByRole('button', { name: 'SUBMIT' }).click();

  await expect(frame.getByRole('heading')).toContainText(
    'Thank You for your Message!',
  );
});
