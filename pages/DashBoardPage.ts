import { BasePage } from "./BasePage";

export class DashBoardPage extends BasePage {
    async isLogoutButtonVisible(): Promise<boolean> {
        return await this.page.getByRole('link', { name: 'Log out' }).isVisible();
    }
    async getSuccessMessage(): Promise<string> {
        return await this.page.getByText('Congratulations').innerText();
    }
}