import React, {useState, useEffect} from 'react';
import classes from './BlogPost.module.scss'
import {Card }from '../index';
import Data from '../../data/blog.json'


function BlogPost(props) {
   const [post, setPost] = useState({
    id:'',
    blogCategory:'',
    blogTitle:'',
    postedOn:'',
    author:'',
    blogImage:'',
    blogText:''
   });
   const [postId, setPostId] = useState("");
    useEffect (()=>{
        const postId = props.match.params.postId;
        const post = Data.data.find(post => post.id == postId)
        setPost(post);
        setPostId(postId)
    },[post, props.match.params.postId]);

    if(post.blogImage == '') return null;

    return (
        <div className={classes.BlogPost}>
            <Card>
                <div className={classes.BlogHeader}>
                    <span className={classes.BlogCategory}>{post.blogCategory}</span>
                    <h1 className={classes.BlogTitle}>{post.blogTitle}</h1>
                    <span className={classes.PostedBy}>posted on {post.postedOn} by {post.author}</span>
                </div>
                <div className={classes.PostImageContainer}>
                    <img className={classes.img} src={require(`../../blogPostImages/${post.blogImage}`)} alt='Post Image' />
                </div>
                <div className={classes.postContent}>
                    <h3 className={classes.H3}>{post.blogTitle}</h3>
                    <p className={classes.P}>{post.blogText}</p>
                </div>
            </Card>
        </div>
          
    )
}
export default BlogPost;