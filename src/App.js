import "./App.css";
import SearchBar from "./Components/SearchBar";
import MovieDetails from "./Components/MovieDetails";

function App() {
  return (
    <div className="App">
      <section className="searchSection">
        <h1>
          Find <br />
          your favorite movies <br />
          on Fleet Movies
        </h1>
        <SearchBar />
      </section>
      <MovieDetails />
    </div>
  );
}

export default App;
