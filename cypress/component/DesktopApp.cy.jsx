import React from 'react';
import { mount } from '@cypress/react';
import DesktopApp from '../../src/DesktopApp';

describe('DesktopApp Component', () => {
  it('renders the DesktopApp component', () => {
    mount(<DesktopApp />);
    
    // Check if the logos are rendered
    cy.get('img[alt="Vite logo"]').should('be.visible');
    cy.get('img[alt="React logo"]').should('be.visible');
    
    // Check if the heading is rendered
    cy.contains('Desktop Experience').should('be.visible');
  });
});