/* global Given, When, Then */

import loginPage from "../../pages/loginPage"

Given("O usuário esteja na tela de login", () => {
  loginPage.acessarSite();
});

When("O usuário informar username {string}", (username) => {
  loginPage.Username(username)
});

And("O usuário informar password {string}", (password) => {
  loginPage.Password(password)
  loginPage.Login();
});

