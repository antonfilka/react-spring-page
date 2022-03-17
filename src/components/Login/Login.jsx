import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Login.module.css';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  setWarning,
  setInputUsername,
  setInputPassword,
  setIsAuthorized,
} from '../../store/actions/loginPageActions';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(state => state.loginPage.userData);
  const isWarning = useSelector(state => state.loginPage.isWarning);
  const inputPassword = useSelector(state => state.loginPage.inputPassword);
  const inputUsername = useSelector(state => state.loginPage.inputUsername);

  const handlerButton = () => {
    if (
      inputUsername === userData.username &&
      inputPassword === userData.password
    ) {
      navigate('/');
      dispatch(setWarning(false));
      dispatch(setIsAuthorized(true));
    } else {
      dispatch(setInputUsername(''));
      dispatch(setInputPassword(''));
      dispatch(setWarning(true));
    }
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
