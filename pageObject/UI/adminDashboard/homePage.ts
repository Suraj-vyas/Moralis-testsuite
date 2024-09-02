import { Page, expect } from "@playwright/test";

export class homePage {

    protected readonly page: Page
    protected readonly Nodes_Loc = '//h1[@data-testid="test-typography" and contains(text(),"Nodes")]'
    constructor(page: Page) {
        this.page = page
    }

    async isUserOnNodePage() {
        expect(await this.page.locator(this.Nodes_Loc).isVisible()).toBeTruthy()
    }

}    