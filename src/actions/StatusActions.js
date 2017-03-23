
import {
  REQUEST_SYNC_STATUS,
  RECEIVE_SYNC_STATUS,
  REQUEST_BTC_NODE_INFO,
  RECEIVE_BTC_NODE_INFO,
  REQUEST_LAST_BLOCK,
  RECEIVE_LAST_BLOCK
} from '../constants/ActionTypes';

export const fetchSyncStatus = () => {
  let url = 'https://blockexplorer.com/api/sync';

  return dispatch => {
    dispatch(requestSyncStatus());
    fetch(url)
    .then(res => res.json())
    .then(json => dispatch(receiveSyncStatus(json)))
    .catch(err => { throw err; })
  };
}

export const requestSyncStatus = () => {
  return {
    type: REQUEST_SYNC_STATUS
  };
}

export const receiveSyncStatus = (syncStatus) => {
  return {
    type: RECEIVE_SYNC_STATUS,
    payload: syncStatus
  }
}

export const fetchBTCNodeInfo = () => {
  let url = 'https://blockexplorer.com/api/status';

  return dispatch => {
    dispatch(requestBTCNodeInfo());
    fetch(url)
    .then(res => res.json())
    .then(json => dispatch(receiveBTCNodeInfo(json)))
    .catch(err => { throw err; })
  };
}

export const requestBTCNodeInfo = () => {
  return {
    type: REQUEST_BTC_NODE_INFO
  };
}

export const receiveBTCNodeInfo = (info) => {
  return {
    type: RECEIVE_BTC_NODE_INFO,
    payload: info
  }
}

export const fetchLastBlock = () => {

  let url = 'https://blockexplorer.com/api/status?q=getLastBlockHash';

  return dispatch => {
    dispatch(requestLastBlock());
    fetch(url)
    .then(res => res.json())
    .then(json => dispatch(receiveLastBlock(json)))
    .catch(err => { throw err; })
  };
}

export const requestLastBlock = () => {
  return {
    type: REQUEST_LAST_BLOCK
  };
}

export const receiveLastBlock = (lastblock) => {
  return {
    type: RECEIVE_LAST_BLOCK,
    payload: lastblock
  }
}
