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
  let dialogMessage;
  let dialogType;

  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/alert-test.html',
  );

  const dialogPromise = new Promise(resolve => {
    page.on('dialog', async dialog => {
      dialogType = dialog.type();
      dialogMessage = dialog.message();
      await dialog.dismiss();
      resolve();
    });
  });

  await page.getByText('Show confirm box').click();
  await dialogPromise;

  expect(dialogType).toBe('confirm');
  expect(dialogMessage).toBe('I am a confirm alert');
  await expect(page.locator('#confirmexplanation')).toHaveText(
    'You clicked Cancel, confirm returned false.',
  );
});
