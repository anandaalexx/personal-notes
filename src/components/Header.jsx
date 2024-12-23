import React from "react";
import Search from "./Search";

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="note-app__header">
      <h1>Personal Notes</h1>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </header>
  );
};

export default Header;
