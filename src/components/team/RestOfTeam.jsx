import React from "react";

const teamMembers = [
  {
    name: "Daniel Roberts",
    role: "Seed Inspector",
    bio: "Daniel ensures compliance with seed quality standards by conducting field and warehouse inspections.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Linda Carter",
    role: "Training Coordinator",
    bio: "Linda organizes workshops and training sessions for farmers and stakeholders.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Samuel Green",
    role: "Quality Assurance Officer",
    bio: "Samuel oversees seed certification processes to meet national and international benchmarks.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Victoria Johnson",
    role: "Administrative Assistant",
    bio: "Victoria provides crucial administrative support to ensure smooth operations.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Ethan Brown",
    role: "Data Analyst",
    bio: "Ethan analyzes seed data trends to help improve operational efficiency and strategic planning.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Sophia Adams",
    role: "Field Officer",
    bio: "Sophia works directly with farmers to ensure successful seed management practices.",
    image: "https://via.placeholder.com/150",
  },
];

const RestOfTeam = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800">Rest of the Team</h2>
          <p className="text-gray-600 mt-4 text-lg">
            Meet the dedicated professionals who work behind the scenes to support SLeSCA's mission of improving agriculture in Sierra Leone.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-green-700 text-sm">{member.role}</p>
              <p className="text-gray-600 mt-4 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestOfTeam;
