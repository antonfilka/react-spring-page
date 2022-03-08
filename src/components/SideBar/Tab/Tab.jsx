import React from "react";
import classes from "./Tab.module.css";

const Tab = (props) => {
    const {tab} = props;
    return(
        <div>
            <a href={tab.link}>{tab.tabTitle}</a>
            <hr className={classes.hr}/>
        </div>
    )
}

export default Tab;