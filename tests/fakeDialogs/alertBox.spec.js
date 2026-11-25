import { test, expect } from '@playwright/test';

test('Fake alert box can be opened and closed', async ({ page }) => {
  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/fake-alert-test.html',
  );

  await page.getByRole('button', { name: 'Show fake alert box' }).click();

  const dialog = page.getByText('I am a fake alert box!', { exact: true });
  const okButton = page.getByRole('button', { name: 'OK', exact: true });

  await expect(dialog).toBeVisible();
  await expect(dialog).toHaveText('I am a fake alert box!');
  await expect(okButton).toBeVisible();

  await okButton.click();

  await expect(dialog).toBeHidden();
});
