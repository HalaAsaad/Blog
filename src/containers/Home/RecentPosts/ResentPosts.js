import React, {useContext} from 'react';
import { Card } from '../../../components/index';
import Button from '@material-ui/core/Button';
import classes from './ResentPosts.module.scss'
import { ColorContext, IsDarkContext } from '../../../contexts/ThemeContext';

function ResentPosts ({img}) {
    const  color  = useContext(ColorContext);
    const  IsDark = useContext(IsDarkContext);
    const theme = IsDark ? color : "";
    return (
                    <Card>
                            <img className={classes.img} src={require("../../../blogPostImages/img3.jpg")} />
                            <div className={classes.div}>
                                <span style={{color:theme.syntax}} className={classes.span1}>Featured</span>
                                <h2 style={{color:theme.mainColor}} className={classes.h2} >Fitness Mantra To Live Fit Life</h2>
                                <span style={{color:theme.syntax}} className={classes.span2}> posted on May 03,2019 by Hasan Ahmad</span>
                                <p style={{color:theme.syntax}} className={classes.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                <Button style={{color:theme.syntax, backgroundColor:theme.mainColor}} variant="outlined" color="primary">
                                    View More
                                </Button>
                            </div>
                    </Card>
    );
}

export default ResentPosts;