import test, { expect, request } from "@playwright/test";
import { api } from "../../../pageObject/API/API";
import dotenv from 'dotenv'
import { schemaValidation } from "../../../libs/schemaValidation";
import * as dataFile from '../../../data/API/RPC/eth_getBlockByNumber.json'
dotenv.config()

var API: api
var verify: schemaValidation
var requestBody: any
const Testdata = dataFile.eth_getBlockByNumber
const Endpoint = `https://site1.moralis-nodes.com/eth/${process.env.ETH_Node_ID}`

test.beforeEach(async ({ request }) => {
    API = new api(request)
    verify = new schemaValidation()
})

test.describe('Positive Scenario', async () => {

    test('TC1_ETH getBlockByNumber as Blocknumber without full txn', { tag: '@Positive', }, async ({ request }) => {
        requestBody = { "method": Testdata.Validmethod, "params": Testdata.Validparams };
        const responseBody = await API.post.call_PostMethod_With_200_StatusCode(Endpoint, requestBody);

        test.step('Response Body Validation', async () => {
            expect(responseBody).toHaveProperty('result')
            expect(responseBody.result).toHaveProperty('hash')
            expect(responseBody.result).toHaveProperty('parentHash')
            expect(responseBody.result).toHaveProperty('transactions')
        })
    })
    test('TC2_ETH getBlockByNumber as Blocknumber with full txn', { tag: '@Positive', }, async ({ request }) => {
        requestBody = { "method": Testdata.Validmethod, "params": Testdata.Validparams2 };
        const responseBody = await API.post.call_PostMethod_With_200_StatusCode(Endpoint, requestBody);
        test.step('Response Body Validation', async () => {
            expect(responseBody).toHaveProperty('result')
            expect(responseBody.result).toHaveProperty('hash')
            expect(responseBody.result).toHaveProperty('parentHash')
            expect(responseBody.result).toHaveProperty('transactions')
        })
    })
    test('TC3_ETH getBlockByNumber as latest without full txn', { tag: '@Positive', }, async ({ request }) => {
        requestBody = { "method": Testdata.Validmethod, "params": Testdata.Validparams3 };
        const responseBody = await API.post.call_PostMethod_With_200_StatusCode(Endpoint, requestBody);

        test.step('Response Body Validation', async () => {
            expect(responseBody).toHaveProperty('result')
            expect(responseBody.result).toHaveProperty('hash')
            expect(responseBody.result).toHaveProperty('parentHash')
            expect(responseBody.result).toHaveProperty('transactions')
        })
    })
    test('TC4_ETH getBlockByNumber as latest with full txn', { tag: '@Positive', }, async ({ request }) => {
        requestBody = { "method": Testdata.Validmethod, "params": Testdata.Validparams4 };
        const responseBody = await API.post.call_PostMethod_With_200_StatusCode(Endpoint, requestBody);

        test.step('Response Body Validation', async () => {
            expect(responseBody).toHaveProperty('result')
            expect(responseBody.result).toHaveProperty('hash')
            expect(responseBody.result).toHaveProperty('parentHash')
            expect(responseBody.result).toHaveProperty('transactions')
        })
    })
    test('TC5_ETH getBlockByNumber as earliest without full txn', { tag: '@Positive', }, async ({ request }) => {
        requestBody = { "method": Testdata.Validmethod, "params": Testdata.Validparams3 };
        const responseBody = await API.post.call_PostMethod_With_200_StatusCode(Endpoint, requestBody);

        test.step('Response Body Validation', async () => {
            expect(responseBody).toHaveProperty('result')
            expect(responseBody.result).toHaveProperty('hash')
            expect(responseBody.result).toHaveProperty('parentHash')
            expect(responseBody.result).toHaveProperty('transactions')
        })
    })
    test('TC6_ETH getBlockByNumber as earliest with full txn', { tag: '@Positive', }, async ({ request }) => {
        requestBody = { "method": Testdata.Validmethod, "params": Testdata.Validparams4 };
        const responseBody = await API.post.call_PostMethod_With_200_StatusCode(Endpoint, requestBody);

        test.step('Response Body Validation', async () => {
            expect(responseBody).toHaveProperty('result')
            expect(responseBody.result).toHaveProperty('hash')
            expect(responseBody.result).toHaveProperty('parentHash')
            expect(responseBody.result).toHaveProperty('transactions')
        })
    })
    test('TC7_ETH getBlockByNumber as pending without full txn', { tag: '@Positive', }, async ({ request }) => {
        requestBody = { "method": Testdata.Validmethod, "params": Testdata.Validparams3 };
        const responseBody = await API.post.call_PostMethod_With_200_StatusCode(Endpoint, requestBody);

        test.step('Response Body Validation', async () => {
            expect(responseBody).toHaveProperty('result')
            expect(responseBody.result).toHaveProperty('hash')
            expect(responseBody.result).toHaveProperty('parentHash')
            expect(responseBody.result).toHaveProperty('transactions')
        })
    })
    test('TC8_ETH getBlockByNumber as pending with full txn', { tag: '@Positive', }, async ({ request }) => {
        requestBody = { "method": Testdata.Validmethod, "params": Testdata.Validparams4 };
        const responseBody = await API.post.call_PostMethod_With_200_StatusCode(Endpoint, requestBody);

        test.step('Response Body Validation', async () => {
            expect(responseBody).toHaveProperty('result')
            expect(responseBody.result).toHaveProperty('hash')
            expect(responseBody.result).toHaveProperty('parentHash')
            expect(responseBody.result).toHaveProperty('transactions')
        })
    })
})

test.describe('Negative Scenario', async () => {

    test('TC9_ETH getBlockByNumber_InvalidParam-params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "method": Testdata.Validmethod, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC10_ETH getBlockByNumber_WithoutParam-params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "method": Testdata.Validmethod };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC11_ETH getBlockByNumber_InvalidParam-method', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "method": Testdata.InValidmethod, "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC12_ETH getBlockByNumber_WithoutParam-method', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC13_ETH getBlockByNumber_InvalidParam-method,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "method": Testdata.InValidmethod, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC14_ETH getBlockByNumber_InvalidParam-method_WithoutParam-params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "method": Testdata.InValidmethod };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC15_ETH getBlockByNumber_InvalidParam-params_WithoutParam-method', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC16_ETH getBlockByNumber_WithoutParam-method,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "id": Testdata.Validid };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
})
