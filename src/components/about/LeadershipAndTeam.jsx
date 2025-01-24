import React from "react";
import { motion } from "framer-motion";
import user from '../../image/user_2.jpg'

const teamMembers = [
  {
    name: "Mr. Idara Sherriff",
    role: "Board Chairman",
    image: user , // Replace with actual image
  },
  {
    name: "Dr. Robert Chakanda",
    role: "Exec. Dir. SLeSCA",
    image: user , // Replace with actual image
  },
  {
    name: "Mr. John Kamara",
    role: "Director of Crops-MAF",
    image: user , // Replace with actual image
  },
  {
    name: "Dr. Osman Conteh",
    role: "Director General SLARI",
    image: user , // Replace with actual image
  },
];

const LeadershipAndTeam = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-green-800">
            Meet Our Team
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            Our dedicated leadership and team members work tirelessly to uphold
            the highest standards in seed quality and agricultural development.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[13rem] object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipAndTeam;
