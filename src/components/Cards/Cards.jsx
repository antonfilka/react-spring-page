import React, {useState} from "react";
import classes from "./Cards.module.css";
import debounce from "lodash.debounce";
import Card from "./Card/Card";
import NoCardsPlug from "./NoCardsPlug/NoCardsPlug";
import SearchBar from "./SearchBar/SearchBar";

const Cards = (props) => {
    const {cards} = props;

    const [query, setQuery] = useState("");
    const updateQuery = (e) => setQuery(e.target.value);
    const debouncedOnChange = debounce(updateQuery, 300);

    const filteredCards = cards.filter(card => card.title.toLowerCase().includes(query) || card.text.toLowerCase().includes(query))
        .map(item => <Card key={item.id.toString()} img={item.img} title={item.title} text={item.text}/>)

    return(
        <div className={classes.main}>
            <SearchBar debouncedOnChange={debouncedOnChange}/>
            <div className={classes.cards}>
                {filteredCards.length < 1 ? <NoCardsPlug/> : filteredCards}
            </div>
        </div>
    )
}

export default Cards;