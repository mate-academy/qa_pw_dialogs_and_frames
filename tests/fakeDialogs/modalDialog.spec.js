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

  await page.locator('#modaldialog').click();

  const modalDialog = await page.getByRole('dialog')
  await expect(modalDialog).toBeVisible();

  const dialogMessage = await modalDialog.locator('#dialog-text').textContent();
  expect(dialogMessage).toBe('I am a modal div!');

  const dialogButton = await modalDialog.locator('#dialog-ok');
  await dialogButton.click();

  await expect(modalDialog).not.toBeVisible();
  await expect(page.getByText('Clicked OK on Modal')).toBeVisible();
});
