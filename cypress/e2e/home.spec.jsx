describe('Home Page', () => {
  it('should load the home page and display the correct title', () => {
    cy.visit('/');
    cy.contains('Desktop Experience').should('be.visible');
  });

  it('should render the Vite and React logos', () => {
    cy.visit('/');
    cy.get('img[alt="Vite logo"]').should('be.visible');
    cy.get('img[alt="React logo"]').should('be.visible');
  });
});