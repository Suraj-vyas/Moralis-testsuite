import test, { expect, request } from "@playwright/test";
import { api } from "../../../pageObject/API/API";
import dotenv from 'dotenv'
import * as dataFile from '../../../data/API/Web3Data/eth_getWalletNFTs.json'
dotenv.config()

var API: api
var requestBody: any
const Testdata = dataFile.eth_getWalletNFTs
const Endpoint = `https://deep-index.moralis.io/api/v2.2/${Testdata.Validaddress}/nft`

test.beforeEach(async ({ request }) => {
    API = new api(request)
})

test.describe('Positive Scenario', async () => {

    test('TC1_ETH getWalletNFTs', { tag: '@Positive', }, async ({ request }) => {
        requestBody = { "chain": Testdata.Validchain, "format": Testdata.Validformat, "exclude_spam": Testdata.Validexclude_spam };
        const responseBody = await API.get.call_GetMethod_With_200_StatusCode(Endpoint, requestBody);
        expect(responseBody).toHaveProperty('status')
        expect(responseBody).toHaveProperty('page')
        expect(responseBody).toHaveProperty('page_size')
        expect(responseBody).toHaveProperty('cursor')
        expect(responseBody).toHaveProperty('result')
    })
    test('TC2_ETH getWalletNFTs_WithoutParam-exclude_spam', { tag: '@Positive', }, async ({ request }) => {
        requestBody = { "chain": Testdata.Validchain, "format": Testdata.Validformat };

        const responseBody = await API.get.call_GetMethod_With_200_StatusCode(Endpoint, requestBody);
        expect(responseBody).toHaveProperty('status')
        expect(responseBody).toHaveProperty('page')
        expect(responseBody).toHaveProperty('page_size')
        expect(responseBody).toHaveProperty('cursor')
        expect(responseBody).toHaveProperty('result')
    })
    test('TC3_ETH getWalletNFTs_WithoutParam-chain,exclude_spam', { tag: '@Positive', }, async ({ request }) => {
        requestBody = { "format": Testdata.Validformat };
        const responseBody = await API.get.call_GetMethod_With_200_StatusCode(Endpoint, requestBody);
        expect(responseBody).toHaveProperty('status')
        expect(responseBody).toHaveProperty('page')
        expect(responseBody).toHaveProperty('page_size')
        expect(responseBody).toHaveProperty('cursor')
        expect(responseBody).toHaveProperty('result')
    })
    test('TC4_ETH getWalletNFTs_WithoutParam-format', { tag: '@Positive', }, async ({ request }) => {
        requestBody = { "chain": Testdata.Validchain, "exclude_spam": Testdata.Validexclude_spam };
        const responseBody = await API.get.call_GetMethod_With_200_StatusCode(Endpoint, requestBody);
        expect(responseBody).toHaveProperty('status')
        expect(responseBody).toHaveProperty('page')
        expect(responseBody).toHaveProperty('page_size')
        expect(responseBody).toHaveProperty('cursor')
        expect(responseBody).toHaveProperty('result')

    })
    test('TC5_ETH getWalletNFTs_WithoutParam-chain,format', { tag: '@Positive', }, async ({ request }) => {
        requestBody = { "exclude_spam": Testdata.Validexclude_spam };
        const responseBody = await API.get.call_GetMethod_With_200_StatusCode(Endpoint, requestBody);
        expect(responseBody).toHaveProperty('status')
        expect(responseBody).toHaveProperty('page')
        expect(responseBody).toHaveProperty('page_size')
        expect(responseBody).toHaveProperty('cursor')
        expect(responseBody).toHaveProperty('result')

    })
    test('TC6_ETH getWalletNFTs_WithoutParam-chain,format,exclude_spam', { tag: '@Positive', }, async ({ request }) => {
        requestBody = {};
        const responseBody = await API.get.call_GetMethod_With_200_StatusCode(Endpoint, requestBody);
        expect(responseBody).toHaveProperty('status')
        expect(responseBody).toHaveProperty('page')
        expect(responseBody).toHaveProperty('page_size')
        expect(responseBody).toHaveProperty('cursor')
        expect(responseBody).toHaveProperty('result')

    })
    test('TC7_ETH getWalletNFTs_WithoutParam-format,exclude_spam', { tag: '@Positive', }, async ({ request }) => {
        requestBody = { "chain": Testdata.Validchain };
        const responseBody = await API.get.call_GetMethod_With_200_StatusCode(Endpoint, requestBody);
        expect(responseBody).toHaveProperty('status')
        expect(responseBody).toHaveProperty('page')
        expect(responseBody).toHaveProperty('page_size')
        expect(responseBody).toHaveProperty('cursor')
        expect(responseBody).toHaveProperty('result')

    })
    test('TC8_ETH getWalletNFTs_WithoutParam-chain', { tag: '@Positive', }, async ({ request }) => {
        requestBody = { "format": Testdata.Validformat, "exclude_spam": Testdata.Validexclude_spam };
        const responseBody = await API.get.call_GetMethod_With_200_StatusCode(Endpoint, requestBody);
        expect(responseBody).toHaveProperty('status')
        expect(responseBody).toHaveProperty('page')
        expect(responseBody).toHaveProperty('page_size')
        expect(responseBody).toHaveProperty('cursor')
        expect(responseBody).toHaveProperty('result')
    })
})

test.describe('Negative Scenario', async () => {
    test('TC9_ETH getWalletNFTs_InvalidParam-exclude_spam_WithoutParam-format', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "chain": Testdata.Validchain, "exclude_spam": Testdata.InValidexclude_spam };
        await API.get.call_GetMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC10_ETH getWalletNFTs_InvalidParam-chain', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "chain": Testdata.InValidchain, "format": Testdata.Validformat, "exclude_spam": Testdata.Validexclude_spam };
        await API.get.call_GetMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC11_ETH getWalletNFTs_InvalidParam-chain,exclude_spam', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "chain": Testdata.InValidchain, "format": Testdata.Validformat, "exclude_spam": Testdata.InValidexclude_spam };
        await API.get.call_GetMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC12_ETH getWalletNFTs_InvalidParam-chain_WithoutParam-exclude_spam', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "chain": Testdata.InValidchain, "format": Testdata.Validformat };
        await API.get.call_GetMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC13_ETH getWalletNFTs_InvalidParam-chain,format', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "chain": Testdata.InValidchain, "format": Testdata.InValidformat, "exclude_spam": Testdata.Validexclude_spam };
        await API.get.call_GetMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC14_ETH getWalletNFTs_InvalidParam-chain,format,exclude_spam', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "chain": Testdata.InValidchain, "format": Testdata.InValidformat, "exclude_spam": Testdata.InValidexclude_spam };
        await API.get.call_GetMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC15_ETH getWalletNFTs_InvalidParam-chain,format_WithoutParam-exclude_spam', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "chain": Testdata.InValidchain, "format": Testdata.InValidformat };
        await API.get.call_GetMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC16_ETH getWalletNFTs_InvalidParam-chain_WithoutParam-format', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "chain": Testdata.InValidchain, "exclude_spam": Testdata.Validexclude_spam };
        await API.get.call_GetMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC17_ETH getWalletNFTs_InvalidParam-chain,exclude_spam_WithoutParam-format', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "chain": Testdata.InValidchain, "exclude_spam": Testdata.InValidexclude_spam };
        await API.get.call_GetMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC18_ETH getWalletNFTs_InvalidParam-chain_WithoutParam-format,exclude_spam', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "chain": Testdata.InValidchain };
        await API.get.call_GetMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC19_ETH getWalletNFTs_InvalidParam-format_WithoutParam-exclude_spam', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "chain": Testdata.Validchain, "format": Testdata.InValidformat };
        await API.get.call_GetMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC20_ETH getWalletNFTs_InvalidParam-exclude_spam_WithoutParam-chain', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "format": Testdata.Validformat, "exclude_spam": Testdata.InValidexclude_spam };
        await API.get.call_GetMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC21_ETH getWalletNFTs_InvalidParam-format,exclude_spam', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "chain": Testdata.Validchain, "format": Testdata.InValidformat, "exclude_spam": Testdata.InValidexclude_spam };
        await API.get.call_GetMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC22_ETH getWalletNFTs_InvalidParam-format_WithoutParam-chain', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "format": Testdata.InValidformat, "exclude_spam": Testdata.Validexclude_spam };
        await API.get.call_GetMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC23_ETH getWalletNFTs_InvalidParam-format,exclude_spam_WithoutParam-chain', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "format": Testdata.InValidformat, "exclude_spam": Testdata.InValidexclude_spam };
        await API.get.call_GetMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC24_ETH getWalletNFTs_InvalidParam-format_WithoutParam-chain,exclude_spam', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "format": Testdata.InValidformat };
        await API.get.call_GetMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC25_ETH getWalletNFTs_InvalidParam-format', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "chain": Testdata.Validchain, "format": Testdata.InValidformat, "exclude_spam": Testdata.Validexclude_spam };
        await API.get.call_GetMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC26_ETH getWalletNFTs_InvalidParam-exclude_spam_WithoutParam-chain,format', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "exclude_spam": Testdata.InValidexclude_spam };
        await API.get.call_GetMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC27_ETH getWalletNFTs_InvalidParam-exclude_spam', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "chain": Testdata.Validchain, "format": Testdata.Validformat, "exclude_spam": Testdata.InValidexclude_spam };
        await API.get.call_GetMethod_With_400_StatusCode(Endpoint, requestBody);
    })
    test('TC28_ETH getWalletNFTs_InvalidParam-Useraddress', { tag: '@Negative', }, async ({ request }) => {
        requestBody = { "chain": Testdata.Validchain, "format": Testdata.Validformat, "exclude_spam": Testdata.Validexclude_spam };
        await API.get.call_GetMethod_With_400_StatusCode(`https://deep-index.moralis.io/api/v2.2/${Testdata.InValidaddress}/nft`, requestBody);
    })
})