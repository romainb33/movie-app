import React from "react";

const MovieTile = ({movie, handleSelectedMovie}) => {

  const yearFromDate = (releasedDate) => {
    if (!releasedDate) return;
    return releasedDate.split("-")[0]
  }

  return (
    <li className="filmTile" onClick={() => handleSelectedMovie(movie)}>
      <p>
        {movie.title.length < 36 ? movie.title : movie.title.slice(0,34) + "..."}
        <span className="green">
          {" "}
          | {yearFromDate(movie.release_date) || "N/A"}
        </span>
      </p>
    </li>
  );
};

export default MovieTile;
