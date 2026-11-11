import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

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
  const url = 'https://webdriveruniversity.com/IFrame/index.html';
  const frame = page.frameLocator('#frame');

  const contactUsLink = frame.getByRole('link', { name: 'Contact Us' });

  const firstNameField = frame.getByRole('textbox', { name: 'First Name' });

  const lastNameField = frame.getByRole('textbox', { name: 'Last Name' });

  const emailField = frame.getByRole('textbox', { name: 'Email Address' });

  const commentsField = frame.getByRole('textbox', { name: 'Comments' });

  const submitButton = frame.getByRole('button', { name: 'SUBMIT' });

  const thankYouMessage = frame.getByRole('heading', {
    name: 'Thank You for your Message!',
  });

  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email();
  const comments = faker.lorem.sentence();

  await page.goto(url);
  await contactUsLink.click();
  await firstNameField.fill(firstName);
  await lastNameField.fill(lastName);
  await emailField.fill(email);
  await commentsField.fill(comments);
  await submitButton.click();
  await expect(thankYouMessage).toBeVisible();
});
