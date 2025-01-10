import React from "react";
import { FaSeedling, FaChartLine } from "react-icons/fa";
import Lottie from 'lottie-react';
import farmer from '../../lottiefiles/farmer.json'

const MissionVision = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-green-800">Our Mission & Vision</h2>
          <div className="space-y-4">
            {/* Mission */}
            <div className="flex items-start gap-4">
              <FaSeedling className="text-green-700 text-4xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Mission</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  To establish a resilient and sustainable seed sector that ensures seed sufficiency,
                  drives agricultural innovation, and contributes to Sierra Leone’s food security,
                  economic growth, and rural development.
                </p>
              </div>
            </div>
            {/* Vision */}
            <div className="flex items-start gap-4">
              <FaChartLine className="text-green-700 text-4xl" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Vision</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  To cultivate a thriving agricultural ecosystem powered by a sustainable seed system that
                  attracts private sector investment, minimizes reliance on imported seeds, and fosters self-reliance,
                  prosperity, and food security for all Sierra Leoneans.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
        <Lottie animationData={farmer} width={300} height={300} loop={true} className="max-w-[20rem]"/>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
