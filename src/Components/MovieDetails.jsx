import React from "react";
import '../styles/MovieDetails.css'

const MovieDetails = () => {
  return (
    <section className="MovieDetails">
      <h2 className="movie-title">Title of the movie</h2>
      <div className="details">
        <img className="movie-image" src="https://www.themoviedb.org/t/p/w1280/5ghvx0Q5c57JoBNxFj4gSfXj6wK.jpg" alt="film" srcset="" />
        <div className="movie-desc" >
          <h4> Released: 2019-09-02 | Ratings: 8.8 </h4>
          <p>
            Two years after the events of "Change Your Mind", Steven (now 16
            years old) and his friends are ready to enjoy the rest of their
            lives peacefully. However, all of that changes when a new sinister
            Gem arrives, armed with a giant drill that saps the life force of
            all living things on Earth. In their biggest challenge ever, the
            Crystal Gems must work together to save all organic life on Earth
            within 48 hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
