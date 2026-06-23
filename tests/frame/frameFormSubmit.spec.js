import { test, expect } from '@playwright/test';

test('The form can be submited within the frame', async ({page}) => {
  let frame = page.frameLocator('#frame');

  await page.goto('https://webdriveruniversity.com/IFrame/index.html');
  await frame.getByRole('link', {name: 'Contact Us'}).click();
  await frame.getByPlaceholder('First Name').fill('1');
  await frame.getByPlaceholder('Last Name').fill('1');
  await frame.getByPlaceholder('Email Address').fill('1@gmail.com');
  await frame.getByPlaceholder('Comments').fill('1');
  await frame.getByRole('button', {name: 'SUBMIT'}).click();
  await expect(frame.getByText('Thank You for your Message!')).toBeVisible();
});
