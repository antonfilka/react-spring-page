import React from 'react';

import classes from './SignUp.module.css';

const SignUp = () => {
  const handlerButton = () => {};

  return (
    <div className={classes.login}>
      <div className={classes.T1}>Sign Up</div>
      <input placeholder="Username" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Repeat password" />
      <input placeholder="First name" />
      <input placeholder="Last name" />
      <input placeholder="Age" />
      <button onClick={() => handlerButton()}>Sign Up</button>
    </div>
  );
};

export default SignUp;
