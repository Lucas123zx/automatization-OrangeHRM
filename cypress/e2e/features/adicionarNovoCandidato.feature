
Feature: Cadastro de Candidato

  Cadastrar candidato 

  Background: usuario esteja logado no sistema
    Given O usuário esteja na tela de login
    When O usuário informar username "Admin"
    And O usuário informar password "admin123"
    Then O usuário deve visualizar tela home com o "Dashboard" 
  Scenario: Cadastrar candidato com sucesso
    Given O usuário esteja na tela de novo candidato
    When O usuário informar Full Name "Fulano de tal"
    And O usuário informar Middle Name "de"
    And O usuário informar Last Name "tal"
    And O usuário informar Last Name "tal"