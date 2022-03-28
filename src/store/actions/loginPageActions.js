import axios from 'axios';

const SET_INPUT_USERNAME = 'SET_INPUT_USERNAME';
const SET_INPUT_PASSWORD = 'SET_INPUT_PASSWORD';
const SET_WARNING = 'SET_WARNING';
const SET_IS_AUTHORIZED = 'SET_IS_AUTHORIZED';

export const setInputUsername = payload => ({
  type: SET_INPUT_USERNAME,
  payload,
});
export const setInputPassword = payload => ({
  type: SET_INPUT_PASSWORD,
  payload,
});
export const setWarning = payload => ({ type: SET_WARNING, payload });
export const setIsAuthorized = payload => ({
  type: SET_IS_AUTHORIZED,
  payload,
});

export const authorize = (username, password) => {
  return dispatch => {
    console.log('Req sent signin');
    axios
      .post(
        'http://localhost:8000/api/login',
        {
          username: username,
          password: password,
        },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .then(response => {
        if (response.data.isAuth == true) {
          console.log('login successful');
          dispatch(setWarning(false));
          dispatch(setIsAuthorized(true));
        } else if (response.data.isAuth == false) {
          console.log('login denyed');
          dispatch(setInputUsername(''));
          dispatch(setInputPassword(''));
          dispatch(setWarning(true));
        }
      })
      .catch(error =>
        console.log('Me error handling: ' + response.data.isAuth)
      );
  };
};

export const getIsAuthorize = (username, password) => {
  return dispatch => {
    console.log('Req sent getIsAuthorize');
    axios
      .get('http://localhost:8000/api/isAuthorized', {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then(response => dispatch(setIsAuthorized(response.data.isAuth)))
      .catch(error =>
        console.log('Me error handling: ' + response.data.isAuth)
      );
  };
};

export const signOut = (username, password) => {
  return dispatch => {
    console.log('Req sent signout');
    axios
      .get('http://localhost:8000/api/signout', {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then(response => dispatch(setIsAuthorized(response.data.isAuth)))
      .catch(error =>
        console.log('Me error handling: ' + response.data.isAuth)
      );
  };
};
