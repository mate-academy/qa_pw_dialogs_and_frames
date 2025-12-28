import { test, expect } from '@playwright/test';

test('Confirm dialog contains text and can be Dismissed', async ({ page }) => {
  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/alert-test.html',
  );

  let dialogType = '';
  let dialogMessage = '';

  page.on('dialog', async dialog => {
    dialogType = dialog.type();
    dialogMessage = dialog.message();
    await dialog.dismiss();
  });

  await page.click('text=Show confirm box');

  expect(dialogType).toBe('confirm');
  expect(dialogMessage).toBe('I am a confirm alert');
  await expect(page.locator('#confirmreturn')).toHaveText(
    'You clicked Cancel, confirm returned false.',
  );
});
