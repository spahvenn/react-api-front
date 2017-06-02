import {
  REQUEST_SIGN_UP, RECEIVE_SIGN_UP
} from '../actions/sign-up-actions'

const initialState = {
  isFetching: false,
  token: []
}

const signUpReducer = function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SIGN_UP:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_SIGN_UP:
      return Object.assign({}, state, {
        isFetching: false,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export default signUpReducer