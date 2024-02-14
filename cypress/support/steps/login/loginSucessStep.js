import {Given, When, Then  } from "@badeball/cypress-cucumber-preprocessor";

import loginPage from "../../pages/loginPage"
import dashBoardPage from "../../pages/dashBoardPage";

Given("O usuário esteja na tela de login", () => {
  cy.visit('/login')
});

When("O usuário informar username {string}", (username) => {
  loginPage.Username(username)
});

When("O usuário informar password {string}", (password) => {
  loginPage.Password(password)
  loginPage.Login();
});

Then("O usuário deve visualizar tela home com o {string}", (functionality) => {
  dashBoardPage.verificarModulo(functionality).should('contain', functionality)
  cy.screenshot();
});


