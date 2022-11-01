import React from 'react';
import './RenderSortByOptions.css';
export default function SortByOptions(props) {
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
                return <li className={getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={() => props.handleSortByChange(sortByOptionValue)}>{sortByOption}</li>;
                });
        }
        return (
            <nav>
                {renderSortByOptions()}
            </nav>
            )
    }