import TitleModule from "../common/title";

class DashboardPage{

  verificarModulo(functionality) {
    return cy.xpath(TitleModule.module(functionality))
  }
}

export default new DashboardPage();