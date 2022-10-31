import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Reddit.css';
import Post from  '../Feed/Posts/Post/Post';

export default function Reddit(props) {


    useEffect(() => {
        const getPosts = async () => {
            const response = await axios.get(`https://www.reddit.com/r/${props.subreddit}/${props.sortBy}.json`);
            props.setPosts(response.data.data.children.map(post => {
                console.log(props.sortBy)
                return post.data
            }));
        }
        getPosts();
    }, []);
    return (
        <div className="posts">
            {
                props.posts.map(post => {
                    return <Post 
                    post={post}
                    key={post.id}
                    />
                })
            }
        </div>
    )

    }
           
            