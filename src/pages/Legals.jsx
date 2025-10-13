import React from "react";
import HeroSection from "../components/common/HeroSection";
import LegalComponent from "../components/legal/LegalComponent";
import RegulatoryComplianceComponent from "../components/services/RegulatoryCompliance/RegulatoryComplianceComponent";
import RegulatoryCompliance from "../components/services/RegulatoryCompliance/RegulatoryComplianceNew";

const Legals = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 to-green-200 w-full h-full flex justify-center items-center flex-col">
        <HeroSection title="Legal" />
        <div
          className=" w-full  flex flex-col justify-between
        items-center "
        >
          <RegulatoryCompliance />
          {/* <LegalComponent /> */}
        </div>
      </div>
    </>
  );
};

export default Legals;
