import './App.css';
import React, {useState, useEffect, useReducer} from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {colorReducer} from './helper/reducers';
import {theme} from './helper/constants';

import Home from './pages/Home'

function App() {


  const [stateColor, dispatchColor] = useReducer(colorReducer, {color: theme.color2});

  return (
    <div className="App">
      <Router>
        <Switch> 
          <Route exact path='/' component={() => <Home  color={stateColor.color} dispatchColor={dispatchColor} />}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
