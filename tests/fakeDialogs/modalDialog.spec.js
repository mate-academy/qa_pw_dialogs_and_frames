import { test, expect } from '@playwright/test';

test('Fake modal dialog can be opened and closed', async ({ page }) => {
  /*
  Test:
  1. Open the page
   https://testpages.eviltester.com/styled/alerts/fake-alert-test.html
  2. Click the button 'Show modal dialog'
  3. Assert the dialog is opened
  4. Assert the dialog message
  5. Click the button 'Ok'
  6. Assert the dialog was closed
  */

  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/fake-alert-test.html',
  );

  await page.getByRole('button', { name: 'Show modal dialog' }).click();

  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();

  const dialogMessage = page.locator('#dialog-text');
  await expect(dialogMessage).toHaveText('I am a modal div!');

  await dialog.getByRole('button', { name: 'Ok' }).click();

  await expect(dialog).toBeHidden();
});
