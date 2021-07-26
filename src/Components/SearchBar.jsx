import React from "react";

import MovieTile from "./MovieTile";

import "../styles/SearchBar.css";

const SearchBar = ({
  search,
  setSearch,
  moviesSearched,
  SetMoviesSearched,
  setMovieSelected,
}) => {
    
  const handleSelectedMovie = (movie) => {
    setMovieSelected(movie);
    setSearch("");
    SetMoviesSearched([]);
  };
  return (
    <>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        name=""
        value={search}
        className="searchBar"
      />

      <ul className="dropdown-list">
        {moviesSearched.length === 0 && search.length >= 2 && <li>Sorry no movies found</li>}

        {moviesSearched &&
          moviesSearched.map((movie) => (
            <MovieTile
              key={movie.id}
              movie={movie}
              handleSelectedMovie={handleSelectedMovie}
            />
          ))}
      </ul>
    </>
  );
};

export default SearchBar;
