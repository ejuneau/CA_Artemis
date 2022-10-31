import React, { useState } from 'react';
import './Sidebar.css';
export default function Sidebar() {

    const [isOut, setIsOut] = useState(false);
    const [isHover, setIsHover] = useState(false);

    function handleClick() {
        setIsOut(current => !current);
    }
    function handleMouseEnter() {
        setIsHover(true);
    }
    function handleMouseLeave() {
        setIsHover(false);
    }

    const sideBarStyle ={
        transform: `translateX(${isOut ? isHover ? '1vw' : '0' : isHover ? '40vw' : '45vw'})`,
        transition: 'transform 1s ease',
    }

    return (
        <div className="sidebar" 
        style={sideBarStyle} 
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            Sidebar! Things will go here.<br></br>Todo:
            <ul>
                <li>Implement redux:<br></br>Implementing redux libraries to this app will allow for much more versatility in creating the app the way I want it. Managing state with pure React can be tricky, and the use of stores, slices, and reducers can make things much more manageable.</li>
                <li>Use state:<br></br>Right now I have statful sortby options (the sorting options in the header) but they don't update the fetch request. With Redux I'll be able to do this much more efficiently than I could with just React. I also intend to create a search bar and subreddit selector using Reddit's API. This can't be done (easily) until <p className="code">react-redux</p> is implemented however.</li>
                <li>Routes:<br></br>The App in itself works great for lurking Reddit posts. But to use all the features of Reddit, this app will need to handle different pages - comment sections, searches, etc. This cannot be done without the <p className="code">react-router</p> library.</li>
                <li>Formatting:<br></br>The styling of this website is as much of a work in progress as everything else, and I intend to add a lot more polish before I consider this project finished. Things like light/dark mode could be a fun addition too.</li>
            </ul>
        </div>
    )
}