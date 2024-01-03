const base = require('@playwright/test')
const { Login } = require('./login')

exports.test = base.test.extend({
    Login: async ({ page }, use) => {
      // Set up the fixture.
      const login = new Login(page);
      await login.gotoURL();
      await login.login_actions();

      // Use the fixture value in the test.
      await use(login);
  
      // Clean up the fixture.
      await page.close()
    },
});
exports.expect = base.expect;