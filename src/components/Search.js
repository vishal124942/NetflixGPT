import React from "react";
import { BG_URL } from "../utils/constants";
import SearchBar from "./SearchBar";
import SearchMovieSuggestions from "./SearchMovieSuggestions";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="Bg-logo" />
      </div>
      <SearchBar />
      <SearchMovieSuggestions />
    </div>
  );
};

export default GptSearch;
