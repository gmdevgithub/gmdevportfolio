/// <reference types="cypress" />

describe('App Component', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders the App component', () => {
    cy.get('h1').should('contain', 'Welcome to the App')
  })
})

describe('Desktop Component', () => {
  beforeEach(() => {
    cy.visit('/desktop')
  })

  it('renders the Desktop component', () => {
    cy.get('h2').should('contain', 'Desktop View')
  })
})

describe('Mobile Component', () => {
  beforeEach(() => {
    cy.visit('/mobile')
  })

  it('renders the Mobile component', () => {
    cy.get('h2').should('contain', 'Mobile View')
  })
})