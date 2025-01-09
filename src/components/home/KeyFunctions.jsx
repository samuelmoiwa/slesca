import React from "react";
import { FaSeedling, FaClipboardCheck, FaTools, FaCertificate } from "react-icons/fa";

const keyFunctions = [
  {
    title: "Seed Quality Certification",
    description: "Ensuring that seeds meet national and international quality standards for better crop yields.",
    icon: <FaSeedling className="text-green-600 text-4xl" />,
  },
  {
    title: "Regulatory Compliance",
    description: "Monitoring and enforcing adherence to the Seed Act for all seed operators in Sierra Leone.",
    icon: <FaClipboardCheck className="text-green-600 text-4xl" />,
  },
  {
    title: "Training & Development",
    description: "Empowering farmers and stakeholders through workshops and capacity-building initiatives.",
    icon: <FaTools className="text-green-600 text-4xl" />,
  },
  {
    title: "Inspection & Licensing",
    description: "Inspecting seed fields, warehouses, and vendors to ensure compliance and issuing licenses.",
    icon: <FaCertificate className="text-green-600 text-4xl" />,
  },
];

const KeyFunctions = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[90rem]">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-800">
            Key Functions
          </h2>
          <p className="mt-4 text-gray-700 text-sm md:text-base">
            Discover how SLeSCA is transforming agriculture through its core functions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyFunctions.map((func, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{func.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{func.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{func.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFunctions;
