import { test, expect } from '@playwright/test';

test('Prompt dialog message saves provided input', async ({ page }) => {
  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/alert-test.html',
  );

  let dialogType = '';
  let dialogMessage = '';
  const promptValue = 'Moja odpowiedź';

  page.on('dialog', async dialog => {
    dialogType = dialog.type();
    dialogMessage = dialog.message();
    await dialog.accept(promptValue);
  });

  await page.click('text=Show prompt box');

  expect(dialogType).toBe('prompt');
  expect(dialogMessage).toBe('I prompt you');
  await expect(page.locator('#promptreturn')).toHaveText(
    `You clicked OK. 'prompt' returned ${promptValue}`,
  );
});
