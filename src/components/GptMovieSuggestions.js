import React from "react";
import { IMG_POSTER } from "../utils/constant";

const GptMovieSuggestions = ({title, posterPath}) => {
  
  return (
      <div className="mt-2 p-1 bg-black">
       <img
        className="max-w-44"
        alt="Movie Card"
        src={IMG_POSTER + posterPath}
      />
      </div>
  )
};

export default GptMovieSuggestions;
