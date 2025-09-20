import { test, expect } from '@playwright/test';

test('Fake modal dialog can be opened and closed', async ({ page }) => {
  await page.goto('https://testpages.eviltester.com/styled/alerts/fake-alert-test.html');

  await page.getByRole('button', { name: 'Show modal dialog' }).click();

  const modalMessage = page.locator('text=/^I am a modal/i');
  await expect(modalMessage).toBeVisible();

  await page.getByRole('button', { name: /^OK$/i }).click();

  await expect(modalMessage).toBeHidden();
});
