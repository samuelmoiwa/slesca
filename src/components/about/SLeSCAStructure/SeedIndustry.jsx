import React from "react";
import {
  FaUserTie,
  FaCogs,
  FaClipboardList,
  FaFlask,
  FaProjectDiagram,
  FaEnvelope,
  FaShoppingCart,
  FaBalanceScale,
} from "react-icons/fa";

const SeedIndustry = () => {
  const units = [
    {
      title: "Executive Director's Office",
      description:
        "The Executive Director's Office serves as the nerve center of SLeSCA, driving the agency's vision, mission, and strategic goals. It ensures alignment with national seed policy and international standards, builds partnerships, and promotes transparency and accountability.",
      icon: <FaUserTie className="w-12 h-12 text-blue-500" />,
    },
    {
      title: "Administration Office",
      description:
        "The Administration Office manages SLeSCA's internal and external logistical needs, including transportation, IT infrastructure, support staff, and procurement. It ensures smooth day-to-day operations and supports the agency's broader objectives.",
      icon: <FaCogs className="w-12 h-12 text-green-500" />,
    },
    {
      title: "Secretariat",
      description:
        "The Secretariat coordinates governance and strategic decision-making, supporting the Board of Directors and subcommittees. It oversees the Variety Release and Registration Committee (VRRC) and ensures seamless communication between governance bodies and operational units.",
      icon: <FaClipboardList className="w-12 h-12 text-purple-500" />,
    },
    {
      title: "Technical Unit",
      description:
        "The Technical Unit ensures seeds meet quality and certification standards. It supervises field inspectors, manages the Mile 91 laboratory, and provides specialized training for staff. It safeguards the credibility of SLeSCA's certification process.",
      icon: <FaFlask className="w-12 h-12 text-red-500" />,
    },
    {
      title: "Projects Unit",
      description:
        "The Projects Unit designs and implements initiatives to improve seed production, certification, and distribution. It collaborates with international organizations, secures funding, and focuses on capacity building for farmers and seed producers.",
      icon: <FaProjectDiagram className="w-12 h-12 text-yellow-500" />,
    },
    {
      title: "Secretary's Office",
      description:
        "The Secretary's Office ensures smooth communication and coordination across all units. It handles official correspondence, manages schedules, and maintains organized records. It acts as a point of contact for the Executive Director and senior officials.",
      icon: <FaEnvelope className="w-12 h-12 text-pink-500" />,
    },
    {
      title: "Business Unit",
      description:
        "The Business Unit ensures the availability and accessibility of certified seeds through seed shops and distribution channels. It monitors stock levels, tracks sales, and engages with private sector actors to enhance market efficiency.",
      icon: <FaShoppingCart className="w-12 h-12 text-indigo-500" />,
    },
    {
      title: "Legal Unit",
      description:
        "The Legal Unit provides legal support, ensuring compliance with national seed legislation and international agreements. It drafts contracts, addresses disputes, and safeguards SLeSCA's interests in legal matters.",
      icon: <FaBalanceScale className="w-12 h-12 text-teal-500" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Seed Industry Units
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {units.map((unit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{unit.icon}</div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  {unit.title}
                </h2>
                <p className="text-gray-600">{unit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeedIndustry;
