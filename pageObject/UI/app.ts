import { Page } from "@playwright/test";
import { loginPage } from "./adminDashboard/loginPage";
import { homePage } from "./adminDashboard/homePage";
import { nodePage } from "./adminDashboard/nodePage";
import { resuableMethods } from "../../libs/reusableMethods";

export class app {
    protected readonly page: Page
    constructor(page: Page) {
        this.page = page
    }

    public get loginPage(): loginPage {
        return new loginPage(this.page)
    }
    public get homePage(): homePage {
        return new homePage(this.page)
    }
    public get nodePage(): nodePage {
        return new nodePage(this.page)
    }

    public get webPage(): resuableMethods {
        return new resuableMethods(this.page)
    }
}