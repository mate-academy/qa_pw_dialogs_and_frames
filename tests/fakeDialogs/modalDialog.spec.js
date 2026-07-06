import { test } from '@playwright/test';
import { expect } from '@playwright/test';
test('Fake modal dialog can be opened and closed', async ({page}) => {


    await page.goto(
      'https://testpages.eviltester.com/styled/alerts/fake-alert-test.html',
    );
  
  await page.getByRole('button', { name: 'Show fake alert box' }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.locator('#dialog-text')).toHaveText('I am a fake alert box!');
  await page.getByRole('button', { name: 'Ok' }).click();
  await expect(page.getByRole('dialog')).not.toBeVisible();
  
  
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
});
