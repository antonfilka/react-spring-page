import React from "react";
import classes from "./Tabs.module.css";
import Switcher from "./Switcher/Switcher";
import Tab from "./Tab/Tab";
import DropdownTab from "./DropdownTab/DropdownTab";

const Tabs = (props) => {
    const {tabs} = props;
    return(
        <div className={classes.tabsWrapper}>
            <div className={classes.tabs}>
                {tabs.map((tab) => tab.isDropdown
                    ? <DropdownTab key={tab.id} tab={tab}/>
                    : <Tab key={tab.id} link={tab.link} tabTitle={tab.tabTitle}/>)}
            </div>
            <Switcher className={classes.switcher}/>
    </div>
    )
}

export default Tabs;