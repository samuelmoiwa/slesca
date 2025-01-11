import React, { useState } from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect.js";
import { Link } from "react-router-dom";


const GetInvolved = () => {

  const words = [
    {
      text: "Partner with SLeSCA to promote",
      className: "text-white",
    },
    {
      text: "",
    },
    {
      text: "sustainable farming.",
      className: "text-green-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[25rem] bg-green-900">
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link
          to="/contact-us"
          className="px-8 py-3 rounded-xl bg-white text-black border border-black text-center text-sm"
        >
          Contact Us
        </Link>
      </div>

    </div>
  );
};


export default GetInvolved
