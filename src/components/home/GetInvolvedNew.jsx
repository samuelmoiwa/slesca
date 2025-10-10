// import React, { useState } from "react";
// import { TypewriterEffectSmooth } from "../ui/typewriter-effect.js";
// import { Link } from "react-router-dom";


// const GetInvolved = () => {

//   const words = [
//     {
//       text: "Partner with SLeSCA to promote",
//       className: "text-white",
//     },
//     {
//       text: "",
//     },
//     {
//       text: "sustainable farming.",
//       className: "text-green-500",
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center h-[25rem] bg-green-900">
//       <TypewriterEffectSmooth words={words} />
//       <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
//         <Link
//           to="/contact-us"
//           className="px-8 py-3 rounded-xl bg-white text-black border border-black text-center text-sm"
//         >
//           Contact Us
//         </Link>
//       </div>

//     </div>
//   );
// };


// export default GetInvolved

import React, { useState, useEffect } from "react";
import { Sprout, Users, Heart, ArrowRight, Sparkles } from "lucide-react";

const TypewriterEffect = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const targetText = word.text;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < targetText.length) {
            setCurrentText(targetText.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((currentWordIndex + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words]);

  return (
    <span className={words[currentWordIndex].className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const GetInvolved = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const typewriterWords = [
    { text: "sustainable farming", className: "text-emerald-400 font-bold" },
    { text: "agricultural innovation", className: "text-green-400 font-bold" },
    { text: "food security", className: "text-lime-400 font-bold" },
    { text: "farmer empowerment", className: "text-teal-400 font-bold" },
  ];

  const actionCards = [
    {
      icon: Users,
      title: "Become a Partner",
      description: "Collaborate with us to drive agricultural excellence",
      gradient: "from-emerald-500 to-teal-600",
      hoverGradient: "from-emerald-400 to-teal-500",
    },
    {
      icon: Heart,
      title: "Support Our Mission",
      description: "Contribute to sustainable farming initiatives",
      gradient: "from-green-500 to-emerald-600",
      hoverGradient: "from-green-400 to-emerald-500",
    },
    {
      icon: Sprout,
      title: "Join Programs",
      description: "Participate in our training and development programs",
      gradient: "from-lime-500 to-green-600",
      hoverGradient: "from-lime-400 to-green-500",
    },
  ];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-[35rem] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900">
        {/* Animated gradient orbs */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-emerald-500/30 to-green-500/30 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
            transition: "all 0.3s ease-out",
          }}
        />
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-lime-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400/40 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm px-6 py-2 rounded-full border border-emerald-400/30 animate-fadeIn">
            <Sparkles
              className="w-4 h-4 text-emerald-400 animate-spin"
              style={{ animationDuration: "3s" }}
            />
            <span className="text-emerald-300 text-sm font-semibold uppercase tracking-wider">
              Make a Difference
            </span>
            <Sparkles
              className="w-4 h-4 text-emerald-400 animate-spin"
              style={{ animationDuration: "3s", animationDirection: "reverse" }}
            />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Partner with SLeSCA to promote
            <br />
            <TypewriterEffect words={typewriterWords} />
          </h2>

          <p className="text-green-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Join us in transforming agriculture across Sierra Leone. Together,
            we can build a sustainable future for farmers and communities.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {actionCards.map((card, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.hoverGradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500`}
              />

              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-emerald-400/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${card.gradient} mb-4 group-hover:scale-110 transition-transform duration-500`}
                >
                  <card.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                  {card.title}
                </h3>

                <p className="text-green-100 text-sm leading-relaxed mb-4">
                  {card.description}
                </p>

                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Progress indicator on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a
            href="/contact-us"
            className="group relative px-10 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-lg shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Contact Us Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>

            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
          </a>

          <a
            href="/about"
            className="px-10 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-bold text-lg border-2 border-white/30 hover:bg-white/20 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-105"
          >
            Learn More About Us
          </a>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
          {[
            { number: "500+", label: "Farmers Trained" },
            { number: "45", label: "Seed Varieties" },
            { number: "10+", label: "Facilities Built" },
            { number: "100%", label: "Commitment" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-2 group cursor-pointer"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-green-200 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default GetInvolved;


