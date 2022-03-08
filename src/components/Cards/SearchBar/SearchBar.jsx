import React from "react";
import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
    const {debouncedOnChange} = props;
    return(
        <div className={classes.search}>
            <input type="search" placeholder="Enter what to find..." onChange={debouncedOnChange}/>
        </div>
    )
}

export default SearchBar;