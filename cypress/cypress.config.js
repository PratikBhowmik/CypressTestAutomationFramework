const { defineConfig } = require("cypress");

module.exports = defineConfig({
  trashAssetsBeforeRuns : false,
  video : true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
