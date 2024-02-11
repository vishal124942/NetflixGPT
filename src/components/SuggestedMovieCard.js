import React from "react";

const SuggestedMovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <div>
      <img
        className="w-8 h-8"
        src={movie?.snippet?.thumbnails?.medium?.url}
        alt="Movie Logo"
      />
      <p>{movie?.snippet?.title}</p>
    </div>
  );
};

export default SuggestedMovieCard;
