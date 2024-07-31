///<reference types = "Cypress"/>

describe('The sanity test suite for travel site', () => {
    it('navigate to the main page', () => {
      cy.visit('http://localhost:3000')
      cy.url().should('eq','http://localhost:3000/' )
    })
  
    it('check for tabs on each of the following items', () => {
      cy.visit('http://localhost:3000')
      cy.get('#tab1 > form > :nth-child(1) > .label').should("be.visible")
      cy.get('#tab1 > form > .row > :nth-child(1) > .input-group > .label').should("be.visible")
      cy.get('#tab1 > form > .row > :nth-child(2) > .input-group > .label').should("be.visible")
      cy.get(':nth-child(3) > .label').should("be.visible")
      cy.get('.checkbox-row > .m-r-45').should("be.visible")
      cy.get('.checkbox-row > :nth-child(2)').should("be.visible")
      cy.get('#tab1 > form > .btn-submit').should("be.visible")
    })

    it('check for text of tabs on each of the following items', () => {
        cy.visit('http://localhost:3000')
        cy.get('#tab1 > form > :nth-child(1) > .label').should("have.text", "Going to")
        cy.get('#tab1 > form > .row > :nth-child(1) > .input-group > .label').should("have.text", "check-in")
        cy.get('#tab1 > form > .row > :nth-child(2) > .input-group > .label').should("have.text", "check-out")
        cy.get(':nth-child(3) > .label').should("have.text", "travellers")
        cy.get('.checkbox-row > .m-r-45').should("have.text", "Add a flight\n                                        \n                                        \n                                    ")
        cy.get('.checkbox-row > :nth-child(2)').should("have.text", "Add a car\n                                        \n                                        \n                                    ")
        cy.get('#tab1 > form > .btn-submit').should("have.text", "search")
      })

  
  
  })