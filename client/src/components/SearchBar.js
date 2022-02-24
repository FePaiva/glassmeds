import React from "react";

function SearchBar({handleSearch}) {
  return (
    <div className="search">
      <input 
        type="text"
        placeholder="Search"
        id="search"
        onChange={handleSearch} />
    </div>
  );
}

export default SearchBar;
