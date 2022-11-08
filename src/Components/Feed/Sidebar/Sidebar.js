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
                <li>Develop Sidebar more</li>
                <li>Show comments by clicking on them/develop comments section functionality</li>
                <li>Show images in full-screen modal when clicked on</li>
                <li>Allow users to log in? Vote? Post? Comment? Post shitty takes on /r/AITA?</li>
                <li>Redesign (Allow users to choose theme?)</li>
            </ul>
        </div>
    )
}