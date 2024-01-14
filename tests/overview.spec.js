// @ts-check
const { url } = require( 'inspector' );
const { test, expect } = require('../utils/url_nav_fixture.js');
const { nav_locators }= require('../utils/nav_locators.js');
const { overview_locators } = require('../utils/overview_locators.js').default;

test('Overview', async ({URL, page}) => {

    await URL;

    expect(page.getByTestId(nav_locators.Overview_ID)).toBeVisible;

    await expect (page.locator( overview_locators.Logo_ID )).toBeVisible();
    await expect (page.locator( overview_locators.Heading_Locator )).toBeVisible();
    await expect (page.locator( overview_locators.Play_Now_Locator )).toBeVisible();
    await expect (page.getByText( overview_locators.Description_Text)).toHaveText("Action RPG • Free to Play");
    await expect (page.locator( overview_locators.Game_Play_Vido_ID )).toBeVisible();
    await expect (page.getByText( overview_locators.Demon_Text )).toHaveText("Demon Slaying On the Go");

});