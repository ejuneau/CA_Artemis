import './Header.css';
import React from 'react';
import SortByOptions from '../util/SortBy/RenderSortByOptions';
import SearchBar from '../SearchBar/SearchBar';

export default function Header(props) {
    return (
        <header>
            <div className="header-spacer">
                <div className="header-title"><h1>Artemis</h1><p>for Reddit, v.{props.version}</p></div>
                    <SortByOptions 
                    sortBy={props.sortBy}
                    handleSortByChange={props.handleSortByChange} 
                    />
                    <SearchBar 
                    handleSubredditChange={props.handleSubredditChange}
                    subreddit={props.subreddit}/>
                </div>
        </header>
    );
  }