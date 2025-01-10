"use client";

import React from "react";
import { cn } from "../../lib/utils";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid"; // Adjust path as needed
import {
  FaRegCheckCircle,
  FaWarehouse,
  FaFlask,
  FaBook,
} from "react-icons/fa";
import { GiSeedling } from "react-icons/gi";
import { motion } from "framer-motion";

import inspect_seed from '../../image/inspect_seed.jpg'
import seed_quality from '../../image/seed_quality.jpg'
import seeds from '../../image/seeds.png'

export function KeyFunctions() {
  const functions = [
    {
      title: "Regulate Seed Activities",
      description: "Control and regulate all seed-related activities in Sierra Leone.",
      header: <SkeletonOne />,
      icon: <FaRegCheckCircle className="h-6 w-6 text-green-600" />,
      className: "md:col-span-1",
    },
    {
      title: "License & Register Operators",
      description: "Ensure seed operators are licensed and registered according to regulations.",
      header: <SkeletonTwo />,
      icon: <GiSeedling className="h-6 w-6 text-green-600" />,
      className: "md:col-span-1",
    },
    {
      title: "Inspect Facilities",
      description: "Inspect seed fields, warehouses, and processing facilities for quality assurance.",
      header: <SkeletonThree />,
      icon: <FaWarehouse className="h-6 w-6 text-green-600" />,
      className: "md:col-span-1",
    },
    {
      title: "Quality Control & Certification",
      description: "Conduct seed sampling, testing, quality control, and certification processes.",
      header: <SkeletonFour />,
      icon: <FaFlask className="h-6 w-6 text-green-600" />,
      className: "md:col-span-2",
    },
    {
      title: "Update National Catalogue",
      description: "Maintain the National Seed Catalogue aligned with ECOWAS standards.",
      header: <SkeletonFive />,
      icon: <FaBook className="h-6 w-6 text-green-600" />,
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
        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
          {functions.map((func, index) => (
            <BentoGridItem
              key={index}
              title={func.title}
              description={
                <span className="text-sm">{func.description}</span>
              }
              header={func.header}
              className={cn("[&>p:text-lg]", func.className)}
              icon={func.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

// Skeleton Components with Updated Animations
const SkeletonOne = () => {
  const variants = {
    initial: { x: 0 },
    animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
  };

  const variants2 = {
    initial: { x: 0 },
    animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >

      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-green-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>

      <motion.div
        variants={variants2}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black w-2/3"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-green-500 to-violet-500 flex-shrink-0" />

      </motion.div>

      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-green-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>

    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 1,
      },
    },

  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
    initial="initial"
    animate="animate"
    whileHover="hover"
    className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
  >
    {arr.map((_, i) => (
      <motion.div
        key={"skelenton-two" + i}
        variants={variants}
        style={{
          maxWidth: Math.random() * (100 - 40) + 40 + "%",
        }}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
      ></motion.div>
    ))}
  </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #0C2083FF, #075B52FF, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
  initial="initial"
  animate="animate"
  whileHover="hover"
  className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
>
  {/* Card 1: Regulation */}
  <motion.div
    variants={first}
    className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
  >
    <img
      src= {inspect_seed} // Replace with a relevant image for "Regulation"
      alt="Regulation"
      height="100"
      width="100"
      className="rounded-full h-10 w-10"
    />
    <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
      Comprehensive Seed Regulation
    </p>
    <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
      Core Function
    </p>
  </motion.div>

  {/* Card 2: Certification */}
  <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
    <img
      src={seed_quality} // Replace with a relevant image for "Certification"
      alt="Certification"
      height="100"
      width="100"
      className="rounded-full h-10 w-10"
    />
    <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
      Quality Seed Certification
    </p>
    <p className="border border-blue-500 bg-blue-100 dark:bg-blue-900/20 text-blue-600 text-xs rounded-full px-2 py-0.5 mt-4">
      Assured Quality
    </p>
  </motion.div>

  {/* Card 3: Licensing */}
  <motion.div
    variants={second}
    className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
  >
    <img
      src={seeds} // Replace with a relevant image for "Licensing"
      alt="Licensing"
      height="100"
      width="100"
      className="rounded-full h-10 w-10"
    />
    <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
      Seed Licensing & Registration
    </p>
    <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
      Authorized Services
    </p>
  </motion.div>
</motion.div>

  );
}

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <img
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          There are a lot of cool framerworks out there like React, Angular,
          Vue, Svelte that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Use PHP.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};

export default KeyFunctions;
