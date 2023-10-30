import TitleModule from "../../common/title";

class Modules{

  verificarModulo(functionality) {
    return cy.xpath(TitleModule.module(functionality))
  }
}

export default new Modules();