import React from "react";
import {
  FaUsers,
  FaCogs,
  FaSeedling,
  FaClipboardCheck,
  FaHandsHelping,
} from "react-icons/fa";

const structureData = [
  {
    title: "Board of Directors",
    description:
      "Provides strategic direction and oversight, ensuring compliance with national and international standards.",
    icon: <FaUsers className="text-green-800 text-5xl mb-4" />,
  },
  {
    title: "Executive Management",
    description:
      "Responsible for day-to-day operations, overseeing policies, and implementing strategic goals.",
    icon: <FaCogs className="text-green-800 text-5xl mb-4" />,
  },
  {
    title: "Seed Quality Assurance Department",
    description:
      "Ensures seeds meet quality standards through testing, certification, and compliance monitoring.",
    icon: <FaSeedling className="text-green-800 text-5xl mb-4" />,
  },
  {
    title: "Farmer Training & Outreach",
    description:
      "Empowers farmers with knowledge on seed management, sustainable farming, and certified seeds.",
    icon: <FaHandsHelping className="text-green-800 text-5xl mb-4" />,
  },
  {
    title: "Inspection & Compliance Department",
    description:
      "Conducts regular inspections to ensure compliance with the 2018 Seed Act.",
    icon: <FaClipboardCheck className="text-green-800 text-5xl mb-4" />,
  },
];

const SLeSCAStructureComponent = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-100 to-green-50 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-green-200 to-transparent opacity-25 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-green-800">
            SLeSCA Structure
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Dive into the hierarchical framework of SLeSCA and learn about the
            dedicated teams and departments driving innovation and excellence in
            Sierra Leone's agricultural sector.
          </p>
        </div>

        {/* Structure Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {structureData.map((section, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="flex justify-center items-center">
                {section.icon}
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold text-green-800 text-center mt-6">
                {section.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 text-center mt-4">
                {section.description}
              </p>
            </div>
          ))}
        </div>

        {/* Hierarchical Flow */}
        {/* <div className="mt-20">
          <h3 className="text-3xl font-bold text-green-800 text-center mb-8">Organizational Hierarchy</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-green-800 h-full w-1 rounded"></div>
            <ul className="space-y-12">
              <li className="relative flex items-center">
                <div className="bg-white shadow-md p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto z-10">
                  <FaUsers className="text-green-800 text-3xl" />
                </div>
                <p className="text-center text-lg text-gray-700 mt-6">Board of Directors</p>
              </li>
              <li className="relative flex items-center">
                <div className="bg-white shadow-md p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto z-10">
                  <FaCogs className="text-green-800 text-3xl" />
                </div>
                <p className="text-center sm:text-lg text-gray-700 mt-6">Executive Management</p>
              </li>
              <li className="relative flex items-center">
                <div className="bg-white shadow-md p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto z-10">
                  <FaSeedling className="text-green-800 text-3xl" />
                </div>
                <p className="text-center text-lg text-gray-700 mt-6">Departments</p>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SLeSCAStructureComponent;
