import {
  REQUEST_BLOCKS,
  RECEIVE_BLOCKS
} from '../constants/ActionTypes';

const initBlocksState = {
  isFetching: false,
  blocks: [],
  blocksLength: 0,
  pagination: {},
  blockDate: ''
}
function blocks(state = initBlocksState, action) {
  switch (action.type) {
    case REQUEST_BLOCKS:
      return  Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_BLOCKS:
      return  Object.assign({}, state, {...action.payload},
        {
          blocksLength: action.payload.length,
          isFetching: false,
          blockDate: action.payload.pagination.current
        });
    default:
      return state;
  }
}

export default blocks;
