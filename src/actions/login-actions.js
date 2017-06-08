import Axios from 'axios';

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN'
export const FAILURE_LOGIN = 'FAILURE_LOGIN'

export function requestLogin(email, password) {
  return {
    type: REQUEST_LOGIN,
    isFetching: true,
    isAuthenticated: false,
    email: email,
    password: password
  }
}

export function receiveLogin(user, token) {
  return {
    type: SUCCESS_LOGIN,
    isFetching: true,
    isAuthenticated: true,
    user: user,
    token: token
  }
}

export function failureLogin(message) {
  return {
    type: FAILURE_LOGIN,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function login(email, password) {
  return dispatch => {
    dispatch(requestLogin())
    return Axios.post('http://localhost:3001/login', {
      email: email,
      password: password
    })
    .then((res) => {
      const token = res.data.token
      const user = res.data.user
      localStorage.setItem('token', token)
      dispatch(receiveLogin(user, token))
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

// Logout process

export const SUCCESS_LOGOUT = 'SUCCESS_LOGOUT'

export function receiveLogout() {
  return {
    type: SUCCESS_LOGOUT,
    isFetching: false,
    isAuthenticated: false
  }
}


export function logout() {
  return dispatch => {
    localStorage.removeItem('token')
    return dispatch(receiveLogout())
  }
}
