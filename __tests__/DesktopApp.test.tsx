import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DesktopApp from '../src/DesktopApp';

test('renders the DesktopApp component', () => {
  render(<DesktopApp />);
  
  // Check if the logos are rendered
  const viteLogo = screen.getByAltText('Vite logo');
  const reactLogo = screen.getByAltText('React logo');
  expect(viteLogo).toBeInTheDocument();
  expect(reactLogo).toBeInTheDocument();
  
  // Check if the heading is rendered
  const headingElement = screen.getByText(/Desktop Experience/i);
  expect(headingElement).toBeInTheDocument();
  
  // Check if the button is rendered and clickable
  const buttonElement = screen.getByRole('button', { name: /count is 0/i });
  expect(buttonElement).toBeInTheDocument();
  
  // Simulate a button click and check if the count updates
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveTextContent('count is 1');
});