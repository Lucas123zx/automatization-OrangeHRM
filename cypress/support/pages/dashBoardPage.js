import TitleModule from "../common/titleElements";

class DashboardPage{

  verificarModulo(functionality) {
    return cy.xpath(TitleModule.module(functionality))
  }
}

export default new DashboardPage();