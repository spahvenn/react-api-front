import React, { Component } from 'react';
import Home from './main-views/home';
import Main from './main-views/main';
import About from './main-views/about';
import RedditDemo from './main-views/reddit-demo'
import Weather from './main-views/weather'
import SignUp from './main-views/sign-up'
import Login from './main-views/login'

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { Provider } from 'react-redux'

import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/reducers'
import logger from 'redux-logger'
import api from './middleware/api'

import {persistStore, autoRehydrate} from 'redux-persist'


const store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(
      thunkMiddleware.withExtraArgument(api),
      thunkMiddleware.withExtraArgument(logger)
    ),
    autoRehydrate()
  )
)

persistStore(store)

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router basename="/react-api-front">
          <Main>
            <Route exact path='/' component={Home}/>
            <Route path='/reddit' component={RedditDemo}/>
            <Route path='/weather' component={Weather}/>
            <Route path='/about' component={About}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/login' component={Login}/>
          </Main>
        </Router>
      </Provider>
    )
  }

};

export default App;
