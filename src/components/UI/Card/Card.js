import React, {useContext} from 'react';
import classes from './Card.module.scss'
import { IsDarkContext,ColorContext } from '../../../contexts/ThemeContext';

function Card(props) {
  const  color  = useContext(ColorContext);
  const  IsDark = useContext(IsDarkContext);
  const theme = IsDark ? color : "";

    return (
        <div className={classes.Card} style={{ width:props.width ? props.width : '100%',backgroundColor:theme.bg}}>
           {props.children}
        </div>
    )
}
export default Card;