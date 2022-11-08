import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Reddit from '../util/Reddit';
import './SearchBar.css';




export default function SearchBar(props) {

    const [ isFocus, setIsFocus ] = useState(false);
    const [ subredditQuery, setSubredditQuery ] = useState('');
    const [ subredditSearchResults, setSubredditSearchResults ] = useState([]);
    
    function renderSearchResults() {
        if (isFocus) {
            //console.log(subredditSearchResults)
            return subredditSearchResults.map(searchResult => {
                // console.log(searchResult);
                return <li className="subreddit-search-results-result" key={searchResult} onClick={() => {props.handleSubredditChange(searchResult)}}>{searchResult}</li>
        })
        }
    }

    function searchSubreddits(subredditQuery) {
        Reddit.searchSubreddits(subredditQuery).then(subredditSearchResults => {
            //console.log(subredditSearchResults)
            setSubredditSearchResults(subredditSearchResults);
        })
    }


    useEffect(() => {
        console.log(`useEffect(): Change in subredditQuery detected! Searching for subreddits matching Query ${subredditQuery}...`);
            searchSubreddits(subredditQuery);
    }, [subredditQuery])





    return (
        <div className="subreddit-search">
            <div className="subreddit-search-bar">
                <input placeholder={`browsing /r/${props.subreddit}...`} className="subreddit-search-bar-input" onFocus={() => {setIsFocus(true)}} onBlur={() => {setTimeout(() => {setIsFocus(false);}, 200)}} onChange={newQuery => setSubredditQuery(newQuery.target.value)}/>
                <FontAwesomeIcon icon={solid('magnifying-glass')} color="#FAB734"className="subreddit-search-bar-icon"/>
            </div>
            <div className="subreddit-search-results">
                {renderSearchResults()}
            </div>
        </div>
    )
}

