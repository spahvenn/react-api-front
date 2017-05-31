import { combineReducers } from 'redux'
import redditReducer from './reddit-reducer'
import weatherReducer from './weather-reducer'

const reducers = combineReducers({
  weatherData: weatherReducer,
  postsBySubreddit: redditReducer.postsBySubreddit,
  selectedSubreddit: redditReducer.selectedSubreddit
})

export default reducers