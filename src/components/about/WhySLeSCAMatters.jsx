import React from "react";
import { motion } from "framer-motion";
import farmer2 from '../../image/farmer2.jpg'

const WhySLeSCAMatters = () => {
  const points = [
    "Ensures food security by improving seed quality and availability.",
    "Reduces reliance on imported seeds, promoting self-sufficiency.",
    "Attracts investment in the agricultural sector through private-public partnerships.",
    "Aligns Sierra Leone’s seed industry with ECOWAS standards, enhancing regional collaboration.",
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-green-800">
            Why SLeSCA Matters
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Discover the vital role SLeSCA plays in transforming Sierra Leone’s agricultural landscape.
          </p>
        </div>

        {/* Points Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Points */}
          <div className="space-y-6">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-600 rounded-full">
                    <span className="text-xl font-bold">✓</span>
                  </div>
                </div>
                <p className="text-gray-700 text-base md:text-lg">{point}</p>
              </motion.div>
            ))}
          </div>

          {/* Visual Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg"
          >
            {/* Replace this placeholder image with an actual image or video */}
            <img
              src={farmer2}
              alt="Farmers benefiting from SLeSCA's work"
              className="absolute w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default WhySLeSCAMatters;
