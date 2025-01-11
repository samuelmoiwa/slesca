import React from "react";
import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaGavel,
  FaFileContract,
  FaShieldAlt,
} from "react-icons/fa";
import complianceImage1 from "../../../image/5.jpg"; // Replace with actual paths
import complianceImage2 from "../../../image/8.jpg";
import complianceImage3 from "../../../image/7.jpg";
import complianceImage4 from "../../../image/4.jpg";

const complianceSteps = [
  {
    icon: <FaBalanceScale className="text-green-700 text-4xl" />,
    title: "Seed Regulations",
    description:
      "Ensuring adherence to the 2018 Seed Act by establishing clear rules and guidelines for seed production and distribution.",
    image: complianceImage1,
  },
  {
    icon: <FaGavel className="text-green-700 text-4xl" />,
    title: "Inspection & Enforcement",
    description:
      "Regular inspections of seed facilities to enforce compliance and maintain high-quality standards.",
    image: complianceImage2,
  },
  {
    icon: <FaFileContract className="text-green-700 text-4xl" />,
    title: "Licensing & Certification",
    description:
      "All seed operators are licensed and certified to meet national and international standards.",
    image: complianceImage3,
  },
  {
    icon: <FaShieldAlt className="text-green-700 text-4xl" />,
    title: "Consumer Protection",
    description:
      "Protecting farmers and consumers by ensuring that only high-quality, certified seeds reach the market.",
    image: complianceImage4,
  },
];

const RegulatoryComplianceComponent = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-green-800">Regulatory Compliance</h2>
          <p className="text-gray-600 mt-4">
            SLeSCA ensures compliance with national and international seed regulations to safeguard quality and fairness.
          </p>
        </motion.div>

        {/* Compliance Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {complianceSteps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 mt-4 text-center">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Compliance Section */}
        <div className="bg-white shadow-lg rounded-lg mt-16 p-8">
          <motion.h3
            className="text-3xl font-bold text-gray-800 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Why Regulatory Compliance Matters
          </motion.h3>
          <motion.p
            className="text-gray-600 mt-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Maintaining regulatory compliance is vital to ensure fairness, quality, and trust in the seed industry.
          </motion.p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-green-700 text-white rounded-lg p-6 text-center shadow-md hover:bg-green-800 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="font-bold text-xl">Quality Assurance</h4>
              <p className="text-sm mt-2">
                Guaranteeing that only certified seeds reach the market.
              </p>
            </motion.div>
            <motion.div
              className="bg-blue-700 text-white rounded-lg p-6 text-center shadow-md hover:bg-blue-800 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="font-bold text-xl">Fair Practices</h4>
              <p className="text-sm mt-2">
                Promoting accountability and trust within the seed sector.
              </p>
            </motion.div>
            <motion.div
              className="bg-orange-600 text-white rounded-lg p-6 text-center shadow-md hover:bg-orange-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="font-bold text-xl">Consumer Protection</h4>
              <p className="text-sm mt-2">
                Protecting farmers and consumers from substandard seeds.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegulatoryComplianceComponent;
