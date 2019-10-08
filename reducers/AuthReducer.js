import { 
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_LOADING,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAIL,
  CREATE_USER_FAIL,
  CREATE_USER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = { 
  loginEmail: '',
  loginPassword: '',
  user: null,
  loginErrorMessage: '',
  registerErrorMessage: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, loginEmail: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, loginPassword: action.payload };
      
    case LOGIN_USER_LOADING:
      return { ...state, loading: true, loginErrorMessage: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload, };
    case LOGIN_USER_FAIL:
      return { ...state, loginErrorMessage: action.payload, loginPassword: '', loading: false };

    case CREATE_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case CREATE_USER_FAIL:
      return { ...state, registerErrorMessage: action.payload, loading: false };
    default:
      return state;
  }
};
