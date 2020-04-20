import React, { useState } from 'react';
import classes from './Home.module.scss';
import {  Sidebar, Card } from '../../components/index';
import  RecentPosts  from './RecentPosts/ResentPosts'

function Home() {
    const [imgs,setImgs] = useState ([
        "img3.jpg",
        "img2.jpg",
        "img1.jpg"
    ]);
      
    return (
        <div className={classes.Home}>
            <Card>
                <div className={classes.gallaryPost}>
                    <section className={classes.Section1}>
                        <div>
                            <img className={classes.img} src={require("../../blogPostImages/home.jpg")} />
                        </div>
                    </section>
                    <section className={classes.Section2}>
                        {imgs.map((img,index) => {
                            return (
                            <div key={index} className={classes.div}>
                                <img className={classes.img} src={require(`../../blogPostImages/${img}`)} />
                            </div>
                            )
                        })}
                    </section>
                </div>
            </Card>

            <section className={classes.Section3}>
                <div className={classes.div1}>
                  <RecentPosts img='100%' />
                  </div>  
                   
                <div className={classes.div2}>
                    <Sidebar width='100%' />
                </div>
            </section>
        </div>
    )
}
export default Home;