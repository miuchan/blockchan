import {
  REQUEST_BLOCK,
  RECEIVE_BLOCK
} from '../constants/ActionTypes';

const initBlockState = {
  isFetching: false,
  hash: '',
  size: 0,
  height: 0,
  version: 0,
  merkleroot: '',
  tx: [],
  time: 0,
  nonce: 0,
  bits: '',
  difficulty: 0,
  chainwork: '',
  confirmations: 0,
  previousblockhash: '',
  nextblockhash: '',
  reward: 0,
  isMainChain: true,
  poolInfo: {}
}
function block(state = initBlockState, action) {
  switch (action.type) {
    case REQUEST_BLOCK:
      return  Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_BLOCK:
      return  Object.assign({}, state, {...action.payload},
        { isFetching: false });
    default:
      return state;
  }
}

export default block;
