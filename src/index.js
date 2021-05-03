import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import App from './App';
import AppHeader from './components/appHeader/AppHeader'

import 'typeface-roboto'
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppHeader />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
