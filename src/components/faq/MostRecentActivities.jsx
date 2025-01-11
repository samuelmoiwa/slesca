import React from "react";
import Slider from "react-slick";

const activities = [
  {
    title: "Farmer Training Workshop",
    date: "2025-01-10",
    description: "Conducted a training program on sustainable seed management for 100 farmers in Freetown.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "National Seed Catalogue",
    date: "2025-01-05",
    description: "Published an updated version of the National Seed Catalogue in alignment with ECOWAS standards.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Seed Inspection Drive",
    date: "2024-12-20",
    description: "Inspected over 50 seed processing facilities to ensure compliance with national quality standards.",
    image: "https://via.placeholder.com/300x200",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1 },
    },
  ],
};

const MostRecentActivities = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800">Most Recent Activities</h2>
          <p className="text-gray-600 mt-4">
            Discover the latest initiatives and activities conducted by SLeSCA.
          </p>
        </div>

        <Slider {...settings} className="mx-auto">
          {activities.map((activity, index) => (
            <div key={index} className="p-4">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{activity.title}</h3>
                  <p className="text-sm text-gray-500 mt-2">{activity.date}</p>
                  <p className="text-gray-600 mt-4">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default MostRecentActivities;
