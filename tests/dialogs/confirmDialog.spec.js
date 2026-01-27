import { test, expect } from '@playwright/test';

test('Confirm dialog contains text and can be Dismissed', async ({ page }) => {
  let dialogType;
  let dialogMessage;

  await page.goto('https://testpages.eviltester.com/styled/alerts/alert-test.html');

  page.on('dialog', async dialog => {
    dialogType = dialog.type();
    dialogMessage = dialog.message();

    await dialog.dismiss();
  });

  await page.locator('#confirmexample').click();

  expect(dialogType).toBe('confirm');
  expect(dialogMessage).toBe('I am a confirm alert');

  const resultMessage = page.locator('#confirmexplanation');
  await expect(resultMessage).toContainText('You clicked Cancel, confirm returned false.');
});
