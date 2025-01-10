import React from 'react';
import logo from '../../asset/logo.jpg'; // Replace with the appropriate SLeSCA logo or image

const AboutUsSection = () => {
  return (
    <section className="py-16 w-full flex justify-center ">
      <div className="container mx-auto px-6 lg:px-20 max-w-[90rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content: Text Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              About Us
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Sierra Leone Seed Certification Agency (SLeSCA) was established under the 2018 Seed Act to regulate seed quality and support the development of a sustainable seed industry. Our mission is to ensure seed sufficiency, promote agricultural innovation, and contribute to Sierra Leone’s food security and economic growth.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              As the authority for seed regulation, SLeSCA licenses seed operators, enforces compliance with national standards, and certifies seeds to meet ECOWAS and global benchmarks. Through training programs, inspections, and partnerships, we empower farmers and stakeholders to thrive in a resilient agricultural ecosystem.
            </p>
          </div>

          {/* Right Content: Image Section */}
          <div className="flex justify-center">
            <img
              src={logo} // Replace with an actual image of SLeSCA’s activities or logo
              alt="SLeSCA Logo"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              120+ Licensed Operators
            </h4>
            <p className="text-gray-600 text-sm">
              Ensuring certified and regulated seed operators across Sierra Leone.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              45+ Certified Seed Varieties
            </h4>
            <p className="text-gray-600 text-sm">
              Promoting high-quality seeds that meet national and international standards.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              5,000+ Farmers Trained
            </h4>
            <p className="text-gray-600 text-sm">
              Empowering farmers with the knowledge and skills to boost productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

