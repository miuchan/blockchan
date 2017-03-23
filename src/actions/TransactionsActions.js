import {
  WAITING_LATEST_TRANSACTION,
  RECEIVE_LATEST_TRANSACTION,
  REQUEST_TXS_OF_BLOCK,
  RECEIVE_TXS_OF_BLOCK
} from '../constants/ActionTypes';
import { connect } from './SocketIOActions';

export const fetchLatestTransactions = () => {


  return (dispatch, socket) => {
    dispatch(connect());
    let transactions = [];
    socket.emit('subscribe', 'inv');
    socket.on('tx', data => {
        transactions.unshift(data);
        if (transactions.length > 10) {
          transactions.pop();
        }
        dispatch(receiveLatestTransactions(transactions));
        dispatch(waitingLatestTransactions());
      }
    );

  };
}

export const waitingLatestTransactions = () => {
  return {
    type: WAITING_LATEST_TRANSACTION
  }
}

export const receiveLatestTransactions = (transactions) => {
  return {
    type: RECEIVE_LATEST_TRANSACTION,
    payload: transactions
  }
}

export const fetchTxsOfBlock = (blockHash, pageNum = 0) => {

  let url = `https://blockexplorer.com/api/txs?block=${blockHash}&pageNum=${pageNum}`;

  return dispatch => {
    dispatch(requestTxsOfBlock(blockHash));
    fetch(url)
    .then(res => res.json())
    .then(json => dispatch(receiveTxsOfBlock(blockHash, json, pageNum + 1)))
    .catch(err => { throw err; })
  };
}

export const requestTxsOfBlock = () => {
  return {
    type: REQUEST_TXS_OF_BLOCK
  };
}

export const receiveTxsOfBlock = (blockHash, txs, pageNumNow) => {
  return {
    type: RECEIVE_TXS_OF_BLOCK,
    payload: Object.assign({}, { blockHash: blockHash, pageNumNow, ...txs} )
  }
}
