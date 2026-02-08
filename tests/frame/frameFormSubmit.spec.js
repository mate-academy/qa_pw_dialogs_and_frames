import { expect, test } from '@playwright/test';

test('The form can be submited within the frame', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/IFrame/index.html');

  const frame = page.frameLocator('#frame');
  await frame.getByText('Contact Us').click();

  await frame.getByPlaceholder('First Name').fill('First Name');
  await frame.getByPlaceholder('Last Name').fill('Last Name');
  await frame.getByPlaceholder('Email Address').fill('Email@Address.com');
  await frame.getByPlaceholder('Comments').fill('Comments');

  await frame.getByRole('button', { name: 'SUBMIT' }).click();

  const thankYouMessage = frame.getByText('Thank You for your Message!');
  await expect(thankYouMessage).toBeVisible();
});
