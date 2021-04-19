import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import App from './App';
import 'typeface-roboto'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <header className="App-header">
        <h1>Accountay</h1>
        <nav>
          <Link className="App-link" id="home" to="/">Home</Link>
          <Link className="App-link" id="overview" to="/overview">Overview</Link>
          <Link className="App-link" id="income" to="/income">Income</Link>
          <Link className="App-link" id="outcome" to="/outcome">Outcome</Link>
        </nav>
      </header>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
