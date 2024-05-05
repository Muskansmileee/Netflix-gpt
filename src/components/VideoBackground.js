import React from "react";
import { useSelector } from "react-redux";
import useGetTrailerVideo from "../hooks/useGetTrailerVideo";

const VideoBackground = ({ movieId }) => {
  //fetch trailer video from movie Id and store trailer in store.
  useGetTrailerVideo(movieId);

  const trailerVideoFromStore = useSelector(store => store.movies?.trailerVideo); //retrieve from store.

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideoFromStore?.key + "?autoplay=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
