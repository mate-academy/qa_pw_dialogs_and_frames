import { test, expect } from '@playwright/test';

test('Prompt dialog message saves provided input', async ({ page }) => {
  await page.goto('https://testpages.eviltester.com/styled/alerts/alert-test.html');

  const value = 'Banana';
  let dlgType, dlgMsg;
  page.once('dialog', async (dialog) => {
    dlgType = dialog.type();
    dlgMsg = dialog.message();
    await dialog.accept(value);
  });

  await page.getByRole('button', { name: 'Show prompt box' }).click();

  expect(dlgType).toBe('prompt');
  expect(dlgMsg).toBe('I prompt you');
  await expect(page.getByText(`You clicked OK. 'prompt' returned ${value}`)).toBeVisible();
});