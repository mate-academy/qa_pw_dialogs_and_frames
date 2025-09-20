import { test, expect } from '@playwright/test';

test('Confirm dialog contains text and can be Dismissed', async ({ page }) => {
  await page.goto('https://testpages.eviltester.com/styled/alerts/alert-test.html');

  let dlgType, dlgMsg;
  page.once('dialog', async (dialog) => {
    dlgType = dialog.type();
    dlgMsg = dialog.message();
    await dialog.dismiss();
  });

  await page.getByRole('button', { name: 'Show confirm box' }).click();

  expect(dlgType).toBe('confirm');
  expect(dlgMsg).toBe('I am a confirm alert');
  await expect(page.getByText('You clicked Cancel, confirm returned false.')).toBeVisible();
});
