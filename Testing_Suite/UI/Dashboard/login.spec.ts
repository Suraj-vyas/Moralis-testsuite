import { test, Page, expect } from "@playwright/test"
import { loginPage } from "../../../pageObject/UI/adminDashboard/loginPage"
import { app } from "../../../pageObject/UI/App"
import * as testData from "../../../data/login-data.json"
import { appendFileSync } from "fs"

let App: app

test.beforeEach(async ({ page }) => {
    App = new app(page)
})

test.describe.configure({ mode: 'serial' });

test.describe('Positive Scenario', async () => {

    test.use({ storageState: "libs/auth.json" })

    test('TC1_User should be able to Login to Dashboard with Valid credentials', { tag: '@Positive' }, async () => {
        await App.webPage.NavigateToUrl(testData.MoralisDashboard.url)
        // await App.loginPage.login(testData.MoralisDashboard.validUsername, testData.MoralisDashboard.validPassword)
        // console.log(await App.loginPage.isUserOnDashboardPage());
        await App.loginPage.isUserOnDashboardPage(true)

    })
})


test.describe('Negative Scenario', async () => {

    test('TC2_User should NOT be able to Login to Dashboard with InValid username', { tag: '@Negative' }, async () => {

        await App.webPage.NavigateToUrl(testData.MoralisDashboard.url)
        await App.loginPage.login(testData.MoralisDashboard.inValidUsername, testData.MoralisDashboard.validPassword)
        await App.loginPage.isUserOnDashboardPage(false)
    })

    test('TC3_User should NOT be able to Login to Dashboard with InValid password', { tag: '@Negative' }, async () => {
        await App.webPage.NavigateToUrl(testData.MoralisDashboard.url)
        await App.loginPage.login(testData.MoralisDashboard.validUsername, testData.MoralisDashboard.inValidPassword)
        await App.loginPage.isUserOnDashboardPage(false)
    })

    test('TC4_User should NOT be able to Login to Dashboard with InValid credentials', { tag: '@Negative' }, async () => {
        await App.webPage.NavigateToUrl(testData.MoralisDashboard.url)
        await App.loginPage.login(testData.MoralisDashboard.inValidUsername, testData.MoralisDashboard.inValidPassword)
        await App.loginPage.isUserOnDashboardPage(false)
    })

    test('TC5_User should NOT be able to Login to Dashboard with interchange credentials', { tag: '@Negative' }, async () => {
        await App.webPage.NavigateToUrl(testData.MoralisDashboard.url)
        await App.loginPage.login(testData.MoralisDashboard.validPassword, testData.MoralisDashboard.validUsername)
        await App.loginPage.isUserOnDashboardPage(false)
    })


    test('TC6_User should NOT be able to Login to Dashboard with blank credentials', { tag: '@Negative' }, async () => {
        await App.webPage.NavigateToUrl(testData.MoralisDashboard.url)
        await App.loginPage.login("", "")
        await App.loginPage.isUserOnDashboardPage(false)
    })
})

