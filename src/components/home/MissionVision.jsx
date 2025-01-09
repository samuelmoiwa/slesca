import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import WobbleCardFile from "./WobbleCard";

import _1 from "../../image/1.jpg";
import _2 from "../../image/2.jpg";
import _3 from "../../image/3.jpg";
import _4 from "../../image/4.jpg";
import _5 from "../../image/5.jpg";
import _6 from "../../image/6.jpg";

const MissionVision = ({ deviceType }) => {
  const images = [_1, _2, _3, _4, _5, _6];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="flex flex-col max-w-[80rem] w-full justify-center items-center px-4 sm:px-6 md:px-8">
      {/* Heading Section */}
      <div className="text-center w-full mb-6">
        <p className="text-green-900 font-Poppins text-2xl sm:text-3xl font-bold">
          Our Mission & Vision
        </p>
        <p className="text-gray-900 font-Poppins text-sm sm:text-lg font-semibold">
          Transforming Agriculture, Ensuring Food Security
        </p>
      </div>

      <div className="w-full flex flex-col">
        {/* Mission Section */}
        <div className="flex flex-col sm:flex-row w-full mt-8 gap-6 sm:gap-8">
          <div className="flex font-extrabold font-Poppins text-2xl sm:text-4xl
                lg:text-6xl w-full sm:w-1/2 text-gray-700 items-center gap-x-2"
          >
            <span>OUR</span>
            <span
            className="text-transparent bg-clip-text
              bg-gradient-to-r from-[#6670bc] via-[#f98a23] to-[#04542b]"
            >
              MISSION
            </span>
          </div>
          <div className="font-Poppins w-full sm:w-1/2 text-justify text-sm sm:text-base">
            Our mission is to build a strong and sustainable seed sector in Sierra Leone. By ensuring seed sufficiency, we aim
            to contribute to food security and agricultural growth. SLeSCA is dedicated to empowering farmers and stakeholders
            with the resources, training, and regulatory support they need to thrive in a resilient and self-sufficient
            agricultural ecosystem.
          </div>
        </div>

        {/* Carousel Section */}
        <div className="w-full mt-8">
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={3000}
            containerClass="carousel-container"
            itemClass="px-2"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="rounded-lg shadow-md h-[8rem] sm:h-[10rem] lg:h-[13rem] w-full"
              >
                <img
                  src={image}
                  alt={`slide-${index}`}
                  className="rounded-lg h-full w-full object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full mt-16 gap-6">
        {/* Vision Section */}
        <div className="flex flex-col w-full lg:w-1/2 gap-4 lg:gap-8 px-2">
          <div className="flex font-extrabold font-Poppins text-2xl sm:text-4xl lg:text-6xl w-full text-gray-700 gap-x-2">
            <span>OUR</span>
            <span className="text-transparent bg-clip-text
              bg-gradient-to-r from-[#6670bc] via-[#f98a23] to-[#04542b]"
            >
              VISION
            </span>
          </div>

          <div className="font-Poppins w-full text-justify text-sm sm:text-base mt-3">
            Our vision is to create a sustainable seed system in Sierra Leone, reducing dependency on imported seeds and making
            the seed sector attractive for private investment. We aim to empower local farmers, promote agricultural innovation,
            and ensure food security for all Sierra Leoneans.

            <br />
            <br />

            This vision goes beyond just seeds—it’s about building a resilient agricultural sector that drives economic growth,
            strengthens communities, and fosters a self-sufficient nation. Together, we can transform Sierra Leone into a leader
            in sustainable agriculture and food production.
          </div>
        </div>

        {/* Wobble Card Section */}
        <div className="w-full lg:w-1/2">
          <WobbleCardFile />
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
