import { test, expect } from '@playwright/test';

test('The form can be submited within the frame', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/IFrame/index.html');

  const frame = page.frameLocator('#frame');

  await frame.getByRole('link', { name: 'Contact Us' }).click();

  await frame.getByRole('textbox', { name: 'First Name' }).fill('Zoe');
  await frame.getByRole('textbox', { name: 'Last Name' }).fill('Fedor');
  await frame.getByRole('textbox', { name: 'Email' }).fill('zoe.fedor@example.com');
  await frame.getByRole('textbox', { name: 'Comments' }).fill('Hello from Playwright');

  await frame.getByRole('button', { name: 'SUBMIT' }).click();

  await expect(frame.getByText('Thank You for your Message', { exact: false })).toBeVisible();
});