import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaSeedling,
  FaGlobeAfrica,
  FaChartLine,
  FaHandsHelping,
} from "react-icons/fa";
import projectImage1 from "../../../image/projectImage1.jpg"; // Replace with actual paths
import projectImage2 from "../../../image/4.jpg";
import projectImage3 from "../../../image/5.jpg";

const projects = [
  {
    id: 1,
    title: "National Seed Training Program",
    description:
      "Empowered over 1,000 farmers with knowledge of sustainable seed management practices to enhance crop yields.",
    details:
      "This program focused on equipping farmers with modern seed management techniques, ensuring sustainability, and boosting agricultural productivity. The training involved expert speakers, hands-on sessions, and follow-up evaluations.",
    icon: <FaSeedling className="text-green-700 text-4xl" />,
    image: projectImage1,
  },
  {
    id: 2,
    title: "ECOWAS Seed Standards Alignment",
    description:
      "Successfully aligned Sierra Leone's seed regulations with ECOWAS standards, ensuring regional competitiveness.",
    details:
      "Through rigorous policy analysis and collaboration with regional bodies, this project ensured that Sierra Leone's seed regulations meet ECOWAS standards. This enhances trade opportunities and ensures high-quality seed production.",
    icon: <FaGlobeAfrica className="text-green-700 text-4xl" />,
    image: projectImage2,
  },
  {
    id: 3,
    title: "Seed Quality Enhancement Drive",
    description:
      "Inspected and certified over 50 seed processing facilities to ensure compliance with quality standards.",
    details:
      "Our team conducted detailed inspections and provided certification to facilities meeting national and international quality benchmarks. This initiative aimed to strengthen the seed value chain.",
    icon: <FaChartLine className="text-green-700 text-4xl" />,
    image: projectImage3,
  },
  {
    id: 4,
    title: "Farmer Assistance Program",
    description:
      "Collaborated with international organizations to provide financial and technical support to farmers in rural areas.",
    details:
      "This program provided financial grants, technical assistance, and resource distribution to rural farmers, ensuring equitable development and improved agricultural output.",
    icon: <FaHandsHelping className="text-green-700 text-4xl" />,
    image: projectImage1,
  },
];

const RecentProjectsComponent = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold text-green-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Recent Projects
          </motion.h2>
          <motion.p
            className="text-gray-600 mt-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Explore the impactful projects led by SLeSCA to enhance agriculture
            and promote sustainable development.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative group bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:brightness-90 transition duration-300"
              />

              {/* Overlay Icon */}
              <div className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-md">
                {project.icon}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 text-center group-hover:text-green-700 transition duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-3 text-center">
                  {project.description}
                </p>
              </div>

              {/* Button */}
              <div className="p-6 text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-green-700 text-white font-bold rounded-lg shadow-md hover:bg-green-800 transition duration-300"
                  onClick={() => setSelectedProject(project)}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Popup */}
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl p-6 w-11/12 md:w-2/3 lg:w-1/2"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="top-4 right-4 text-red-500 hover:text-red-700 mb-5"
                onClick={() => setSelectedProject(null)}
              >
                ✖
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-56 object-cover rounded-md mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-800">
                {selectedProject.title}
              </h3>
              <p className="text-gray-600 mt-4">{selectedProject.details}</p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default RecentProjectsComponent;
