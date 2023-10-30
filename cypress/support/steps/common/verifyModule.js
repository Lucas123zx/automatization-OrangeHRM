/* global Given, When, Then */

import Modules from "../../pages/common/titleModules"

Then("O usuário deve visualizar tela home com o {string}", (functionality) => {
  Modules.verificarModulo(functionality).should('contain', functionality)
});