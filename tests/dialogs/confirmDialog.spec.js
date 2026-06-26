import { test, expect } from '@playwright/test';

test('Confirm dialog contains text and can be Dismissed', async ({ page }) => {
  let dialogMessage;
  let dialogType;

  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/alert-test.html',
  );

  page.on('dialog', async dialog => {
    dialogType =
      dialog.type().charAt(0).toUpperCase() + dialog.type().slice(1);
    dialogMessage = dialog.message();
    await dialog.dismiss();
  });

  await page.locator('#confirmexample').click();
  expect(dialogType).toBe('Confirm');
  expect(dialogMessage).toBe('I am a confirm alert');

  await expect(
    page.getByText('You clicked Cancel, confirm returned false.'),
  ).toBeVisible();
});
