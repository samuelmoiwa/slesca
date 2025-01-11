import React from "react";
import { motion } from "framer-motion";
import {
  FaClipboardCheck,
  FaFlask,
  FaCheckCircle,
  FaSeedling,
} from "react-icons/fa";
import qualityImage1 from "../../../image/1.jpg"; // Replace with actual image paths
import qualityImage2 from "../../../image/2.jpg";

const steps = [
  {
    icon: <FaClipboardCheck className="text-white text-4xl" />,
    title: "Seed Sampling",
    description:
      "Experts collect representative seed samples from fields, warehouses, or processing facilities for analysis to ensure unbiased and precise results.",
    image: qualityImage1,
    bgColor: "bg-green-600",
  },
  {
    icon: <FaFlask className="text-white text-4xl" />,
    title: "Quality Testing",
    description:
      "Our advanced laboratories rigorously test seeds to ensure they meet national and international quality standards.",
    image: qualityImage2,
    bgColor: "bg-blue-600",
  },
  {
    icon: <FaSeedling className="text-white text-4xl" />,
    title: "Field Inspections",
    description:
      "On-field inspections verify seed production practices, ensuring compliance with certification requirements and maintaining reliability.",
    image: qualityImage1,
    bgColor: "bg-orange-600",
  },
  {
    icon: <FaCheckCircle className="text-white text-4xl" />,
    title: "Certification",
    description:
      "Seeds that meet all criteria are certified with a quality seal, providing assurance of reliability to farmers and stakeholders.",
    image: qualityImage2,
    bgColor: "bg-red-600",
  },
];

const SeedQuality = () => {
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
          <h2 className="text-4xl font-bold text-green-800">Seed Quality Certification</h2>
          <p className="text-gray-600 mt-4">
            Committed to ensuring the highest quality standards for seeds through rigorous testing, inspection, and certification processes.
          </p>
        </motion.div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-48 object-cover"
              />
              <div
                className={`absolute top-0 left-0 w-full h-full ${step.bgColor} bg-opacity-75 flex flex-col items-center justify-center text-center p-6`}
              >
                {step.icon}
                <h3 className="text-lg font-bold text-white mt-4">{step.title}</h3>
                <p className="text-sm text-white mt-2">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Certified Seeds Section */}
        <div className="bg-white shadow-lg rounded-lg mt-16 p-8">
          <motion.h3
            className="text-3xl font-bold text-gray-800 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Why Certified Seeds Matter
          </motion.h3>
          <motion.p
            className="text-gray-600 mt-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Certified seeds offer superior yield potential, disease resistance, and consistency, empowering farmers with the confidence to invest in quality.
          </motion.p>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <motion.div
              className="bg-green-600 text-white rounded-lg p-6 w-72 text-center shadow-md hover:bg-green-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="font-bold text-xl">Higher Yields</h4>
              <p className="text-sm mt-2">
                Ensure better productivity and profitability for farmers.
              </p>
            </motion.div>
            <motion.div
              className="bg-blue-600 text-white rounded-lg p-6 w-72 text-center shadow-md hover:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="font-bold text-xl">Disease Resistance</h4>
              <p className="text-sm mt-2">
                Protect crops against common pests and diseases.
              </p>
            </motion.div>
            <motion.div
              className="bg-orange-600 text-white rounded-lg p-6 w-72 text-center shadow-md hover:bg-orange-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="font-bold text-xl">Trust in Quality</h4>
              <p className="text-sm mt-2">
                Gain confidence in the reliability of certified seeds.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeedQuality;
