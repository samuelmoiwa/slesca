import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

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

const CustomNextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Next slide"
      className="absolute top-1/2 right-4 -translate-y-1/2 z-10 cursor-pointer hidden md:block focus:outline-none"
    >
      <div className="bg-green-700/90 hover:bg-green-600 w-10 h-10 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 transform hover:scale-110">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
};

const CustomPrevArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Previous slide"
      className="absolute top-1/2 left-4 -translate-y-1/2 z-10 cursor-pointer hidden md:block focus:outline-none"
    >
      <div className="bg-green-700/90 hover:bg-green-600 w-10 h-10 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 transform hover:scale-110">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    </button>
  );
};

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 1 },
  tablet: { breakpoint: { max: 1024, min: 600 }, items: 2, slidesToSlide: 1 },
  mobile: { breakpoint: { max: 600, min: 0 }, items: 1, slidesToSlide: 1 }
};

const BoardOfDirectors = () => {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="py-12 bg-gray-50 w-full max-w-[90rem]">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
            Board of Directors
          </h2>

          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            showDots={false}
            customRightArrow={<CustomNextArrow />}
            customLeftArrow={<CustomPrevArrow />}
            keyBoardControl={true}
            containerClass="carousel-container"
            itemClass="px-3 py-4"
          >
            {directors.map((director, index) => (
              <div key={index}>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center h-full">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{director.name}</h3>
                  <p className="text-green-700 font-semibold text-base mb-2">{director.role}</p>
                  <p className="text-gray-600 text-sm">{`Status: ${director.status}`}</p>
                  <p className="text-gray-500 text-xs mt-1">{`Since: ${director.startDate}`}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default BoardOfDirectors;
