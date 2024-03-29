import React from "react";
import { Link } from "react-router-dom";

const VideoTitle = (props) => {
  return (
    <div className="VideoTitle w-screen aspect-video pt-[20%] lg:px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="lg:text-6xl font-bold ">{props.title}</h1>
      <p className="py-6 text-lg  lg:w-6/12">{props.overview}</p>
      <div className="videotitle-btns flex items-center lg:text-xl ">
        <Link
          to={`/watch?v=${props?.id}`}
          className="play-btn flex items-center bg-white text-black lg:p-4 lg:px-12  hover:bg-opacity-80 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
          <h1>Play</h1>
        </Link>
        <Link
          to={`/watch?v=${props?.id}`}
          className=" more-info flex  items-center gap-x-2 mx-2 bg-slate-400 text-white text-xl p-4 lg:px-12 bg-opacity-50 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
              clipRule="evenodd"
            />
          </svg>
          <h1>More Info</h1>
        </Link>
      </div>
    </div>
  );
};

export default VideoTitle;
