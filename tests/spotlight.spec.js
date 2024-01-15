const { url } = require( 'inspector' );
const { test, expect } = require('../utils/url_nav_fixture.js');
const { spotlight_locators } = require('../utils/spotlight_locators.js').default;

test('Spotlight', async ({URL, page}) => {
    await URL;

    await expect(page.getByText( spotlight_locators.Heading_Locator )).toHaveText("Darkness Fears the Blood Knight");
    await expect(page.locator( spotlight_locators.Spotlight_Video_ID)).toBeVisible();

});
