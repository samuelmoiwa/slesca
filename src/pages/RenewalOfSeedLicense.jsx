import React from "react";
// import HeroSection from '../components/about/renewalSeedLicense/HeroSection'
import HeroSection from "../components/common/HeroSection";
import RenewalSeedLicense from "../components/about/renewalSeedLicense/RenewalSeedLicense";
import RenewalSeedLicenseNew from "../components/about/renewalSeedLicense/RenewalSeedLicenseNew";

const RenewalOfSeedLicense = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 to-green-200 w-full h-full flex justify-center items-center flex-col">
        <HeroSection title="Renewal of Seed License" />
        <div
          className=" w-full flex flex-col justify-center
          items-center "
        >
          {/* <RenewalSeedLicense/> */}
          <RenewalSeedLicenseNew />
        </div>
      </div>
    </>
  );
};

export default RenewalOfSeedLicense;
