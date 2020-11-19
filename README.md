![N|Solid](https://www.cypress.io/static/33498b5f95008093f5f94467c61d20ab/59c46/cypress-logo.webp)

# Semana Agilizei - Desafio 01

Projeto desenvolvido para o bootcamp da semana agilizei - https://agilizei.com/agilizei-bootcamp/

# Tecnologias

  - Cypress @ 4.10.0
  - NodeJS @ v14.15.0
  - NPM @ 6.14.8

# Dependêcias
  - mocha
  - mochawesome
  - mochawesome-merge
  - mochawesome-report-generator
  - cypress-multi-reporters
  - ChanceJS


# Cenários de testes
  - Cadastrar um novo usuário


# Fluxo do cenário:
  - Acessar o site automation practice http://automationpractice.com 
  - Clicar no botão de Sign in
  - Preencher as informações de e-mail (não pode ser repetido)
  - Clicar no botão Create an Account
  - Preencher as informações do formulário de cadastro
  - Clicar no botão Register
  - Validar que foi redirecionado para a url correta
  - Validar exibição do texto 'Welcome to your account'


# Execução do projeto

Para executar o projeto, deve-se:
- Realizar o clone no repositório
- Na raiz do projeto, executar o seguinte comando: npm install

Após o término da instalação, executar o comando: npm run cy:run (execução em modo headless)

Para gerar o relatório do teste, execute os seguintes comandos:
  - npm run report:merge
  - npm run report:mocha

# Relatório de execução

Através do Github Pages é possível acessar o relatório do teste. 
Veja o relatório no link: https://medeirosfernando.github.io/semana-agilizei0desafio-1/
