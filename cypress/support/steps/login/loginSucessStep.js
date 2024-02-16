import {Given, When, Then  } from "@badeball/cypress-cucumber-preprocessor";

import loginPage from "../../pages/loginPage"
import dashBoardPage from "../../pages/dashBoardPage";

Given("O usuário esteja na tela de login", () => {
  cy.visit('/login')
});

When("O usuário informe credenciais válidas", () => {
  loginPage.Username()
  loginPage.Password()
  loginPage.Login()
});

Then("O usuário deve visualizar tela home com o {string}", (functionality) => {
  dashBoardPage.verificarModulo(functionality).should('contain', functionality)
  cy.screenshot();
});


