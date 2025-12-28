import { test, expect } from '@playwright/test';

test('Fake alert box can be opened and closed', async ({ page }) => {
  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/fake-alert-test.html',
  );

  // Klikamy prawidłowy przycisk
  await page.click('text=Show fake alert box');

  // Prawidłowy locator i treść
  const dialog = page.locator('#fakealert');
  await expect(dialog).toBeVisible();
  await expect(dialog).toHaveText('I am a fake alert box!');

  // Klikamy Ok
  await dialog.locator('text=Ok').click();

  await expect(dialog).toBeHidden();
});
