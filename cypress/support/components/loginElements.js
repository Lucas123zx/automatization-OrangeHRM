class LoginElements {

  username = () => {return 'input[name="username"]'}
  password = () => {return 'input[name="password"]'}
  buttonLogin = () => {return 'button[type="submit"]'}
  buttonForgout = () => {return 'p'}
}

module.exports = new LoginElements();