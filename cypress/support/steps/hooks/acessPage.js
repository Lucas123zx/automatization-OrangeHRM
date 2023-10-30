const {  Before,  After,  Given,  Then} = require("cypress-cucumber-preprocessor/steps");

Given("O usuário esteja na tela de login", () => {
  return cy.visit('/login')
}) 


