// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import a1 from '../../image/a1.jpg'
// import a2 from '../../image/a2.jpg'
// import a3 from '../../image/a3.jpg'
// import a4 from '../../image/a4.jpg'

// const projects = [
//   {
//     title: "Seed Storage Facility Development",
//     description: "Constructed state-of-the-art seed storage facilities across major farming districts.",
//     image: a1,
//   },
//   {
//     title: "Farmer Training Workshops",
//     description: "Organized capacity-building workshops for over 500 farmers nationwide.",
//     image: a2,
//   },
//   {
//     title: "Seed Quality Enhancement Program",
//     description: "Implemented a quality assurance program to certify 45 new seed varieties.",
//     image: a3,
//   },
//   {
//     title: "Regional Collaboration with ECOWAS",
//     description: "Partnered with ECOWAS to align seed standards and practices regionally.",
//     image: a4,
//   },
// ];

// const RecentProjects = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true, // Enable auto-scroll
//     autoplaySpeed: 3000, // Auto-scroll interval in milliseconds
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="bg-gray-100 py-12">
//       <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[90rem]">
//         <div className="text-center mb-8">
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-800">
//             Recent Projects
//           </h2>
//           <p className="mt-4 text-gray-700 text-sm md:text-base">
//             Explore some of our recent initiatives driving agricultural transformation in Sierra Leone.
//           </p>
//         </div>
//         <Slider {...settings}>
//           {projects.map((project, index) => (
//             <div key={index} className="p-4">
//               <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-40 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
//                   <p className="mt-2 text-gray-600 text-sm">{project.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default RecentProjects;


import React, { useState, useEffect } from "react";

const projects = [
  {
    title: "Seed Storage Facility Development",
    description:
      "Constructed state-of-the-art seed storage facilities across major farming districts.",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    impact: "10+ Facilities",
    year: "2024",
  },
  {
    title: "Farmer Training Workshops",
    description:
      "Organized capacity-building workshops for over 500 farmers nationwide.",
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&q=80",
    impact: "500+ Farmers",
    year: "2024",
  },
  {
    title: "Seed Quality Enhancement Program",
    description:
      "Implemented a quality assurance program to certify 45 new seed varieties.",
    image:
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
    impact: "45 Varieties",
    year: "2023",
  },
  {
    title: "Regional Collaboration with ECOWAS",
    description:
      "Partnered with ECOWAS to align seed standards and practices regionally.",
    image:
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80",
    impact: "Regional Impact",
    year: "2023",
  },
];

const RecentProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < slidesToShow; i++) {
      visible.push(projects[(currentIndex + i) % projects.length]);
    }
    return visible;
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-green-50 to-gray-50 py-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider bg-green-100 px-4 py-2 rounded-full">
              Our Impact
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Recent{" "}
            <span className="text-green-700 relative inline-block">
              Projects
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M0 4C50 1 150 7 200 4"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-green-400"
                />
              </svg>
            </span>
          </h2>
          <p className="mt-6 text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Explore some of our recent initiatives driving agricultural
            transformation and sustainable growth in Sierra Leone.
          </p>
        </div>

        {/* Carousel Section */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 bg-white hover:bg-green-600 text-green-600 hover:text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 bg-white hover:bg-green-600 text-green-600 hover:text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 group"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getVisibleProjects().map((project, index) => (
                <div
                  key={`${project.title}-${index}`}
                  className="opacity-0 animate-fadeIn"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 h-full">
                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Year Badge */}
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                        <span className="text-green-700 font-bold text-sm">
                          {project.year}
                        </span>
                      </div>

                      {/* Impact Badge */}
                      <div className="absolute bottom-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg transform translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="font-semibold text-sm">
                          {project.impact}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300 min-h-[3.5rem]">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed min-h-[4rem]">
                        {project.description}
                      </p>

                      {/* Learn More Link */}
                      <div className="pt-4">
                        <button className="text-green-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                          Learn More
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Decorative Border */}
                    <div className="h-1 bg-gradient-to-r from-green-400 via-green-600 to-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-3 bg-green-600"
                    : "w-3 h-3 bg-gray-300 hover:bg-green-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default RecentProjects;