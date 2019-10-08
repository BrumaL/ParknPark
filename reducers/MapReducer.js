import {
  USER_CURRENT_LOCATION,
  USER_CURRENT_LOCATION_LOADING,
  USER_LOCATION_PERMISSION_DENIED,
  REGION_CHANGE,
  PARKING_MARKERS
} from '../actions/types';

const INITIAL_STATE = {
  region: {
    longitude: 18.063240,
    latitude: 59.334591,
    longitudeDelta: 0.01,
    latitudeDelta: 0.01
  },
  loading: false,
  error: '',
  locationPermission: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_CURRENT_LOCATION:
      return { 
        ...state, 
        region: {
          ...state.region,
          longitude: action.payload.longitude,
          latitude: action.payload.latitude
        }, 
        error: '', 
        loading: false,
        locationPermission: true
      };
    case USER_CURRENT_LOCATION_LOADING:
      return { ...state, loading: true, error: '' }
    case REGION_CHANGE:
      return { ...state, region: action.payload }
    case USER_LOCATION_PERMISSION_DENIED:
      return { ...state, locationPermission: false, loading: false }
    case PARKING_MARKERS:
      return { ...state, markers: action.payload }
    default:
      return state;
  }
}
