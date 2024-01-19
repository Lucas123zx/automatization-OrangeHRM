const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
const fs = require('fs');


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
      on('after:run', (results) => {
        if (results) {
          fs.mkdirSync("cypress/.run", { recursive: true });
          fs.writeFile("cypress/.run/results.json", JSON.stringify(results));
        }
      })
    },
    specPattern: "**/*.feature",
    baseUrl:"https://opensource-demo.orangehrmlive.com/web/index.php/auth",
    chromeWebSecurity: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    supportFile: "cypress/support/plugins",
    screenshotsFolder: "cypress/screenshots"
    
  },
});
