import {
  REQUEST_LOGIN, RECEIVE_LOGIN
} from '../actions/login-actions'

const initialState = {
  isFetching: false,
}

const loginReducer = function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_LOGIN:
      return Object.assign({}, state, {
        isFetching: false,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export default loginReducer