import React, { useEffect } from 'react';
import classes from './Cards.module.css';
import debounce from 'lodash.debounce';
import Card from './Card/Card';
import NoCardsPlug from './NoCardsPlug/NoCardsPlug';
import SearchBar from './SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchString, getCards } from '../../store/actions/homePageActions';

const Cards = () => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.homePage.cards);
  const searchString = useSelector(state => state.homePage.searchString);

  const handleSearchStringChange = debounce(
    e => dispatch(setSearchString(e.target.value)),
    300
  );

  useEffect(() => {
    dispatch(getCards(searchString));
  }, [searchString]);

  const cardsToShow = cards.map(item => (
    <Card
      key={item.id.toString()}
      img={item.img}
      title={item.title}
      text={item.text}
    />
  ));

  return (
    <div className={classes.main}>
      <SearchBar handleSearchStringChange={handleSearchStringChange} />
      <div className={classes.cards}>
        {cards.length < 1 ? <NoCardsPlug /> : cardsToShow}
      </div>
    </div>
  );
};

export default Cards;
