import {
  REQUEST_WEATHER, RECEIVE_WEATHER
} from '../actions/weather-actions'

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: []
}

const weatherReducer = function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_WEATHER:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_WEATHER:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.weathers,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export default weatherReducer