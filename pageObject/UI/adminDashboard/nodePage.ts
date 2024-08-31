import { Page, expect } from "@playwright/test";
import { takeScreenshot } from "../../../libs/screenShot";

export class nodePage {

    protected readonly page: Page

    //Locators of the /Node page of Moralis Admin
    private readonly nodePage_loc = '//h1[@data-testid="test-typography" and contains(text(),"Nodes")]'
    private readonly createNEWNode_btn_loc = '//button[@type="button" and contains(text(),"Create a New Node")]'
    private readonly TwoNodes_loc = '//p[text()="2 Nodes"]'
    private readonly nodesPage_loc = '//p[text()="2 Nodes"]/..'
    private readonly lastNodeDlt_btn_loc = '(//button[@data-testid="mui-button-outline"])[last()]'
    private readonly lastNode_Dltbtn_loc = '(//button[@data-testid="mui-button-destructive"])[last()]'
    private readonly createNode_btn_loc = '//button[@data-testid="mui-button-primary" and text()="Create Node"]'
    private readonly protocol_DD_ID = '#select-protoccol'
    private readonly network_DD_ID = '#select-network'
    // private readonly nodePage_loc = '//h1[@data-testid="test-typography" and contains(text(),"Nodes")]'
    // private readonly nodePage_loc = '//h1[@data-testid="test-typography" and contains(text(),"Nodes")]'



    constructor(page: Page) {
        this.page = page
    }


    async isUserOnNodePage(flag: boolean) {
        if (flag)
            await expect(this.page.locator(this.nodePage_loc).first()).toBeVisible()
        else
            await expect(this.page.locator(this.nodePage_loc).first()).not.toBeVisible()

        await takeScreenshot(this.page, "Node Page")

    }

    async nodeSetup(protocol: string, network: string) {

        //Create node bttn
        await this.page.locator(this.createNEWNode_btn_loc).waitFor({ state: "visible" })
        await takeScreenshot(this.page, "Creae New Node")

        try {
            await expect(this.page.locator(this.TwoNodes_loc).first()).toBeVisible()
            await this.page.locator(this.TwoNodes_loc).first().click()
            await takeScreenshot(this.page, "Nodes Detail Page")
            await expect(this.page.locator(this.lastNodeDlt_btn_loc).first()).toBeVisible()
            await this.page.locator(this.lastNodeDlt_btn_loc).click()
            await takeScreenshot(this.page, "Delete Last node")
            await expect(this.page.locator(this.lastNode_Dltbtn_loc).first()).toBeVisible()
            await this.page.locator(this.lastNode_Dltbtn_loc).click()
            await this.page.locator(this.createNEWNode_btn_loc).waitFor({ state: "visible" })
            await this.page.waitForTimeout(5000)
        }
        catch {

        }
        await this.page.locator(this.createNEWNode_btn_loc).click()
        await takeScreenshot(this.page, "Create NEW node")
        //Dropdown value selection
        // await expect(this.page.locator(this.protocol_DD_ID).first()).toBeVisible()
        await this.page.locator(this.protocol_DD_ID).selectOption({ value: protocol })
        await takeScreenshot(this.page, "Protocol dropdown")
        await this.page.locator(this.network_DD_ID).selectOption({ label: network })
        await takeScreenshot(this.page, "Network dropdown")
        await expect(this.page.locator(this.createNode_btn_loc).first()).toBeVisible()
        await this.page.locator(this.createNode_btn_loc).click()
        await this.page.locator(this.createNEWNode_btn_loc).waitFor({ state: "visible" })
        await takeScreenshot(this.page, "Create Node")
    }
}
