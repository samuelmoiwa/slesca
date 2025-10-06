import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import user from '../../image/user.png'

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
    role: "Senior Technical Head - Laboraories",
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
    role: "Technical Crpos/Projects Officer",
    image: user,
  },
  {
    name: "Moses Tumbe",
    role: "Public Relations Officer",
    image: user,
  },
  {
    name: "Adama J. Kamara",
    role: "Field Techician - Border control",
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

// --- Custom Arrow Components with Beautiful UI ---

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 -translate-y-1/2 -right-6 lg:-right-12 xl:-right-16 z-10 cursor-pointer hidden md:block`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <div className="bg-green-700/90 hover:bg-green-600 w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} absolute top-1/2 -translate-y-1/2 -left-6 lg:-left-12 xl:-left-16 z-10 cursor-pointer hidden md:block`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <div className="bg-green-700/90 hover:bg-green-600 w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    </div>
  );
};

// --- Main Component ---

const ManagementTeam = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
          arrows: false, // Hide arrows on smaller screens, dots are usually better
        },
      },
    ],
  };

  return (
    <section className="w-full flex justify-center items-center">
      <div className="py-12 bg-gray-50 w-full max-w-[90rem]">
         <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
          Head Office
        </h2>
        <Slider {...settings}>
          {managementTeam.map((member, index) => (
            <div
              key={index}
              className="px-2 py-4" // Added vertical padding too for better spacing
            >
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center h-full flex flex-col items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 mx-auto rounded-full mb-4 object-cover border-4 border-green-200" // Slightly larger image with border
                />
                <h3 className="text-xl font-semibold text-gray-800 mt-2">
                  {member.name}
                </h3>
                <p className="text-green-700 text-base">{member.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      </div>
    </section>
  );
};

export default ManagementTeam;
