import React from "react";
import HeroSection from "../components/about/HeroSection";
import MissionVision from "../components/about/MissionVision";
import MissionVisionNew from "../components/home/MissionVisionNew";
import AboutUsSection from "../components/about/AboutUsSection";
import AboutUsSectionNew from "../components/about/AboutUsSectionNew";
import AuthorityOfSLeSCA from "../components/about/AuthorityOfSLeSCA";
import AuthorityOfSLeSCANew from "../components/about/AuthorityOfSLeSCANew";
import KeyFunctions from "../components/about/KeyFunctions";
import AchievementsAndImpact from "../components/about/AchievementsAndImpact";
import AchievementsAndImpactNew from "../components/about/AchievementsAndImpactNew";
import CallToAction from "../components/home/CallToAction";
import WhySLeSCAMatters from "../components/about/WhySLeSCAMatters";
import WhySLeSCAMattersNew from "../components/about/WhySLeSCAMattersNew";
import LeadershipAndTeam from "../components/about/LeadershipAndTeam";
import TestimonialsSection from "../components/about/TestimonialsSection";
import Testimonials from "../components/home/TestimonialsNew";
import { TimelineSection } from "../components/about/Timeline";
import TimelineNew from "../components/about/TimelineNew";
import CallToActionNew from "../components/home/CallToActionNew";

const About = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 to-green-200 w-full h-full flex justify-center items-center flex-col">
        <HeroSection />
        <div
          className="w-full  flex flex-col justify-center
          items-center"
        >
          {/* <MissionVision /> */}
          <MissionVisionNew />
          {/* <AboutUsSection/> */}
          <AboutUsSectionNew />
          {/* <AuthorityOfSLeSCA /> */}
          <AuthorityOfSLeSCANew />
        </div>
      </div>

      <KeyFunctions />
      {/* <AchievementsAndImpact /> */}
      <AchievementsAndImpactNew />
      {/* <CallToAction /> */}
      {/* <WhySLeSCAMatters /> */}
      <WhySLeSCAMattersNew />
      {/* <TimelineSection /> */}
      <TimelineNew />
      <CallToActionNew />
      {/* <TestimonialsSection /> */}
      <Testimonials />
    </>
  );
};

export default About;
