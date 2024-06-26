import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const dispatch = useDispatch();
  //fetch data from TMDB Api and update store
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results)); //dispatch an action to add movies.
  };

  useEffect(() => {
    if (!nowPlayingMovies) {
      getNowPlayingMovies(); //Memoization: if now playing movies is not there, then fetch
    }
  }, []);
};

export default useNowPlayingMovies;
