const { defineConfig } = require(`cypress`);
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  

  trashAssetsBeforeRuns: false,
  video: true,
  chromeWebSecurity: false,

  projectId: 'wtpt6o',

  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    }
  },

  env: {
    loginUrl: 'http://v2.nushop-dashboard.kaip.in/login',
  }
});
