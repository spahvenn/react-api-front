import {
  REQUEST_LOGIN, SUCCESS_LOGIN, SUCCESS_LOGOUT
} from '../actions/login-actions'

const initialState = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('id_token') ? true : false
}

const loginReducer = function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      })
    case SUCCESS_LOGIN:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        token: action.token,
        user: action.user,
        lastUpdated: action.receivedAt
      })
    case SUCCESS_LOGOUT:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        token: null,
        user: null
      })
    default:
      return state
  }
}

export default loginReducer