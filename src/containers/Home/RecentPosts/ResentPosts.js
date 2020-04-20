import React from 'react';
import { Card } from '../../../components/index';
import Button from '@material-ui/core/Button';
import classes from './ResentPosts.module.scss'

function ResentPosts ({img}) {
    return (
                    <Card>
                            <img className={classes.img} src={require("../../../blogPostImages/img3.jpg")} />
                            <div className={classes.div}>
                                <span className={classes.span1}>Featured</span>
                                <h2 className={classes.h2} >Fitness Mantra To Live Fit Life</h2>
                                <span className={classes.span2}> posted on May 03,2019 by Hasan Ahmad</span>
                                <p className={classes.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                <Button variant="outlined" color="primary">
                                    View More
                                </Button>
                            </div>
                    </Card>
    );
}

export default ResentPosts;