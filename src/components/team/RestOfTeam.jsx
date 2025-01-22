import React from "react";
import user from '../../image/user.png'

const teamMembers = [
  {
    name: "Christopher Woodie",
    role: "Senior Field Technician",
    image: user,
  },
  {
    name: "Thomas Tucker",
    role: "Field Technician",
    image: user,
  },
  {
    name: "Abdul Deen Kamara",
    role: "Seed Analist",
    image: user,
  },
  {
    name: "Nancy Moiforay",
    role: "Seed Technician",
    image: user,
  },
  {
    name: "Hawa Korfuma",
    role: "Seed Technician",
    image: user,
  },
  {
    name: "Ngegba Kamara",
    role: "Laboratory Attendant",
    image: user,
  },
  {
    name: "Yabome Efua Ajai Kamara",
    role: "Laboratry Assistnt",
    image: user,
  },
  {
    name: "N'ganga MB Bockarie",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Nanah Kargbo",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Mohamed Williams",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Momodu Dumere",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Moriba Musa Koroma",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Abu Bakarr Kamara",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Alpha Kamara",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Sahr Gbetuwa",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Abraham Konda Sesay",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Sorie Kamara Conteh",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Alfred Kamara",
    role: "Field Inspector",
    image: user,
  },




  {
    name: "Yayah Daramy",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Abu Bakarr Gibril",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Hassan Kamara (Kassiri)",
    role: "Field Inspector",
    image: user,
  },
  {
    name: "Umaru K. Kamara",
    role: "Intern",
    image: user,
  },
  {
    name: "Esther C. Turay",
    role: "Intern",
    image: user,
  },
  {
    name: "Issa l. Koroma",
    role: "Intern",
    image: user,
  },
];

const RestOfTeam = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800">FIELD AND LABORATORIES</h2>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestOfTeam;
