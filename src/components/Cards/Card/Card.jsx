import React from 'react';
import classes from './Card.module.css';

const Card = ({ img, title, text }) => {
  return (
    <div className={classes.card}>
      <img src={img} alt="img" />
      <div className={classes.text}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
