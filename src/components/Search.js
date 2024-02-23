import React from "react";
import { BG_URL } from "../utils/constants";
import SearchBar from "./SearchBar";
import SearchMovieSuggestions from "./SearchMovieSuggestions";

const GptSearch = () => {
  return (
    <div className=" overflow-y-scroll  w-screen h-screen ">
      <div className="absolute -z-10">
        <img
          className="w-screen h-screen object-cover"
          src={BG_URL}
          alt="Bg-logo"
        />
      </div>
      <div className="whole-search space-y-3">
        <SearchBar />
        <SearchMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
