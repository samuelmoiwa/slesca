import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Sparkles,
  Award,
  Leaf,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

const CallToAction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Award,
      text: "Certified Quality Standards",
      color: "text-yellow-400",
    },
    { icon: Leaf, text: "Sustainable Practices", color: "text-green-400" },
    {
      icon: TrendingUp,
      text: "Agricultural Growth",
      color: "text-emerald-400",
    },
  ];

  const benefits = [
    "Expert guidance throughout the licensing process",
    "Access to certified seed varieties",
    "Training and capacity building programs",
    "Regional collaboration opportunities",
  ];

  const handleRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 1000);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Top Badge */}
          <div
            className={`text-center mb-8 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 backdrop-blur-sm px-6 py-2 rounded-full border border-yellow-400/30">
              <Sparkles
                className="w-4 h-4 text-yellow-400 animate-spin"
                style={{ animationDuration: "3s" }}
              />
              <span className="text-yellow-300 text-sm font-bold uppercase tracking-wider">
                Transform Agriculture Together
              </span>
              <Sparkles
                className="w-4 h-4 text-yellow-400 animate-spin"
                style={{
                  animationDuration: "3s",
                  animationDirection: "reverse",
                }}
              />
            </div>
          </div>

          {/* Main Content */}
          <div
            className={`text-center space-y-6 mb-12 transform transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Transform
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent animate-gradient">
                Agriculture in Sierra Leone?
              </span>
            </h2>

            <p className="text-green-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Partner with SLeSCA to ensure seed quality, promote sustainable
              farming, and achieve national food security.
            </p>
          </div>

          {/* Rotating Features */}
          <div
            className={`flex justify-center gap-8 mb-12 flex-wrap transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-10 opacity-0"
            }`}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-sm transition-all duration-500 ${
                  activeFeature === index
                    ? "bg-white/20 border-2 border-white/40 scale-110"
                    : "bg-white/5 border border-white/10 scale-100"
                }`}
              >
                <feature.icon
                  className={`w-5 h-5 ${
                    feature.color
                  } transition-all duration-500 ${
                    activeFeature === index ? "animate-bounce" : ""
                  }`}
                />
                <span className="text-white font-semibold text-sm md:text-base">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* Benefits Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-4xl mx-auto transform transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 hover:border-emerald-400/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-green-100 text-sm md:text-base">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col md:flex-row justify-center items-center gap-6 transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <a
              href="/contact-us"
              onClick={handleRipple}
              className="group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-white to-gray-100 text-green-800 font-bold text-lg shadow-2xl hover:shadow-white/30 transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              {/* Ripple effects */}
              {ripples.map((ripple) => (
                <span
                  key={ripple.id}
                  className="absolute bg-white/50 rounded-full animate-ripple"
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                    width: 0,
                    height: 0,
                  }}
                />
              ))}

              <span className="relative z-10 flex items-center gap-3">
                Contact Us Today
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>

              {/* Animated gradient shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </a>

            <a
              href="/about/license-procedures"
              onClick={handleRipple}
              className="group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 text-white font-bold text-lg shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              {/* Ripple effects */}
              {ripples.map((ripple) => (
                <span
                  key={ripple.id}
                  className="absolute bg-white/50 rounded-full animate-ripple"
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                    width: 0,
                    height: 0,
                  }}
                />
              ))}

              <span className="relative z-10 flex items-center gap-3">
                <Award className="w-6 h-6" />
                Start Your Seed Licensing Journey
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>

              {/* Animated pulse ring */}
              <div className="absolute inset-0 rounded-2xl animate-ping-slow opacity-75 bg-yellow-400/30" />

              {/* Animated gradient shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div
            className={`mt-16 text-center transform transition-all duration-1000 delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-green-200 text-sm mb-6 uppercase tracking-wider font-semibold">
              Trusted by Agricultural Leaders Nationwide
            </p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {[
                { value: "500+", label: "Partners" },
                { value: "45+", label: "Seed Varieties" },
                { value: "10+", label: "Facilities" },
                { value: "100%", label: "Commitment" },
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-green-300 text-sm font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-30px) translateX(15px) rotate(180deg);
            opacity: 0.5;
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes ripple {
          to {
            width: 300px;
            height: 300px;
            opacity: 0;
            transform: translate(-50%, -50%);
          }
        }

        @keyframes ping-slow {
          75%,
          100% {
            transform: scale(1.1);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-ripple {
          animation: ripple 1s ease-out;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default CallToAction;
