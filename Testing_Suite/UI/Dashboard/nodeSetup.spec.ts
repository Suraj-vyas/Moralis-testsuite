import { test, Page, expect } from "@playwright/test"
import { loginPage } from "../../../pageObject/UI/adminDashboard/loginPage"
import { app } from "../../../pageObject/UI/App"
import * as testData from "../../../data/login-data.json"

let App: app

test.beforeEach(async ({ page }) => {
    App = new app(page)
})

test.describe.configure({ mode: 'parallel' });

test.describe('Positive Scenario', async () => {

    test.use({ storageState: "libs/auth.json" })

    test('TC1_User should be able to setup Nodes Via Dashboard ', { tag: '@Positive' }, async () => {
        await App.webPage.NavigateToUrl(testData.NodeSetup.url)
        // await App.loginPage.login(testData.MoralisDashboard.validUsername, testData.MoralisDashboard.validPassword)
        await App.nodePage.isUserOnNodePage(true)
        await App.nodePage.nodeSetup(testData.NodeSetup.protocol, testData.NodeSetup.network)
    })
})