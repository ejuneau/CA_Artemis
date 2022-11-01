import React, { useState } from "react";
import { useSelector } from 'react-redux';

import './Posts.css'
import Post from './Post/Post';
import Loading from './Loading';
import Reddit from '../../util/Reddit';

const selectPosts = state => state.posts.posts;

export default function Posts(props) {

        const posts = useSelector(selectPosts);
        console.log(posts);
        return (
                <div className="posts">
                        {

                                props.posts?(props.posts.map(post => {return <Post post={post} key={post.id} />})):<Loading />
                        }    
                </div>
        )
}