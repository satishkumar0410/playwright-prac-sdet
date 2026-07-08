import {test, expect} from '@playwright/test';

test('Negative test for login with empty username and password', async ({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.locator('#submit').click();
    await expect(page.locator('#error')).toContainText('invalid');
});

test('Negative test for login with invalid credentials', async ({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.locator('#username').fill('WrongUsername');
    await page.locator('#password').fill('WrongPassword');
    await page.locator('#submit').click();
    await expect(page.locator('#error')).toContainText('invalid');
})

test('Positive test for login with valid credentials', async ({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.locator('#username').fill('student');
    await page.locator('#password').fill('Password123');
    await page.locator('#submit').click();
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    await expect(page.getByText('Congratulations')).toBeVisible();
    await expect(page.getByRole('link', {name : 'Log out'})).toBeVisible();
    await page.getByRole('link', {name : 'Log out'}).click();
    await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
    await expect(page.getByRole('button', {name : 'Submit'})).toBeVisible();
})