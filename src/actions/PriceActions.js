import {
  REQUEST_PRICE,
  RECEIVE_PRICE
} from '../constants/ActionTypes';

export const fetchPrice = () => {

  let url = 'https://blockchain.info/zh-cn/ticker?cors=true';

  return dispatch => {
    dispatch(requestPrice());
    fetch(url)
    .then(res => res.json())
    .then(json => dispatch(receivePrice(json)))
    .catch(err => { throw err; });
  };
}

export const requestPrice = () => {

  return {
    type: REQUEST_PRICE
  }
}

export const receivePrice = prices => {

  return {
    type: RECEIVE_PRICE,
    payload: prices.USD.last
  }
}
