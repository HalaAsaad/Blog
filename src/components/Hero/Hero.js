import React, {useContext} from 'react';
import classes from './Hero.module.scss';
import { Card, Logo, Navbar } from '../index'
import { ColorContext, IsDarkContext} from '../../contexts/ThemeContext';

function Hero() {
    const  color  = useContext(ColorContext);
    const  IsDark = useContext(IsDarkContext);
    const theme = IsDark ? color : "";
    return (
        <div className={classes.Hero}>
           <Card>
               <div  className={classes.div} style={{backgroundColor:theme.bg}}>
                   <Logo />
               </div>
               <Navbar />
           </Card>
        </div>
    )
}
export default Hero;