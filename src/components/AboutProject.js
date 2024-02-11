import React from "react";
import AboutCard from "./AboutCard";
import { About } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const AboutProject = () => {
  const navigate = useNavigate();
  const backtobrowse = () => {
    navigate("/browse");
  };
  return (
    <div className="flex flex-col justify-items-start space-y-20  bg-slate-100">
      <div className="flex justify-between">
        <h1 className="font-bold text-4xl translate-x-36 translate-y-8">
          Welcome to{" "}
          <strong className="text-red-600 font-medium"> Netflix GPT</strong>
        </h1>
        <button
          onClick={backtobrowse}
          className="py-2  rounded-md px-4 mx-4 my-2 translate-y-7 -translate-x-28 bg-purple-800 text-white"
        >
          Back
        </button>
      </div>
      <div className="flex justify-center flex-wrap w-screen gap-6 ">
        {About.map((about) => (
          <AboutCard about={about} />
        ))}
      </div>
    </div>
  );
};

export default AboutProject;
