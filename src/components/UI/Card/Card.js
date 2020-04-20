import React from 'react';
import classes from './Card.module.scss'

function Card(props) {
    return (
        <div className={classes.Card} style={{ width:props.width ? props.width : '100%'  }}>
           {props.children}
        </div>
    )
}
export default Card;