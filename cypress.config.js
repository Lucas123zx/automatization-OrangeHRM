const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin, afterRunHandler } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const fs = require('fs');

const setupNodeEvents = async (on, config) => {
  await addCucumberPreprocessorPlugin(on, config); 

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  on('after:run', async (results) => {
    if (results) {
      await afterRunHandler(config)
      fs.writeFile("cypress/reports/.run/results.json", JSON.stringify(results));
    }
  });

  return config;
};

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth",
    chromeWebSecurity: true,
    setupNodeEvents,
    viewportWidth: 1920,
    experimentalInteractiveRunEvents: true,
    viewportHeight: 1080,
    supportFile: "cypress/support/plugins/e2e.js",
    screenshotsFolder: "cypress/screenshots"

  },
});
