import {
  PARKING_ADDRESS_CHANGED,
  PARKING_CREATE_SUCCESS,
  PARKING_CREATE_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  parkingAddress: '',
  createParkingFail: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PARKING_ADDRESS_CHANGED:
      return { ...state, parkingAddress: action.payload };
    case PARKING_CREATE_SUCCESS:
      return { ...state, ...INITIAL_STATE }
    case PARKING_CREATE_FAIL:
      return { ...state, createParkingFail: true }
    default:
      return state;
  }
};
