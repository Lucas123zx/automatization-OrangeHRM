// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("screenshotTestsResults", () => {
 if (Cypress.config("isInteractive")) {
    return; // nâo faça nada se nâo esiver no modo headless
  } else { 
    const screenshotsFolder = Cypress.config("screenshotsFolder");
    if (window.cucumberJson?.generate) {
      const testState = window.testState;
      const stepResult =
        testState.runTests[testState.currentScenario.name][testState.currentStep];
      if (stepResult?.status === "failed" || stepResult?.status !== "failed" || stepResult?.status === undefined) {
        cy.screenshot(
          `${testState.feature.name} -- ${testState.currentScenario.name} (${stepResult.status})`
        )
        let screenshotFileName = `${testState.feature.name} -- ${testState.currentScenario.name} (${stepResult.status}).png`;
        cy.readFile(
          `${screenshotsFolder}/${Cypress.spec.name}/${screenshotFileName}`,
          "base64"
        ).then((imgData) => {
          stepResult.attachment = {
            data: imgData,
            media: { type: "image/png" },
            index: testState.currentStep,
            testCase: testState.formatTestCase(testState.currentScenario),
          };
        });
      }
      }
    }
  });