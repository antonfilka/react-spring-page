import React from "react";
import classes from "./Header.module.css";
import Tabs from "./Tabs/Tabs";


const Header = (props) => {
    return(
        <div className={classes.headWrapper}>
            <div className={classes.header}>
                <div>
                    <img className={classes.logo} href={"https://spring.io"} src={'https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg'} alt="img"/>
                </div>
                <Tabs className={classes.tabs} tabs={props.tabs}/>
                <div className={classes.burger}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' alt="img" onClick={ () => props.setOverlayIsActive(true)}/>
                </div>
            </div>
            <hr className={classes.hr}/>
        </div>


    )
}

export default Header;