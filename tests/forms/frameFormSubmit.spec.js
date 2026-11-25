import { test, expect } from '@playwright/test';

test('The form can be submitted within the frame', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/IFrame/index.html');

  const frame = page.frameLocator('#frame');

  await frame.getByRole('link', { name: 'Contact Us' }).click();

  await frame.getByPlaceholder('First Name').fill('John');
  await frame.getByPlaceholder('Last Name').fill('Smith');
  await frame.getByPlaceholder('Email Address').fill('john@example.com');
  await frame.getByPlaceholder('Comments').fill('Playwright iframe test');

  await frame.getByRole('button', { name: 'SUBMIT' }).click();

  await expect(frame.getByText('Thank You for your Message!')).toBeVisible();
});
