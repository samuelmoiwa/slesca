import React from "react";
import HeroSection from "../components/common/HeroSection";
import DocumentComponent from "../components/documents/DocumentComponent";
import DocumentComponentNew from "../components/documents/DocumentsNew";

const Documents = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 to-green-200 w-full h-full flex justify-center items-center flex-col">
        <HeroSection title="Documents" />
        <div
          className=" w-full flex flex-col justify-center
        items-center"
        >
          {/* <DocumentComponent /> */}
          <DocumentComponentNew />
        </div>
      </div>
    </>
  );
};

export default Documents;
