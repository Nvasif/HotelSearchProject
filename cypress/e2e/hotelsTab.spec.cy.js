///<reference types = "Cypress"/>

describe('The sanity test suite for travel site', () => {
    it('navigate to the main page', () => {
      cy.visit('http://localhost:3000')
      cy.url().should('eq','http://localhost:3000/' )
    })
  
    it('check for tabs on each of the following items', () => {
      cy.visit('http://localhost:3000')
      cy.get('#tab1 > form > :nth-child(1) > .input--style-1').should("be.visible")
      cy.get('#input-start').should("be.visible")
      cy.get('#input-end').should("be.visible")
      cy.get('#info').should("be.visible")
      cy.get('.checkbox-row > .m-r-45').should("be.visible")
      cy.get('.checkbox-row > :nth-child(2)').should("be.visible")
      cy.get('#tab1 > form > .btn-submit').should("be.visible")
    })

  
  
  })