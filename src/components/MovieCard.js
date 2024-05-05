import React from "react";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="px-1">
      <img
        className="max-w-44"
        alt="Movie Card"
        src={"https://image.tmdb.org/t/p/w500/" + posterPath}
      />
    </div>
  );
};

export default MovieCard;
