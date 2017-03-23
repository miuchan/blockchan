import { combineReducers } from 'redux';

import blocks from './blocks';
import block from './block';
import transactions from './transactions';
import status from './status';
import txsOfBlock from './txsOfBlock';
import unit from './unit';
import price from './price';



const rootReducer = combineReducers({
  blocks,
  block,
  transactions,
  status,
  txsOfBlock,
  unit,price
});

export default rootReducer;
