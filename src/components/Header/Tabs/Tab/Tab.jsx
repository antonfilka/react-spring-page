import React from "react";
import classes from "./Tab.module.css";

const Tab = (props) => {
    const {link, tabTitle} = props;
    return(
        <div className={classes.nonDropTab}>
            <a href={link}><h4>{tabTitle}</h4></a>
        </div>


    )
}

export default Tab;