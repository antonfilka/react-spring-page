import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Login.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions/loginPageActions';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showErrors = useSelector(state => state.loginPage.loginErrors);
  const passRef = useRef();
  const userRef = useRef();

  const handlerLoginButton = () => {
    dispatch(login(userRef.current.value, passRef.current.value));
  };

  const handlerRegistrationButton = () => {
    navigate('/registration');
  };


  return (
    <div className={classes.login}>
      <div className={classes.T1}>Authentification</div>
      <input placeholder="Username" ref={userRef} />
      <label className={classes.validationError}>{showErrors.username}</label>
      <input type="password" placeholder="Password" ref={passRef} />
      <label className={classes.validationError}>{showErrors.password}</label>
      <button onClick={() => handlerLoginButton()}>Sign in</button>
      <button onClick={() => handlerRegistrationButton()}>Registration</button>
    </div>
  );
};

export default Login;
