import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
 const dispatch = useDispatch();
 //fetch data from TMDB Api and update store
  const upcomingMovies = async () => {
    const data = await fetch(
     "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addUpcomingMovies(json.results)); //dispatch an action to add movies.
  };

  useEffect(() => {
    upcomingMovies();
  },[])
}

export default useUpcomingMovies;