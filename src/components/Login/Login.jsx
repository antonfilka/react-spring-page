import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Login.module.css';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions/loginPageActions';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isWarning = useSelector(state => state.loginPage.isWarning);
  const passRef = useRef();
  const userRef = useRef();

  const handlerLoginButton = () => {
    dispatch(login(userRef.current.value, passRef.current.value));
  };

  const handlerRegistrationButton = () => {
    navigate('/registration');
  };

  return (
    <div className={clsx(classes.login, { [classes.warning]: isWarning })}>
      <div className={classes.T1}>Authentification</div>
      <input placeholder="Username" ref={userRef} />
      <input type="password" placeholder="Password" ref={passRef} />
      <button onClick={() => handlerLoginButton()}>Sign in</button>
      <button onClick={() => handlerRegistrationButton()}>Registration</button>
    </div>
  );
};

export default Login;
