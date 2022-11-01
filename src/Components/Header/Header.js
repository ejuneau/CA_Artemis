import './Header.css';
import React from 'react';
import SortByOptions from '../util/RenderSortByOptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Header(props) {
    return (
        <header>
            <div className="header-spacer">
                <div className="header-title"><h1>Artemis</h1><p>for Reddit, v.1.2</p></div>
                    <SortByOptions 
                    sortBy={props.sortBy}
                    handleSortByChange={props.handleSortByChange} 
                    />
                </div>
                <div className="subreddit-search">
                    <FontAwesomeIcon icon={solid('magnifying-glass')} color="#FAB734"className="search"/>
                </div>
        </header>
    );
  }