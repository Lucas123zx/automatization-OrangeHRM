import { Before } from "@badeball/cypress-cucumber-preprocessor";

Before(function () {
  cy.clearAllCookies();
  cy.clearAllLocalStorage();
  cy.clearAllSessionStorage();
});

