import React from "react";
import classes from "./DropDownTab.module.css";
import DropDownContent from "./DropDownContent/DropDownContent";
import clsx from "clsx";

const DropDownTab = (props) => {
    const {tab, activeTabId,setActiveTabId} = props;

    const onClickHandler = (id) => {
        activeTabId.includes(id)
            ? setActiveTabId(prev => prev.filter(item => item !== id))
            : setActiveTabId(prev => [...prev, id]);
    }
    const {flipped} = classes;
    const style = clsx({[flipped]: activeTabId.includes(tab.id)});

    return(
        <div>
            <div className={classes.isDropdown}>
                <a href={tab.link}>{tab.tabTitle}</a>
                <img className={style} src="https://icon-library.com/images/white-down-arrow-icon/white-down-arrow-icon-7.jpg"  alt="img" onClick={ () => onClickHandler(tab.id)}/>
            </div>
            <hr className={classes.hr}/>
            {activeTabId.includes(tab.id) ? <DropDownContent activeTabId={activeTabId} tab={tab}/> : <></>}
        </div>
    )
}

export default DropDownTab;