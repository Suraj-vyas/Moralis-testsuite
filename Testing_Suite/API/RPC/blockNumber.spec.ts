import test, { expect, request } from "@playwright/test";
import { api } from "../../../pageObject/API/API";
import dotenv from 'dotenv'
import { schemaValidation } from "../../../libs/schemaValidation";
import * as dataFile from '../../../data/API/RPC/blockNumber/eth_blockNumber.json'
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
            "jsonrpc": Testdata.Validjsonrpc,
            "id": Testdata.Validid,
            "method": Testdata.Validmethod
        };
        const responseBody = await API.post.call_PostMethod_With_200_StatusCode(Endpoint, requestBody);
        verify.Schema(responseBody, schema);
        expect(responseBody).toHaveProperty('result')
        const latestBlockNumber = parseInt(responseBody.result, 16)
        expect(responseBody.id).toBe(requestBody.id)
        expect(responseBody.jsonrpc).toBe(requestBody.jsonrpc)
        // console.log(latestBlockNumber);
        expect(latestBlockNumber).toBeGreaterThanOrEqual(0)
    })
})


test.describe('Negative Scenario', async () => {

    test('TC2_ETH blockNumber_InvalidParam-method', {
        tag: '@Negative',
    }, async () => {
        requestBody = {
            "jsonrpc": Testdata.Validjsonrpc,
            "id": Testdata.Validid,
            "method": Testdata.InValidmethod
        };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC3_ETH blockNumber_WithoutParam-method', {
        tag: '@Negative',
    }, async () => {
        requestBody = {
            "jsonrpc": Testdata.Validjsonrpc,
            "id": Testdata.Validid
        };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC4_ETH blockNumber_InvalidParam-id', {
        tag: '@Negative',
    }, async () => {
        requestBody = {
            "jsonrpc": Testdata.Validjsonrpc,
            "id": Testdata.InValidid,
            "method": Testdata.Validmethod
        };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC5_ETH blockNumber_InvalidParam-id,method', {
        tag: '@Negative',
    }, async () => {
        requestBody = {
            "jsonrpc": Testdata.Validjsonrpc,
            "id": Testdata.InValidid,
            "method": Testdata.InValidmethod
        };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC6_ETH blockNumber_InvalidParam-id_WithoutParam-method', {
        tag: '@Negative',
    }, async () => {
        requestBody = {
            "jsonrpc": Testdata.Validjsonrpc,
            "id": Testdata.InValidid
        };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC7_ETH blockNumber_WithoutParam-id', {
        tag: '@Negative',
    }, async () => {
        requestBody = {
            "jsonrpc": Testdata.Validjsonrpc,
            "method": Testdata.Validmethod
        };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC8_ETH blockNumber_InvalidParam-method_WithoutParam-id', {
        tag: '@Negative',
    }, async () => {
        requestBody = {
            "jsonrpc": Testdata.Validjsonrpc,
            "method": Testdata.InValidmethod
        };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC9_ETH blockNumber_WithoutParam-id,method', {
        tag: '@Negative',
    }, async () => {
        requestBody = {
            "jsonrpc": Testdata.Validjsonrpc
        };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC10_ETH blockNumber_InvalidParam-jsonrpc', {
        tag: '@Negative',
    }, async () => {
        requestBody = {
            "jsonrpc": Testdata.InValidjsonrpc,
            "id": Testdata.Validid,
            "method": Testdata.Validmethod
        };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC11_ETH blockNumber_InvalidParam-jsonrpc,method', {
        tag: '@Negative',
    }, async () => {
        requestBody = {
            "jsonrpc": Testdata.InValidjsonrpc,
            "id": Testdata.Validid,
            "method": Testdata.InValidmethod
        };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC12_ETH blockNumber_InvalidParam-jsonrpc_WithoutParam-method', {
        tag: '@Negative',
    }, async () => {
        requestBody = {
            "jsonrpc": Testdata.InValidjsonrpc,
            "id": Testdata.Validid
        };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC13_ETH blockNumber_InvalidParam-jsonrpc,id', {
        tag: '@Negative',
    }, async () => {
        requestBody = {
            "jsonrpc": Testdata.InValidjsonrpc,
            "id": Testdata.InValidid,
            "method": Testdata.Validmethod
        };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC14_ETH blockNumber_InvalidParam-jsonrpc,id,method', {
        tag: '@Negative',
    }, async () => {
        requestBody = {
            "jsonrpc": Testdata.InValidjsonrpc,
            "id": Testdata.InValidid,
            "method": Testdata.InValidmethod
        };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC15_ETH blockNumber_InvalidParam-jsonrpc,id_WithoutParam-method', {
        tag: '@Negative',
    }, async () => {
        requestBody = {
            "jsonrpc": Testdata.InValidjsonrpc,
            "id": Testdata.InValidid
        };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC16_ETH blockNumber_InvalidParam-jsonrpc_WithoutParam-id', {
        tag: '@Negative',
    }, async () => {
        requestBody = {
            "jsonrpc": Testdata.InValidjsonrpc,
            "method": Testdata.Validmethod
        };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC17_ETH blockNumber_InvalidParam-jsonrpc,method_WithoutParam-id', {
        tag: '@Negative',
    }, async () => {
        requestBody = {
            "jsonrpc": Testdata.InValidjsonrpc,
            "method": Testdata.InValidmethod
        };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC18_ETH blockNumber_InvalidParam-jsonrpc_WithoutParam-id,method', {
        tag: '@Negative',
    }, async () => {
        requestBody = {
            "jsonrpc": Testdata.InValidjsonrpc
        };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC19_ETH blockNumber_WithoutParam-jsonrpc', {
        tag: '@Negative',
    }, async () => {
        requestBody = {
            "id": Testdata.Validid,
            "method": Testdata.Validmethod
        };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC20_ETH blockNumber_InvalidParam-method_WithoutParam-jsonrpc', {
        tag: '@Negative',
    }, async () => {
        requestBody = {
            "id": Testdata.Validid,
            "method": Testdata.InValidmethod
        };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC21_ETH blockNumber_WithoutParam-jsonrpc,method', {
        tag: '@Negative',
    }, async () => {
        requestBody = {
            "id": Testdata.Validid
        };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC22_ETH blockNumber_InvalidParam-id_WithoutParam-jsonrpc', {
        tag: '@Negative',
    }, async () => {
        requestBody = {
            "id": Testdata.InValidid,
            "method": Testdata.Validmethod
        };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC23_ETH blockNumber_InvalidParam-id,method_WithoutParam-jsonrpc', {
        tag: '@Negative',
    }, async () => {
        requestBody = {
            "id": Testdata.InValidid,
            "method": Testdata.InValidmethod
        };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC24_ETH blockNumber_InvalidParam-id_WithoutParam-jsonrpc,method', {
        tag: '@Negative',
    }, async () => {
        requestBody = {
            "id": Testdata.InValidid
        };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC25_ETH blockNumber_WithoutParam-jsonrpc,id', {
        tag: '@Negative',
    }, async () => {
        requestBody = {
            "method": Testdata.Validmethod
        };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC26_ETH blockNumber_InvalidParam-method_WithoutParam-jsonrpc,id', {
        tag: '@Negative',
    }, async () => {
        requestBody = {
            "method": Testdata.InValidmethod
        };
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC27_ETH blockNumber_WithoutParam-jsonrpc,id,method', {
        tag: '@Negative',
    }, async () => {
        requestBody = {};
        await API.post.call_PostMethod_With_400_StatusCode(Endpoint, requestBody);
    })
})
