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

  await page.getByRole('button', { name: 'Show modal dialog' }).click();

  const dialogLocator = page.locator('.dialog');
  const dialogMessage = dialogLocator.locator('h2');
  const dialogButton = dialogLocator.locator('.dialog-button');

  await expect(dialogLocator).toBeVisible();

  await expect(dialogMessage).toHaveText('I am a modal div!');

  await dialogButton.click();

  await expect(dialogLocator).toBeHidden();
});
