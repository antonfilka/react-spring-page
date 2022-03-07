import React from "react";
import classes from "./Tabs.module.css";
import Switcher from "./Switcher/Switcher";
import Tab from "./Tab/Tab";
import DropdownTab from "./DropdownTab/DropdownTab";


const Tabs = (props) => {
    return(
        <div className={classes.tabsWrapper}>
            <div className={classes.tabs}>
                {props.tabs.map((tab) => {
                    if (tab.isDropdown) {
                        return (<DropdownTab key={tab.id} tab={tab}/>)
                    } else {
                        return (<Tab key={tab.id} link={tab.link} tabTitle={tab.tabTitle}/>)
                    }
                })
                }
            </div>
            <Switcher className={classes.switcher}/>
    </div>
    )
}

export default Tabs;