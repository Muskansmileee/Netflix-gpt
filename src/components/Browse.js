import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useNowPlayingMovies(); //call hook
  usePopularMovies(); //call hook
  useTopRatedMovies(); //call hook
  useUpcomingMovies(); //call hook

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      
      {/* MainContainer
            - video
          SecondaryContainer 
            - movies list
      */}
    </div>
  );
};

export default Browse;
