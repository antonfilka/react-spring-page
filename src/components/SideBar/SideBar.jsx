import React, {useState} from "react";
import classes from "./SideBar.module.css";
import DropDownTab from "./DropDownTab/DropDownTab";
import Tab from "./Tab/Tab";
import clsx from "clsx";

const SideBar = ({overlayIsActive, tabs, setOverlayIsActive}) => {
    const [activeTabId, setActiveTabId] = useState([])

    return (<div
        className={clsx(classes.overlay, {[classes.overlayOpen]: overlayIsActive}, {[classes.overlayClose]: !overlayIsActive})}>
        <img className={classes.closebtn}
             src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close" alt="img"
             onClick={() => setOverlayIsActive(false)}/>
        <div className={classes.overlayContent}>
            {tabs.map(tab => tab.isDropdown ?
                <DropDownTab key={tab.id} tab={tab} activeTabId={activeTabId} setActiveTabId={setActiveTabId}/> :
                <Tab key={tab.id} tab={tab}/>)}
        </div>
    </div>)
}

export default SideBar;
