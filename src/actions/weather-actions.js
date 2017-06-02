import fetch from 'isomorphic-fetch'
import secret from '../secret/secret'

export const REQUEST_WEATHER = 'REQUEST_WEATHER'
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER'

export function requestWeather() {
  return {
    type: REQUEST_WEATHER
  }
}

export function receiveWeather(json) {
  return {
    type: RECEIVE_WEATHER,
    weathers: json,
    receivedAt: Date.now()
  }
}

export function fetchWeather() {
  return dispatch => {
    dispatch(requestWeather())
    return fetch('http://api.openweathermap.org/data/2.5/forecast/daily?q=Helsinki&units=metric&cnt=14&APPID='+secret.openWeatherMapApiKey)
      .then(response => response.json())
      .then(json => dispatch(receiveWeather(json)))
  }
}