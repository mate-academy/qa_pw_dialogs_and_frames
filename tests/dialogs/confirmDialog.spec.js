import { test, expect } from '@playwright/test';

test('Confirm dialog contains text and can be Dismissed', async ({ page }) => {
  let dialogType;
  let dialogMessage;

  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/alert-test.html',
  );

  page.on('dialog', async dialog => {
    dialogType = dialog.type();
    dialogMessage = dialog.message();

    await dialog.dismiss();
  });

  await page.getByRole('button', { name: 'Show confirm box' }).click();

  expect(dialogType).toBe('confirm');
  expect(dialogMessage).toBe('I am a confirm alert');

  await expect(
    page.getByText('You clicked Cancel, confirm returned false.'),
  ).toBeVisible();
});
