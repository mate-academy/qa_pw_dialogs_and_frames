import { test, expect } from '@playwright/test';

test('Alert dialog contains text and can be Accepted', async ({ page }) => {
  let dialogMessage;
  let dialogType;

  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/alert-test.html',
  );

  page.on('dialog', async dialog => {
    dialogType = dialog.type();
    dialogMessage = dialog.message();
    await dialog.accept();
  });

  await page.locator('#alertexamples').click();
  expect(dialogType).toBe('alert');
  expect(dialogMessage).toContain('I am an alert box!');

  const locator = page.getByText('You triggered and handled the alert dialog');
  await expect(locator).toBeVisible();
});
