import React, {useContext} from 'react';
import classes from './Logo.module.scss'
import { ColorContext, IsDarkContext} from '../../contexts/ThemeContext';

function Logo() {
    const  color  = useContext(ColorContext);
    const  IsDark = useContext(IsDarkContext);
    const theme = IsDark ? color : "";
    return (
        <div className={classes.Logo} style={{backgroundColor:theme.bg}}>
           <a style={{color:theme.mainColor}} href="#">My Gazette</a>
        </div>
    )
}
export default Logo;