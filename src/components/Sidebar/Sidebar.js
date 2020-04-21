import React, {useState, useEffect, useContext} from 'react';
import classes from './Sidebar.module.scss';
import {Card }from '../index';
import Data from '../../data/blog.json'
import { NavLink } from 'react-router-dom';
import { ColorContext, IsDarkContext } from '../../contexts/ThemeContext';

function Sidebar(props) {
    const [posts, setPosts] = useState([]);
    useEffect (()=>{
        const posts = Data.data;
        setPosts(posts)
    },[posts]);

    const  color  = useContext(ColorContext);
    const  IsDark = useContext(IsDarkContext);
    const theme = IsDark ? color : "";
      
    return (
        <div className={classes.SidebarContainer} style={{width: props.width ,color:theme.syntax}} >
            <Card>
               <div className={classes.cardHeader}>
                   <span style={{color:theme.syntax}} className={classes.Span}>About-Us</span>
               </div>
               <div className={classes.profileImageContainer}>
                    <img className={classes.img} src={require("../../blogPostImages/img2.jpg")} alt="" />
               </div>
               <div className={classes.CardBody}>
                    <p style={{color:theme.syntax}} className={classes.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit...:)</p>
               </div>
            </Card>
            <Card>
               <div className={classes.cardHeader}>
                   <span style={{color:theme.syntax}} className={classes.Span}>social network</span>
               </div>
            </Card>
            <Card>
                <div className={classes.cardHeader}>
                    <span style={{color:theme.syntax}} className={classes.Span}>Recent Posts</span>
                </div>
                <div className={classes.RecentPosts}>
                    {
                        posts.map((post,index) =>{
                            return (
                                <NavLink key={index} to={`/post/${post.id}`} >
                                    <div className={classes.RecentPost}>
                                        <h3 style={{color:theme.syntax}} className={classes.RecentPostTitle}>{post.blogTitle}</h3>
                                        <span style={{color:theme.syntax}} className={classes.RecentPostSpan}>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                            );
                        })
                    }
                </div>
            </Card>
        </div>
      
    )
}
export default Sidebar;