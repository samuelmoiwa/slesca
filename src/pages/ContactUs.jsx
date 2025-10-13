import React from "react";
import HeroSection from "../components/common/HeroSection";
// import ContactUsComponent from "../components/contactUs/ContactUsComponent";
import ContactUsNew from "../components/contactUs/ContactUsNew";

const ContactUs = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 to-green-200 w-full h-full flex justify-center items-center flex-col">
        <HeroSection title="Contact Us" />
        <div
          className=" w-full flex flex-col justify-center
        items-center "
        >
          {/* <ContactUsComponent /> */}
          <ContactUsNew />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
