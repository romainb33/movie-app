import React from "react";
import "../styles/SearchBar.css";

const SearchBar = () => {
  return (
    <>
      <input type="text" name="" id="" className="searchBar" />

      <ul className="dropdown-list">
        <li className="filmTile">
          Film Title <span className="green"> | 2010 </span>
        </li>
        <li className="filmTile">
          Film Title <span className="green"> | 2010 </span>
        </li>
      </ul>
    </>
  );
};

export default SearchBar;
