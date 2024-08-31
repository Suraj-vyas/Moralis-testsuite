import test from '@playwright/test'
import dotenv from 'dotenv'
dotenv.config()

test.skip('StorageSession-Execute Manual', async ({ page }) => {
    test.setTimeout(300000) // Max time is 5 min
    await page.goto("https://admin.moralis.io/")
    await page.locator('//span[@title="Email"]').fill(`${process.env.MORALIS_UN}`)
    await page.locator('//span[@title="Password"]').fill(`${process.env.MORALIS_PW}`)
    await page.locator('//span[@data-testid="test-typography" and contains(text(),"Welcome")]').waitFor({ timeout: 120000 }) // Max wait time is 2 min
    await page.context().storageState({ path: 'libs/auth.json' })
})