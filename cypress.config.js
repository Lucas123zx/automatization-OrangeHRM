const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: "**/*.feature",
    baseUrl:"https://opensource-demo.orangehrmlive.com/web/index.php/auth",
    chromeWebSecurity: true,
    viewportWidth: 1920,
    viewportHeight: 1080
    
    
  },
});
