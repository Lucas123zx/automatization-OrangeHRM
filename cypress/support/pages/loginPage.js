import loginElements from "../components/loginElements"

class LoginPage {

  Username() {
    cy.get(loginElements.username()).type(Cypress.env('user'))
  }

  Password() {
    cy.get(loginElements.password()).type(Cypress.env('password'))
  }

  Login() {
    cy.get(loginElements.buttonLogin()).click()
  }

  Forgout() {
    cy.get(loginElements.buttonForgout()).click() 
  }

}

export default new LoginPage();