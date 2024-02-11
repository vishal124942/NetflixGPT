import React from "react";
import { API_OPTIONS, IMG_CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ posterPath, movieId, index }) => {
  const navigate = useNavigate();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    navigate(`/watch/key=${json?.results[index]?.key}`);
  };
  return (
    <div
      onClick={() => {
        getMovieVideos();
      }}
      className="w-48 p-4  hover:scale-110 duration-150 cursor-pointer"
    >
      <img
        className="rounded-md"
        src={IMG_CDN_URL + posterPath}
        alt="Movie Card"
      />
    </div>
  );
};

export default MovieCard;
