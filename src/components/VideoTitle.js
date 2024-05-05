import React from "react";

const VideoTitle = (props) => {
  const { title, overview } = props;

  return (
    <div className="pt-72 px-12 absolute text-white w-screen aspect-video bg-gradient-to-r from-black z-500">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-4 w-1/4">{overview}</p>
      <div>
        <button className="px-3 py-1 p-4 w-28 min-h-10 bg-white rounded-md font-semibold text-black hover:bg-slate-200">
          Play
        </button>
        <button className="px-3 ml-2 py-1 p-4 w-28 min-h-10 bg-gray-500 rounded-md font-semibold text-white bg-opacity-50 hover:bg-opacity-60">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
