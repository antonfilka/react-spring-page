import React, {useState} from "react";
import classes from "./Cards.module.css";
import debounce from "lodash.debounce";
import Card from "./Card/Card";
import NoCardsPlug from "./NoCardsPlug/NoCardsPlug";


const getFilteredCards = (query, cards) => {
    return (
        cards.filter((card) => {
            return (
                card.title.toLowerCase().includes(query) ||
                card.text.toLowerCase().includes(query)
            )
        }).map((card) => {
            return (
                <Card key={card.id.toString()} img={card.img} title={card.title} text={card.text}/>
            )
        }).length < 1 ? <NoCardsPlug/> : cards.filter((card) => {
            return (
                card.title.toLowerCase().includes(query) ||
                card.text.toLowerCase().includes(query)
            )
        }).map((card) => {
            return (
                <Card key={card.id.toString()} img={card.img} title={card.title} text={card.text}/>
            )
        })
    )
}


const Cards = (props) => {

    const [query, setQuery] = useState("");
    const filteredCards = getFilteredCards(query, props.cards);
    const updateQuery = (e) => setQuery(e.target.value);
    const debouncedOnChange = debounce(updateQuery, 300);

    return(
        <div className={classes.main}>
            <div className={classes.search}>
                <input type="search" placeholder="Enter what to find..." onChange={debouncedOnChange}/>
            </div>
            <div className={classes.cards}>
                {filteredCards}
            </div>
        </div>
    )
}

export default Cards;