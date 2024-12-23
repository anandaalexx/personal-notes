import React from "react";

const Search = ({ searchQuery, setSearchQuery }) => {
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <input
      className="note-search-bar"
      type="text"
      placeholder="Search notes..."
      value={searchQuery}
      onChange={handleChange}
    />
  );
};

export default Search;
