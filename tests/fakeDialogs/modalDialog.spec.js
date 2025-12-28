import { test, expect } from '@playwright/test';

test('Fake modal dialog can be opened and closed', async ({ page }) => {
  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/fake-alert-test.html',
  );

  // Klikamy przycisk otwierający modal
  await page.click('#modaldialog');

  // Prawidłowy locator dla modal dialogu
  const dialog = page.locator('#modalalert'); // jeśli modal treść jest w elemencie z ID #modalalert
  await expect(dialog).toBeVisible();

  // Sprawdź dokładną treść w DevTools, np. "I am a modal dialog"
  await expect(dialog).toHaveText('I am a modal dialog');

  // Klikamy Ok
  await dialog.locator('text=Ok').click();

  await expect(dialog).toBeHidden();
});
