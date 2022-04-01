import React, { useEffect } from 'react';
import classes from './Cards.module.css';
import debounce from 'lodash.debounce';
import Card from './Card/Card';
import NoCardsPlug from './NoCardsPlug/NoCardsPlug';
import SearchBar from './SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { getCards, setSearchString } from '../../store/actions/homePageActions';

const Cards = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.loginPage.isAuth);
  const cards = useSelector(state => state.homePage.cards);
  const searchString = useSelector(state => state.homePage.searchString);

  const handleSearchStringChange = debounce(
    e => dispatch(setSearchString(e.target.value)),
    300
  );

  useEffect(() => {
    if (isAuth) dispatch(getCards());
  }, [searchString, isAuth]);

  const cardsBundle = cards.map(item => (
    <Card
      key={item.projectId.toString()}
      img={item.img}
      title={item.title}
      text={item.text}
    />
  ));

  return (
    <div className={classes.main}>
      <SearchBar handleSearchStringChange={handleSearchStringChange} />
      <div className={classes.cards}>
        {cardsBundle.length < 1 ? <NoCardsPlug /> : cardsBundle}
      </div>
    </div>
  );
};

export default Cards;
