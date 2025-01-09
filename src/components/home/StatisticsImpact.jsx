import React from "react";
import CountUp from "react-countup";

const statistics = [
  {
    title: "Certified Seed Operators",
    value: 120,
    description: "Operators licensed and regulated for seed production.",
  },
  {
    title: "Farmers Trained",
    value: 5000,
    description: "Empowered with knowledge and best practices.",
  },
  {
    title: "Seed Varieties Certified",
    value: 45,
    description: "Meeting national and international standards.",
  },
  {
    title: "Inspections Conducted",
    value: 2000,
    description: "Ensuring compliance and seed quality.",
  },
];

const StatisticsImpact = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[90rem]">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-800">
            Our Impact at a Glance
          </h2>
          <p className="mt-4 text-gray-700 text-sm md:text-base">
            SLeSCA’s work is driving measurable progress in agriculture and food security.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-green-700">
                <CountUp end={stat.value} duration={2} separator="," />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">{stat.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsImpact;
