import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { useSelector } from "react-redux";

const GptSearch = () => {
  const gptSuggestedMovies = useSelector(
    (store) => store.gpt?.suggestedGptMovies
  );

  return (
    <div>
      <div className="absolute -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Netflix-background"
        />
      </div>
      <GptSearchBar />
      <div className="flex justify-center">
        {gptSuggestedMovies &&
          gptSuggestedMovies.map((movie) => (
            <GptMovieSuggestions
              title={movie?.[0].title}
              posterPath={movie?.[0].poster_path}
            />
          ))}
      </div>

      {/*
            Gpt Search Bar
            Gpt movie suggestions
        */}
    </div>
  );
};

export default GptSearch;
