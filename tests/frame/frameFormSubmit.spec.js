import { en_CA } from '@faker-js/faker';
import { test, expect } from '@playwright/test';

test('The form can be submited within the frame', async ({ page }) => {
  await page.goto(
    'https://webdriveruniversity.com/IFrame/index.html',
  );

  const frameLocator = page.frameLocator('#frame');

  await frameLocator.getByRole('link', {name: 'Contact Us'}).click();

  await frameLocator.getByRole('textbox', {name: 'First Name'}).fill('first name');
  await frameLocator.getByRole('textbox', {name: 'Last Name'}).fill('last name');
  await frameLocator.getByRole('textbox', {name: 'Email Address'}).fill('test@gmail.com');
  await frameLocator.getByRole('textbox', {name: 'Comments'}).fill('comment');

  await frameLocator.getByRole('button', {name: 'SUBMIT'}).click();

  await expect(frameLocator.locator('#contact_reply h1')).toContainText('Thank You for your Message!');
});
