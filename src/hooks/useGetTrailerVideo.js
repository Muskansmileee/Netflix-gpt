import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useGetTrailerVideo = (movieId) => {
  const trailerVideo = useSelector(
    (store) => store.movies.trailerVideo
  );
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json?.results.filter(
      (video) => video.type === "Trailer"
    ); //array of trailer objects.
    const trailer = filterData.length > 0 ? filterData[0] : json.results[0];
    //console.log(trailer);

    dispatch(addTrailerVideo(trailer)); //added in store
  };

  useEffect(() => {
    !trailerVideo && getMovieTrailer();
  }, []);
};

export default useGetTrailerVideo;
