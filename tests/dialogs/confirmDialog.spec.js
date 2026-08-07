import { expect, test } from '@playwright/test';

test('Confirm dialog contains text and can be Dismissed', async ({ page }) => {
  /*
  Test:
  1. Open the page
   https://testpages.eviltester.com/styled/alerts/alert-test.html
  2. Register a dialog handler 
  3. Save the value of the dialog type to the variable
  4. Save the value of the dialog message to the variable
  5. Dismiss the dialog using `dialog.dismiss()`. 
  6. Click the button 'Show confirm box'
  7. Assert the dialog type is 'Confirm'
  8. Assert the dialog message is 'I am a confirm alert'
  9. Assert the message 'You clicked Cancel, confirm returned false.' is visible
  */
  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/alert-test.html',
  );

  const dialogPromise = page.waitForEvent('dialog');

  page.getByText('Show confirm box').click();

  const dialog = await dialogPromise;

  expect(dialog.type()).toBe('confirm');
  expect(dialog.message()).toBe('I am a confirm alert');

  await dialog.dismiss();

  await expect(page.locator('#confirmexplanation')).toHaveText(
    'You clicked Cancel, confirm returned false.',
  );
});
