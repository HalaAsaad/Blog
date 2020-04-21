import React, {useContext} from 'react';
import classes from './Header.module.scss';
import {Nav} from '../index';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { IsDarkContext, ColorContext } from '../../contexts/ThemeContext';


function Header() {
  const  color  = useContext(ColorContext);
  const  IsDark = useContext(IsDarkContext);
  const theme = IsDark ? color : "";
    return (
            <div  className={classes.Header} style={{backgroundColor:theme.bg}} >
                  <ul className={classes.ul}>
                    <Nav/>
                  </ul>
                <div className={classes.divIcons}>
                  <FacebookIcon className={classes.Icon} style={{color:theme.mainColor}} />
                  <TwitterIcon className={classes.Icon} style={{color:theme.mainColor}} />
                  <InstagramIcon className={classes.Icon}  style={{color:theme.mainColor}} />
                </div>
            </div>
    )
}
export default Header;