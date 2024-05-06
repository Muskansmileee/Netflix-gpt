import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openAIConfig";
import { API_OPTIONS } from "../utils/constant";
import { addGptSuggestedMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const getUserLanguage = useSelector((store) => store.appConfig?.lang);

  const inputText = useRef();

  const handelGptSearchClick = async () => {
    //make an api call to GPT api and get movie results
    {
      /*
        const gptQuery = "Please give a list for" + inputText.current.value;
        const gptResult = await openai.chat.completions.create({
          messages: [{ role: "user", content: gptQuery }],
          model: "gpt-3.5-turbo",
        });
        console.log(gptResult.choices[0]?.message?.content); //movies list what we asked ->
       //OUtput like this we got from gpt : Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan

        const gptMoviesList = gptResult.choices[0]?.message?.content.split(","); //give me array of movies ->
       //["Andaz Apna Apna", "Hera Pheri", 'Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]
    */
    }
   //lets assume here that i have got data after gpt call and i have hardcoded it.
    const gptMoviesList = [
      "Andaz Apna Apna",
      "Hera Pheri",
      "Chupke Chupke",
      "Jaane Bhi Do Yaaro",
      "Padosan",
    ];
    //for each movie, i will search TMDB api
    const data = gptMoviesList.map((movie) => searchMovieTMDB(movie));
    //it will return array of 5 promises-> [Promise, Promise, Promise, Promise, Promise]
    //console.log(data); //promise array

    //it basically resolve all the promises and get me the result.
    const tmdbResults = await Promise.all(data); //it takes the array of promises. then i will await promise.all to resolve.
    console.log(tmdbResults);

    //now pushing all these movies to the store.
    dispatch(addGptSuggestedMovies(tmdbResults));
  };

  const searchMovieTMDB = async (movie) => {
    //this will search on a movie given in params.
    //fetch Movie From TMDB SearchAPI -> search -> movie

    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    return json.results; //api returns in this form.
  };

  return (
    <div className="pt-52">
      <form className="pl-96" onSubmit={(e) => e.preventDefault()}>
        <input
          className="border border-black w-1/2 py-3 pl-2 rounded-md focus:border-black-500 focus:outline-none"
          type="text"
          ref={inputText}
          placeholder={lang[getUserLanguage]?.gptSearchPlaceholder}
        />

        <button
          className="bg-red-500 p-3 ml-2 rounded-md text-white"
          onClick={handelGptSearchClick}
        >
          {lang[getUserLanguage]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
