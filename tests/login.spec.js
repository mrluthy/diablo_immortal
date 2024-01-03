// @ts-check
const { test, expect } = require('/Users/michael.luthy/Instagram/utils/login_fixture.js');

test('Login', async ({Login, page}) => {
    await Login;
    await expect(page.getByText("luthyqa2023")).toHaveText("luthyqa2023");

})