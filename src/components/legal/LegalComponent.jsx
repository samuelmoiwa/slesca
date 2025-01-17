import React from "react";
import { FaBalanceScale, FaGavel, FaShieldAlt, FaClipboardCheck } from "react-icons/fa";

const legalInfo = [
  {
    title: "Regulatory Framework",
    description: `Sierra Leone Seed Certification Agency (SLeSCA) operates under the Seed Act of 2018, which mandates seed quality control, certification, and licensing standards to ensure sustainable agricultural practices.`,
    icon: <FaBalanceScale className="text-green-700 text-5xl" />,
  },
  {
    title: "Intellectual Property Rights",
    description: `We adhere to national and international intellectual property laws to protect plant breeders' rights and ensure compliance with patent and trademark regulations in the seed industry.`,
    icon: <FaGavel className="text-green-700 text-5xl" />,
  },
  {
    title: "Compliance & Enforcement",
    description: `SLeSCA monitors seed operators to ensure adherence to regulations, conducting inspections and enforcing sanctions where necessary to uphold seed standards.`,
    icon: <FaClipboardCheck className="text-green-700 text-5xl" />,
  },
  {
    title: "Data Privacy & Security",
    description: `Our agency protects the confidentiality and integrity of stakeholder data in compliance with data privacy laws, implementing secure systems and best practices.`,
    icon: <FaShieldAlt className="text-green-700 text-5xl" />,
  },
];

const LegalComponent = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        <header className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-green-800">
            Legal Information
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            Learn about the legal frameworks, compliance policies, and regulatory standards that guide SLeSCA’s operations.
          </p>
        </header>

        {/* Legal Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {legalInfo.map((info, index) => (
            <div
              key={index}
              className="p-8 bg-white shadow-lg rounded-lg border hover:shadow-xl transform hover:scale-105 transition"
            >
              <div className="flex items-center mb-6">
                {info.icon}
                <h3 className="ml-4 text-2xl font-semibold text-green-900">
                  {info.title}
                </h3>
              </div>
              <p className="text-gray-600">{info.description}</p>
            </div>
          ))}
        </div>

        {/* Highlighted Legal Guidance */}
        <div className="mt-16 p-12 bg-green-100 rounded-lg">
          <h3 className="text-3xl font-semibold text-green-800">
            Important Legal Considerations
          </h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            The Sierra Leone Seed Act of 2018 empowers SLeSCA to regulate the
            import, export, and sale of seeds within the country. Seed operators
            must register and obtain proper licensing to engage in seed-related
            activities. Violations of regulatory compliance can result in fines,
            suspension, or revocation of licenses. For detailed requirements,
            stakeholders are encouraged to consult the official regulations.
          </p>
          <p className="mt-4">
            For further information, contact our legal department to stay
            updated on the latest policies and regulatory changes affecting the
            seed industry.
          </p>
          <div className="mt-8 flex justify-center">
            <button className="px-8 py-3 bg-green-700 text-white rounded-md shadow-md hover:bg-green-800 transition">
              Contact Legal Department
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalComponent;
