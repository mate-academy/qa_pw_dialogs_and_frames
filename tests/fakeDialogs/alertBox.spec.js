import { test, expect } from '@playwright/test';

test('Fake alert box can be opened and closed', async ({ page }) => {

  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/fake-alert-test.html',
  );

  await page.getByRole('button', {name: 'Show fake alert box'}).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.locator('#dialog-text')).toContainText('I am a fake alert box!')
  await page.getByRole('button', {name: 'OK'}).click();;
  await expect(page.getByRole('dialog')).toBeHidden();
});
