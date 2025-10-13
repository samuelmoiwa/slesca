import React from "react";
import HeroSection from "../components/common/HeroSection";
import FAQComponent from "../components/faq/FAQComponent";
import FAQS from "../components/faq/FAQ";
import MostRecentActivities from "../components/faq/MostRecentActivities";
import GetSupportFromExperts from "../components/faq/GetSupportFromExperts";

const FAQ = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 to-green-200 w-full h-full flex justify-center items-center flex-col">
        <HeroSection title="FAQs" />
        <div
          className=" w-full  flex flex-col justify-center
          items-center"
        >
          {/* <FAQComponent /> */}
          <FAQS />
          {/* <MostRecentActivities />
          <GetSupportFromExperts /> */}
        </div>
      </div>
    </>
  );
};

export default FAQ;
