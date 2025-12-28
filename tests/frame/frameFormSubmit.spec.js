import { test, expect } from '@playwright/test';

test('The form can be submited within the frame', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/IFrame/index.html');

  const frame = page.frameLocator('#frame');

  await frame.locator('text=Contact Us').click();

  await frame.locator('input[name="first_name"]').fill('Jan');
  await frame.locator('input[name="last_name"]').fill('Kowalski');
  await frame.locator('input[name="email"]').fill('jan.kowalski@example.com');
  await frame.locator('textarea[name="message"]').fill('Testowa wiadomość');

  await frame.locator('input[type="submit"]').click();

  await expect(frame.locator('h1')).toHaveText('Thank You for your Message!');
});
