import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Heder from './componant/Heder';
import Favecofee from './componant/Favecofee';
import Home from './componant/Home';

export class App extends Component {
  render() {


    return (
      <>
      <Router>
        <Heder/>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/fav">
            <Favecofee />
          </Route>
        </Switch>
    </Router>
      </>
    )
  }
}

export default App

