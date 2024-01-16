const { url } = require( 'inspector' );
const { test, expect } = require('../utils/url_nav_fixture.js');
const { class_locators } = require('../utils/class_locators.js').default;

test('Classes', async ({URL, page}) => {
    await URL;

    page.locator(class_locators.Blood_Knight_Locator).click;
    await expect(page.locator( class_locators.Blood_Knight_Desc_Locator )).toHaveText("A monstrous protector. Cursed vampiric powers flow through a Blood Knight as they devour the lifeblood of their foes and keep them at bay with knightly polearms.");
    page.locator(class_locators.Necro_Locator).click;
    await expect (page.locator( class_locators.Necro_Desc_Locator)).toHaveText("A manipulator of life and death. The priests of Rathma use their powers over life and death to preserve balance in Sanctuary.");

});
