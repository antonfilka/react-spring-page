import React from "react";
import classes from "./SideBar.module.css";
import DropDownTab from "./DropDownTab/DropDownTab";
import Tab from "./Tab/Tab";
import clsx from "clsx";

const SideBar = (props) => {
    const {overlayIsActive, setOverlayIsActive, tabs, activeTabId, setActiveTabId} = props;
    const {overlay, overlayOpen, overlayClose} = classes;
    const style = clsx(overlay, {[overlayOpen]: overlayIsActive}, {[overlayClose]: !overlayIsActive});

    return(
        <div className={style} >
            <img className={classes.closebtn} src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close" alt="img" onClick={() => setOverlayIsActive(false)}/>
            <div className={classes.overlayContent}>
                {tabs.map((tab) => tab.isDropdown
                    ? <DropDownTab key={tab.id} tab={tab} activeTabId={activeTabId} setActiveTabId={setActiveTabId}/>
                    : <Tab key={tab.id} tab={tab}/>)}
            </div>
        </div>
    )
}

export default SideBar;
