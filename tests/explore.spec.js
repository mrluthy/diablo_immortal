// @ts-check
const { test, expect } = require('/Users/michael.luthy/Instagram/utils/login_fixture.js');

test('Explore', async ({Login, page}) => {
    await Login
    await page.goto("https://www.instagram.com/explore");

    await page.locator("tabindex=0").click()

    await page.close()
})