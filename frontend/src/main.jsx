import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

// Import our global CSS (where Tailwind v4 is initialized)
import './index.css'; 

// Import the root component
import App from './App.jsx';

// Import Redux Store and i18n Configuration
import { store } from './store/store.js';
import './i18n/index.js'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);