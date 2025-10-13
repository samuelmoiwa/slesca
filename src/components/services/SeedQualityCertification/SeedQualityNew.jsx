import React, { useState } from "react";
import {
  ClipboardCheck,
  FlaskConical,
  CheckCircle2,
  Sprout,
  Sparkles,
  TrendingUp,
  Shield,
  Award,
  Eye,
  Microscope,
  FileCheck,
  Users,
  Leaf,
  ArrowRight,
  ChevronRight,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Seed Sampling",
    description:
      "Experts collect representative seed samples from fields, warehouses, or processing facilities for analysis to ensure unbiased and precise results.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
    color: "from-green-500 to-emerald-600",
    stats: { value: "1000+", label: "Samples/Month" },
    features: [
      "Random sampling",
      "ISO standards",
      "Chain of custody",
      "Quality assurance",
    ],
  },
  {
    icon: FlaskConical,
    title: "Quality Testing",
    description:
      "Our advanced laboratories rigorously test seeds to ensure they meet national and international quality standards.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800",
    color: "from-emerald-500 to-teal-600",
    stats: { value: "15+", label: "Test Parameters" },
    features: [
      "Germination tests",
      "Purity analysis",
      "Moisture content",
      "Disease screening",
    ],
  },
  {
    icon: Sprout,
    title: "Field Inspections",
    description:
      "On-field inspections verify seed production practices, ensuring compliance with certification requirements and maintaining reliability.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800",
    color: "from-teal-500 to-cyan-600",
    stats: { value: "500+", label: "Fields Inspected" },
    features: [
      "Site verification",
      "Production monitoring",
      "Compliance checks",
      "Documentation",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Certification",
    description:
      "Seeds that meet all criteria are certified with a quality seal, providing assurance of reliability to farmers and stakeholders.",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800",
    color: "from-cyan-500 to-blue-600",
    stats: { value: "98%", label: "Success Rate" },
    features: [
      "Quality seal",
      "Traceability",
      "Legal compliance",
      "Market ready",
    ],
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Higher Yields",
    description:
      "Ensure better productivity and profitability for farmers with certified seeds.",
    stats: "40% Increase",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Shield,
    title: "Disease Resistance",
    description:
      "Protect crops against common pests and diseases with genetically improved varieties.",
    stats: "90% Protection",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Award,
    title: "Trust in Quality",
    description:
      "Gain confidence in the reliability of certified seeds backed by rigorous testing.",
    stats: "100% Verified",
    color: "from-teal-500 to-cyan-600",
  },
];

const certificationStandards = [
  { name: "ISO 9001:2015", description: "Quality Management Systems" },
  { name: "ISTA Standards", description: "International Seed Testing" },
  { name: "OECD Schemes", description: "Seed Certification" },
  { name: "ECOWAS Regulations", description: "Regional Compliance" },
];

const testingProcess = [
  {
    step: "01",
    title: "Sample Reception",
    description: "Receive and log samples",
    icon: FileCheck,
  },
  {
    step: "02",
    title: "Laboratory Analysis",
    description: "Conduct comprehensive tests",
    icon: Microscope,
  },
  {
    step: "03",
    title: "Quality Assessment",
    description: "Evaluate against standards",
    icon: BarChart3,
  },
  {
    step: "04",
    title: "Certification Issuance",
    description: "Award quality certification",
    icon: Award,
  },
];

const SeedQuality = () => {
  const [selectedStep, setSelectedStep] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-green-50 to-white py-16 lg:py-24 overflow-hidden">
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
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-semibold text-sm">
              Quality Assurance
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600">
              Seed Quality Certification
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Committed to ensuring the highest quality standards for seeds
            through rigorous testing, inspection, and certification processes.
          </p>
        </div>

        {/* Certification Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-xl border-2 border-gray-100 hover:border-green-300 transition-all duration-500 overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedStep(step)}
            >
              {/* Image Background */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${step.color} opacity-80 group-hover:opacity-90 transition-opacity`}
                ></div>

                {/* Icon */}
                <div className="absolute top-4 left-4 p-3 bg-white/20 backdrop-blur-sm rounded-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <step.icon className="w-8 h-8 text-white" />
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

                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {step.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {step.features.slice(0, 2).map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-xs"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-2.5 px-4 rounded-xl hover:shadow-lg transition-all duration-300 transform group-hover:scale-105">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">Learn More</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Testing Process Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Our Testing Process
            </h3>
            <p className="text-gray-600 text-lg">
              A systematic approach to quality certification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testingProcess.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Connector Line */}
                {idx < testingProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-green-300 to-emerald-300 -translate-x-1/2 z-0"></div>
                )}

                <div className="relative bg-white rounded-2xl shadow-lg border-2 border-green-100 p-6 hover:shadow-xl hover:border-green-300 transition-all duration-300 z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl font-extrabold text-green-100">
                      {item.step}
                    </span>
                    <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Certified Seeds Matter */}
        <div className="bg-white rounded-3xl shadow-2xl border-2 border-gray-100 p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Why Certified Seeds Matter
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Certified seeds offer superior yield potential, disease
              resistance, and consistency, empowering farmers with the
              confidence to invest in quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-green-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`inline-flex p-4 bg-gradient-to-br ${benefit.color} rounded-2xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>

                  <h4 className="text-2xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h4>

                  <p className="text-gray-600 mb-4">{benefit.description}</p>

                  <div
                    className={`inline-flex px-4 py-2 bg-gradient-to-r ${benefit.color} text-white font-bold rounded-full text-sm`}
                  >
                    {benefit.stats}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certification Standards */}
        <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden mb-16">
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

          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                International Standards Compliance
              </h3>
              <p className="text-white/90 text-lg">
                We adhere to globally recognized certification standards
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certificationStandards.map((standard, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <Award className="w-6 h-6 text-white" />
                    <h4 className="font-bold text-white text-lg">
                      {standard.name}
                    </h4>
                  </div>
                  <p className="text-white/80 text-sm">
                    {standard.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Users, value: "5000+", label: "Farmers Served" },
            { icon: Leaf, value: "10K+", label: "Seeds Certified" },
            { icon: CheckCircle2, value: "98%", label: "Quality Rate" },
            { icon: Award, value: "15+", label: "Years Experience" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg border-2 border-green-100 p-6 text-center hover:shadow-xl hover:border-green-300 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="inline-flex p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-extrabold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-12 border-2 border-green-200">
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Ready to Get Your Seeds Certified?
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who trust SLeSCA for quality seed
            certification. Start your certification process today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about/license-procedures"
              className="group flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span>Start Certification</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            {/* <button className="flex items-center justify-center space-x-2 bg-white border-2 border-green-600 text-green-600 font-bold py-4 px-8 rounded-xl hover:bg-green-50 transition-all duration-300">
              <span>Learn More</span>
              <ChevronRight className="w-5 h-5" />
            </button> */}
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

            <div className="p-8">
              <img
                src={selectedStep.image}
                alt={selectedStep.title}
                className="w-full h-64 object-cover rounded-2xl mb-8"
              />

              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Overview
                </h4>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {selectedStep.description}
                </p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Key Features
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {selectedStep.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 bg-green-50 rounded-lg p-4"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <span>Request {selectedStep.title}</span>
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

export default SeedQuality;
