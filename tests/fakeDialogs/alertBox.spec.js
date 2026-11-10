import { test, expect } from '@playwright/test';

test('Fake alert box can be opened and closed', async ({ page }) => {
  /*
  Test:
  1. Open the page
   https://testpages.eviltester.com/styled/alerts/fake-alert-test.html
  2. Click the button 'Show fake alert box'
  3. Assert the dialog is opened
  4. Assert the dialog message
  5. Click the button 'Ok'
  6. Assert the dialog was closed
  */

  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/fake-alert-test.html',
  );

  await page.locator('#fakealert').click();

  const fakeAlertBox = await page.getByRole('dialog')
  await expect(fakeAlertBox).toBeVisible();

  const dialogMessage = await fakeAlertBox.locator('#dialog-text').textContent();
  expect(dialogMessage).toBe('I am a fake alert box!');

  const dialogButton = await fakeAlertBox.locator('#dialog-ok');
  await dialogButton.click();

  await expect(fakeAlertBox).not.toBeVisible();
  await expect(page.getByText('Clicked OK on Alert')).toBeVisible();
});
