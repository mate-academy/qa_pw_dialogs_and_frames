import { test, expect } from '@playwright/test';

test('Prompt dialog message saves provided input', async ({ page }) => {
  let dialogType;
  let dialogMessage;
  const value = 'Playwright test';

  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/alert-test.html',
  );

  page.on('dialog', async dialog => {
    dialogType = dialog.type();
    dialogMessage = dialog.message();

    await dialog.accept(value);
  });

  await page.getByRole('button', { name: 'Show prompt box' }).click();

  expect(dialogType).toBe('prompt');
  expect(dialogMessage).toBe('I prompt you');

  await expect(
    page.getByText(`You clicked OK. 'prompt' returned ${value}`),
  ).toBeVisible();
});
