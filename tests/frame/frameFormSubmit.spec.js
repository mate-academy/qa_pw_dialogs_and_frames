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

  const mainFrame = page.frameLocator('#frame');
  const contactUsButton = mainFrame.getByRole('link', { name: 'Contact Us' });

  const firstNameInput = mainFrame.locator('input[name="first_name"]');
  const lastNameInput = mainFrame.locator('input[name="last_name"]');
  const emailInput = mainFrame.locator('input[name="email"]');
  const messageTextarea = mainFrame.locator('textarea[name="message"]');
  const submitButton = mainFrame.locator('input.contact_button[type="submit"]');

  const successMessage = mainFrame.locator('#contact_reply h1');

  // Test script
  await contactUsButton.click();

  await firstNameInput.fill('Anna');
  await lastNameInput.fill('White');
  await emailInput.fill('annw@i.ua');
  await messageTextarea.fill('Cool iframe');
  await submitButton.click();

  await expect(successMessage).toHaveText('Thank You for your Message!');
});
