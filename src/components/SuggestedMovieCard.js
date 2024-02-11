import React from "react";

const SuggestedMovieCard = ({ movie }) => {
  return (
    <div className="flex-flex-col  w-72 hover:scale-105 duration-150 cursor-pointer bg-black  ">
      <img
        className=" w-72 h-42 rounded-xl "
        src={movie?.snippet?.thumbnails?.high?.url}
        alt="Movie Logo"
      />
      <p className="font-bold text-white w-full  whitespace-pre-line">
        {movie?.snippet?.title}
      </p>
    </div>
  );
};

export default SuggestedMovieCard;
