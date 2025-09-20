import { test, expect } from '@playwright/test';

test('Fake alert box can be opened and closed', async ({ page }) => {
  await page.goto('https://testpages.eviltester.com/styled/alerts/fake-alert-test.html');

  await page.getByRole('button', { name: 'Show fake alert box' }).click();

  const msg = page.getByText('I am a fake alert box');
  await expect(msg).toBeVisible();

  await page.getByRole('button', { name: 'OK' }).click();

  await expect(msg).toBeHidden();
});
