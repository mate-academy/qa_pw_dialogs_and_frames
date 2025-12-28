import { test, expect } from '@playwright/test';

test('Fake modal dialog can be opened and closed', async ({ page }) => {
  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/fake-alert-test.html',
  );

  // Klikamy prawidłowy przycisk
  await page.click('text=Show modal dialog');

  // Prawidłowy locator dla modal dialogu
  const dialog = page.locator('#modalalert'); // jeśli ID modal dialogu to #modalalert, jeśli nie, sprawdź w DevTools
  await expect(dialog).toBeVisible();

  // Sprawdź treść, np.
  await expect(dialog).toHaveText('I am a modal dialog');

  // Klikamy Ok
  await dialog.locator('text=Ok').click();

  await expect(dialog).toBeHidden();
});
