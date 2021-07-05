import './App.scss';
import React, {useState, useEffect, useReducer} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {theme} from './helper/constants';

import Home from './pages/Home'

function App() {

  // TODO: Instead of stateColor/stateActivity collect from firebase current activity id and then collect title+color


  return (
    <div className="App">
      <Router>
        <Switch> 
          <Route exact path='/habby/' component={() => <Home  />}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
