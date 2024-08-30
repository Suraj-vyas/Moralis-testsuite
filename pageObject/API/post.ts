import { test, APIRequestContext, APIResponse, expect } from "@playwright/test";

export class post {
    protected readonly request: APIRequestContext
    constructor(request: APIRequestContext) {
        this.request = request
    }

    async call_PostMethod_With_200_StatusCode(endpoint: string, requestBody: any) {
        let response: APIResponse
        let responseTime: number
        let responseBody = ""
        await test.step("Calling the API", async () => {
            const beforeCallTime: any = new Date();
            response = await this.request.post(endpoint, {
                data: requestBody, headers: {
                    "x-api-key": "tK503cR23o8YTvXhNoDNo7kQf5sQdbXP8qbqkBeQ"
                }
            })
            const afterCallTime: any = new Date();
            responseTime = (afterCallTime - beforeCallTime)
        })
        await test.step("Response Status Code Validation", async () => {
            expect.soft(response.status()).toEqual(200)
        })
        await test.step("Response status and msg field Validation", async () => {
            responseBody = await response.text()
        })
        await test.step("Test Report Log", async () => {
            console.log("*****".repeat(50));
            console.log("Response Time  ---> ", responseTime, "ms", '\n');
            console.log("Request URL :", '\n\n', response.url(), '\n');
            console.log("Request Body :", '\n\n', requestBody, '\n');
            console.log("Response Body :", '\n\n', JSON.parse(responseBody), '\n');
        })

        return JSON.parse(responseBody)
    }

    async call_PostMethod_With_400_StatusCode(endpoint: string, requestBody: any) {
        let response: APIResponse
        let responseTime: number
        let responseBody = ""
        await test.step("Calling the API", async () => {
            const beforeCallTime: any = new Date();
            response = await this.request.post(endpoint, {
                data: requestBody, headers: {
                    "x-api-key": "tK503cR23o8YTvXhNoDNo7kQf5sQdbXP8qbqkBeQ"
                }
            })
            const afterCallTime: any = new Date();
            responseTime = (afterCallTime - beforeCallTime)
        })
        await test.step("Response Status Code Validation", async () => {
            expect.soft(response.status()).toEqual(400)
        })
        await test.step("Response status and msg field Validation", async () => {
            responseBody = await response.text()
        })
        await test.step("Test Report Log", async () => {
            console.log("*****".repeat(50));
            console.log("Response Time  ---> ", responseTime, "ms", '\n');
            console.log("Request URL :", '\n\n', response.url(), '\n');
            console.log("Response Body :", '\n\n', responseBody, '\n');
        })

        return JSON.parse(responseBody)
    }
}  