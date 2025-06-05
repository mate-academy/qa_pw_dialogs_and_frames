import { test } from '@playwright/test';

test('Prompt dialog message saves provided input', async ({}) => {
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
