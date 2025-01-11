import React from "react";
import { motion } from "framer-motion";
import { FaRegCheckCircle, FaSeedling, FaBook, FaBalanceScale } from "react-icons/fa";
import seedActImage from "../../../image/5.jpg"; // Replace with an actual image path

const sections = [
  {
    title: "Seed Licensing and Regulation",
    description:
      "The 2018 Seed Act empowers SLeSCA to regulate seed quality, ensuring all operators comply with national standards.",
    icon: <FaRegCheckCircle className="text-green-700 text-6xl" />,
  },
  {
    title: "National Seed Catalogue",
    description:
      "The Act mandates the maintenance of a National Seed Catalogue, updated regularly to reflect ECOWAS standards.",
    icon: <FaBook className="text-blue-700 text-6xl" />,
  },
  {
    title: "Farmers' Rights",
    description:
      "The Seed Act promotes sustainable farming practices and protects farmers' rights to access quality seeds.",
    icon: <FaSeedling className="text-green-500 text-6xl" />,
  },
  {
    title: "Compliance and Enforcement",
    description:
      "Strict penalties and regular inspections ensure adherence to the Seed Act, safeguarding agricultural integrity.",
    icon: <FaBalanceScale className="text-yellow-500 text-6xl" />,
  },
];

const SeedsActComponent = () => {
  return (
    <section className="bg-green-50 py-16">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-green-800">The 2018 Seed Act</h1>
          <p className="text-gray-600 mt-4 text-lg">
            Learn about the cornerstone of Sierra Leone's seed quality and regulation framework.
          </p>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:w-1/2">
            <img
              src={seedActImage}
              alt="Seed Act"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h2 className="text-3xl font-semibold text-green-700">About the Seed Act</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The 2018 Seed Act established the Sierra Leone Seed Certification Agency (SLeSCA),
              laying the foundation for regulating seed quality, ensuring compliance, and fostering sustainable agriculture.
              It empowers farmers, protects rights, and promotes sustainable farming practices.
            </p>
          </div>
        </motion.div>

        {/* Key Sections */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105"
            >
              <div>{section.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mt-4">{section.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{section.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-green-800">Want to Learn More?</h2>
          <p className="mt-4 text-gray-600">
            Explore the full 2018 Seed Act to understand its provisions and benefits for Sierra Leone’s agriculture.
          </p>
          <button className="mt-6 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800">
            Download the Seed Act
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SeedsActComponent;
