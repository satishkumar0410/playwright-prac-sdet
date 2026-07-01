import {test, expect} from "@playwright/test";
import {UserApiClient} from "../api/UserApiClient";

test('get user', async ({request}) => {
    const userApiClient = new UserApiClient(request);
    const response = await userApiClient.getUser(1);
    expect(response.status()).toBe(200);
    const user = await response.json();
    expect(user.name).toBe('Leanne Graham');
    expect(user.email).toBe('Sincere@april.biz');
});

test('get user not existing', async({request}) => {
    const userApiClient = new UserApiClient(request);
    const response = await userApiClient.getUser(100);
    expect(response.status()).toBe(404);});

test ('create user', async ({request}) => {
    const ApiClient = new UserApiClient(request);
    const response = await ApiClient.createUser('Satish Kumar', 'satish@test.com');
    expect(response.status()).toBe(201);
    const user = await response.json();
    expect(user.name).toBe('Satish Kumar');
    expect(user.email).toBe('satish@test.com');
});

test ('update user', async ({request}) => {
    const ApiClient = new UserApiClient(request);
    const response = await ApiClient.updateUser(1, 'Updated Name', 'updated@test.com');
    expect(response.status()).toBe(200);
    const user = await response.json();
    expect(user.name).toBe('Updated Name');
    expect(user.email).toBe('updated@test.com');
});

test ('delete user', async ({request}) => {
    const ApiClient = new UserApiClient(request);
    const response = await ApiClient.deleteUser(1);
    expect(response.status()).toBe(200);
}); 