import { test, expect } from '@playwright/test';

test('Fake modal dialog can be opened and closed', async ({ page }) => {
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

  const dialogLocator = page.getByRole('dialog');

  await page.goto(
    'https://testpages.eviltester.com/pages/basics/alerts-not-javascript/',
  );
  await page.getByRole('button', { name: 'Show fake alert box' }).click();
  await expect(dialogLocator).toBeVisible();
  await expect(dialogLocator).toContainText('I am a fake alert box!');
  await page.getByRole('button', { name: 'OK' }).click();
  await expect(dialogLocator).toBeHidden();
});
