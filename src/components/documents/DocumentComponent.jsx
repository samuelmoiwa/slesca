import React from "react";
import { FaDownload, FaFilePdf, FaFolderOpen } from "react-icons/fa";

const documents = [
  {
    id: 1,
    title: "Seed Quality Standards Manual",
    description: "Comprehensive guidelines for seed quality assessment and certification.",
    category: "Quality Standards",
    link: "#",
  },
  {
    id: 2,
    title: "Seed Licensing and Registration Guide",
    description: "Step-by-step process for seed operator licensing and registration.",
    category: "Licensing",
    link: "#",
  },
  {
    id: 3,
    title: "ECOWAS Seed Regulation Compliance",
    description: "Alignment of seed regulations with ECOWAS standards for regional trade.",
    category: "Regulations",
    link: "#",
  },
  {
    id: 4,
    title: "Seed Certification Inspection Checklist",
    description: "Checklist used during seed inspection and certification processes.",
    category: "Inspection",
    link: "#",
  },
];

const DocumentComponent = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-green-800">SLeSCA Documents</h2>
          <p className="text-gray-600 mt-4">
            Access official documents and guidelines essential for seed certification and regulation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-white shadow-md p-6 rounded-lg border border-gray-200 hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                <FaFilePdf className="text-red-600 text-3xl mr-4" />
                <h3 className="text-xl font-semibold text-green-900">{doc.title}</h3>
              </div>
              <p className="text-gray-600">{doc.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-500 flex items-center gap-2">
                  <FaFolderOpen /> {doc.category}
                </span>
                <a
                  href={doc.link}
                  className="px-4 py-2 bg-green-700 text-white text-sm rounded-md hover:bg-green-800 flex items-center gap-2"
                  download
                >
                  <FaDownload /> Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentComponent;
