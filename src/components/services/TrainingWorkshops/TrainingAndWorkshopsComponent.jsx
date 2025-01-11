import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaUsers, FaCalendarAlt } from "react-icons/fa";
import WorkshopDetailsPopup from "./WorkshopDetailsPopup";
import workshopImage1 from "../../../image/1.jpg";
import workshopImage2 from "../../../image/2.jpg";
import workshopImage3 from "../../../image/3.jpg";

const workshops = [
  {
    id: 1,
    title: "Sustainable Seed Management",
    description:
      "A comprehensive workshop to educate farmers on sustainable practices to enhance seed quality and crop yield.",
    date: "2025-02-15",
    icon: <FaChalkboardTeacher className="text-green-700 text-4xl" />,
    image: workshopImage1,
  },
  {
    id: 2,
    title: "Farmers' Capacity Building",
    description:
      "Empowering farmers with modern farming techniques and knowledge to ensure sustainable development.",
    date: "2025-03-10",
    icon: <FaUsers className="text-green-700 text-4xl" />,
    image: workshopImage2,
  },
  {
    id: 3,
    title: "Seed Quality Certification Training",
    description:
      "An intensive training program for seed operators to understand and implement quality certification processes.",
    date: "2025-04-05",
    icon: <FaCalendarAlt className="text-green-700 text-4xl" />,
    image: workshopImage3,
  },
];

const TrainingAndWorkshopsComponent = () => {
    const [showPopup, setShowPopup] = useState(false);


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
          <h2 className="text-4xl font-bold text-green-800">Training & Workshops</h2>
          <p className="text-gray-600 mt-4">
            Explore our latest training programs and workshops designed to empower farmers and stakeholders with essential skills and knowledge.
          </p>
        </motion.div>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <motion.div
              key={workshop.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={workshop.image}
                alt={workshop.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-center mb-4">{workshop.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 text-center">
                  {workshop.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Date: {workshop.date}
                </p>
                <p className="text-gray-600 mt-4 text-center">
                  {workshop.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-green-700 text-white mt-16 p-8 rounded-lg shadow-md">
          <motion.h3
            className="text-3xl font-bold text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Join Our Training Programs Today!
          </motion.h3>
          <motion.p
            className="text-center mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Empower yourself with the knowledge and skills needed to thrive in the agricultural industry. Sign up for upcoming workshops now!
          </motion.p>
          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
          >
            <button className="px-6 py-3 bg-white text-green-700 font-bold rounded-lg hover:bg-green-800
            hover:text-white transition duration-300" onClick={() => setShowPopup(true)}>
              Explore Workshops
            </button>
          </motion.div>
        </div>
      </div>
      {showPopup && <WorkshopDetailsPopup onClose={() => setShowPopup(false)} />}
    </section>
  );
};

export default TrainingAndWorkshopsComponent;
