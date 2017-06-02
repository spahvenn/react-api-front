import Axios from 'axios';

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'

export function requestLogin(email, password) {
  return {
    type: REQUEST_LOGIN,
    email: email,
    password: password
  }
}

export function receiveLogin(json) {
  return {
    type: RECEIVE_LOGIN
  }
}

export function login(email, password) {
  return dispatch => {
    dispatch(requestLogin())
    return Axios.post('http://localhost:3001/login', {
      email: email,
      password: password
    })
      .then(dispatch(receiveLogin()))
      .catch(function (error) {
        console.log(error);
      });
  }
}