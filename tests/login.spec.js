// @ts-check
const { test, expect } = require('@playwright/test');


test('Login', async ({page}) => {

    await page.goto("https://www.instagram.com/");

    await expect (page).toHaveTitle("Instagram")

    await page.getByText("Phone number, username, or email").fill("luthyqa@gmail.com");
    await page.locator('xpath=//*[@id="loginForm"]/div/div[2]/div/label/input').fill("Liveview123");
    await page.getByText("Log in", { exact: true}).click();

    await page.close()
    
})