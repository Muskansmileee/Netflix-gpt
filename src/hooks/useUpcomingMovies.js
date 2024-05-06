import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
 const upcomingMovies = useSelector(
    (store) => store.movies.upcomingMovies
 );
 const dispatch = useDispatch();
 //fetch data from TMDB Api and update store
  const getUpcomingMovies = async () => {
    const data = await fetch(
     "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addUpcomingMovies(json.results)); //dispatch an action to add movies.
  };

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  },[])
}

export default useUpcomingMovies;