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
} from './../../store/loginPage-reducer';

const Login = () => {
  const userData = useSelector(state => state.loginPage.userData);
  const isWarning = useSelector(state => state.loginPage.isWarning);
  const inputPassword = useSelector(state => state.loginPage.inputPassword);
  const inputUsername = useSelector(state => state.loginPage.inputUsername);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  return (
    <div className={clsx(classes.login, { [classes.warning]: isWarning })}>
      <div className={classes.T1}>Authentification</div>
      <input
        placeholder="Username"
        value={inputUsername}
        onChange={e => dispatch(setInputUsername(e.target.value))}
      />
      <input
        type="password"
        placeholder="Password"
        value={inputPassword}
        onChange={e => dispatch(setInputPassword(e.target.value))}
      />
      <button onClick={() => handlerButton()}>Sign in</button>
    </div>
  );
};

export default Login;
