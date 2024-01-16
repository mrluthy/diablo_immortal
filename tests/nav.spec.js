const { url } = require( 'inspector' );
const { test, expect } = require('../utils/url_nav_fixture.js');
const { nav_locators } = require('../utils/nav_locators.js').default;

test('Spotlight', async ({URL, page}) => {
    await URL;

    page.getByTestId(nav_locators.Classes_ID).click;
    page.getByTestId( nav_locators.Encounters_ID ).click;
    page.getByTestId( nav_locators.News_ID ).click;
    page.getByTestId( nav_locators.Spotlight_ID ).click;
    page.getByTestId( nav_locators.Overview_ID ).click;
    page.getByTestId( nav_locators.Forums_ID ).click;

});