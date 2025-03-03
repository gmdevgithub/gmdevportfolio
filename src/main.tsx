//React libaries 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//Redux
import store from './store';
import { Provider } from 'react-redux';

//Custom files 
import './styles/index.scss'; 
import App from './App.js'

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(

  <Provider store={store}>
      <App />
  </Provider>

);
} else {
  console.error("Root element not found");
}
