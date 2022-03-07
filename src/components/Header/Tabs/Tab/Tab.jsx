import React from "react";
import classes from "./Tab.module.css";


const Tab = (props) => {
    return(
        <div className={classes.nonDropTab}>
            <a href={props.link}><h4>{props.tabTitle}</h4></a>
        </div>


    )
}

export default Tab;