import React from 'react';
import classes from './Cards.module.css';
import debounce from 'lodash.debounce';
import Card from './Card/Card';
import NoCardsPlug from './NoCardsPlug/NoCardsPlug';
import SearchBar from './SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchString } from '../../store/actions/homePageActions';

const Cards = () => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.homePage.cards);
  const searchString = useSelector(state => state.homePage.searchString);

  const handleSearchStringChange = debounce(
    e => dispatch(setSearchString(e.target.value)),
    300
  );

  const filteredCards = cards
    .filter(
      card =>
        card.title.toLowerCase().includes(searchString) ||
        card.text.toLowerCase().includes(searchString)
    )
    .map(item => (
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
        {filteredCards.length < 1 ? <NoCardsPlug /> : filteredCards}
      </div>
    </div>
  );
};

export default Cards;
