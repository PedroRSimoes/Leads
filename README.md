# Projeto Gestão de Leads

Este é um projeto em Angular para uma página de gestão de Leads. A aplicação consiste em uma interface de usuário onde é possível visualizar e gerenciar Leads, movendo-os entre duas tabelas: "Invited" e "Accepted".

## Funcionalidades

- **Tabela Invited**: Contém os Leads convidados. Cada Lead aparece em um card com botões de "Aceitar" e "Rejeitar".
- **Tabela Accepted**: Contém os Leads aceitos. Leads movidos para essa tabela são aqueles que foram aceitos na tabela "Invited".

## Tecnologias Utilizadas

- Angular
- TypeScript
- HTML
- CSS

### Estrutura das Pastas e Arquivos

- **src/app/\_components**: Contém os componentes visuais do projeto.

  - **accepted-card**: Componente responsável por exibir os Leads na tabela "Accepted".
  - **card**: Componente responsável por exibir os Leads na tabela "Invited" com os botões de "Aceitar" e "Rejeitar".

- **src/app/\_interfaces**: Define as interfaces TypeScript para o projeto, como as interfaces dos Leads.

- **src/app/\_models**: Contém os modelos do projeto, definindo as estruturas de dados usadas.

- **src/app/\_pipes**: Contém os pipes do projeto para manipulação de dados e formatações específicas.

- **src/app/\_services**: Inclui os serviços do projeto para manipulação de dados, como a lógica de aceitar ou rejeitar um Lead.

- **src/app**: Diretório principal da aplicação que contém arquivos centrais do Angular, como `app.component.ts`, `app.module.ts`, `app.routes.ts`, entre outros.

## Pré-requisitos

Antes de começar, verifique se você possui as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [Angular CLI](https://angular.io/cli) (instale globalmente com `npm install -g @angular/cli`)

Se você não tiver o Angular CLI, pode instalá-lo globalmente com o seguinte comando:

`bash`
npm install -g @angular/cli

### Executando o Projeto

Para executar o projeto, abra o terminal e execute o comando: **ng serve**
Posteriormente, navegue para o endereço **http://localhost:4200/**
