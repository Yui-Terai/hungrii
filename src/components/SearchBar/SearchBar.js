import React from "react";
import "./SearchBar.css";

const sortByOptions = {
  "Best Match": best_match,
  "Highest Rated": rating,
  "Most Reviewed": review_count
};

class SearchBar extends React.Component {
  renderSortByOptions(sortByOptions) {
    return Object.keys(sortByOptions).map(sortByOptions => {
      let sortByOptionValue = sortByOptions[sortByOptions];
      <li key={sortByOptions}>{sortByOptionValue}</li>;
    });
  }

  render() {
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{this.renderSortByOptions(sortByOptions)}</ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
        <a>Let's Go</a>
      </div>
    </div>;
  }
}

export default SearchBar;
