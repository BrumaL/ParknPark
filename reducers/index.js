import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import MapReducer from './MapReducer';
import ParkingReducer from './ParkingReducer';

export default combineReducers({
  auth: AuthReducer,
  map: MapReducer,
  parking: ParkingReducer
});
