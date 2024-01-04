import panelElements from "../common/panelElements";

class PanelPage {

  clicarModuloRecrutamento() {
    cy.get(panelElements.sidePanel()).contains('Recruitment').click()
  }

}

export default new PanelPage();