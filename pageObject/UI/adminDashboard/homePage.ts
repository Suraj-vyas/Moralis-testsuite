import { Page, expect } from "@playwright/test";

export class homePage {

    protected readonly page: Page
    constructor(page: Page) {
        this.page = page
    }

    async isUserOnNodePage() {

        expect(await this.page.locator('//h1[@data-testid="test-typography" and contains(text(),"Nodes")]').isVisible()).toBeTruthy()

    }

}    