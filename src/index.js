import React from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ProviderComposer from './utils/ProviderComposer';
import { AuthProvider } from './contexts/Auth';

createRoot(document.getElementById('root')).render(
  <ProviderComposer providers={[BrowserRouter, AuthProvider]}>
    <App />
  </ProviderComposer>
);
