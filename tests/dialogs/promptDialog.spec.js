import { test } from '@playwright/test';
import { expect } from '@playwright/test';

test('Prompt dialog message saves provided input', async ({ page }) => {
  let dialogMessage;
  let dialogType;

  await page.goto(
      'https://testpages.eviltester.com/styled/alerts/alert-test.html',
  );
page.on('dialog', async (dialog) => {
  dialogType = dialog.type();
  dialogMessage = dialog.message();
  await dialog.accept('text');
});


await page.locator('#promptexample').click();
await expect(dialogType).toBe('prompt');
await expect(dialogMessage).toContain('I prompt you');

const locator = page.locator('#promptexplanation');
await expect(locator).toContainText(`You clicked OK. 'prompt' returned text`);

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
});
