const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    loginUrl : 'http://v2.nushop-dashboard.kaip.in/login',
  }
});
