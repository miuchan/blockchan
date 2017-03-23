import { CHANGE_UNIT } from '../constants/ActionTypes';

export const changeUnit = unit => {

  return {
    type: CHANGE_UNIT,
    payload: unit
  }
}
