const SET_INPUT_USERNAME = 'SET_INPUT_USERNAME';
const SET_INPUT_PASSWORD = 'SET_INPUT_PASSWORD';
const SET_IS_AUTHORIZED = 'SET_IS_AUTHORIZED';
const SET_USER = 'SET_USER';
const SET_REGISTRATION_ERRORS = 'SET_REGISTRATION_ERRORS';
const SET_LOGIN_ERRORS = 'SET_LOGIN_ERRORS';

const initialState = {
  user: {
    userId: null,
    username: '',
    firstName: '',
    lastName: '',
    age: null,
  },
  isAuth: false,
  inputUsername: '',
  inputPassword: '',
  registrationErrors: {},
  loginErrors: {},
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT_USERNAME: {
      return { ...state, inputUsername: action.payload };
    }
    case SET_INPUT_PASSWORD: {
      return { ...state, inputPassword: action.payload };
    }
    case SET_IS_AUTHORIZED: {
      return { ...state, isAuth: action.payload };
    }
    case SET_USER: {
      return { ...state, user: action.payload };
    }
    case SET_REGISTRATION_ERRORS: {
      return { ...state, registrationErrors: action.payload };
    }
    case SET_LOGIN_ERRORS: {
        return { ...state, loginErrors: action.payload };
      }
    default:
      return state;
  }
};
