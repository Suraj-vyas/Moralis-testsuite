import { Page, expect } from "@playwright/test";

export class nodePage {

    protected readonly page: Page

    //Locators of the /Node page of Moralis Admin
    private readonly nodePage_loc = '//h1[@data-testid="test-typography" and contains(text(),"Nodes")]'



    constructor(page: Page) {
        this.page = page
    }


    async isUserOnNodePage() {

        return (await this.page.locator(this.nodePage_loc).isVisible())

    }

}
