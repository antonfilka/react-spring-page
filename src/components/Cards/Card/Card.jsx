import React from "react";
import classes from "./Card.module.css";


const Card = (props) => {
    return(
        <div className={classes.card}>
            <img src={props.img} alt="img"/>
            <div className={classes.text} >
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>


    )
}

export default Card;