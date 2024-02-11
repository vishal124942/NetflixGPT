import React, { useState } from "react";
import lang from "../utils/LanguageConstant";
import { useDispatch, useSelector } from "react-redux";
import { SEARCHED_MOVIES, YOUTUBE_API_KEY } from "../utils/constants";
import {
  AddSuggestedMovies,
  RemoveSuggestedMovies,
} from "../utils/SuggestedMoviesSlice";
import CLOSE from "../components/img/close.png";
const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchText, setsearchText] = useState("");
  const handleSearchClick = () => {
    if (searchText === "") {
      dispatch(RemoveSuggestedMovies());
      return;
    }
    getSuggMovies();
  };

  const getSuggMovies = async () => {
    try {
      const data = await fetch(
        SEARCHED_MOVIES + searchText + "&key=" + YOUTUBE_API_KEY
      );
      const json = await data.json();
      console.log(json?.items);
      dispatch(AddSuggestedMovies(json?.items));
    } catch (error) {
      console.log(error);
    }
  };
  const langkey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-20 flex justify-center  ">
      <form
        className="w-1/2  bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          value={searchText}
          onChange={(e) => setsearchText(e.target.value)}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        {searchText && (
          <img
            onClick={() => {
              setsearchText("");
              dispatch(RemoveSuggestedMovies());
            }}
            className="h-6 w-6 cursor-pointer absolute translate-x-[480px]  translate-y-8 z-10"
            src={CLOSE}
            alt=""
          />
        )}
        <button
          onClick={handleSearchClick}
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
