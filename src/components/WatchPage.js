import React from "react";
import { LOGO } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useMoviePage from "./hooks/useWatchPage";
function WatchPage() {
  const [searchParam] = useSearchParams();
  const teaserid = searchParam.get("v");
  const teaserData = useSelector((store) => store.movies);

  useMoviePage(teaserid);
  return (
    <div className=" w-screen h-screen bg-black">
      <div className="watch absolute flex justify-between items-center w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
        <Link to={"/browse"}>
          <img className="lg:w-44" alt="netflix logo" src={LOGO} />
        </Link>
        <div className="watch-btns flex  space-x-4">
          <Link
            to={"/aboutProject"}
            className="watch-about lg:w-32 lg:h-12 px-3 lg:py-3 rounded-xl  bg-purple-800 text-white"
          >
            About Project
          </Link>
          <Link
            to={"/"}
            className="watch-about lg:w-24 lg:h-12 px-3 lg:py-3 rounded-xl  bg-purple-800 text-white"
          >
            See More
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <iframe
          className="w-full h-screen"
          src={
            "https://www.youtube.com/embed/" +
            teaserData?.movieTeaser?.key +
            "?&autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
}

export default WatchPage;
