## Projeto cypress execução de testes automatizados em diferente ambiente

> Utilizando informações variaveis de ambiente e credenciais   

---

## Pré-Ambiente para Execução
 - Vscode
 - Node
 1. Clonar projeto: `git clone git@github.com:Lucas123zx/automatization-OrangeHRM.git`
 2. Mudar branch a criando: `git checkout -b develop`
 3. Atualizar branch local: `git pull`
 4. Baixar pacote node: `npm install`
--- 

## Criando env

 1.Criar arquivo chamado **cypress.env.json** na raiz do projeto:

    /home/lucas.doe/my-project
    └── .vscode
    └── cypress
    └── node_module
    └── .cypress-cucumber-preprocessorrc.json
    └── cucumber-json-formatter.exe
    └── cypress.config.js
    **└── cypress.env.json **
    └── package-lock.json
    └── package.json


---

## Modificando env

1. Editar arquivo **cypress.env.json**:

```json
{
  "environment_variable": {
    "baseUrl": "baseUrl",
    "user" : "user",
    "password": "password"
  }
}
```
---
## Modificando script de execução

1. Modifica script de execução no arquivo **package.json** 

```json
{
 "scripts": {
    "cy:open": "cypress open --env version=environment_variable",
    "test-chrome": "cypress run --env version=environment_variable --browser chrome",
  }
}
```

  


