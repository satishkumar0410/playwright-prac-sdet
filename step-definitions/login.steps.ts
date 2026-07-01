import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
setDefaultTimeout(30000);
import {chromium, Browser, Page} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';

Given('I am on the login page', async function () {
    const browser : Browser = await chromium.launch();
    const context = await browser.newContext();
    const page : Page = await context.newPage();
    this.page = page;
    this.loginPage = new LoginPage(page);
    await this.loginPage.navigate();
});

When('I login with username {string} and password {string}', async function(username: string, password: string) {
    await this.loginPage.login(username, password);
});

Then('I should be redirected to the dashboard', async function() {
    const url = this.page.url();
    if (!url.includes('logged-in-successfully')) {
        throw new Error(`Expected URL to contain 'logged-in-successfully' but got '${url}'`);
    }
});

Then('I should see error message {string}', async function(expectedErrorMessage: string) {
    const actualErrorMessage = await this.page.locator('#error').innerText();
    if (actualErrorMessage !== expectedErrorMessage) {
        throw new Error(`Expected error message to be '${expectedErrorMessage}' but got '${actualErrorMessage}'`);
    }
});

