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
  let dialogMessage;
  let dialogType;
  const promptValue = 'Test Input';

  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/alert-test.html',
  );

  const dialogPromise = new Promise(resolve => {
    page.on('dialog', async dialog => {
      dialogType = dialog.type();
      dialogMessage = dialog.message();
      await dialog.accept(promptValue);
      resolve();
    });
  });

  await page.getByText('Show prompt box').click();
  await dialogPromise;

  expect(dialogType).toBe('prompt');
  expect(dialogMessage).toBe('I prompt you');
  await expect(page.locator('#promptexplanation')).toHaveText(
    `You clicked OK. 'prompt' returned ${promptValue}`,
  );
});
