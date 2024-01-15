const base = require('@playwright/test')
const { URL } = require('./url_nav')

exports.test = base.test.extend({
    URL: async ({ page }, use) => {
      // Set up the fixture.
      const url = new URL(page);
      await url.gotoURL();

      // Use the fixture value in the test.
      await use(URL);
  
    },

});

exports.expect = base.expect;