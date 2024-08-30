// abc.ts
import { Page } from "@playwright/test";

// Utility function to capture a screenshot
export async function takeScreenshot(page: Page, actionName: string) {
    await page.screenshot({ path: `screenshots/${actionName}.png` });
}
