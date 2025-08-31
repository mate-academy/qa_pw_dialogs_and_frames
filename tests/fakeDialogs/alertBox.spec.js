import { expect, test } from '@playwright/test';

test('Fake alert box can be opened and closed', async ({ page }) => {
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
  const url = 'https://testpages.eviltester.com' +
    '/styled/alerts/fake-alert-test.html'
  await page.goto(url);
  await page.waitForURL(url);

  await page.getByRole('button', { name: 'Show fake alert box' }).click();
  await expect(page.locator('#dialog-text')).toBeVisible();

  await expect(page.locator('#dialog-text')).toContainText(
    'I am a fake alert box!'
  );
  await page.getByRole('button', {name: 'OK'}).click();
  await expect(page.locator('#dialog-text')).toBeHidden();
});
