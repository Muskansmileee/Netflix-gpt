import React from "react";
import MovieCard from "./MovieCard";
import '../../src/custom.css';

const MovieList = ({ title, movies }) => {
  return (
    <div className="pl-12">
      <h1 className="px-1 py-4 text-lg font-semibold text-white">{title}</h1>
      <div className="flex scrollable-content overflow-x-scroll">
        {
          movies?.map((movie) =>(
            <MovieCard key={movie.id} posterPath={movie?.poster_path}/>
          ))
        }    
      </div>
    </div>
  );
};

export default MovieList;
