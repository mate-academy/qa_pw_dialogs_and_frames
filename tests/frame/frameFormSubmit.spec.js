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
  await page.goto('https://webdriveruniversity.com/IFrame/index.html');
  const frame = page.frameLocator('#frame');
  await frame.locator('text=Contact Us').click();
  await frame.locator('input[name="first_name"]').fill('Name');
  await frame.locator('input[name="last_name"]').fill('Name last');
  await frame.locator('input[name="email"]').fill('Name@gmail.com');
  await frame
    .locator('textarea[name="message"]')
    .fill('Namedsfdsfsdfdsfdsfsdfdsf');

  await frame.locator('input[type="submit"]').click();
  await expect(frame.locator('text=Thank You for your Message')).toBeVisible();
});
