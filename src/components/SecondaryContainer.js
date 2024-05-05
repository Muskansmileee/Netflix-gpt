import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  //get movie data from store
  const movies = useSelector(store => store.movies);

  return (
    <div className="bg-black">
      <div className="relative -mt-36">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      </div>
     
       {/*
        MoviesList - Popular
        MoviesList - Trending
        MoviesList - New Releases
     */}
    </div>
  )
}

export default SecondaryContainer