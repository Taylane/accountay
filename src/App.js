import React from 'react'

import {
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/Home'
import Overview from './pages/Overview';
import Income from './pages/Income';
import Outcome from './pages/Outcome';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" >
          <Overview />
        </Route>
        <Route path="/home">
          <Overview />
        </Route>
        <Route path="/overview" >
          <Overview />
        </Route>
        <Route path="/income" >
          <Income />
        </Route>
        <Route path="/outcome" >
          <Outcome />
        </Route>
      </Switch>
    </div >
  );
}

export default App;
