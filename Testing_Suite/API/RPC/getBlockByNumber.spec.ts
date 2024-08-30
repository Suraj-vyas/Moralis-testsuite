import test, { expect, request } from "@playwright/test";
import { api } from "../../../pageObject/API/API";
import dotenv from 'dotenv'
import { schemaValidation } from "../../../libs/schemaValidation";
import * as dataFile from '../../../data/API/RPC/blockNumber/eth_getBlockByNumber.json'
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

    test('TC1_ETH getBlockByNumber', { tag: '@Positive', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "id": Testdata.Validid, "method": Testdata.Validmethod, "params": Testdata.Validparams };
        const responseBody = await API.post.call_PostMethod_With_200_StatusCode(Endpoint, requestBody);

        test.step('Response Body Validation', async () => {
            expect(responseBody).toHaveProperty('result')
            expect(responseBody.id).toBe(requestBody.id)
            expect(responseBody.jsonrpc).toBe(requestBody.jsonrpc)
            expect(responseBody.result).toHaveProperty('hash')
            expect(responseBody.result).toHaveProperty('parentHash')
            expect(responseBody.result).toHaveProperty('transactions')
        })
    })

    test('TC2_ETH getBlockByNumber', { tag: '@Positive', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "id": Testdata.Validid, "method": Testdata.Validmethod, "params": Testdata.Validparams2 };
        const responseBody = await API.post.call_PostMethod_With_200_StatusCode(Endpoint, requestBody);
        test.step('Response Body Validation', async () => {
            expect(responseBody).toHaveProperty('result')
            expect(responseBody.id).toBe(requestBody.id)
            expect(responseBody.jsonrpc).toBe(requestBody.jsonrpc)
            expect(responseBody.result).toHaveProperty('hash')
            expect(responseBody.result).toHaveProperty('parentHash')
            expect(responseBody.result).toHaveProperty('transactions')
        })
    })


    test('TC3_ETH getBlockByNumber', { tag: '@Positive', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "id": Testdata.Validid, "method": Testdata.Validmethod, "params": Testdata.Validparams3 };
        const responseBody = await API.post.call_PostMethod_With_200_StatusCode(Endpoint, requestBody);

        test.step('Response Body Validation', async () => {
            expect(responseBody).toHaveProperty('result')
            expect(responseBody.id).toBe(requestBody.id)
            expect(responseBody.jsonrpc).toBe(requestBody.jsonrpc)
            expect(responseBody.result).toHaveProperty('hash')
            expect(responseBody.result).toHaveProperty('parentHash')
            expect(responseBody.result).toHaveProperty('transactions')
        })
    })

    test('TC4_ETH getBlockByNumber', { tag: '@Positive', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "id": Testdata.Validid, "method": Testdata.Validmethod, "params": Testdata.Validparams4 };
        const responseBody = await API.post.call_PostMethod_With_200_StatusCode(Endpoint, requestBody);

        test.step('Response Body Validation', async () => {
            expect(responseBody).toHaveProperty('result')
            expect(responseBody.id).toBe(requestBody.id)
            expect(responseBody.jsonrpc).toBe(requestBody.jsonrpc)
            expect(responseBody.result).toHaveProperty('hash')
            expect(responseBody.result).toHaveProperty('parentHash')
            expect(responseBody.result).toHaveProperty('transactions')
        })
    })
})


test.describe('Negative Scenario', async () => {


    test('TC5_ETH getBlockByNumber_InvalidParam-params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "id": Testdata.Validid, "method": Testdata.Validmethod, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC6_ETH getBlockByNumber_WithoutParam-params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "id": Testdata.Validid, "method": Testdata.Validmethod };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC7_ETH getBlockByNumber_InvalidParam-method', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "id": Testdata.Validid, "method": Testdata.InValidmethod, "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC8_ETH getBlockByNumber_InvalidParam-method,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "id": Testdata.Validid, "method": Testdata.InValidmethod, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC9_ETH getBlockByNumber_InvalidParam-method_WithoutParam-params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "id": Testdata.Validid, "method": Testdata.InValidmethod };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC10_ETH getBlockByNumber_WithoutParam-method', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "id": Testdata.Validid, "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC11_ETH getBlockByNumber_InvalidParam-id,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "id": Testdata.InValidid, "method": Testdata.Validmethod, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC12_ETH getBlockByNumber_InvalidParam-id_WithoutParam-params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "id": Testdata.InValidid, "method": Testdata.Validmethod };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC13_ETH getBlockByNumber_InvalidParam-id,method', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "id": Testdata.InValidid, "method": Testdata.InValidmethod, "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC14_ETH getBlockByNumber_InvalidParam-id,method,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "id": Testdata.InValidid, "method": Testdata.InValidmethod, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC15_ETH getBlockByNumber_InvalidParam-id,method_WithoutParam-params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "id": Testdata.InValidid, "method": Testdata.InValidmethod };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC16_ETH getBlockByNumber_InvalidParam-id_WithoutParam-method', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "id": Testdata.InValidid, "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC17_ETH getBlockByNumber_InvalidParam-id,params_WithoutParam-method', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "id": Testdata.InValidid, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC18_ETH getBlockByNumber_InvalidParam-id_WithoutParam-method,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "id": Testdata.InValidid };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC19_ETH getBlockByNumber_WithoutParam-id', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "method": Testdata.Validmethod, "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC20_ETH getBlockByNumber_InvalidParam-params_WithoutParam-id', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "method": Testdata.Validmethod, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC21_ETH getBlockByNumber_WithoutParam-id,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "method": Testdata.Validmethod };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC22_ETH getBlockByNumber_InvalidParam-method_WithoutParam-id', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "method": Testdata.InValidmethod, "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC23_ETH getBlockByNumber_InvalidParam-method,params_WithoutParam-id', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "method": Testdata.InValidmethod, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC24_ETH getBlockByNumber_InvalidParam-method_WithoutParam-id,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "method": Testdata.InValidmethod };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC25_ETH getBlockByNumber_WithoutParam-id,method', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC26_ETH getBlockByNumber_InvalidParam-params_WithoutParam-id,method', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC27_ETH getBlockByNumber_WithoutParam-id,method,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC28_ETH getBlockByNumber_InvalidParam-jsonrpc', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.InValidjsonrpc, "id": Testdata.Validid, "method": Testdata.Validmethod, "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC29_ETH getBlockByNumber_InvalidParam-jsonrpc,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.InValidjsonrpc, "id": Testdata.Validid, "method": Testdata.Validmethod, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC30_ETH getBlockByNumber_InvalidParam-jsonrpc_WithoutParam-params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.InValidjsonrpc, "id": Testdata.Validid, "method": Testdata.Validmethod };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC31_ETH getBlockByNumber_InvalidParam-jsonrpc,method', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.InValidjsonrpc, "id": Testdata.Validid, "method": Testdata.InValidmethod, "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC32_ETH getBlockByNumber_InvalidParam-jsonrpc,method,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.InValidjsonrpc, "id": Testdata.Validid, "method": Testdata.InValidmethod, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC33_ETH getBlockByNumber_InvalidParam-jsonrpc,method_WithoutParam-params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.InValidjsonrpc, "id": Testdata.Validid, "method": Testdata.InValidmethod };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC34_ETH getBlockByNumber_InvalidParam-jsonrpc_WithoutParam-method', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.InValidjsonrpc, "id": Testdata.Validid, "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC35_ETH getBlockByNumber_InvalidParam-jsonrpc,params_WithoutParam-method', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.InValidjsonrpc, "id": Testdata.Validid, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC36_ETH getBlockByNumber_InvalidParam-jsonrpc_WithoutParam-method,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.InValidjsonrpc, "id": Testdata.Validid };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC37_ETH getBlockByNumber_InvalidParam-jsonrpc,id', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.InValidjsonrpc, "id": Testdata.InValidid, "method": Testdata.Validmethod, "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC38_ETH getBlockByNumber_InvalidParam-jsonrpc,id,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.InValidjsonrpc, "id": Testdata.InValidid, "method": Testdata.Validmethod, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC39_ETH getBlockByNumber_InvalidParam-jsonrpc,id_WithoutParam-params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.InValidjsonrpc, "id": Testdata.InValidid, "method": Testdata.Validmethod };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC40_ETH getBlockByNumber_InvalidParam-jsonrpc,id,method', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.InValidjsonrpc, "id": Testdata.InValidid, "method": Testdata.InValidmethod, "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC41_ETH getBlockByNumber_InvalidParam-jsonrpc,id,method,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.InValidjsonrpc, "id": Testdata.InValidid, "method": Testdata.InValidmethod, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC42_ETH getBlockByNumber_InvalidParam-jsonrpc,id,method_WithoutParam-params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.InValidjsonrpc, "id": Testdata.InValidid, "method": Testdata.InValidmethod };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC43_ETH getBlockByNumber_InvalidParam-jsonrpc,id_WithoutParam-method', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.InValidjsonrpc, "id": Testdata.InValidid, "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC44_ETH getBlockByNumber_InvalidParam-jsonrpc,id,params_WithoutParam-method', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.InValidjsonrpc, "id": Testdata.InValidid, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC45_ETH getBlockByNumber_InvalidParam-jsonrpc,id_WithoutParam-method,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.InValidjsonrpc, "id": Testdata.InValidid };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC46_ETH getBlockByNumber_InvalidParam-jsonrpc_WithoutParam-id', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.InValidjsonrpc, "method": Testdata.Validmethod, "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC47_ETH getBlockByNumber_InvalidParam-jsonrpc,params_WithoutParam-id', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.InValidjsonrpc, "method": Testdata.Validmethod, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC48_ETH getBlockByNumber_InvalidParam-jsonrpc_WithoutParam-id,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.InValidjsonrpc, "method": Testdata.Validmethod };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC49_ETH getBlockByNumber_InvalidParam-jsonrpc,method_WithoutParam-id', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.InValidjsonrpc, "method": Testdata.InValidmethod, "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC50_ETH getBlockByNumber_InvalidParam-jsonrpc,method,params_WithoutParam-id', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.InValidjsonrpc, "method": Testdata.InValidmethod, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC51_ETH getBlockByNumber_InvalidParam-jsonrpc,method_WithoutParam-id,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.InValidjsonrpc, "method": Testdata.InValidmethod };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC52_ETH getBlockByNumber_InvalidParam-jsonrpc_WithoutParam-id,method', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.InValidjsonrpc, "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC53_ETH getBlockByNumber_InvalidParam-jsonrpc,params_WithoutParam-id,method', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.InValidjsonrpc, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC54_ETH getBlockByNumber_InvalidParam-jsonrpc_WithoutParam-id,method,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.InValidjsonrpc };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC55_ETH getBlockByNumber_WithoutParam-jsonrpc', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "id": Testdata.Validid, "method": Testdata.Validmethod, "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC56_ETH getBlockByNumber_InvalidParam-params_WithoutParam-jsonrpc', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "id": Testdata.Validid, "method": Testdata.Validmethod, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC57_ETH getBlockByNumber_WithoutParam-jsonrpc,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "id": Testdata.Validid, "method": Testdata.Validmethod };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC58_ETH getBlockByNumber_InvalidParam-method_WithoutParam-jsonrpc', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "id": Testdata.Validid, "method": Testdata.InValidmethod, "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC59_ETH getBlockByNumber_InvalidParam-method,params_WithoutParam-jsonrpc', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "id": Testdata.Validid, "method": Testdata.InValidmethod, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC60_ETH getBlockByNumber_InvalidParam-method_WithoutParam-jsonrpc,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "id": Testdata.Validid, "method": Testdata.InValidmethod };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC61_ETH getBlockByNumber_WithoutParam-jsonrpc,method', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "id": Testdata.Validid, "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC62_ETH getBlockByNumber_InvalidParam-params_WithoutParam-jsonrpc,method', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "id": Testdata.Validid, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC63_ETH getBlockByNumber_WithoutParam-jsonrpc,method,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "id": Testdata.Validid };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC64_ETH getBlockByNumber_InvalidParam-id_WithoutParam-jsonrpc', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "id": Testdata.InValidid, "method": Testdata.Validmethod, "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC65_ETH getBlockByNumber_InvalidParam-id,params_WithoutParam-jsonrpc', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "id": Testdata.InValidid, "method": Testdata.Validmethod, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC66_ETH getBlockByNumber_InvalidParam-id_WithoutParam-jsonrpc,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "id": Testdata.InValidid, "method": Testdata.Validmethod };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC67_ETH getBlockByNumber_InvalidParam-id,method_WithoutParam-jsonrpc', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "id": Testdata.InValidid, "method": Testdata.InValidmethod, "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC68_ETH getBlockByNumber_InvalidParam-id,method,params_WithoutParam-jsonrpc', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "id": Testdata.InValidid, "method": Testdata.InValidmethod, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC69_ETH getBlockByNumber_InvalidParam-id,method_WithoutParam-jsonrpc,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "id": Testdata.InValidid, "method": Testdata.InValidmethod };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC70_ETH getBlockByNumber_InvalidParam-id_WithoutParam-jsonrpc,method', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "id": Testdata.InValidid, "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC71_ETH getBlockByNumber_InvalidParam-id,params_WithoutParam-jsonrpc,method', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "id": Testdata.InValidid, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC72_ETH getBlockByNumber_InvalidParam-id_WithoutParam-jsonrpc,method,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "id": Testdata.InValidid };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC73_ETH getBlockByNumber_WithoutParam-jsonrpc,id', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "method": Testdata.Validmethod, "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC74_ETH getBlockByNumber_InvalidParam-params_WithoutParam-jsonrpc,id', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "method": Testdata.Validmethod, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC75_ETH getBlockByNumber_WithoutParam-jsonrpc,id,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "method": Testdata.Validmethod };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC76_ETH getBlockByNumber_InvalidParam-method_WithoutParam-jsonrpc,id', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "method": Testdata.InValidmethod, "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC77_ETH getBlockByNumber_InvalidParam-method,params_WithoutParam-jsonrpc,id', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "method": Testdata.InValidmethod, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC78_ETH getBlockByNumber_InvalidParam-method_WithoutParam-jsonrpc,id,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "method": Testdata.InValidmethod };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC79_ETH getBlockByNumber_WithoutParam-jsonrpc,id,method', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC80_ETH getBlockByNumber_InvalidParam-params_WithoutParam-jsonrpc,id,method', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC81_ETH getBlockByNumber_WithoutParam-jsonrpc,id,method,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = {};
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC82_ETH getBlockByNumber_InvalidParam-params_WithoutParam-method', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "id": Testdata.Validid, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC83_ETH getBlockByNumber_WithoutParam-method,params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "id": Testdata.Validid };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC84_ETH getBlockByNumber_InvalidParam-id', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "jsonrpc": Testdata.Validjsonrpc, "id": Testdata.InValidid, "method": Testdata.Validmethod, "params": Testdata.Validparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
})
