import React from 'react';
import ReactDOM from 'react-dom/client';
import AppContainer from './AppContainer';
import './index.css';

// Change Language
import "./frontEnd/i18n";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);