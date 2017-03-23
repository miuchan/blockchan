import { CHANGE_UNIT } from '../constants/ActionTypes';

const initUnitState = {
  unit: 'btc'
};

function unit(state = initUnitState, action) {
  switch (action.type) {
    case CHANGE_UNIT:
      return Object.assign({}, state, {
        unit: action.payload
      });
    default:
      return state;
  }
}

export default unit;
