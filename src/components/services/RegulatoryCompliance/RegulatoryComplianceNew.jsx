import React, { useState } from "react";
import {
  Scale,
  Gavel,
  FileText,
  Shield,
  CheckCircle2,
  Award,
  TrendingUp,
  Users,
  Sparkles,
  ArrowRight,
  Eye,
  BookOpen,
  ChevronRight,
} from "lucide-react";

const complianceSteps = [
  {
    icon: Scale,
    title: "Seed Regulations",
    description:
      "Ensuring adherence to the 2018 Seed Act by establishing clear rules and guidelines for seed production and distribution.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
    color: "from-green-500 to-emerald-600",
    benefits: [
      "Clear regulatory framework",
      "Standardized processes",
      "Legal compliance",
      "Industry transparency",
    ],
    stats: { value: "100%", label: "Compliance Rate" },
  },
  {
    icon: Gavel,
    title: "Inspection & Enforcement",
    description:
      "Regular inspections of seed facilities to enforce compliance and maintain high-quality standards.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
    color: "from-blue-500 to-cyan-600",
    benefits: [
      "Regular facility audits",
      "Quality assessments",
      "Enforcement actions",
      "Continuous monitoring",
    ],
    stats: { value: "500+", label: "Annual Inspections" },
  },
  {
    icon: FileText,
    title: "Licensing & Certification",
    description:
      "All seed operators are licensed and certified to meet national and international standards.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800",
    color: "from-purple-500 to-pink-600",
    benefits: [
      "ISO certification",
      "ECOWAS compliance",
      "International standards",
      "Quality benchmarks",
    ],
    stats: { value: "1000+", label: "Licensed Operators" },
  },
  {
    icon: Shield,
    title: "Consumer Protection",
    description:
      "Protecting farmers and consumers by ensuring that only high-quality, certified seeds reach the market.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
    color: "from-orange-500 to-amber-600",
    benefits: [
      "Quality assurance",
      "Market surveillance",
      "Farmer education",
      "Consumer rights",
    ],
    stats: { value: "50K+", label: "Protected Farmers" },
  },
];

const whyMatters = [
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Guaranteeing that only certified seeds reach the market.",
    color: "from-green-500 to-emerald-600",
    features: ["ISO Standards", "Lab Testing", "Field Verification"],
  },
  {
    icon: Users,
    title: "Fair Practices",
    description: "Promoting accountability and trust within the seed sector.",
    color: "from-blue-500 to-cyan-600",
    features: ["Transparency", "Accountability", "Trust Building"],
  },
  {
    icon: Shield,
    title: "Consumer Protection",
    description: "Protecting farmers and consumers from substandard seeds.",
    color: "from-orange-500 to-amber-600",
    features: ["Rights Protection", "Quality Control", "Market Safety"],
  },
];

const RegulatoryComplianceComponent = () => {
  const [selectedStep, setSelectedStep] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

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
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

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
              Regulatory Compliance
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            SLeSCA ensures compliance with national and international seed
            regulations to safeguard quality, fairness, and consumer protection.
          </p>
        </div>

        {/* Compliance Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {complianceSteps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-xl border-2 border-gray-100 hover:border-green-300 transition-all duration-500 overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedStep(step)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>

                {/* Icon Badge */}
                <div
                  className={`absolute top-4 left-4 p-3 bg-gradient-to-br ${
                    step.color
                  } rounded-xl shadow-lg transform transition-all duration-300 ${
                    hoveredCard === index ? "scale-110 rotate-3" : ""
                  }`}
                >
                  <step.icon className="w-6 h-6 text-white" />
                </div>

                {/* Stats Badge */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <div className="text-lg font-bold text-gray-900">
                    {step.stats.value}
                  </div>
                  <div className="text-xs text-gray-600">
                    {step.stats.label}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {step.description}
                </p>

                {/* View Details Button */}
                <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-2.5 px-4 rounded-xl hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">View Details</span>
                </button>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-20 h-20 overflow-hidden">
                <div
                  className={`absolute bottom-0 right-0 w-0 h-0 border-b-[40px] border-r-[40px] border-b-transparent opacity-10 ${
                    hoveredCard === index
                      ? "border-r-green-500"
                      : "border-r-gray-300"
                  } transition-colors duration-300`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Compliance Matters Section */}
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-gray-100 p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Why Regulatory Compliance Matters
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Maintaining regulatory compliance is vital to ensure fairness,
              quality, and trust in the seed industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {whyMatters.map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-green-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-4 bg-gradient-to-br ${item.color} rounded-2xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">{item.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden mb-16">
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

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, value: "100%", label: "Compliance Rate" },
              { icon: Users, value: "1000+", label: "Licensed Operators" },
              { icon: TrendingUp, value: "500+", label: "Annual Inspections" },
              { icon: Shield, value: "50K+", label: "Protected Farmers" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group cursor-pointer">
                <div className="inline-flex p-3 bg-white/20 backdrop-blur-sm rounded-2xl mb-3 transform group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Ready to Ensure Compliance?
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Get started with our comprehensive compliance program and join
            thousands of certified seed operators across Sierra Leone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span>Start Your Application</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center space-x-2 bg-white border-2 border-green-600 text-green-600 font-bold py-4 px-8 rounded-xl hover:bg-green-50 transition-all duration-300">
              <BookOpen className="w-5 h-5" />
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedStep && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedStep(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div
              className={`bg-gradient-to-r ${selectedStep.color} p-8 relative overflow-hidden`}
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
                    <selectedStep.icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-extrabold text-white mb-2">
                      {selectedStep.title}
                    </h3>
                    <p className="text-white/90">
                      {selectedStep.stats.value} {selectedStep.stats.label}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedStep(null)}
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white rotate-45" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              {/* Image */}
              <img
                src={selectedStep.image}
                alt={selectedStep.title}
                className="w-full h-64 object-cover rounded-2xl mb-8"
              />

              {/* Description */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Overview
                </h4>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedStep.description}
                </p>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Key Benefits
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {selectedStep.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 bg-gray-50 rounded-lg p-4"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <span>Get Started with {selectedStep.title}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
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

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default RegulatoryComplianceComponent;
