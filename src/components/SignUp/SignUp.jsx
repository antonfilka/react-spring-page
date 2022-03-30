import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registration } from '../../store/actions/loginPageActions';

import classes from './SignUp.module.css';

const SignUp = () => {
  const dispatch = useDispatch();

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
      <input
        type="password"
        placeholder="Password"
        onChange={handleInputChange}
        name="password"
      />
      <input
        type="password"
        placeholder="Repeat password"
        onChange={handleInputChange}
        name="confirmPassword"
      />
      <input
        placeholder="First name"
        onChange={handleInputChange}
        name="firstName"
      />
      <input
        placeholder="Last name"
        onChange={handleInputChange}
        name="lastName"
      />
      <input placeholder="Age" onChange={handleInputChange} name="age" />
      <button onClick={() => handlerButton()}>Sign Up</button>
    </div>
  );
};

export default SignUp;
