import React, {useContext} from 'react';
import classes from './Link.module.scss';
import {NavLink} from 'react-router-dom';
import { ColorContext, IsDarkContext } from '../../contexts/ThemeContext';

const activeStyle = {color: '#5f9ea0',textDecoration: 'underline'};

function Link({to, children,exact}) {
    const  color  = useContext(ColorContext);
    const  IsDark = useContext(IsDarkContext);
    const theme = IsDark ? color : "";
    return (
        <li className={classes.NavbarItem} style={{color:theme.syntax}}>
            <NavLink  style={{color:theme.syntax}} className={classes.Link} to={to} activeStyle={activeStyle} exact={exact}>
                {children}
            </NavLink>
        </li>
    )
}
export default Link;