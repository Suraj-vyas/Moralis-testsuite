import test, { expect, request } from "@playwright/test";
import { api } from "../../../pageObject/API/API";
import dotenv from 'dotenv'
import { schemaValidation } from "../../../libs/schemaValidation";
import * as dataFile from '../../../data/API/RPC/eth_blockNumber.json'
dotenv.config()

var API: api
var verify: schemaValidation
var requestBody: any
const Testdata = dataFile.eth_blockNumber
const Endpoint = `https://site1.moralis-nodes.com/eth/${process.env.ETH_Node_ID}`
const schema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Generated schema for Root",
    "type": "object",
    "properties": {
        "jsonrpc": {
            "type": "string"
        },
        "id": {
            "type": "number"
        },
        "result": {
            "type": "string"
        }
    },
    "required": [
        "jsonrpc",
        "id",
        "result"
    ]
}

test.beforeEach(async ({ request }) => {
    API = new api(request)
    verify = new schemaValidation()
})

test.describe('Positive Scenario', async () => {

    test('TC1_ETH blockNumber', {
        tag: '@Positive',
    }, async () => {
        requestBody = {
            "method": Testdata.Validmethod
        };
        const responseBody = await API.post.call_PostMethod_With_200_StatusCode(Endpoint, requestBody);
        verify.Schema(responseBody, schema);
        expect(responseBody).toHaveProperty('result')
        const latestBlockNumber = parseInt(responseBody.result, 16)
        // console.log(latestBlockNumber);
        expect(latestBlockNumber).toBeGreaterThanOrEqual(0)
    })
})


test.describe('Negative Scenario', async () => {

    test('TC2_ETH blockNumber_InvalidParam-method', {
        tag: '@Negative',
    }, async () => {
        requestBody = {
            "method": Testdata.InValidmethod
        };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC3_ETH blockNumber_WithoutParam-method', {
        tag: '@Negative',
    }, async () => {
        requestBody = {
        };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })

})
