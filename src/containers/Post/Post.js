import React from 'react';
import classes from './Post.module.scss';
import { BlogPost, Sidebar } from '../../components/index'

function Post(props) {
    console.log(props);
    return (
        <section className={classes.Post}>
                <BlogPost {...props} />
                <Sidebar />
        </section>
    )
}
export default Post;