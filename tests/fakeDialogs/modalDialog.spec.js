import { test, expect } from '@playwright/test';

test('Fake modal dialog can be opened and closed', async ({ page}) => {
  await page.goto(
   'https://testpages.eviltester.com/styled/alerts/fake-alert-test.html'
  );
  await page.locator('#fakealert').click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.getByRole(
    'heading', { name: 'I am a fake alert box!' })).toBeVisible();
  await page.getByRole('button', { name: 'OK' }).click();
  await expect(page.getByRole('dialog')).toBeHidden();
});
