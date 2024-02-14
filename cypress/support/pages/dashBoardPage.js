import titleModuleElements from "../common/titleModuleElements";

class DashboardPage{

  verificarModulo(functionality) {
    return cy.xpath(titleModuleElements.module(functionality))
  }
}

export default new DashboardPage();