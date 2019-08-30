import React from "react";
import "./SearchBar.css";

const sortByOptions = {
    'Best Match': best_match,
    'Highest Rated': rating,
    'Most Reviewed': review_count
}



class SearchBar extends React.Component {
    render() {
        const renderSortByOptions = (sortByOptions) => {
            return Object.keys(sortByOptions).map(sortByOptions => {
                let sortByOptionValue = sortByOptions[sortByOptions];
                <li key={sortByOptionValue}>{sortByOptionValue}</li>
            });
        }
        
        
    }
}


export default SearchBar;