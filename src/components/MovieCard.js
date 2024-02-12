import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, movieId }) => {
  if (!posterPath) return null;
  return (
    <Link to={`/watch?v=${movieId}`}>
      <div className="w-48 p-4  hover:scale-110 duration-150 cursor-pointer">
        <img
          className="rounded-md"
          src={IMG_CDN_URL + posterPath}
          alt="Movie Card"
        />
      </div>
    </Link>
  );
};

export default MovieCard;
