import React from 'react';
import classes from './Link.module.scss';
import {NavLink} from 'react-router-dom';

const activeStyle = {color: '#5f9ea0',textDecoration: 'underline'};
function Link({to, children,exact}) {
    return (
        <li className={classes.NavbarItem}>
            <NavLink className={classes.Link} to={to} activeStyle={activeStyle} exact={exact}>
                {children}
            </NavLink>
        </li>
    )
}
export default Link;