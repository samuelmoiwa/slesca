import React from "react";
// import HeroSection from '../components/about/recentProjects/HeroSection'
import HeroSection from "../components/common/HeroSection";
import RecentProjectsComponent from "../components/about/recentProjects/RecentProjectsComponent";
import RecentProjectsNew from "../components/about/recentProjects/RecentProjectsNew";

const RecentProjects = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 to-green-200 w-full h-full flex justify-center items-center flex-col">
        <HeroSection title="SLeSCA Projects" />
        <div
          className=" w-full  flex flex-col justify-center
        items-center"
        >
          {/* <RecentProjectsComponent/> */}
          <RecentProjectsNew />
        </div>
      </div>
    </>
  );
};

export default RecentProjects;
