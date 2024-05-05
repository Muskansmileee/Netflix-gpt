import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
 const dispatch = useDispatch();
 //fetch data from TMDB Api and update store
  const getPopularMovies = async () => {
    const data = await fetch(
     "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    console.log(json.results);
    dispatch(addPopularMovies(json.results)); //dispatch an action to add movies.
  };

  useEffect(() => {
    getPopularMovies();
  },[])
}

export default usePopularMovies;