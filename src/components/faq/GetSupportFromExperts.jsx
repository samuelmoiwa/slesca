import React from "react";
import { FaUserTie, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const GetSupportFromExperts = () => {
  return (
    <section className="py-12 bg-green-100 w-full max-w-[90rem]">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800">Get Support from Experts</h2>
          <p className="text-gray-700 mt-4">
            Our experts are here to help you with all your seed certification and agricultural queries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaUserTie className="text-green-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Consult with Professionals</h3>
            <p className="text-gray-600 mt-4">
              Get personalized advice from our experienced team members.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaPhoneAlt className="text-green-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Call Us Anytime</h3>
            <p className="text-gray-600 mt-4">
              Reach us at <span className="text-green-800 font-semibold">+232-XXX-XXX</span>.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaEnvelope className="text-green-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800">Email Support</h3>
            <p className="text-gray-600 mt-4">
              Drop us an email at <span className="text-green-800 font-semibold">support@slesca.gov</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetSupportFromExperts;
