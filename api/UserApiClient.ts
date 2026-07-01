import {APIRequestContext, APIResponse} from '@playwright/test';

export class UserApiClient {
    private request: APIRequestContext;
    private url : string;

    constructor(request : APIRequestContext) {
        this.request = request;
        this.url = 'https://jsonplaceholder.typicode.com';
    }
    async getUser(userId: number) : Promise<APIResponse> {
        const response = await this.request.get(`${this.url}/users/${userId}`);
        return response;
    }
    async createUser(name : string, email : string) : Promise<APIResponse> {
        const response = await this.request.post(`${this.url}/users`, {
            data: {
                name,
                email
            }
        });
        return response;
}
async updateUser(userId : number, name : string, email : string) : Promise<APIResponse> {
    const reponse = await this.request.put(`${this.url}/users/${userId}`, {
        data: {
            name,email
        }
    });
    return reponse;
}
async deleteUser(userId : number) : Promise<APIResponse> {
    const reponse = await this.request.delete(`${this.url}/users/${userId}`);
    return reponse;
}
}
