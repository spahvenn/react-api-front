import { CALL_API } from '../middleware/api'

export const REQUEST_USER = 'REQUEST_USER'
export const RECEIVE_USER = 'RECEIVE_USER'

export const REQUEST_MODIFY_USER = 'REQUEST_MODIFY_USER'
export const RECEIVE_MODIFY_USER = 'RECEIVE_MODIFY_USER'

export function fetchUser() {
  return {
    [CALL_API]: {
      endpoint: 'user',
      authenticated: true, // signals the CALL_API to send the token with the request
      types: [REQUEST_USER, RECEIVE_USER]
    }
  }
}