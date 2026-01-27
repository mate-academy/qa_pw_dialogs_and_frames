import { test, expect } from '@playwright/test';

test('The form can be submited within the frame', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/IFrame/index.html');

  const frameLocator = page.frameLocator('iframe');
  await frameLocator.getByRole('link', { name: 'Contact Us' }).click();

  await frameLocator.locator('input[name="first_name"]').fill('John');
  await frameLocator.locator('input[name="last_name"]').fill('Doe');
  await frameLocator.locator('input[name="email"]').fill('john.doe@example.com');
  await frameLocator.locator('textarea[name="message"]').fill('Hello, world!');

  await frameLocator.locator('input[type="submit"]').click();

  const message = frameLocator.locator('h1');
  await expect(message).toContainText('Thank You for your Message');
});
