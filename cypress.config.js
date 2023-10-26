const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5pi3q3',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
