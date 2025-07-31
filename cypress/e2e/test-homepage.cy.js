/// <reference types="cypress" />

describe('Page d’accueil', () => {
  it('devrait afficher le titre correct', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink')
  })
})