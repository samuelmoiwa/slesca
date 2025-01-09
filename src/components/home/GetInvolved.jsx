import React, { useState } from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect.js";


const GetInvolved = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

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
        <button
          className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm"
          onClick={() => setIsFormOpen(true)}
        >
          Contact Us
        </button>
      </div>

    </div>
  );
};


export default GetInvolved
