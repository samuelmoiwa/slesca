import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const managementTeam = [
  {
    name: "Alice Green",
    role: "Operations Manager",
    bio: "Alice ensures smooth implementation of programs and stakeholder engagement.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "James Brown",
    role: "Program Coordinator",
    bio: "James leads training programs and capacity-building initiatives for farmers.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Sarah White",
    role: "Quality Assurance Specialist",
    bio: "Sarah oversees seed quality testing and certification processes.",
    image: "https://via.placeholder.com/150",
  },
];

const ManagementTeam = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true,
    cssEase: "linear",
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
    <section className="w-full flex justify-center">
      <div className="py-12 bg-gray-50 max-w-[90rem]">
         <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
          Management Team
        </h2>
        <Slider {...settings}>
          {managementTeam.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-green-700 text-sm">{member.role}</p>
              <p className="text-gray-600 mt-4 text-sm">{member.bio}</p>
            </div>
          ))}
        </Slider>
      </div>
      </div>


    </section>
  );
};

export default ManagementTeam;
