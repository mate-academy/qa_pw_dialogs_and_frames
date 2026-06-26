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
 await page.goto(
    'https://webdriveruniversity.com/IFrame/index.html',
  );
  const frame = page.frame('frame');

  await frame.getByRole('link', { name: 'Contact Us' }).click();
  await frame.getByPlaceholder('First Name').fill('Volodymyr');
  await frame.getByPlaceholder('Last Name').fill('Goral');
  await frame.getByPlaceholder('Email Address').fill('bob_gor@yop.com');
  await frame.getByPlaceholder('Comments').fill('I am here');
  await frame.locator('input[type=submit]').click();

  await expect(frame.locator('#contact_reply'))
    .toContainText('Thank You for your Message!');
});
