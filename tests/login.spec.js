// @ts-check
import { test, expect } from "@playwright/test";


test('Login Test', async ({page}) => {

    await page.goto("instagram.com");

    await expect (page).toHaveTitle("Instagram")
    await expect (page).toHaveURL("instagram.com")

    await page.fill("Phone number, username, or email", "luthyqa@gmail.com");
    await page.fill("Password", "Liveview123");
    await page.click("Submit");

    await page.close()
    
})