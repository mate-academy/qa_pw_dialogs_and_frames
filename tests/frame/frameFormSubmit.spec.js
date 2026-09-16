import { test, expect } from '@playwright/test';

test('The form can be submited within the frame', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/IFrame/index.html');

  const frame = page.frameLocator('#frame');

  await frame.getByRole('link', { name: 'Contact Us' }).click();

  await frame.locator('input[name="first_name"]').fill('Vitalya');
  await frame.locator('input[name="last_name"]').fill('Slavetniy');
  await frame.locator('input[name="email"]').fill('vitslav@gmail.com');
  await frame.locator('textarea[name="message"]').fill('Test');

  await frame.getByRole('button', { name: 'SUBMIT' }).click();

  await expect(frame.locator('#contact_reply')).toContainText(
    'Thank You for your Message',
  );
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
