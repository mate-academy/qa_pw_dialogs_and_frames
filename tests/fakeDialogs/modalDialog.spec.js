import { expect, test } from '@playwright/test';

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

  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/fake-alert-test.html',
  );

  const modal = page.getByRole('dialog');

  await page.getByText('Show fake alert box').click();

  await expect(modal).toBeVisible();
  await expect(modal).toContainText('I am a fake alert box!');

  await modal.getByText('Ok').click();

  await expect(modal).toBeHidden();
});
