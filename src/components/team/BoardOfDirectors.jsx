import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const directors = [
  {
    name: "Mr. Idara Sheriff ",
    role: "Board Chairman",
  },
  {
    name: "Prof. Abdul Jalloh",
    role: "CAO-MAF",
  },
  {
    name: "Dr. Chakanda",
    role: "Exec. Dir. SLeSCA",
  },
  {
    name: "Mr. John Kamara",
    role: "Director of Crops ",
  },
  {
    name: "Mr. Monya Farma",
    role: "S.L Standards Bureau",
  },
  {
    name: "Madam Yatta Samai",
    role: "NaFFSL",
  },
  {
    name: "Peter Massaquoi",
    role: "NaFFSL",
  },
  {
    name: "P. C Edward Sesay",
    role: "NaFFSL",
  },
  {
    name: "Mr. Brima Babo",
    role: "NaFFSL",
  },
  {
    name: "Madam Mariama Keita",
    role: "NaFFSL",
  },


  {
    name: "Mr. James S. Koroma",
    role: "S.L Chamber",
  },
  {
    name: "Mr. Mickail N. Turay",
    role: "Ministry of Trade/Industry",
  },
  {
    name: "Mr. Tasima Jah",
    role: "Ministry of Finance",
  },
  {
    name: "Dr. Osman Conteh",
    role: "Director General",
  },
  {
    name: "Dr. Melvin George",
    role: "Njala University",
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
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {director.name}
              </h3>
              <p className="text-green-700 text-sm">{director.role}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </section>
  );
};

export default BoardOfDirectors;
