import React, { useState } from "react";

function Search({ onSearchChange }) {
  const [searchWord, setSearchWord] = useState("");

  function handleSearchChange(e) {
    setSearchWord(e.target.value);
    onSearchChange(e.target.value);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchWord}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
