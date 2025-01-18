import React, { useState } from "react";
import { FaSeedling, FaHandsHelping, FaBookOpen, FaAward } from "react-icons/fa";
import trainingImage1 from "../../image/7.jpg"; // Replace with actual image paths
import { motion } from "framer-motion"; // Ensure this line is included


const trainingPrograms = [
  {
    title: "Advanced Seed Quality Management",
    description: `A comprehensive program covering modern techniques for seed inspection, quality control, and certification standards.`,
    icon: <FaSeedling className="text-green-800 text-5xl" />,
    image: trainingImage1,
  },
  {
    title: "Capacity Building for Smallholder Farmers",
    description: `Empowering smallholder farmers with technical knowledge on sustainable seed usage and pest management.`,
    icon: <FaHandsHelping className="text-green-800 text-5xl" />,
    image: trainingImage1,
  },
  {
    title: "Innovations in Agricultural Practices",
    description: `Exploring innovations in crop production and seed technology to boost agricultural productivity and resilience.`,
    icon: <FaBookOpen className="text-green-800 text-5xl" />,
    image: trainingImage1,
  },
  {
    title: "Farmer Excellence Recognition",
    description: `Recognizing outstanding farmers who have implemented best practices and contributed to sustainable farming.`,
    icon: <FaAward className="text-green-800 text-5xl" />,
    image: trainingImage1,
  },
];

const trainingOpportunities = [
    {
      title: "Advanced Seed Quality Management",
      description: "Modern techniques for seed inspection, quality control.",
      startDate: "2025-02-10",
      closeDate: "2025-02-20",
      registrationOpen: true,
    },
    {
      title: "Innovations in Agricultural Practices",
      description: "Innovative crop production and seed technology.",
      startDate: "2025-03-01",
      closeDate: "2025-03-15",
      registrationOpen: false,
    },
  ];

const FarmerTrainingAndCapacityBuilding = () => {
    const [showPopup, setShowPopup] = useState(false);
  const [selectedTraining, setSelectedTraining] = useState(null);

  const handleExploreClick = () => setShowPopup(true);
  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedTraining(null);
  };

  const handleTrainingClick = (training) => {
    setSelectedTraining(training);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <header className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-green-900">
            Farmer Training & Capacity Building
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            Our programs are designed to enhance farmers' technical skills,
            promote sustainable practices, and drive innovation in agriculture.
          </p>
        </header>

        {/* Training Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {trainingPrograms.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden border hover:shadow-2xl transition transform hover:scale-105"
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center mb-4">
                  {program.icon}
                  <h3 className="ml-4 text-2xl font-semibold text-green-800">
                    {program.title}
                  </h3>
                </div>
                <p className="text-gray-600">{program.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <header className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-green-900">
            Farmer Training & Capacity Building
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            Enhance your skills with our impactful training programs.
          </p>
        </header>

        <div className="mt-16 text-center">
          <button
            className="px-8 py-4 bg-green-700 text-white font-semibold rounded-md shadow-lg hover:bg-green-800 transition"
            onClick={handleExploreClick}
          >
            Explore Training Opportunities
          </button>
        </div>

        {showPopup && (
          <motion.div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-2xl">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                Available Training Opportunities
              </h3>
              {trainingOpportunities.map((training, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg mb-4 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleTrainingClick(training)}
                >
                  <h4 className="font-semibold text-lg">{training.title}</h4>
                  <p className="text-sm text-gray-600">{training.description}</p>
                  <p className="text-sm mt-2">
                    Start Date: {training.startDate} | Close Date: {training.closeDate}
                  </p>
                  <p className={`text-sm ${training.registrationOpen ? "text-green-600" : "text-red-600"}`}>
                    {training.registrationOpen ? "Registration Open" : "Registration Closed"}
                  </p>
                </div>
              ))}
              <button
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={handleClosePopup}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}

        {selectedTraining && selectedTraining.registrationOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-xl">
              <h3 className="text-2xl font-bold mb-4">{selectedTraining.title}</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-2 w-full border rounded focus:ring focus:ring-green-300"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="mt-1 p-2 w-full border rounded focus:ring focus:ring-green-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    className="mt-1 p-2 w-full border rounded focus:ring focus:ring-green-300"
                    placeholder="Enter your contact number"
                    required
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-green-700 text-white rounded shadow hover:bg-green-800"
                  >
                    Apply Now
                  </button>
                  <button
                    type="button"
                    className="ml-4 px-6 py-3 bg-gray-500 text-white rounded shadow hover:bg-gray-600"
                    onClick={handleClosePopup}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </div>
    </section>
      </div>
    </section>
  );
};

export default FarmerTrainingAndCapacityBuilding;
