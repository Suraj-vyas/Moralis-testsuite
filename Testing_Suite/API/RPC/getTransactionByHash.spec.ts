import test, { expect, request } from "@playwright/test";
import { api } from "../../../pageObject/API/API";
import dotenv from 'dotenv'
import * as dataFile from '../../../data/API/RPC/eth_getTransactionByHash.json'
dotenv.config()

var API: api
var requestBody: any
const Testdata = dataFile.eth_getTransactionByHash
const Endpoint = `https://site1.moralis-nodes.com/eth/${process.env.ETH_Node_ID}`

test.beforeEach(async ({ request }) => {
    API = new api(request)
})

test.describe('Positive Scenario', async () => {

    test('TC1_ETH getTransactionByHash', {
        tag: '@Positive',
    }, async () => {
        requestBody = {
            "method": Testdata.Validmethod, "params": Testdata.Validparams
        };
        const responseBody = await API.post.call_PostMethod_With_200_StatusCode(Endpoint, requestBody);
        expect(responseBody).toHaveProperty('result')
    })
})

test.describe('Negative Scenario', async () => {

    test('TC2_ETH getTransactionByHash_InvalidParam-params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "method": Testdata.Validmethod, "params": Testdata.InValidparams };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC3_ETH getTransactionByHash_WithoutParam-params', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "method": Testdata.Validmethod };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
})