import { test, expect } from '@playwright/test';

test('Fake modal dialog can be opened and closed', async ({ page }) => {
  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/fake-alert-test.html',
  );

  await page.click('text=Show fake alert box');

  const dialog = page.locator('#modalalert');
  await expect(dialog).toBeVisible();
  await expect(dialog).toHaveText('I am a fake alert');

  await dialog.locator('text=Ok').click();

  await expect(dialog).toBeHidden();
});
