import { test, expect } from '@playwright/test';

test('Fake modal dialog can be opened and closed', async ({ page }) => {
  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/fake-alert-test.html',
  );

  await page.getByRole('button', { name: 'Show modal dialog' }).click();

  const windowDialog = page.getByText('I am a modal div! Cancel OK');
  await expect(windowDialog).toBeVisible();

  const messageLocator = page.getByRole('heading', {
    name: 'I am a modal div!',
  });
  await expect(messageLocator).toBeVisible();

  await page.getByRole('button', { name: 'OK' }).click();

  await expect(windowDialog).toBeHidden();
  await expect(page.getByText('Clicked OK on Alert')).toBeVisible();
  /*
  Test:
  1. Open the page
   https://testpages.eviltester.com/styled/alerts/fake-alert-test.html +
  2. Click the button 'Show modal dialog' +
  3. Assert the dialog is opened + 
  4. Assert the dialog message + 
  5. Click the button 'Ok' + 
  6. Assert the dialog was closed + 
  */
});
