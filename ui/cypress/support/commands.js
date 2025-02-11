// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getDataCy', (selector) => {
    return cy.get(`[data-cy="${selector}"]`);
});

Cypress.Commands.add('preencherCadastro', (nome, email, confirmacaoEmail, senha) => {
    cy.getDataCy('input-nome').type(nome);
    cy.getDataCy('input-email').type(email);
    cy.getDataCy('input-confirmacao-email').type(confirmacaoEmail);
    cy.getDataCy('input-senha').type(senha);
});  