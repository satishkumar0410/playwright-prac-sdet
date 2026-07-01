import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    async navigate() {
        await this.goto('https://practicetestautomation.com/practice-test-login/');
    }

    async login(username: string, password: string) {
        await this.page.getByLabel('Username').fill(username);
        await this.page.getByLabel('Password').fill(password);
        await this.page.getByRole('button', { name: 'Submit' }).click();
    }
}