Feature: Logar

    Logar com sucesso

  Scenario: Logar com sucesso
  Given O usuário esteja na tela de login
  When O usuário informar username "Admin"
  And O usuário informar password "admin123"
  Then O usuário deve visualizar tela home com o "Dashboard"