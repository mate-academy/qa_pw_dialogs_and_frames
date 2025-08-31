import { expect, test } from '@playwright/test';
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
  await page.goto(url);
  await page.waitForURL(url);

  await page.goto(url);
  const generalFrame = page.frame({ url: /.*Page-Object-Model*/ });
  await generalFrame.getByRole('link', { name: 'Contact Us' }).click();

  const contactUsFrame = page.frame({ url: /.*Page-Object-Model*/ });
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName });
  const comment = faker.lorem.sentence(10);

  await contactUsFrame.getByPlaceholder('First Name').fill(firstName);
  await contactUsFrame.getByPlaceholder('Last Name').fill(lastName);
  await contactUsFrame.getByPlaceholder('Email Address').fill(email);
  await contactUsFrame.getByPlaceholder('Comments').fill(comment);

  await contactUsFrame.getByRole('button', { name: 'SUBMIT' }).click();

  await expect(
    contactUsFrame.getByText('Thank You for your Message!')
  ).toBeVisible();

});

