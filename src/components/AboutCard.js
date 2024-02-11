import React from "react";

const AboutCard = ({ about }) => {
  return (
    <div className="flex hover:scale-105 duration-150 flex-col w-96 h-64 space-y-4 rounded-xl bg-white shadow-2xl text-center">
      <h1 className="font-bold text-lg pt-4">{about.heading}</h1>
      <p className="w-full whitespace-pre-line px-3">{about.description}</p>
    </div>
  );
};

export default AboutCard;
