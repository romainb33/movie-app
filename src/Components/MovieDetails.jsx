import React from "react";
import "../styles/MovieDetails.css";

const MovieDetails = ({ movie }) => {
  // Change color based on the ratings
  const ratingColorsStyle = (rating) => {
    if (!rating || typeof rating !== "number") return;

    if (rating >= 7) {
      return "green";
    } else if (rating >= 4.5 && rating < 7) {
      return "yellow";
    } else {
      return "red";
    }
  };

  if (!movie) {
    return (
      <section className="MovieDetails">
        <p className="loading-message">
          Waiting <br />
          for <br />
          movie <br />
          details ...
        </p>
      </section>
    );
  }

  return (
    <section className="MovieDetails">
      <h2 className="movie-title">{movie.title}</h2>
      <div className="details">
        <img
          className={`movie-image ${!movie.poster_path ? "no_image" : ""}`}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
              : `/no_poster.svg`
          }
          alt={movie.poster_path ? `${movie.title} poster` : "No poster found"}
        />
        <div className="movie-desc">
          <h4>
            {" "}
            Released: {movie.release_date || "N/A"} | Ratings:{" "}
            <span
              className={`${ratingColorsStyle(
                movie.vote_average
              )} movie-rating`}
            >
              {movie.vote_average || "N/A"}{" "}
            </span>{" "}
          </h4>
          <p>{movie.overview}</p>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
