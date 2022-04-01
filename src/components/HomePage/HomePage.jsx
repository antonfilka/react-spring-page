import React from 'react';
import classes from './HomePage.module.css';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import Cards from '../Cards/Cards';

const HomePage = () => {
  return (
    <div className={classes.App}>
      <Header className="App-header" />
      <Intro className="App-intro" />
      <Cards className="App-cards" />
    </div>
  );
};

export default HomePage;
