import { expect, test } from '@playwright/test';

test('Confirm dialog contains text and can be Dismissed', async ({page}) => {
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

  await page.locator('#confirmexample').click();
  expect(dialogType).toBe('confirm');
  expect(dialogMessage).toContain('I am a confirm alert');

  const locator = page.getByText('You clicked Cancel, confirm returned false.');
  await expect(locator).toBeVisible();

});
