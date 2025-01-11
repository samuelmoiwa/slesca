import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Licensing & Registration",
    description:
      "We ensure that all seed operators in Sierra Leone are registered and licensed under the 2018 Seed Act. This process guarantees compliance and quality assurance in the seed industry.",
    icon: "🎫",
  },
  {
    title: "Seed Quality Assurance & Certification",
    description:
      "We perform rigorous seed sampling, testing, and certification to ensure that seeds meet national and international quality standards.",
    icon: "🧪",
  },
  {
    title: "Inspection Services",
    description:
      "Our team conducts inspections across seed fields, warehouses, and processing facilities to maintain compliance and quality control.",
    icon: "🔍",
  },
  {
    title: "Seed Catalogue Management",
    description:
      "We update and maintain Sierra Leone's National Seed Catalogue, ensuring it reflects the latest approved seed varieties in alignment with ECOWAS standards.",
    icon: "📘",
  },
  {
    title: "Farmer Training & Capacity Building",
    description:
      "We empower farmers and stakeholders with knowledge on seed management, sustainable farming practices, and the importance of certified seeds.",
    icon: "📖",
  },
  {
    title: "Advocacy & Collaboration",
    description:
      "We engage with national and international partners to advocate for seed quality and foster collaborations that benefit Sierra Leone's agriculture.",
    icon: "🤝",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        {/* Intro Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-800">Our Services</h1>
          <p className="text-lg text-gray-600 mt-4">
            At SLeSCA, we are committed to improving Sierra Leone's agricultural
            landscape by offering a diverse range of services that prioritize
            seed quality, compliance, and capacity building.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-4">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Highlighted Services Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-6">
            Featured Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Licensing & Registration
              </h3>
              <p className="text-gray-600">
                We streamline the process of registering and licensing seed
                operators, ensuring full compliance with the 2018 Seed Act.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Seed Quality Assurance
              </h3>
              <p className="text-gray-600">
                Our rigorous quality assurance protocols ensure certified seeds
                meet both national and international standards.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-6">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-100 rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold text-green-800 mb-4">
                Step 1
              </h4>
              <p className="text-gray-600">
                Submit an application for registration or licensing.
              </p>
            </div>
            <div className="bg-green-100 rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold text-green-800 mb-4">
                Step 2
              </h4>
              <p className="text-gray-600">
                Our team reviews your application and conducts inspections.
              </p>
            </div>
            <div className="bg-green-100 rounded-lg p-6 text-center">
              <h4 className="text-xl font-bold text-green-800 mb-4">
                Step 3
              </h4>
              <p className="text-gray-600">
                Receive your certification and start operations.
              </p>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-green-800">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mt-4 mb-10">
            Contact us today to learn more about how SLeSCA can support your
            agricultural journey.
          </p>
          <Link
            to="/contact-us"
            className=" bg-green-800 text-white text-center px-8 py-3 rounded-lg shadow-md hover:bg-green-700">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
