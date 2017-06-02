import Axios from 'axios';

export const REQUEST_SIGN_UP = 'REQUEST_SIGN_UP'
export const RECEIVE_SIGN_UP = 'RECEIVE_SIGN_UP'

export function requestSignUp(email, password) {
  return {
    type: REQUEST_SIGN_UP,
    email: email,
    password: password
  }
}

export function receiveSignUp(json) {
  return {
    type: RECEIVE_SIGN_UP
  }
}

export function signUp(email, password) {
  return dispatch => {
    dispatch(requestSignUp())
    return Axios.post('http://localhost:3001/signup', {
      email: email,
      password: password
    })
    .then(dispatch(receiveSignUp()))
    .catch(function (error) {
      console.log(error);
    });
  }
}