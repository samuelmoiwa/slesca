import React, { useState } from "react";
import {
  Shield,
  TrendingUp,
  Globe2,
  Handshake,
  CheckCircle2,
  Sprout,
  Leaf,
  Wheat,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const WhySLeSCAMatters = () => {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const points = [
    {
      text: "Ensures food security by improving seed quality and availability.",
      icon: Shield,
      gradient: "from-green-500 to-emerald-600",
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
    {
      text: "Reduces reliance on imported seeds, promoting self-sufficiency.",
      icon: TrendingUp,
      gradient: "from-emerald-500 to-teal-600",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
    },
    {
      text: "Attracts investment in the agricultural sector through private-public partnerships.",
      icon: Handshake,
      gradient: "from-lime-500 to-green-600",
      iconBg: "bg-gradient-to-br from-lime-500 to-green-600",
    },
    {
      text: "Aligns Sierra Leone's seed industry with ECOWAS standards, enhancing regional collaboration.",
      icon: Globe2,
      gradient: "from-teal-500 to-emerald-600",
      iconBg: "bg-gradient-to-br from-teal-500 to-emerald-600",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50">
      {/* Organic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Green Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-emerald-200 to-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Floating Leaves */}
        {[...Array(12)].map((_, i) => (
          <Leaf
            key={i}
            className="absolute text-green-200 opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${30 + Math.random() * 40}px`,
              height: `${30 + Math.random() * 40}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16">
          {/* Decorative Badge */}
          <div className="inline-flex items-center space-x-3 px-6 py-3 mb-6 bg-white/80 backdrop-blur-sm border-2 border-green-300 rounded-full shadow-lg">
            <Sparkles className="w-5 h-5 text-green-600 animate-pulse" />
            <span className="text-sm font-bold bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent tracking-wide">
              OUR IMPACT
            </span>
            <Wheat className="w-5 h-5 text-emerald-600 animate-pulse" />
          </div>

          {/* Main Title */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-teal-700 bg-clip-text text-transparent">
              Why SLeSCA Matters
            </span>
          </h2>

          {/* Decorative Line */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full"></div>
            <Sprout className="w-7 h-7 text-green-600 animate-bounce" />
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover the{" "}
            <span className="font-bold text-green-700">vital role</span> SLeSCA
            plays in transforming Sierra Leone's agricultural landscape.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Points Section */}
          <div className="space-y-6">
            {points.map((point, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredPoint(index)}
                onMouseLeave={() => setHoveredPoint(null)}
                className={`group relative transform transition-all duration-500 ${
                  hoveredPoint === index ? "scale-105" : ""
                }`}
                style={{
                  opacity: 0,
                  animation: `slideInLeft 0.6s ease-out ${
                    index * 0.15
                  }s forwards`,
                }}
              >
                {/* Glow Effect */}
                <div
                  className={`absolute -inset-2 bg-gradient-to-r ${point.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition duration-500`}
                ></div>

                {/* Card Container */}
                <div className="relative flex items-start space-x-5 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-green-100/50 group-hover:border-green-300">
                  {/* Icon Container */}
                  <div className="flex-shrink-0 relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${point.gradient} rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity`}
                    ></div>
                    <div
                      className={`relative ${point.iconBg} w-14 h-14 flex items-center justify-center rounded-2xl shadow-lg transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}
                    >
                      <point.icon
                        className="w-7 h-7 text-white"
                        strokeWidth={2.5}
                      />
                    </div>
                    {/* Animated Check Mark */}
                    <div
                      className={`absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md transform transition-all duration-500 ${
                        hoveredPoint === index
                          ? "scale-100 rotate-0"
                          : "scale-0 rotate-180"
                      }`}
                    >
                      <CheckCircle2
                        className="w-5 h-5 text-green-600"
                        strokeWidth={3}
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <p className="text-gray-800 text-base md:text-lg leading-relaxed group-hover:text-gray-900 transition-colors">
                      {point.text}
                    </p>

                    {/* Animated Bottom Bar */}
                    <div
                      className={`h-1 bg-gradient-to-r ${
                        point.gradient
                      } mt-4 rounded-full transform transition-all duration-500 ${
                        hoveredPoint === index ? "scale-x-100" : "scale-x-0"
                      } origin-left`}
                    ></div>
                  </div>

                  {/* Arrow Indicator */}
                  <div
                    className={`flex-shrink-0 transform transition-all duration-500 ${
                      hoveredPoint === index
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-2 opacity-0"
                    }`}
                  >
                    <ArrowRight className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Visual Section */}
          <div className="relative group">
            {/* Outer Glow */}
            <div className="absolute -inset-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>

            {/* Main Image Container */}
            <div
              className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white/60"
              style={{
                opacity: 0,
                animation: "scaleIn 0.8s ease-out 0.3s forwards",
              }}
            >
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/50 to-transparent z-10"></div>

              {/* Corner Decorative Elements */}
              <div className="absolute top-0 left-0 w-32 h-32 z-10">
                <div className="absolute top-4 left-4 w-16 h-16 border-4 border-white/30 rounded-tl-3xl"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 z-10">
                <div className="absolute bottom-4 right-4 w-16 h-16 border-4 border-white/30 rounded-br-3xl"></div>
              </div>

              {/* Side Decorative Badges */}
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 z-20">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-full p-4 shadow-2xl animate-pulse">
                  <Wheat className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 z-20">
                <div
                  className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full p-4 shadow-2xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                >
                  <Leaf className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Main Image */}
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=800&fit=crop"
                alt="Farmers benefiting from SLeSCA's work"
                className="w-full h-64 md:h-80 lg:h-96 object-cover transform transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Bottom Content Overlay */}
              <div className="absolute inset-x-0 bottom-0 z-20 p-8">
                <div className="transform transition-all duration-700 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-5 py-2 mb-4">
                    <Sprout className="w-4 h-4 text-white animate-pulse" />
                    <span className="text-white text-sm font-semibold">
                      Transforming Lives
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-3 drop-shadow-lg">
                    Building a Resilient Future
                  </h3>
                  <p className="text-gray-100 text-base leading-relaxed drop-shadow-md max-w-lg">
                    Empowering farmers with certified seeds and sustainable
                    practices for a prosperous agricultural sector.
                  </p>
                </div>
              </div>

              {/* Top Badge */}
              <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-xl transform transition-transform group-hover:scale-110">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">
                      Active Impact
                    </p>
                    <p className="text-lg font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      2024
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute top-20 left-6 z-20 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-xl transform transition-all duration-700 -translate-x-full group-hover:translate-x-0">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-xs text-gray-600">Food Security</p>
                    <p className="text-sm font-bold text-gray-800">Enhanced</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 right-6 z-20 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-xl transform transition-all duration-700 translate-x-full group-hover:translate-x-0">
                <div className="flex items-center space-x-2">
                  <Globe2 className="w-5 h-5 text-emerald-600" />
                  <div>
                    <p className="text-xs text-gray-600">ECOWAS</p>
                    <p className="text-sm font-bold text-gray-800">Aligned</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Impact Statement */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white rounded-full shadow-2xl px-8 py-4 transform transition-all hover:scale-105 cursor-pointer">
            <Sprout className="w-6 h-6 animate-pulse" />
            <span className="font-bold text-lg">
              Join Us in Growing Sierra Leone's Future
            </span>
            <ArrowRight
              className="w-6 h-6 animate-bounce"
              style={{ animationDirection: "alternate" }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
      `}</style>
    </section>
  );
};

export default WhySLeSCAMatters;
