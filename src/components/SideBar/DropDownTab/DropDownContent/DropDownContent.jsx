import React from "react";
import classes from "./DropDownContent.module.css";

const DropDownContent = (props) => {
    const {tab} = props;

    return(
        <div className={classes.dropContent} >
            {tab.tabItems.map((item) => <a key={item.id} href={item.link}>{item.itemTitle}</a>)}
        </div>
    )
}

export default DropDownContent;