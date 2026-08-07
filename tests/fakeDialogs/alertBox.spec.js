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

  const modal = page.getByRole('dialog');

  await page.getByText('Show modal dialog').click();

  await expect(modal).toBeVisible();
  await expect(modal).toContainText('I am a modal div!');

  await modal.getByText('Ok').click();

  await expect(modal).toBeHidden();
});
