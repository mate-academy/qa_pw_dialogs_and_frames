import { test, expect } from '@playwright/test';

test('Prompt dialog message saves provided input', async ({ page }) => {
  let dialogType;
  let dialogMessage;
  const promptValue = 'Test Input';

  await page.goto('https://testpages.eviltester.com/styled/alerts/alert-test.html');

  page.on('dialog', async dialog => {
    dialogType = dialog.type();
    dialogMessage = dialog.message();

    await dialog.accept(promptValue);
  });

  await page.locator('#promptexample').click();

  expect(dialogType).toBe('prompt');
  expect(dialogMessage).toBe('I prompt you');

  const resultMessage = page.locator('#promptexplanation');
  await expect(resultMessage).toContainText(`You clicked OK. 'prompt' returned ${promptValue}`);
});
