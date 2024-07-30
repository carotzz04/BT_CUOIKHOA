import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      class="searchBar"
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchBar;
