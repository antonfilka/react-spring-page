import React from "react";
import classes from "./Intro.module.css";

const Intro = () => {
    return (<div className={classes.intro}>
            <h1>Projects</h1>
            <p>From configuration to security, web apps to big data—whatever the infrastructure needs of your
                application may be, there is a Spring Project to help you build it. Start small and use just what you
                need—Spring is modular by design.</p>
        </div>
    )
}

export default Intro;