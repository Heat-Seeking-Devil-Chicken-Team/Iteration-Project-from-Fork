import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Store from './Store.js';
import styles from './styles.scss';

const node = document.getElementById('root');
const root = createRoot(node);

root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
