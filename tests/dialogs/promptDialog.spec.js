import { test, expect } from '@playwright/test';

test('Prompt dialog message saves provided input', async ({ page }) => {
  let dialogMessage;
  let dialogType;
  const value = 'my prompt input';

  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/alert-test.html',
  );

  page.on('dialog', async dialog => {
    dialogType = dialog.type();
    dialogMessage = dialog.message();
    await dialog.accept(value);
  });

  await page.getByRole('button', {name: 'Show prompt box'}).click();
  expect(dialogType).toBe('prompt');
  expect(dialogMessage).toContain('I prompt you');

  const locator = page.getByText(`You clicked OK. 'prompt' returned ${value}`);
  await expect(locator).toBeVisible();
});
