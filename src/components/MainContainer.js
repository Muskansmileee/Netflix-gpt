import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector( store => store.movies?.nowPlayingMovies );
 //movies has 20 movies , I need only 1 main movie.

  if(movies ===  null) return;
  const mainMovie = movies[0];
  
  const { original_title, overview } = mainMovie; 


  return (
    // VideoBackground
    // VideoTitle
    // VideoTitle should overlap videoBackground
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground mainMovie = {mainMovie}/>  
    </div>
  )
}

export default MainContainer