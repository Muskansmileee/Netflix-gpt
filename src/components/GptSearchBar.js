import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const getUserLanguage = useSelector((store) => store.appConfig?.lang);
  return (
    <div className="pt-52">
      <form className="pl-96" onSubmit={(e) => e.preventDefault()}>
        <input
          className="border border-black w-1/2 py-3 pl-2 rounded-md focus:border-black-500 focus:outline-none"
          type="text"
          placeholder={lang[getUserLanguage]?.gptSearchPlaceholder}
        />

        <button className="bg-red-500 p-3 ml-2 rounded-md text-white">
          {lang[getUserLanguage]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;



