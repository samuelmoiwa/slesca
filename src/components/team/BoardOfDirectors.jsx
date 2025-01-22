import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const directors = [
  { name: "Mr. Idara Sherriff", role: "Board Chairman", status: "Statutory", startDate: "2024" },
  { name: "Prof. Abdulai Jalloh", role: "CAO-MAF", status: "Statutory", startDate: "2024" },
  { name: "Dr. Robert Chakanda", role: "Exec. Dir. SLeSCA", status: "Statutory", startDate: "2021" },
  { name: "Mr. John Kamara", role: "Director of Crops-MAF", status: "Statutory", startDate: "2014" },
  { name: "Mr. Monya Farma", role: "S.L Standards Bureau", status: "Non-Statutory", startDate: "2014" },
  { name: "Madam Yatta Samai", role: "NaFFSL", status: "Non-Statutory", startDate: "2014" },
  { name: "Peter Massaquoi", role: "NaFFSL", status: "Non-Statutory", startDate: "2014" },
  { name: "P.C. Edward Sesay", role: "NaFFSL", status: "Non-Statutory", startDate: "2014" },
  { name: "Mr. Brima Babo", role: "NaFFSL", status: "Non-Statutory", startDate: "2014" },
  { name: "Madam Mariama Keita", role: "NaFFSL", status: "Non-Statutory", startDate: "2014" },
  { name: "Mr. James S. Koroma", role: "S.L Chamber/Comm", status: "Non-Statutory", startDate: "2014" },
  { name: "Mr. Mickail N. Turay", role: "Ministry of Trade/Industry", status: "Non-Statutory", startDate: "2014" },
  { name: "Mr. Tasima Jah", role: "Ministry of Finance", status: "Non-Statutory", startDate: "2014" },
  { name: "Dr. Osman Conteh", role: "Director General SLARI", status: "Non-Statutory", startDate: "2014" },
  { name: "Dr. Melvin George", role: "Njala University", status: "Non-Statutory", startDate: "2024" },
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
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
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
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold text-gray-800">{director.name}</h3>
                <p className="text-green-700 text-sm">{director.role}</p>
                <p className="text-gray-600 text-sm">{`Status: ${director.status}`}</p>
                <p className="text-gray-600 text-sm">{`Start Date: ${director.startDate}`}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default BoardOfDirectors;
