/* global Given, When, Then */

import recruitmentPage from "../../pages/recruitmentPage";
import panelSide from "../../pages/panelSide";

Given("O usuário esteja na tela de novo candidato" , () => {
  panelSide.clicarModuloRecrutamento();
  recruitmentPage.clicarAdicionarCandidato();
})