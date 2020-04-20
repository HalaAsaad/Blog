import React from 'react';
import classes from './Nav.module.scss';
import Link from './Link';

function Nav() {
    return (
        <nav className={classes.Nav}>
            <ul className={classes.Ui}>
                <Link to="/" exact>Home</Link>
                <Link to="/About" exact>AboutUs</Link>
                <Link to="/Post/1" exact>Posts</Link>
                <Link to="/ContactUs" exact>ContactUs</Link>
            </ul>
        </nav>
    )
}
export default Nav;