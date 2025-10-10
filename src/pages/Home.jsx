import React from "react";
import HeroSection from "../components/home/HeroSection";
import MissionVision from "../components/home/MissionVision";
import MissionVisionNew from "../components/home/MissionVisionNew";
import AboutNote from "../components/home/AboutNote";
import AboutNoteNew from "../components/home/AboutNoteNew";
import KeyFunctions from "../components/home/KeyFunctions";
import KeyFunctionsNew from "../components/home/KeyFunctionsNew";
import StatisticsImpact from "../components/home/StatisticsImpact";
import StatisticsImpactNew from "../components/home/StatisticsImpactNew";
import RecentProjects from "../components/home/RecentProjects";
import GetInvolved from "../components/home/GetInvolved";
import Testimonials from "../components/home/Testimonials";
import CallToAction from "../components/home/CallToAction";
import Banner from "../components/home/Banner";
import BannerNew from "../components/home/BannerNew";

const Home = () => {
  return (
    <>
      <div
        className="w-full bg-gradient-to-b from-blue-50 to-green-200 h-full flex
        justify-center items-center flex-col"
      >
        {/* <Banner /> */}
        <BannerNew />
        <div
          className=" w-full  flex flex-col justify-center
          items-center "
        >
          {/* <MissionVision /> */}
          <MissionVisionNew />
          {/* <AboutNote /> */}
          <AboutNoteNew />
        </div>
      </div>

      <>
        <GetInvolved />
      </>

      <>
        {/* <KeyFunctions /> */}
        <KeyFunctionsNew />
      </>

      {/* <StatisticsImpact /> */}
      <StatisticsImpactNew />

      <RecentProjects />

      <CallToAction />

      <Testimonials />
    </>
  );
};

export default Home;
