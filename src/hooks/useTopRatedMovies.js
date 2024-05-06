import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
 const dispatch = useDispatch();
 //fetch data from TMDB Api and update store
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results)); //dispatch an action to add movies.
  };

  useEffect(() => {
    getTopRatedMovies();
  },[])
}

export default useTopRatedMovies;