import { test, expect } from '@playwright/test';
import { GooglePage } from '../pages/GooglePage';

test('has title', async ({ page }) => {
    const googlePage = new GooglePage(page);
    await googlePage.navigate();
    await expect(page).toHaveTitle(/Google/);
});

test('searches for Playwright', async ({ page }) => {
    const googlePage = new GooglePage(page);
    await googlePage.navigate();
    await googlePage.search('Playwright');
    await expect(page).toHaveTitle(/Playwright/);
});

test('searches for HackerRank', async ({ page }) => {
    const googlePage = new GooglePage(page);
    await googlePage.navigate();
    await googlePage.search('HackerRank');
    await expect(page).toHaveTitle(/HackerRank/);
});