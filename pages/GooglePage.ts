import { Page } from '@playwright/test';

class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto(url: string) {
        await this.page.goto(url);
    }
}

export class GooglePage extends BasePage {
    async navigate() {
        await this.goto('https://www.google.com/');
    }

    async search(query: string) {
        await this.page.getByRole('combobox', { name: 'Search' }).fill(query);
        await this.page.keyboard.press('Enter');
    }
}