import React, { useState } from "react";
import {
  Leaf,
  ClipboardCheck,
  Wrench,
  Award,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

const keyFunctions = [
  {
    title: "Seed Quality Certification",
    description:
      "Ensuring seeds meet national and international standards for superior crop yields and food security.",
    icon: Leaf,
    features: [
      "ISO Standard Compliance",
      "Advanced Quality Testing",
      "Rigorous Field Inspection",
    ],
    stat: { value: "10K+", label: "Seeds Certified" },
  },
  {
    title: "Regulatory Compliance",
    description:
      "Monitoring and enforcing the National Seed Act to ensure a fair and safe marketplace for all operators.",
    icon: ClipboardCheck,
    features: [
      "Policy Enforcement",
      "Legal Framework Adherence",
      "Operator Monitoring",
    ],
    stat: { value: "500+", label: "Licensed Operators" },
  },
  {
    title: "Training & Development",
    description:
      "Empowering farmers and stakeholders through workshops and capacity-building initiatives.",
    icon: Wrench,
    features: [
      "Practical Workshops",
      "Capacity Building",
      "Agricultural Best Practices",
    ],
    stat: { value: "5K+", label: "Farmers Trained" },
  },
  {
    title: "Inspection & Licensing",
    description:
      "Conducting thorough inspections of seed fields, warehouses, and vendors to uphold quality standards.",
    icon: Award,
    features: [
      "Comprehensive Field Audits",
      "Warehouse Inspections",
      "Official License Issuance",
    ],
    stat: { value: "98%", label: "Compliance Rate" },
  },
];

const KeyFunctions = () => {
  // LOGIC: Simplified state to only handle hover, as 'active' was unused.
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative w-full bg-slate-50 py-20 lg:py-28 overflow-hidden">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50"></div>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0284c7 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Floating Blobs - Toned down for subtlety */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold text-sm tracking-wide">
              WHAT WE DO
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Core Functions for a
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
              {" "}
              Thriving Sierra Leone
            </span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto">
            SLeSCA is dedicated to transforming agriculture through robust
            regulation, continuous innovation, and empowering our nation's
            farmers.
          </p>
        </div>

        {/* Functions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyFunctions.map((func, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col h-full">
                {/* Icon & Title */}
                <div className="mb-4">
                  {/* STYLE: Unified gradient for all icons */}
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-green-500 to-blue-500 mb-4">
                    <func.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-green-600 transition-colors">
                    {func.title}
                  </h3>
                </div>

                {/* Description & Features */}
                <p className="text-slate-500 text-sm mb-5">
                  {func.description}
                </p>
                <div className="space-y-2 mb-5">
                  {func.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-slate-600 text-xs font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stat Display - Placed at the bottom */}
                <div className="mt-auto">
                  <div className="bg-slate-100 rounded-lg p-4 text-center">
                    <div className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
                      {func.stat.value}
                    </div>
                    <div className="text-slate-500 text-xs font-semibold tracking-wider uppercase">
                      {func.stat.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 8s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: -4s;
        }
      `}</style>
    </section>
  );
};

export default KeyFunctions;
