import loginElements from "../components/loginElements"

class LoginPage {

  Username(username) {
    cy.get(loginElements.username()).type(username)
  }

  Password(password) {
    cy.get(loginElements.password()).type(password)
  }

  Login() {
    cy.get(loginElements.buttonLogin()).click()
  }

  Forgout() {
    cy.get(loginElements.buttonForgout()).click() 
  }

}

export default new LoginPage();