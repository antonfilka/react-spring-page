import React from 'react';

import classes from './Login.module.css';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  setInputUsername,
  setInputPassword,
  authorize,
} from '../../store/actions/loginPageActions';

const Login = () => {
  const dispatch = useDispatch();

  const isWarning = useSelector(state => state.loginPage.isWarning);
  const inputPassword = useSelector(state => state.loginPage.inputPassword);
  const inputUsername = useSelector(state => state.loginPage.inputUsername);

  const handlerButton = () => {
    dispatch(authorize(inputUsername, inputPassword));
  };

  const handlerUsernameInputChange = e => {
    dispatch(setInputUsername(e.target.value));
  };

  const handlerPasswordInputChange = e => {
    dispatch(setInputPassword(e.target.value));
  };

  return (
    <div className={clsx(classes.login, { [classes.warning]: isWarning })}>
      <div className={classes.T1}>Authentification</div>
      <input
        placeholder="Username"
        value={inputUsername}
        onChange={e => handlerUsernameInputChange(e)}
      />
      <input
        type="password"
        placeholder="Password"
        value={inputPassword}
        onChange={e => handlerPasswordInputChange(e)}
      />
      <button onClick={() => handlerButton()}>Sign in</button>
    </div>
  );
};

export default Login;
