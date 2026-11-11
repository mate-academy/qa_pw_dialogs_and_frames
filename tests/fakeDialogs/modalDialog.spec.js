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
  const modalDialogButton = page.getByRole('button', {
    name: 'Show modal dialog',
  });
  const dialog = page.locator('#dialog > div.dialog.active');
  const dialogMessage = page.getByRole('heading', {
    name: 'I am a modal div!',
  });
  const message = 'I am a modal div!';
  const buttonOk = page.getByRole('button', { name: 'OK' });
  const modalLocator = page.getByText('Clicked OK on Modal');

  await modalDialogButton.click();
  await expect(dialog).toBeVisible();
  await expect(dialogMessage).toHaveText(message);
  await buttonOk.click();
  await expect(dialog).toBeHidden();
  await expect(modalLocator).toBeVisible();
});
