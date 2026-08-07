import { expect, test } from '@playwright/test';

test('Fake modal dialog can be opened and closed', async ({ page}) => {
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
    'https://testpages.eviltester.com/styled/alerts/fake-alert-test.html',);

  await page.getByText('Show modal dialog').click();

  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.getByRole('dialog')).toContainText('I am a modal div!');

  await page.getByRole('dialog').getByText('Ok').click();

  await expect(page.getByRole('dialog')).toBeHidden();
});
