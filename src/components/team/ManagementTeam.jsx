import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import user from '../../image/user.png';

const managementTeam = [
  {
    name: "Robert Chakanda (PhD)",
    role: "Executive Director",
    image: user,
  },
  {
    name: "Dr. Momoh Turay",
    role: "Senior Technical Head - Field",
    image: user,
  },
  {
    name: "Dr. Janatu V. Sesay",
    role: "Senior Technical Head - Laboratories",
    image: user,
  },
  {
    name: "Ibrahim S. Mansaray",
    role: "Head of Secretariat",
    image: user,
  },
  {
    name: "Sahr Amara",
    role: "Admin/HR",
    image: user,
  },
  {
    name: "Sia Jamie Hamore",
    role: "Deputy HR/Admin",
    image: user,
  },
  {
    name: "Mustapha David Jah",
    role: "Acting Accountant",
    image: user,
  },
  {
    name: "Hassanatu Sheriff",
    role: "Acting Deputy Accountant",
    image: user,
  },
  {
    name: "Abdul Karim Kargbo",
    role: "Seed-Business Adviser",
    image: user,
  },
  {
    name: "Francis Will",
    role: "Innovation Officer",
    image: user,
  },
  {
    name: "Kumba Sheku-Kamara",
    role: "Technical Crops/Projects Officer",
    image: user,
  },
  {
    name: "Moses Tumbe",
    role: "Public Relations Officer",
    image: user,
  },
  {
    name: "Adama J. Kamara",
    role: "Field Technician - Border Control",
    image: user,
  },
  {
    name: "Salia Jeigula",
    role: "Logistics Officer",
    image: user,
  },
  {
    name: "Stephine E.K Williams",
    role: "Confidential Technician",
    image: user,
  },
  {
    name: "Mrs. Kadiatu Kpakiwa",
    role: "Laboratory Technician",
    image: user,
  },
  {
    name: "Josephine Koroma",
    role: "Confidential Technician",
    image: user,
  },
  {
    name: "Millicent Swarray",
    role: "Data Officer",
    image: user,
  },
  {
    name: "Joseph Fillie",
    role: "Office Attendant",
    image: user,
  },
  {
    name: "James Sheku Nanoh",
    role: "Office Attendant",
    image: user,
  },
  {
    name: "Joseph Mulai",
    role: "Driver",
    image: user,
  },
  {
    name: "Andrew Lamboi",
    role: "Driver",
    image: user,
  },
  {
    name: "Nansu Karim Sannoh",
    role: "Intern",
    image: user,
  },
  {
    name: "Soufian Sherrif",
    role: "Intern",
    image: user,
  },
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
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ManagementTeam = () => {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="py-12 bg-gray-50 w-full max-w-[90rem]">
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
            Head Office
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
            itemClass="px-2 py-4"
            arrows={true}
            removeArrowOnDeviceType={["mobile"]}
          >
            {managementTeam.map((member, index) => (
              <div key={index}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center h-full flex flex-col items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 mx-auto rounded-full mb-4 object-cover border-4 border-green-200"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mt-2">
                    {member.name}
                  </h3>
                  <p className="text-green-700 text-base">{member.role}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;
