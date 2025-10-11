import React, { useState } from "react";
import {
  ClipboardCheck,
  Download,
  Shield,
  FileText,
  CheckCircle2,
  Eye,
  Share2,
  Sparkles,
  Award,
  Scale,
  Globe,
  Search,
  X,
  ExternalLink,
} from "lucide-react";

const policies = [
  {
    id: 1,
    title: "Seed Certification and Quality Control Policy",
    description:
      "Comprehensive guidelines to ensure seed quality standards and proper certification practices for seed producers and distributors.",
    icon: Award,
    color: "from-green-500 to-emerald-600",
    category: "Quality Control",
    version: "v2.3",
    lastUpdated: "March 2024",
    size: "2.4 MB",
    pages: "24",
    highlights: [
      "ISO 9001 Certification Standards",
      "Quality Assessment Procedures",
      "Producer Compliance Guidelines",
      "Testing & Laboratory Requirements",
    ],
  },
  {
    id: 2,
    title: "Seed Licensing and Registration Policy",
    description:
      "Framework for licensing seed operators, registering seed varieties, and maintaining compliance with regulatory standards.",
    icon: ClipboardCheck,
    color: "from-blue-500 to-cyan-600",
    category: "Licensing",
    version: "v3.1",
    lastUpdated: "February 2024",
    size: "1.8 MB",
    pages: "18",
    highlights: [
      "Application Process Guidelines",
      "Registration Requirements",
      "License Renewal Procedures",
      "Compliance Monitoring",
    ],
  },
  {
    id: 3,
    title: "Compliance with ECOWAS Seed Regulations",
    description:
      "Policy for ensuring alignment of Sierra Leone's seed certification processes with ECOWAS regional standards.",
    icon: Globe,
    color: "from-purple-500 to-pink-600",
    category: "Regional Compliance",
    version: "v1.5",
    lastUpdated: "January 2024",
    size: "1.5 MB",
    pages: "15",
    highlights: [
      "ECOWAS Standards Alignment",
      "Cross-Border Seed Trade",
      "Regional Quality Benchmarks",
      "Harmonization Protocols",
    ],
  },
  {
    id: 4,
    title: "Inspection and Monitoring Guidelines",
    description:
      "Protocols for seed inspection, certification processes, and monitoring seed production facilities.",
    icon: Search,
    color: "from-orange-500 to-amber-600",
    category: "Monitoring",
    version: "v2.0",
    lastUpdated: "April 2024",
    size: "1.2 MB",
    pages: "12",
    highlights: [
      "Field Inspection Procedures",
      "Facility Monitoring Protocols",
      "Documentation Requirements",
      "Enforcement Guidelines",
    ],
  },
];

const PoliciesComponent = () => {
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleAction = (action, policy) => {
    console.log(`${action}:`, policy.title);
    if (action === "view") {
      setSelectedPolicy(policy);
    }
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-gray-50 to-white py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, #10b981 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      {/* Floating Blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-semibold text-sm">
              Regulatory Framework
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-500 to-cyan-600">
              SLeSCA Regulatory Policies
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Review our core policies that promote seed quality, sustainable
            agriculture, and compliance with global standards.
          </p>
        </div>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {policies.map((policy, index) => (
            <div
              key={policy.id}
              className="group relative bg-white rounded-3xl shadow-xl border-2 border-gray-100 hover:border-green-300 transition-all duration-500 overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Header */}
              <div
                className={`bg-gradient-to-r ${policy.color} p-6 relative overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, white 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                </div>

                <div className="relative flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-4 bg-white/20 backdrop-blur-sm rounded-2xl transform transition-all duration-300 ${
                        hoveredCard === index ? "scale-110 rotate-3" : ""
                      }`}
                    >
                      <policy.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-white/90 text-sm font-medium">
                        {policy.category}
                      </div>
                      <div className="text-white font-bold">
                        {policy.version}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                      <div className="text-white text-xs">Last Updated</div>
                      <div className="text-white font-bold text-sm">
                        {policy.lastUpdated}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                  {policy.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {policy.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                    Key Highlights
                  </h4>
                  <div className="space-y-2">
                    {policy.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 pb-6 mb-6 border-b border-gray-200">
                  <span className="flex items-center space-x-1">
                    <FileText className="w-4 h-4" />
                    <span>{policy.pages} pages</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Download className="w-4 h-4" />
                    <span>{policy.size}</span>
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => handleAction("view", policy)}
                    className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Policy</span>
                  </button>

                  <button
                    onClick={() => handleAction("download", policy)}
                    className="p-3 bg-blue-100 text-blue-700 rounded-xl hover:bg-blue-200 transition-all duration-300 transform hover:scale-110"
                    title="Download"
                  >
                    <Download className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => handleAction("share", policy)}
                    className="p-3 bg-purple-100 text-purple-700 rounded-xl hover:bg-purple-200 transition-all duration-300 transform hover:scale-110"
                    title="Share"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-32 h-32 overflow-hidden">
                <div
                  className={`absolute bottom-0 right-0 w-0 h-0 border-b-[64px] border-r-[64px] border-b-transparent opacity-10 ${
                    hoveredCard === index
                      ? "border-r-green-500"
                      : "border-r-gray-300"
                  } transition-colors duration-300`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
                Need Help Understanding Our Policies?
              </h3>
              <p className="text-white/90 text-lg mb-6">
                Our team is here to guide you through compliance requirements
                and answer any questions about our regulatory framework.
              </p>
              <button className="group flex items-center space-x-2 bg-white text-green-700 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <span>Contact Regulatory Team</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: "Compliance Support", value: "24/7" },
                { icon: FileText, label: "Policy Documents", value: "50+" },
                { icon: Award, label: "Certified Standards", value: "100%" },
                { icon: Globe, label: "Regional Alignment", value: "ECOWAS" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <item.icon className="w-8 h-8 text-white mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">
                    {item.value}
                  </div>
                  <div className="text-white/80 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Policy Viewer Modal */}
      {selectedPolicy && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPolicy(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className={`bg-gradient-to-r ${selectedPolicy.color} p-8 relative overflow-hidden`}
            >
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                ></div>
              </div>

              <div className="relative flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                    <selectedPolicy.icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <div className="text-white/90 text-sm font-medium mb-1">
                      {selectedPolicy.category}
                    </div>
                    <h3 className="text-3xl font-extrabold text-white mb-2">
                      {selectedPolicy.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-white/90 text-sm">
                      <span>{selectedPolicy.version}</span>
                      <span>•</span>
                      <span>Updated {selectedPolicy.lastUpdated}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPolicy(null)}
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 text-center border border-green-100">
                  <FileText className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900">
                    {selectedPolicy.pages}
                  </div>
                  <div className="text-xs text-gray-600">Pages</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 text-center border border-blue-100">
                  <Download className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900">
                    {selectedPolicy.size}
                  </div>
                  <div className="text-xs text-gray-600">File Size</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 text-center border border-purple-100">
                  <Scale className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-gray-900">
                    {selectedPolicy.version}
                  </div>
                  <div className="text-xs text-gray-600">Version</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Policy Overview
                </h4>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedPolicy.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Key Highlights
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {selectedPolicy.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 bg-gray-50 rounded-lg p-4"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preview Placeholder */}
              <div className="bg-gray-100 rounded-2xl p-12 text-center border-2 border-dashed border-gray-300 mb-8">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">
                  Policy document preview would appear here
                </p>
                <p className="text-sm text-gray-500">
                  In production, integrate with a PDF viewer
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Download className="w-5 h-5" />
                  <span>Download Policy</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Share2 className="w-5 h-5" />
                  <span>Share Policy</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default PoliciesComponent;
