import React from "react";
import classes from "./SearchBar.module.css";

const SearchBar = ({handleSearchStringChange}) => {
    return (<div className={classes.search}>
        <input type="search" placeholder="Enter what to find..." onChange={handleSearchStringChange}/>
    </div>)
}

export default SearchBar;