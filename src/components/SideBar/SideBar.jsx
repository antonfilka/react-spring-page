import React, {useState} from "react";
import classes from "./SideBar.module.css";


const SideBar = (props) => {

    const overlayOpen = {height: '100%'};
    const overlayClose = {height: '0'};
    const showDropContent = {display: 'block'};
    const hideDropContent = {display: 'none'};
    const rotateArrow = {rotate: "180"};

    const onclickHandler = (index, arr) => {
        const newArr = [...arr];
        newArr[index].isActive ? newArr[index].isActive = false : newArr[index].isActive = true;
        props.setTabs(newArr);
    }

    return(
        <div className={classes.overlay} style={props.overlayIsActive ? overlayOpen : overlayClose}>
            <img src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close" alt="img" onClick={() => props.setOverlayIsActive(false)} className={classes.closebtn} />
            <div className={classes.overlayContent}>
                {
                    props.tabs.map((tab, index) => {
                        if (tab.isDropdown) {
                            return (
                                <div>
                                    <div className={classes.isDropdown}>
                                        <a href={tab.link}>{tab.tabTitle}</a>
                                        <img src="https://icon-library.com/images/white-down-arrow-icon/white-down-arrow-icon-7.jpg" onClick={ () => onclickHandler(index, props.tabs)} alt="img" style={tab.isActive ? rotateArrow : rotateArrow}/>
                                    </div>
                                    <hr className={classes.hr}/>
                                        <div className={classes.dropContent} style={tab.isActive ? showDropContent : hideDropContent}>
                                            {
                                            tab.tabItems.map((item) => {
                                                return (<a href={item.link}>{item.itemTitle}</a>)
                                            })
                                        }
                                        </div>
                                </div>
                            )
                        } else {
                            return (
                                <div>
                                    <a href={tab.link}>{tab.tabTitle}</a>
                                    <hr className={classes.hr}/>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default SideBar;
