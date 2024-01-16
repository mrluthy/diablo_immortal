const { url } = require('inspector');
const { test, expect } = require('@playwright/test');
const {forum_locators } = require("../utils/forums_locators").default;


test('Forums', async ({page}) => {

    url("https://us.forums.blizzard.com/en/diablo-immortal/");

    expect(page.locator(forum_locators.All_Categories_Locator)).toBeVisible;
    expect(page.locator(forum_locators.Demon_Hunter_Class_Locator)).toBeVisible;

});