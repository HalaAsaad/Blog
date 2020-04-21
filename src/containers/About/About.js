import React from 'react';
import classes from './About.module.scss'
import { Card } from '@material-ui/core';

function About() {
    return (
        <div className={classes.About}>
           <Card>
               <div  className={classes.Container}>
                    <div className={classes.Div1}>
                            <img className={classes.Img} src={require('../../blogPostImages/About.jpg')}/>
                    </div>
                    <div className={classes.Div2}>
                            <h1>Hi, I am Hala Asaad  :)</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscin</p>
                    </div>
               </div>
           </Card>
        </div>
    )
}
export default About;