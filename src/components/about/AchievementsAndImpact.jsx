import React from "react";
import { motion } from "framer-motion";
import farmer1 from '../../image/farmer1.jpg'

const AchievementsAndImpact = () => {
  const achievements = [
    {
      title: "Licensed Seed Operators",
      count: 120,
      description: "Licensed 120+ seed operators across Sierra Leone.",
    },
    {
      title: "Farmers Trained",
      count: 5000,
      description: "Trained over 5,000 farmers in seed management and sustainable farming practices.",
    },
    {
      title: "Certified Seed Varieties",
      count: 45,
      description: "Certified 45 new seed varieties to meet national and international standards.",
    },
    {
      title: "Inspections Conducted",
      count: 2000,
      description: "Conducted over 2,000 inspections to ensure seed quality and compliance.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-green-800">
            Our Achievements
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            SLeSCA’s accomplishments reflect our commitment to advancing agriculture in Sierra Leone.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
            >
              <h3 className="text-4xl lg:text-5xl font-extrabold text-green-600">
                <motion.span
                  initial={{ count: 0 }}
                  animate={{ count: achievement.count }}
                  transition={{ duration: 2 }}
                >
                  {Math.floor(achievement.count)}
                </motion.span>
                +
              </h3>
              <p className="text-lg font-semibold text-gray-800 mt-2">
                {achievement.title}
              </p>
              <p className="text-sm text-gray-600 mt-4">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Carousel or Image Highlights */}
        <div className="mt-12">
          <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
            {/* Replace these image URLs with actual project highlights */}
            <motion.img
              src={farmer1}
              alt="Project Highlight 1"
              className="absolute w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};




export default AchievementsAndImpact;
