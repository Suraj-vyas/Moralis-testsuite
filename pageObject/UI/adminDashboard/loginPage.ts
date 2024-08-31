import { Page, expect } from "@playwright/test";
import { decodeEncode } from "../../../libs/decodeEncode";
import { takeScreenshot } from "../../../libs/screenShot"

export class loginPage {
    protected readonly page: Page
    protected readonly dashPage_loc = '//span[@data-testid="test-typography" and contains(text(),"Welcome")]'

    constructor(page: Page) {
        this.page = page
    }
    async visit(path: string) {
        await this.page.goto(path)
    }

    async login(username: string, password: string) {
        const library = new decodeEncode();
        await this.page.locator('//span[@title="Email"]').fill(await library.encode(username))
        await takeScreenshot(this.page, "fill-email");
        await this.page.locator('//span[@title="Password"]').fill(await library.encode(password))
        await takeScreenshot(this.page, "fill-password");
        // await this.page.waitForTimeout(20000)
        // await this.page.context().storageState({ path: 'libs/auth.json' })

    }

    async isUserOnDashboardPage(flag: boolean) {
        if (flag)
            await expect(this.page.locator(this.dashPage_loc).first()).toBeVisible()
        else
            await expect(this.page.locator(this.dashPage_loc).first()).not.toBeVisible()
    }
} 