import React, { Component } from 'react';
import Home from './main-views/home';
import Main from './main-views/main';
import About from './main-views/about';
import RedditDemo from './main-views/reddit-demo'
import Weather from './main-views/weather'


import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { Provider } from 'react-redux'
import configureStore from './configureStore'

const store = configureStore()

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router basename="/react-api-front">
          <Main>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/reddit' component={RedditDemo}/>
            <Route path='/weather' component={Weather}/>
          </Main>
        </Router>
      </Provider>
    )
  }

};

export default App;
