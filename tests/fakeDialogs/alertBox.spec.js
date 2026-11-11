import { expect, test } from '@playwright/test';

test('Fake alert box can be opened and closed', async ({ page }) => {
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
  const fakeAlertBoxButton = page.getByRole('button', {
    name: 'Show fake alert box',
  });
  const dialog = page.locator('#dialog > div.dialog.active');
  const dialogMessage = page.getByRole('heading', {
    name: 'I am a fake alert box!',
  });
  const message = 'I am a fake alert box!';
  const buttonOk = page.getByRole('button', { name: 'OK' });
  const alertLocator = page.getByText('Clicked OK on Alert');

  await fakeAlertBoxButton.click();
  await expect(dialog).toBeVisible();
  await expect(dialogMessage).toHaveText(message);
  await buttonOk.click();
  await expect(dialog).toBeHidden();
  await expect(alertLocator).toBeVisible();
});
