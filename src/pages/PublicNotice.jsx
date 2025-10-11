import React from "react";
import HeroSection from "../components/common/HeroSection";
import Notice from "../components/publicNotice/Notice";
import NoticeNew from "../components/publicNotice/NoticeNew";

const PublicNotice = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 to-green-200 w-full h-full flex justify-center items-center flex-col">
        <HeroSection title="Public Notices" />
        <div
          className=" w-full  flex flex-col justify-center
          items-center "
        >
          {/* <Notice/> */}
          <NoticeNew />
        </div>
      </div>
    </>
  );
};

export default PublicNotice;
