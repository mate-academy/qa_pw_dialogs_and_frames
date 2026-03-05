import { test, expect } from '@playwright/test';

test('The form can be submited within the frame', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/IFrame/index.html');

  const frame = page.frameLocator('#frame');

  await frame.getByText('Contact Us').click();

  await frame.locator('input[name="first_name"]').fill('John');
  await frame.locator('input[name="last_name"]').fill('Doe');
  await frame.locator('input[name="email"]').fill('john.doe@example.com');
  await frame
    .locator('textarea[name="message"]')
    .fill('Hello, this is a test message.');

  await frame.locator('input[type="submit"]').click();

  await expect(frame.getByText('Thank You for your Message')).toBeVisible();
});
