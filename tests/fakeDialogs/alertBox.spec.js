import { test, expect } from '@playwright/test';

test('Fake alert box can be opened and closed', async ({ page }) => {
  /*
  Test:
  1. Open the page
   https://testpages.eviltester.com/styled/alerts/fake-alert-test.html
  2. Click the button 'Show fake alert box'
  3. Assert the fake dialog is opened
  4. Assert the dialog message
  5. Click the button 'Ok'
  6. Assert the dialog was closed
  */
  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/fake-alert-test.html',
  );

  const dialog = page.locator('#dialog');
  const dialogMessage = page.locator('#dialog-text');

  await page.locator('#fakealert').click();
  await expect(dialogMessage).toHaveText('I am a fake alert box!');

  await page.getByRole('button', { name: 'Ok' }).click();
  await expect(dialog).toBeHidden();
  await expect(page.locator('#alertstatus'))
    .toContainText('Clicked OK on Alert');
});
