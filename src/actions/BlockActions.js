import moment from 'moment';
import {
  REQUEST_BLOCKS,
  RECEIVE_BLOCKS,
  REQUEST_BLOCK,
  RECEIVE_BLOCK
} from '../constants/ActionTypes';

export const fetchBlocks = (...args) => {

  let queryString = Array.from(args)
    .map(arg => {

      return (typeof arg === 'number' && `limit=${arg}`) ||
             (typeof arg === 'string' && `blockDate=${arg}`);
    })
    .filter(value => value.length > 0)
    .join('&');
  let url = `https://blockexplorer.com/api/blocks?${queryString}`;

  return dispatch => {
    dispatch(requestBlocks());
    fetch(url)
    .then(res => res.json())
    .then(json => dispatch(receiveBlocks(json)))
    .catch(err => { throw err; })
  };
}

export const requestBlocks = () => {
  return {
    type: REQUEST_BLOCKS
  };
}

export const receiveBlocks = (blocksInfo) => {
  return {
    type: RECEIVE_BLOCKS,
    payload: blocksInfo
  }
}

export const changeDate = (date) => {
  let dateString = moment(date).format('YYYY-MM-DD').toString();

  return dispatch => {
    dispatch(fetchBlocks(dateString));
  }
}

export const fetchBlock = (blockHash) => {

  let url = `https://blockexplorer.com/api/block/${blockHash}`;

  return dispatch => {
    dispatch(requestBlock());
    fetch(url)
    .then(res => {
        return new Promise((resolve, reject) => {
          let data = {};
          res.json().then(json => {
            data = Object.assign(json, {
              ok: res.ok
            });
            resolve(data);
          });
        });
    })
    .then(data => dispatch(receiveBlock(data)))
    .catch(err => { throw err; });
  };
}

export const requestBlock = () => {
  return {
    type: REQUEST_BLOCK
  };
}

export const receiveBlock = (blockInfo) => {
  return {
    type: RECEIVE_BLOCK,
    payload: blockInfo
  }
}
