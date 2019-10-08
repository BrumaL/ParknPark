import firebase from 'firebase';

import { TranslateGoogleAccountErrors } from '../helpers/ErrorCodes';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_LOADING,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const createUser = (email, password) => async dispatch => {
  try {
    let { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return dispatch({ type: CREATE_USER_SUCCESS, payload: user });
  } catch (error) {
    const errorMessage = TranslateGoogleAccountErrors(error.code);
    return dispatch({ type: CREATE_USER_FAIL, payload: errorMessage });
  }
}

export const loginUser = (email, password) => async dispatch => {
  dispatch({ type: LOGIN_USER_LOADING });

  try {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    let { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
    return dispatch({ type: LOGIN_USER_SUCCESS, payload: user });

  } catch (error) {
    console.log(error);
    const errorMessage = TranslateGoogleAccountErrors(error.code);
    return dispatch({ type: LOGIN_USER_FAIL, payload: errorMessage });
  }
};

export const logOutUser = () => async dispatch => {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    console.log(error);
  }
}

