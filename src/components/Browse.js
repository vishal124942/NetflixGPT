import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "./hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "./hooks/usePopularMovies";
import useUpcomingMovies from "./hooks/useUpcomingMovies";
import useTrendingMovies from "./hooks/useTrendingMovies";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTrendingMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <SearchBar />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
