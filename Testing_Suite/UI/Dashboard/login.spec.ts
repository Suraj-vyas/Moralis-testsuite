import { test, Page, expect } from "@playwright/test"
import { loginPage } from "../../../pageObject/UI/adminDashboard/loginPage"
import { app } from "../../../pageObject/UI/App"
import * as testData from "../../../data/login-data.json"

let App: app

test.beforeEach(async ({ page }) => {
    App = new app(page)
})

test.describe('Positive Scenario', async () => {

    test('User should be able to Login to Dashboard with Valid credentials', { tag: '@Positive' }, async () => {
        test.use({ storageState: "libs/auth.json" })
        await App.webPage.NavigateToUrl(testData.MoralisDashboard.url)
        await App.loginPage.login(testData.MoralisDashboard.validUsername, testData.MoralisDashboard.validPassword)
        expect(await App.nodePage.isUserOnNodePage()).toBeTruthy()
    })
})


test.describe('Negative Scenario', async () => {

    test('TC2_User should NOT be able to Login to Dashboard with InValid username', { tag: '@Negative' }, async () => {

        await App.webPage.NavigateToUrl(testData.MoralisDashboard.url)
        await App.loginPage.login(testData.MoralisDashboard.inValidUsername, testData.MoralisDashboard.validPassword)
        expect(await App.nodePage.isUserOnNodePage()).not.toBeTruthy()
    })

    test('TC3_User should NOT be able to Login to Dashboard with InValid password', { tag: '@Negative' }, async () => {
        await App.webPage.NavigateToUrl(testData.MoralisDashboard.url)
        await App.loginPage.login(testData.MoralisDashboard.validUsername, testData.MoralisDashboard.inValidPassword)
        expect(await App.nodePage.isUserOnNodePage()).not.toBeTruthy()
    })

    test('TC4_User should NOT be able to Login to Dashboard with InValid credentials', { tag: '@Negative' }, async () => {
        await App.webPage.NavigateToUrl(testData.MoralisDashboard.url)
        await App.loginPage.login(testData.MoralisDashboard.inValidUsername, testData.MoralisDashboard.inValidPassword)
        expect(await App.nodePage.isUserOnNodePage()).not.toBeTruthy()
    })

    test('TC5_User should NOT be able to Login to Dashboard with interchange credentials', { tag: '@Negative' }, async () => {
        await App.webPage.NavigateToUrl(testData.MoralisDashboard.url)
        await App.loginPage.login(testData.MoralisDashboard.validPassword, testData.MoralisDashboard.validUsername)
        expect(await App.nodePage.isUserOnNodePage()).not.toBeTruthy()
    })


    test('TC6_User should NOT be able to Login to Dashboard with blank credentials', { tag: '@Negative' }, async () => {
        await App.webPage.NavigateToUrl(testData.MoralisDashboard.url)
        await App.loginPage.login("", "")
        expect(await App.nodePage.isUserOnNodePage()).not.toBeTruthy()
    })
})
