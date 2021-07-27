import React, { useState, useEffect } from "react";

import SearchBar from "./Components/SearchBar";
import MovieDetails from "./Components/MovieDetails";
import "./App.css";


//import moviesData from "./data/movies.json";
// API CALL
import { getMoviesFromSearch } from "./api/TMDBapi";


const App = () => {
  const [search, setSearch] = useState("");
  const [moviesSearched, SetMoviesSearched] = useState([]);
  const [movieSelected, setMovieSelected] = useState(null);
  
  //const movies = moviesData.results

  useEffect(() => {
    if (search.length >= 2) {
      getMoviesFromSearch(search)
        .then(movies => SetMoviesSearched(movies.results.slice(0,7)))
        .catch(err => console.error(err));
      // STEP 2 filtering  
      // SetMoviesSearched(
      //   movies.filter((movie) => movie.title.match(new RegExp(search, "i")))
      // );
    } else {
      SetMoviesSearched([]);
    }

  }, [search]);

  return (
    <div className="App">
      <section className="searchSection">
        <h1>
          Find <br />
          your favorite movies <br />
          on Fleet Movies
        </h1>
        <SearchBar
          search={search}
          setSearch={setSearch}
          moviesSearched={moviesSearched}
          setMovieSelected = {setMovieSelected}
          SetMoviesSearched= {SetMoviesSearched}
        />
      </section>
      <MovieDetails movie={movieSelected} />
    </div>
  );
};

export default App;
