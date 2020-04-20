import React from 'react';
import classes from './Header.module.scss';
import {Nav} from '../index';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


function Header() {
    return (
            <div  className={classes.Header}>
                  <ul className={classes.ul}>
                    <Nav/>
                  </ul>
                <div className={classes.divIcons}>
                  <FacebookIcon className={classes.Icon} />
                  <TwitterIcon className={classes.Icon} />
                  <InstagramIcon className={classes.Icon} />
                </div> 
            </div>
    )
}
export default Header;