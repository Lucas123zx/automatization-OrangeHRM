import loginElements from "../components/loginElements"

class LoginPage {

  Username(username) {
    return cy.get(loginElements.username()).type(username)
  }

  Password(password) {
    return cy.get(loginElements.password()).type(password)
  }

  Login() {
    return cy.get(loginElements.buttonLogin()).click()
  }

  Forgout() {
    return cy.get(loginElements.buttonForgout()).click() 
  }

}

export default new LoginPage();