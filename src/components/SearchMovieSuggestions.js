import React from "react";
import { useSelector } from "react-redux";
import SuggestedMovieCard from "./SuggestedMovieCard";
const SearchMovieSuggestions = () => {
  const suggestedMovies = useSelector(
    (store) => store.suggestedMovies.showSuggestedMovies
  );
  return (
    <div className="SuggestionBox  ">
      {suggestedMovies.map((movie) => (
        <SuggestedMovieCard movie={movie} />
      ))}
    </div>
  );
};

export default SearchMovieSuggestions;
