import React from "react";
import classes from "./DropDownTab.module.css";
import DropDownContent from "./DropDownContent/DropDownContent";
import clsx from "clsx";

const DropDownTab = ({tab, activeTabId, setActiveTabId}) => {
    const onClickHandler = (id) => {
        activeTabId.includes(id) ? setActiveTabId(prev => prev.filter(item => item !== id)) : setActiveTabId(prev => [...prev, id]);
    }

    return (<div>
        <div className={classes.isDropdown}>
            <a href={tab.link}>{tab.tabTitle}</a>
            <img className={clsx({[classes.flipped]: activeTabId.includes(tab.id)})}
                 src="https://icon-library.com/images/white-down-arrow-icon/white-down-arrow-icon-7.jpg" alt="img"
                 onClick={() => onClickHandler(tab.id)}/>
        </div>
        <hr className={classes.hr}/>
        {activeTabId.includes(tab.id) ? <DropDownContent activeTabId={activeTabId} tab={tab}/> : null}
    </div>)
}

export default DropDownTab;
