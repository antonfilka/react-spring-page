import React from "react";
import classes from "./DropdownTab.module.css";


const DropdownTab = (props) => {
    return(
        <div className={classes.dropdownTabs} key={props.tab.id}>
            <div className={classes.dropdownTab}>
                <button className={classes.dropButton}><h4>{props.tab.tabTitle}</h4></button>
                <img className={classes.dropImg} src="https://icon-library.com/images/dropdown-icon-png/dropdown-icon-png-22.jpg" alt="img"/>
                <div className={classes.dropdownContent}>
                    {props.tab.tabItems.map((tabItem) => {
                        return ( <a href={tabItem.link} key={tabItem.itemTitle + props.tab.id}>{tabItem.itemTitle}</a> )
                    })}
                </div>
            </div>
        </div>


    )
}

export default DropdownTab;