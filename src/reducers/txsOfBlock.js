import {
  REQUEST_TXS_OF_BLOCK,
  RECEIVE_TXS_OF_BLOCK
 } from '../constants/ActionTypes';

const initTxsOfBlockState = {
  blockHash: '',
  isFetching: false,
  pagesTotal: 0,
  pageNumNow: 0,
  loadingMore: false,
  txs: []
}

function txsOfBlock(state = initTxsOfBlockState, action) {
  switch (action.type) {
    case REQUEST_TXS_OF_BLOCK:
      return  Object.assign({}, state, {
        isFetching: true,
        loadingMore: true
      });
    case RECEIVE_TXS_OF_BLOCK:
      return  Object.assign(
        {},
        state,
        {...action.payload},
        {
          isFetching: false,
          loadingMore: false,
          txs: state.txs.concat(action.payload.txs)
        }
      );
    default:
      return state;
  }
}

export default txsOfBlock;
