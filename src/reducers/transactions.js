import {
  WAITING_LATEST_TRANSACTION,
  RECEIVE_LATEST_TRANSACTION
 } from '../constants/ActionTypes';

const initTransactionsState = {
  status: 'waiting',
  transactions: []
}

function transactions(state = initTransactionsState, action) {
  switch (action.type) {
    case WAITING_LATEST_TRANSACTION:
      return  Object.assign({}, state, {
        status: 'waiting'
      });
    case RECEIVE_LATEST_TRANSACTION:
      return  Object.assign({}, state, {
        status: 'received',
        transactions: action.payload
      });
    default:
      return state;
  }
}

export default transactions;
