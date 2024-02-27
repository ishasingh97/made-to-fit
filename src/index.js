
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import {RoutesComponent} from './Routes'; 
import reportWebVitals from './reportWebVitals';
// import * as serviceWorkerRegistration from '../public/serviceWorkerRegistration';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/">
        <RoutesComponent /> {/* Render the Routes component here */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// serviceWorkerRegistration.register()
reportWebVitals();
