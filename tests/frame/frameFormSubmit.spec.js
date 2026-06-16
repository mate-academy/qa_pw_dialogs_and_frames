import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test('The form can be submitted within the frame', async ({ page }) => {
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
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email();
  const comments = faker.lorem.sentence();

  await page.goto('https://webdriveruniversity.com/IFrame/index.html');

  const frame = page.frameLocator('#frame');

  await frame.getByRole('link', { name: 'Contact Us' }).click();

  await frame.getByRole('textbox', { name: 'First Name' }).fill(firstName);
  await frame.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
  await frame.getByRole('textbox', { name: 'Email Address' }).fill(email);
  await frame.getByRole('textbox', { name: 'Comments' }).fill(comments);

  await frame.getByRole('button', { name: 'SUBMIT' }).click();

  await expect(frame.getByText('Thank You for your Message')).toBeVisible();
});
