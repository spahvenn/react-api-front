import {
  INVALIDATE_WEATHER, REQUEST_WEATHER, RECEIVE_WEATHER
} from '../actions/weather-actions'

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: []
}

const weatherReducer = function(state = initialState, action) {
  switch (action.type) {
    case INVALIDATE_WEATHER:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_WEATHER:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_WEATHER:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.weathers,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export default weatherReducer