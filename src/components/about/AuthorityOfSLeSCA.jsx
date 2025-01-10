import React from "react";
import { FaSeedling, FaUniversity, FaHandshake, FaGlobe } from "react-icons/fa";

const AuthorityOfSLeSCA = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[90rem]">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-green-800">
            Authority of the Agency
          </h2>
          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            As the leading authority for seed quality regulation, SLeSCA is entrusted with a pivotal role in Sierra Leone’s agricultural sector. Here’s how we operate.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center mb-4">
              <FaSeedling className="text-green-700 text-4xl" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 text-center">
              Implementing Partner
            </h4>
            <p className="mt-2 text-gray-600 text-sm text-center">
              Trusted partner of the National Seed Board, ensuring seamless coordination in governance.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center mb-4">
              <FaUniversity className="text-green-700 text-4xl" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 text-center">
              Semi-Autonomous
            </h4>
            <p className="mt-2 text-gray-600 text-sm text-center">
              Approved by Cabinet and ratified by Parliament to operate independently with oversight.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center mb-4">
              <FaHandshake className="text-green-700 text-4xl" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 text-center">
              Governance Alignment
            </h4>
            <p className="mt-2 text-gray-600 text-sm text-center">
              Aligned with the National Seed Secretariat for robust governance and operations.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center mb-4">
              <FaGlobe className="text-green-700 text-4xl" />
            </div>
            <h4 className="text-lg font-semibold text-gray-800 text-center">
              Global Standards
            </h4>
            <p className="mt-2 text-gray-600 text-sm text-center">
              Engages in diverse sector partnerships while adhering to international standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorityOfSLeSCA;
