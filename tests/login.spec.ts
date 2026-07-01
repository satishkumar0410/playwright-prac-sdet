import { test, expect } from '../fixtures/index';
import { LoginPage } from '../pages/LoginPage';

test('login with valid credentials', async ({ page, loginPage, dashboardPage }) => {
    await loginPage.login('student', 'Password123');
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    const message = await dashboardPage.getSuccessMessage();
    expect(message).toContain('Congratulations student. You successfully logged in!');
    expect(await dashboardPage.isLogoutButtonVisible()).toBe(true);
});

test('login with invalid user', async ({ page, loginPage }) => {
    await loginPage.login('incorrectUser', 'Password123');
    await expect(page.locator('#error')).toHaveText('Your username is invalid!');
});

test('login with invalid password', async ({ page, loginPage }) => {
    await loginPage.login('student', 'incorrectPassword');
    await expect(page.locator('#error')).toHaveText('Your password is invalid!');
});