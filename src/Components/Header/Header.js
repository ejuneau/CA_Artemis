import './Header.css';
import React from 'react';

export default function Header(props) {

    const sortByOptions = {
        "best": "",
        "new": "new",
        "hot": "hot",
        "top": "top",
    }

    function getSortByClass(sortByOption) {
        if (props.sortBy === sortByOption) {
            return 'active';
        } else return ''
    }

    function renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li className={getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={() => props.onClickSortBy(sortByOptionValue)}>{sortByOption}</li>;
        });
    }

    return (
        <header>
            <div className="header-spacer">
                <div className="header-title"><h1>Artemis</h1><p>for Reddit, v.0.1</p></div>
                <nav>
                    {renderSortByOptions()}
                </nav>
            </div>
        </header>
    );
  }