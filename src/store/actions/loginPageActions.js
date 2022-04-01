import api from '../../http/RequestAPI';
import { setSearchString } from './homePageActions';

const SET_INPUT_USERNAME = 'SET_INPUT_USERNAME';
const SET_INPUT_PASSWORD = 'SET_INPUT_PASSWORD';
const SET_IS_AUTHORIZED = 'SET_IS_AUTHORIZED';
const SET_USER = 'SET_USER';
const SET_REGISTRATION_ERRORS = 'SET_REGISTRATION_ERRORS';
const SET_LOGIN_ERRORS = 'SET_LOGIN_ERRORS';

export const setInputUsername = payload => ({
  type: SET_INPUT_USERNAME,
  payload,
});
export const setInputPassword = payload => ({
  type: SET_INPUT_PASSWORD,
  payload,
});
export const setIsAuthorized = payload => ({
  type: SET_IS_AUTHORIZED,
  payload,
});
export const setUser = payload => ({ type: SET_USER, payload });
export const setRegistrationErrors = payload => ({
  type: SET_REGISTRATION_ERRORS,
  payload,
});
export const setLoginErrors = payload => ({
    type: SET_LOGIN_ERRORS,
    payload,
  });

export const login = (username, password) => {
  return (dispatch, getState) => {
    api
      .post('/login', { username, password })
      .then(response => {
        dispatch(setUser(response.data.user));
        dispatch(setIsAuthorized(true));
        dispatch(setInputUsername(''));
        dispatch(setInputPassword(''));
        dispatch(setLoginErrors({}));
        localStorage.setItem('token', response.data.accessToken);
      })
      .catch(error => {
        const showErrors = {
            username: '',
            password: '',
          };
          error.response?.data?.message.includes('username')
          ? (showErrors.username = error.response?.data?.message)
          : (showErrors.password = error.response?.data?.message);
          dispatch(setLoginErrors(showErrors));
      });
  };
};

export const registration = data => {
  return (dispatch, getState) => {
    api
      .post('/registration', { ...data })
      .then(response => {
        dispatch(setUser(response.data.user));
        dispatch(setIsAuthorized(true));
        dispatch(setRegistrationErrors({}));
        localStorage.setItem('token', response.data.accessToken);
      })
      .catch(error => {
        const showErrors = {
          username: '',
          password: '',
          confirmPassword: '',
          firstName: '',
          lastName: '',
          age: '',
        };
        error.response?.data?.message.includes('username')
          ? (showErrors.username = error.response?.data?.message)
          : null;
        error.response?.data?.errors?.map(
          item => (showErrors[`${item.param}`] = item.msg)
        );
        dispatch(setRegistrationErrors(showErrors));
      });
  };
};

export const logout = () => {
  return (dispatch, getState) => {
    api.post('/logout').catch(error => console.log(error.response?.data?.message));
    dispatch(setSearchString(''));
    dispatch(setUser({}));
    dispatch(setIsAuthorized(false));
    localStorage.removeItem('token');
  };
};
