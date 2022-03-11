import classes from "./Switcher.module.css";
import React from "react";

const Switcher = () => {
    return (<>
        <input className={classes.reactSwitchCheckbox} id={`react-switch-new`} type="checkbox"/>
        <label className={classes.reactSwitchLabel} htmlFor={`react-switch-new`}>
            <span className={classes.reactSwitchButton}/>
        </label>
    </>)
}

export default Switcher;