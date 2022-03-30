import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registration } from '../../store/actions/loginPageActions';

import classes from './SignUp.module.css';

const SignUp = () => {
  const dispatch = useDispatch();
  const showErrors = useSelector(state => state.loginPage.registrationErrors);

  const [values, setValues] = useState({});

  const handlerButton = () => {
    dispatch(registration(values));
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className={classes.login}>
      <div className={classes.T1}>Sign Up</div>
      <input
        placeholder="Username"
        onChange={handleInputChange}
        name="username"
      />
      <label className={classes.validationError}>{showErrors.username}</label>
      <input
        type="password"
        placeholder="Password"
        onChange={handleInputChange}
        name="password"
      />
      <label className={classes.validationError}>{showErrors.password}</label>
      <input
        type="password"
        placeholder="Repeat password"
        onChange={handleInputChange}
        name="confirmPassword"
      />
      <label className={classes.validationError}>
        {showErrors.confirmPassword}
      </label>
      <input
        placeholder="First name"
        onChange={handleInputChange}
        name="firstName"
      />
      <label className={classes.validationError}>{showErrors.firstName}</label>
      <input
        placeholder="Last name"
        onChange={handleInputChange}
        name="lastName"
      />
      <label className={classes.validationError}>{showErrors.lastName}</label>
      <input placeholder="Age" onChange={handleInputChange} name="age" />
      <label className={classes.validationError}>{showErrors.age}</label>
      <button onClick={() => handlerButton()}>Sign Up</button>
    </div>
  );
};

export default SignUp;
