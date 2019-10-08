import firebase from 'firebase';
import { Location, Permissions } from 'expo';

import {
  USER_CURRENT_LOCATION,
  USER_CURRENT_LOCATION_LOADING,
  REGION_CHANGE,
  USER_LOCATION_PERMISSION_DENIED,
  PARKING_MARKERS
} from './types';

export const getCurrentUserLocation = () => async dispatch => {
  dispatch({ type: USER_CURRENT_LOCATION_LOADING });
  this._getLocationAsync(dispatch);
}

export const onRegionChange = (region) => {
  return { type: REGION_CHANGE, payload: region };
}

export const getParkingMarkers = () => async dispatch => {
  try {
    await firebase.database().ref('parking')
    .on('value', snapshot => {
    dispatch({ type: PARKING_MARKERS, payload: snapshot.val() });

    console.log('Fetched parking markers...');
  });
  } catch (error) {
    console.log(error);
  }
} 

_getLocationAsync = async (dispatch) => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted') {
    return dispatch({ type: USER_LOCATION_PERMISSION_DENIED });
  } else {
   let { coords } = await Location.getCurrentPositionAsync({});
   return dispatch({ type: USER_CURRENT_LOCATION, payload: { longitude: coords.longitude, latitude: coords.latitude }});
  }
}
