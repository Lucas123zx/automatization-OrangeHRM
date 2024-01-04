import recruitmentElements from "../components/recruitmentElements"

class RecruitmentPage {

  clicarAdicionarCandidato() {
    cy.xpath(recruitmentElements.buttonAddCandidates()).click()
  }

}

export default new RecruitmentPage();