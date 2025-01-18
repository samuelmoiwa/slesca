import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaGlobe, FaBullhorn } from "react-icons/fa";
import advocacyImage1 from "../../image/4.jpg"; // Replace with actual image paths

const advocacyItems = [
  {
    id: 1,
    title: "Promoting Seed Sector Reforms",
    description:
      "Collaborating with government bodies to implement policies that drive seed industry innovation and sustainability.",
    icon: <FaBullhorn className="text-yellow-600 text-4xl" />,
    image: advocacyImage1,
  },
  {
    id: 2,
    title: "Regional and International Partnerships",
    description:
      "Fostering alliances with ECOWAS and international seed agencies to harmonize standards and improve market access.",
    icon: <FaGlobe className="text-blue-600 text-4xl" />,
    image: advocacyImage1,
  },
  {
    id: 3,
    title: "Stakeholder Engagement and Training",
    description:
      "Empowering farmers and agribusinesses with workshops and advocacy campaigns to promote sustainable practices.",
    icon: <FaHandshake className="text-green-600 text-4xl" />,
    image: advocacyImage1,
  },
];

const AdvocacyAndCollaboration = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800">Advocacy & Collaboration</h2>
          <p className="text-gray-600 mt-4">
            Driving agricultural transformation through strategic partnerships and policy advocacy for sustainable development.
          </p>
        </div>

        {/* Advocacy Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advocacyItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-4 text-center">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvocacyAndCollaboration;
