import { expect, test } from '@playwright/test';

test('Prompt dialog message saves provided input', async ({ page }) => {
  /*
  Test:
  1. Open the page
   https://testpages.eviltester.com/styled/alerts/alert-test.html
  2. Register a dialog handler 
  3. Save the value of the dialog type to the variable
  4. Save the value of the dialog message to the variable
  5. Send the prompt value using `await dialog.accept(value); `
  6. Click the button 'Show prompt box'
  7. Assert the dialog type is 'Prompt'
  8. Assert the dialog message is 'I prompt you'
  9. Assert the message 'You clicked OK. 'prompt' returned ${value}' is visible
  */
  const promptValue = 'Test Input';

  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/alert-test.html',
  );

  const dialogPromise = page.waitForEvent('dialog');

  page.getByText('Show prompt box').click();

  const dialog = await dialogPromise;

  expect(dialog.type()).toBe('prompt');
  expect(dialog.message()).toBe('I prompt you');

  await dialog.accept(promptValue);

  await expect(page.locator('#promptexplanation')).toHaveText(
    `You clicked OK. 'prompt' returned ${promptValue}`,
  );
});
