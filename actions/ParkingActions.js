import firebase from 'firebase';
import { Location } from 'expo';

import {
  PARKING_ADDRESS_CHANGED,
  PARKING_CREATE_SUCCESS,
  PARKING_CREATE_FAIL
} from './types';

export const parkingAddressChanged = (text) => {
  return {
    type: PARKING_ADDRESS_CHANGED,
    payload: text
  };
};

export const parkingCreate = (streetAddress) => async dispatch => {
  const { currentUser } = firebase.auth();
  
  try {
    var geoCodeArray = await Location.geocodeAsync(streetAddress);
    var geoCode = geoCodeArray[0];

    var parkingData = {
      userId: currentUser.uid,
      streetAddress: streetAddress,
      latitude: geoCode.latitude,
      longitude: geoCode.longitude
    };

    var parkingKey = await firebase.database().ref().child('parking').push().key;

    var updates = {};
    updates['/parking/' + parkingKey] = parkingData;
    updates['/users/' + currentUser.uid + '/parking/' + parkingKey] = parkingData;

    await firebase.database().ref().update(updates);

    return dispatch({ type: PARKING_CREATE_SUCCESS });
    
  } catch (error) {
    console.log(error);

    return dispatch({ type: PARKING_CREATE_FAIL });
  }
};
