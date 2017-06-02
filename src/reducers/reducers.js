import { combineReducers } from 'redux'
import redditReducer from './reddit-reducer'
import weatherReducer from './weather-reducer'
import signUpReducer from './sign-up-reducer'
import loginReducer from './login-reducer'

const reducers = combineReducers({
  weatherData: weatherReducer,
  postsBySubreddit: redditReducer.postsBySubreddit,
  selectedSubreddit: redditReducer.selectedSubreddit,
  signUp: signUpReducer,
  login: loginReducer

})

export default reducers