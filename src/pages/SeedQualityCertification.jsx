import React from "react";
import HeroSection from "../components/common/HeroSection";
import SeedQualityNew from "../components/services/SeedQualityCertification/SeedQualityNew";

const SeedQualityCertification = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 to-green-200 w-full h-full flex justify-center items-center flex-col">
        <HeroSection title="Seed Quality Certification" />
        <div
          className=" w-full flex flex-col justify-center
          items-center"
        >
          <SeedQualityNew />
        </div>
      </div>
    </>
  );
};

export default SeedQualityCertification;
