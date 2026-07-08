import {test, expect} from '@playwright/test';

test('Todo app test', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    await page.getByPlaceholder('What needs to be done?').fill('Buy groceries');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await expect(page.getByText('Buy groceries')).toBeVisible();
});

test('Todo app test with multiple items', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    const items = ['Buy groceries', 'Walk the dog', 'Read a book'];
    for (const item of items) {
        await page.getByPlaceholder('What needs to be done?').fill(item);
        await page.getByPlaceholder('What needs to be done?').press('Enter');
    }
    await expect(page.getByText('3 items left')).toBeVisible();
});

test('Todo app test with item completion', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    await page.getByPlaceholder('What needs to be done?').fill('Buy groceries');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.getByRole('checkbox', {name : 'Toggle Todo'}).check();
    await expect(page.locator('li.completed')).toBeVisible();
});

test('Todo app test with item deletion', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    await page.getByPlaceholder('What needs to be done?').fill('Buy groceries');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.getByText('Buy groceries').hover();
    await page.getByRole('button', {name : 'Delete'}).click();
    await expect(page.getByText('Buy groceries')).not.toBeVisible();
});

test('Dynamic todo text', async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    const today = new Date();
    const dateString = today.toISOString().split('T')[0];
    const todoText = `Task created on ${dateString}`;
    await page.getByPlaceholder('What needs to be done?').fill(todoText);
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await expect(page.getByText(todoText)).toBeVisible();
});