import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import a1 from '../../image/a1.jpg'
import a2 from '../../image/a2.jpg'
import a3 from '../../image/a3.jpg'
import a4 from '../../image/a4.jpg'

const projects = [
  {
    title: "Seed Storage Facility Development",
    description: "Constructed state-of-the-art seed storage facilities across major farming districts.",
    image: a1,
  },
  {
    title: "Farmer Training Workshops",
    description: "Organized capacity-building workshops for over 500 farmers nationwide.",
    image: a2,
  },
  {
    title: "Seed Quality Enhancement Program",
    description: "Implemented a quality assurance program to certify 45 new seed varieties.",
    image: a3,
  },
  {
    title: "Regional Collaboration with ECOWAS",
    description: "Partnered with ECOWAS to align seed standards and practices regionally.",
    image: a4,
  },
];

const RecentProjects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 3000, // Auto-scroll interval in milliseconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[90rem]">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-800">
            Recent Projects
          </h2>
          <p className="mt-4 text-gray-700 text-sm md:text-base">
            Explore some of our recent initiatives driving agricultural transformation in Sierra Leone.
          </p>
        </div>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default RecentProjects;
