import { RECEIVE_PRICE } from '../constants/ActionTypes';

const initPriceState = {
  lastPrice: null
};

function price(state = initPriceState, action) {
  switch (action.type) {
    case RECEIVE_PRICE:
      return Object.assign({}, state, {
        lastPrice: action.payload
      });
    default:
      return state;
  }
}

export default price;
