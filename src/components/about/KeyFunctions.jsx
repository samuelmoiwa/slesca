"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid"; // Adjust path as needed
import {
  FaRegCheckCircle,
  FaWarehouse,
  FaFlask,
  FaBook,
} from "react-icons/fa";
import { GiSeedling } from "react-icons/gi";
import { motion } from "framer-motion";

export function KeyFunctions() {
  const functions = [
    {
      title: "Regulate Seed Activities",
      description: "Control and regulate all seed-related activities in Sierra Leone.",
      header: <SkeletonOne />,
      icon: <FaRegCheckCircle className="text-green-700 text-4xl" />,
      className: "md:col-span-1",
    },
    {
      title: "License & Register Operators",
      description: "Ensure seed operators are licensed and registered according to regulations.",
      header: <SkeletonTwo />,
      icon: <GiSeedling className="text-green-700 text-4xl" />,
      className: "md:col-span-1",
    },
    {
      title: "Inspect Facilities",
      description: "Inspect seed fields, warehouses, and processing facilities for quality assurance.",
      header: <SkeletonThree />,
      icon: <FaWarehouse className="text-green-700 text-4xl" />,
      className: "md:col-span-1",
    },
    {
      title: "Quality Control & Certification",
      description: "Conduct seed sampling, testing, quality control, and certification processes.",
      header: <SkeletonFour />,
      icon: <FaFlask className="text-green-700 text-4xl" />,
      className: "md:col-span-2",
    },
    {
      title: "Update National Catalogue",
      description: "Maintain the National Seed Catalogue aligned with ECOWAS standards.",
      header: <SkeletonFive />,
      icon: <FaBook className="text-green-700 text-4xl" />,
      className: "md:col-span-1",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[90rem]">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-green-800">
            Key Functions
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Learn how SLeSCA ensures quality and compliance in the seed sector.
          </p>
        </div>

        {/* Grid Layout */}
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
          {functions.map((func, index) => (
            <BentoGridItem
              key={index}
              title={func.title}
              description={
                <span className="text-sm">{func.description}</span>
              }
              header={func.header}
              className={func.className}
              icon={func.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

// Skeleton Components (Reused from the provided code)
const SkeletonOne = () => (
  <motion.div
    initial="initial"
    whileHover="animate"
    className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-black/[0.2] dark:bg-dot-white/[0.2] flex-col space-y-2"
  >
    <div className="w-full bg-gray-200 h-4 rounded-full" />
  </motion.div>
);

const SkeletonTwo = () => (
  <motion.div
    initial="initial"
    animate="animate"
    whileHover="hover"
    className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-black/[0.2] dark:bg-dot-white/[0.2] flex-col space-y-2"
  >
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="w-[90%] h-4 bg-gray-200 rounded-full"
        style={{ maxWidth: `${Math.random() * (100 - 50) + 50}%` }}
      />
    ))}
  </motion.div>
);

const SkeletonThree = () => (
  <motion.div
    className="h-full w-full rounded-lg bg-gradient-to-r from-green-300 to-green-600"
    style={{
      backgroundSize: "400% 400%",
    }}
  />
);

const SkeletonFour = () => (
  <motion.div className="w-full h-full flex justify-center items-center bg-gray-200 rounded-lg">
    <p className="text-gray-700 text-sm">Processing...</p>
  </motion.div>
);

const SkeletonFive = () => (
  <motion.div
    initial="initial"
    whileHover="animate"
    className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-black/[0.2] dark:bg-dot-white/[0.2] flex-col space-y-2"
  >
    <div className="w-full bg-gray-200 h-4 rounded-full" />
    <div className="w-[70%] bg-gray-200 h-4 rounded-full ml-auto" />
  </motion.div>
);

export default KeyFunctions;
