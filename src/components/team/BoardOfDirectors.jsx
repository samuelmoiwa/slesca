import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const directors = [
  {
    name: "John Doe",
    role: "Chairperson",
    bio: "John brings 20+ years of leadership experience in agricultural policy and development.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    role: "Director of Strategy",
    bio: "Jane is an expert in sustainable development and has spearheaded numerous initiatives.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Michael Johnson",
    role: "Director of Finance",
    bio: "Michael oversees financial strategy, ensuring accountability and growth.",
    image: "https://via.placeholder.com/150",
  },
];

const BoardOfDirectors = () => {
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
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full flex justify-center items-center">
      <div className="py-12 bg-gray-50 w-full max-w-[90rem]">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
          Board of Directors
        </h2>
        <Slider {...settings}>
          {directors.map((director, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md text-center"
            >
              <img
                src={director.image}
                alt={director.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {director.name}
              </h3>
              <p className="text-green-700 text-sm">{director.role}</p>
              <p className="text-gray-600 mt-4 text-sm">{director.bio}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </section>
  );
};

export default BoardOfDirectors;
