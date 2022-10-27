import React from 'react';
import ReactDOM from 'react-dom/client';

// Component
import App from './app/app';

// Render First Component
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
