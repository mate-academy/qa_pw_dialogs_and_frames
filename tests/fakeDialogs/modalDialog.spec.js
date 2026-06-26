import { test, expect } from '@playwright/test';

test('Fake modal dialog can be opened and closed', async ({ page }) => {
  /*
  Test:
  1. Open the page
   https://testpages.eviltester.com/styled/alerts/fake-alert-test.html
  2. Click the button 'Show fake alert box'
  3. Assert the dialog is opened
  4. Assert the dialog message
  5. Click the button 'Ok'
  6. Assert the dialog was closed
  */
  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/fake-alert-test.html',
  );

  const dialog = page.locator('#dialog');
  const dialogMessage = page.locator('#dialog-text');
 
   await page.locator('#modaldialog').click();
   await expect(dialogMessage).toHaveText('I am a modal div!');
 
   await page.getByRole('button', { name: 'Ok' }).click();
   await expect(dialog).toBeHidden();
   await expect(page.locator('#modalstatus'))
     .toContainText('Clicked OK on Modal');
});
