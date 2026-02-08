import { expect, test } from '@playwright/test';

test('Fake alert box can be opened and closed', async ({page}) => {
  await page.goto(
    'https://testpages.eviltester.com/styled/alerts/fake-alert-test.html',
  );

  await page.getByRole('button', { name: 'Show modal dialog' }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'I am a modal div!' }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'OK' }).click();
  await expect(
    page.getByRole('heading', { name: 'I am a modal div!' }),
  ).toBeHidden();
});
