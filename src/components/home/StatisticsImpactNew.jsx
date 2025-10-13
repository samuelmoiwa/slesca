import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Users, Leaf, Microscope, ShieldCheck, ArrowRight } from "lucide-react";

// --- ENHANCED: Data now includes icons for better visual association ---
const statistics = [
  {
    icon: Users,
    title: "Farmers Trained",
    value: 5000,
    suffix: "+",
    description:
      "Empowered with modern agricultural knowledge and best practices.",
  },
  {
    icon: Leaf,
    title: "Seed Varieties Certified",
    value: 45,
    suffix: "",
    description:
      "High-yield varieties meeting rigorous national and international standards.",
  },
  {
    icon: Microscope,
    title: "Inspections Conducted",
    value: 2000,
    suffix: "+",
    description:
      "Annual checks to ensure ongoing compliance and uphold seed quality.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Seed Operators",
    value: 120,
    suffix: "+",
    description:
      "Professionals licensed and regulated for quality seed production.",
  },
];

const StatisticsImpact = () => {
  // --- INTERACTIVE: Trigger animations only when the component is in view ---
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true, // Animation will play only once
  });

  return (
    <section
      ref={ref}
      className="relative bg-slate-50 py-20 sm:py-24 lg:py-32"
      id="statistics-impact"
    >
      {/* --- UI: Thematic background image with a dark overlay for readability --- */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1627923763229-8a4643188857?q=80&w=2070&auto=format&fit=crop"
          alt="Lush green rice paddy field"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-green-800 tracking-tight">
            Our Impact in Numbers
          </h2>
          <p className="mt-4 text-lg text-green-500 max-w-3xl mx-auto">
            SLeSCA’s work drives measurable progress in agriculture and food
            security across Sierra Leone.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2"
            >
              <div className="mb-4">
                <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
                  <stat.icon className="w-7 h-7 " />
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-bold">
                {/* --- INTERACTIVE: CountUp starts when 'inView' is true --- */}
                {inView && (
                  <>
                    <CountUp end={stat.value} duration={2.5} separator="," />
                    {stat.suffix}
                  </>
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold ">{stat.title}</h3>
              <p className="mt-2 text-sm ">{stat.description}</p>
              {/* --- UI: A subtle interactive element that appears on hover --- */}
              <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsImpact;
