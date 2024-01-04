/* global Given, When, Then */

import loginPage from "../../pages/loginPage"
import dashBoardPage from "../../pages/dashBoardPage";

When("O usuário informar username {string}", (username) => {
  loginPage.Username(username)
});

And("O usuário informar password {string}", (password) => {
  loginPage.Password(password)
  loginPage.Login();
});

Then("O usuário deve visualizar tela home com o {string}", (functionality) => {
  dashBoardPage.verificarModulo(functionality).should('contain', functionality)
  cy.screenshot();
});

