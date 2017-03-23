import {
  CONNECT,
  DISCONNECT
} from '../constants/ActionTypes';

export const connect = () => {
  return {
    type: CONNECT
  }
}

export const disconnect = () => {
  return {
    type: DISCONNECT
  }
}
