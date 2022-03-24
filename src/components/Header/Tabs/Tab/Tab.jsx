import React from 'react';
import classes from './Tab.module.css';

const Tab = ({ link, tabTitle }) => {
  return (
    <div className={classes.nonDropTab}>
      <a href={link}>
        <div className={classes.T1}>{tabTitle}</div>
      </a>
    </div>
  );
};

export default Tab;
