import React, { useState } from "react";

import './Posts.css'
import Post from './Post/Post';
import Reddit from '../../util/Reddit';

export default function Posts() {
    return (
            <div className="posts">
             {
                    <Reddit />
            }
            </div>

    )
}