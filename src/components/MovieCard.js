import React from "react";
import { IMG_POSTER } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null;
  return (
    <div className="px-1">
      <img
        className="max-w-44"
        alt="Movie Card"
        src={IMG_POSTER + posterPath}
      />
    </div>
  );
};

export default MovieCard;
