Feature: Logar

  Logar com sucesso

  Scenario: Logar com sucesso
    Given O usuário esteja na tela de login
    When O usuário informe credenciais válidas
    Then O usuário deve visualizar tela home com o "Dashboard" 