import React from "react";
import classes from "./DropdownTab.module.css";


const DropdownTab = ({tab}) => {
    return (<div className={classes.dropdownTabs} key={tab.id}>
        <div className={classes.dropdownTab}>
            <button className={classes.dropButton}>
                <div className={classes.T1}>{tab.tabTitle}</div>
            </button>
            <img className={classes.dropImg}
                 src="https://icon-library.com/images/dropdown-icon-png/dropdown-icon-png-22.jpg" alt="img"/>
            <div className={classes.dropdownContent}>
                {tab.tabItems.map(tabItem => <a href={tabItem.link}
                                                  key={tabItem.itemTitle + tab.id}>{tabItem.itemTitle}</a>)}
            </div>
        </div>
    </div>)
}

export default DropdownTab;
