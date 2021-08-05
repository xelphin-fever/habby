import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
// import {theme} from './helper/constants';

import Home from './pages/Home';
import Tags from './pages/Tags';

function App() {

  // TODO: Instead of stateColor/stateActivity collect from firebase current activity id and then collect title+color


  return (
    <div className="App">
      <Router>
        <Switch> 
          <Route exact path='/habby/' component={() => <Home  />}/>
          <Route exact path='/habby/tags' component={() => <Tags  />}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
