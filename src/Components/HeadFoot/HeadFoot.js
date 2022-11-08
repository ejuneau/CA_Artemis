import './HeadFoot.css';
import React from 'react';
import SortByOptions from '../util/SortBy/RenderSortByOptions';
import SearchBar from '../SearchBar/SearchBar';

export default function HeadFoot(props) {
    return (
            <div className={props.headFoot + "-spacer"}>
                <div className={props.headFoot + "-title"}><h1>Artemis</h1><p>for Reddit, v.{props.version}</p></div>
                    <SortByOptions 
                    sortBy={props.sortBy}
                    handleSortByChange={props.handleSortByChange} 
                    />
                    <SearchBar 
                    handleSubredditChange={props.handleSubredditChange}
                    subreddit={props.subreddit}/>
            </div>
    );
  }