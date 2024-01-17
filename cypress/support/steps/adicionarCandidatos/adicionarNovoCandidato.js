import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";

import recruitmentPage from "../../pages/recruitmentPage";
import panelSide from "../../pages/panelSide";

Given("O usuário esteja na tela de novo candidato" , () => {
  panelSide.clicarModuloRecrutamento();
  recruitmentPage.clicarAdicionarCandidato();
})