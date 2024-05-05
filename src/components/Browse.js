import React from "react";
import Header from "./Header";
import { useSelector } from 'react-redux'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";

const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies(); //call hook
  usePopularMovies(); //call hook
  useTopRatedMovies(); //call hook
  useUpcomingMovies(); //call hook

  return (
    <div>
      <Header />
      { showGptSearch ?  <GptSearch />  : ( 
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
  
      {/* MainContainer
            - video
          SecondaryContainer 
            - movies list
      */}
    </div>
  );
};

export default Browse;
