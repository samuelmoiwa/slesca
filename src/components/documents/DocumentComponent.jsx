import React from "react";
import { FaDownload, FaFilePdf, FaFolderOpen, FaPrint, FaShare } from "react-icons/fa";
import sample_letter from '../../document/sample-application-letter-SLeSCA.pdf';
import step_by_step_guid from '../../document/Produres-obtaining-license-SLeSCA.pdf';
import seed_laboratory from '../../document/Procedure-Request-seed-test-at-the-SLeSCA-Seed-Laboratory.pdf';
import managment_seed_vendor from '../../document/Management-Seed-Vendor-.pdf';

const documents = [
  {
    id: 1,
    title: "Sample Application Letter for SLeSCA",
    description: "This document provides a template for writing a formal application letter to the Sierra Leone Seed Certification Authority (SLeSCA). It is essential for individuals or organizations seeking to engage with SLeSCA for seed certification or other related services.",
    category: "Application Templates",
    link: sample_letter,
  },
  {
    id: 2,
    title: "Step-by-Step Guide to Obtaining a Seed License",
    description: "This guide outlines the detailed process for obtaining a seed license from SLeSCA. It includes the necessary steps, documentation, and requirements for seed operators, vendors, and producers to comply with national seed regulations.",
    category: "Licensing",
    link: step_by_step_guid,
  },
  {
    id: 3,
    title: "Procedure to Request a Seed Test at the SLeSCA Seed Laboratory",
    description: "This document explains the procedure for submitting seed samples to the SLeSCA Seed Laboratory for quality testing. It covers the submission process, required documentation, and the expected turnaround time for test results.",
    category: "Seed Testing",
    link: seed_laboratory,
  },
  {
    id: 4,
    title: "Criteria for Seed Shop Management as a Seed Vendor",
    description: "This document outlines the criteria and best practices for managing a seed shop as a certified seed vendor. It includes guidelines for maintaining seed quality, record-keeping, and compliance with SLeSCA regulations.",
    category: "Vendor Management",
    link: managment_seed_vendor,
  },
];

const DocumentComponent = () => {
  const handleViewDocument = (link) => {
    window.open(link, "_blank");
  };

  const handlePrintDocument = (link) => {
    window.open(link, "_blank").print();
  };

  const handleShareDocument = async (title, link) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: link,
        });
      } catch (error) {
        console.error("Error sharing document:", error);
      }
    } else {
      alert("Sharing is not supported in your browser.");
    }
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-green-800">SLeSCA Documents</h2>
          <p className="text-gray-600 mt-4">
            Access official documents and guidelines essential for seed certification, licensing, and regulation.
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
                <div className="flex gap-2">
                  <button
                    onClick={() => handleViewDocument(doc.link)}
                    className="px-4 py-2 bg-green-700 text-white text-sm rounded-md hover:bg-green-800 flex items-center gap-2"
                  >
                    <FaDownload /> View
                  </button>
                  <button
                    onClick={() => handlePrintDocument(doc.link)}
                    className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 flex items-center gap-2"
                  >
                    <FaPrint /> Print
                  </button>
                  <button
                    onClick={() => handleShareDocument(doc.title, doc.link)}
                    className="px-4 py-2 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 flex items-center gap-2"
                  >
                    <FaShare /> Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentComponent;
