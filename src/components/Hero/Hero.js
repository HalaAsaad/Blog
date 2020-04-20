import React from 'react';
import classes from './Hero.module.scss';
import { Card, Logo, Navbar } from '../index'

function Hero() {
    return (
        <div className={classes.Hero}>
           <Card>
               <div  className={classes.div}>
                   <Logo />
               </div>
               <Navbar />
           </Card>
        </div>
    )
}
export default Hero;