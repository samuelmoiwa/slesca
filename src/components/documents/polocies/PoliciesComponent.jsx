import React from "react";
import { FaClipboardList, FaDownload } from "react-icons/fa";

const policies = [
  {
    id: 1,
    title: "Seed Certification and Quality Control Policy",
    description:
      "Comprehensive guidelines to ensure seed quality standards and proper certification practices for seed producers and distributors.",
    link: "#", // Replace with the actual document URL
  },
  {
    id: 2,
    title: "Seed Licensing and Registration Policy",
    description:
      "Framework for licensing seed operators, registering seed varieties, and maintaining compliance with regulatory standards.",
    link: "#",
  },
  {
    id: 3,
    title: "Compliance with ECOWAS Seed Regulations",
    description:
      "Policy for ensuring alignment of Sierra Leone’s seed certification processes with ECOWAS regional standards.",
    link: "#",
  },
  {
    id: 4,
    title: "Inspection and Monitoring Guidelines",
    description:
      "Protocols for seed inspection, certification processes, and monitoring seed production facilities.",
    link: "#",
  },
];

const PoliciesComponent = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-200">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-green-800">
            SLeSCA Regulatory Policies
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Review our core policies that promote seed quality, sustainable agriculture, and compliance with global standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {policies.map((policy) => (
            <div
              key={policy.id}
              className="relative bg-white shadow-xl rounded-lg border border-gray-300 hover:shadow-2xl transition-transform transform hover:scale-105 p-8"
            >
              <div className="flex items-center mb-6">
                <FaClipboardList className="text-green-600 text-4xl mr-4" />
                <h3 className="text-2xl font-bold text-green-900">
                  {policy.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-6">{policy.description}</p>
              <div className="absolute bottom-4 right-4">
                <a
                  href={policy.link}
                  className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 text-sm rounded-md shadow-lg hover:bg-green-800 transition"
                  download
                >
                  <FaDownload />
                  Download Policy
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoliciesComponent;
