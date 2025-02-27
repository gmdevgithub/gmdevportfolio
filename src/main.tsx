import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'; 
import App from './App.js'

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error("Root element not found");
}
