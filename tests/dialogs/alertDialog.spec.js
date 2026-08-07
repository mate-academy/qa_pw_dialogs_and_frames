import { test, expect } from '@playwright/test';

test('Alert dialog contains text and can be Accepted', async ({ page }) => {
  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/alert-test.html',
  );

  const dialogPromise = page.waitForEvent('dialog');

  page.locator('#alertexamples').click();

  const dialog = await dialogPromise;

  expect(dialog.type()).toBe('alert');
  expect(dialog.message()).toContain('I am an alert box!');

  await dialog.accept();

  await expect(
    page.getByText('You triggered and handled the alert dialog'),
  ).toBeVisible();
});
