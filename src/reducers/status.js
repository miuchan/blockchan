import {
  RECEIVE_SYNC_STATUS,
  RECEIVE_BTC_NODE_INFO,
  RECEIVE_LAST_BLOCK
} from '../constants/ActionTypes';

const initStatusState = {
  syncStatus: {},
  BTCNodeInfo: {},
  lastBlock: {}
}

function status(state = initStatusState, action) {
  switch (action.type) {
    case RECEIVE_SYNC_STATUS:
      return  Object.assign({}, state, {
        syncStatus: action.payload
      });
    case RECEIVE_BTC_NODE_INFO:
      return  Object.assign({}, state, {
        BTCNodeInfo: action.payload.info
      });
    case RECEIVE_LAST_BLOCK:
      return  Object.assign({}, state, {
        lastBlock: action.payload
      });
    default:
      return state;
  }
}

export default status;
