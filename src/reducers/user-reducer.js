import { REQUEST_USER, RECEIVE_USER } from '../actions/user-actions'

function userReducer(state = {
  isFetching: false,
  user: null,
  authenticated: false,
}, action) {
  switch(action.type) {
    case REQUEST_USER:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_USER:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.response,
        authenticated: action.authenticated || false // TODO: what is this used for?
      })
    default:
      return state
  }
}

export default userReducer;