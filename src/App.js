import React, { Component } from 'react';
import Home from './main-views/home.js';
import Main from './main-views/main';
import About from './main-views/about';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router basename="/react-api-front">
        <Main>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
        </Main>
      </Router>
    )
  }

};

export default App;
