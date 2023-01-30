import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Persistent
import { PersistGate } from "redux-persist/integration/react";

// Redux
import { Provider } from 'react-redux';
import {store, persistor } from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
