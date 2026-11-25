import { test, expect } from '@playwright/test';

test('Fake modal dialog can be opened and closed', async ({ page }) => {
  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/fake-alert-test.html',
  );

  await page.getByRole('button', { name: 'Show modal dialog' }).click();

  const dialog = page.getByRole('dialog');
  const dialogMessage = dialog.getByRole('heading');
  const okButton = dialog.getByRole('button', {
    name: 'OK',
    exact: true,
  });

  await expect(dialog).toBeVisible();
  await expect(dialogMessage).toHaveText('I am a modal div!');
  await expect(okButton).toBeVisible();

  await okButton.click();

  await expect(dialog).toBeHidden();
});
