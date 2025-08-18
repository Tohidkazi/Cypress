const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    baseUrl: 'https://practice.expandtesting.com',
    setupNodeEvents(on, config) {
      // Register mochawesome reporter plugin
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
