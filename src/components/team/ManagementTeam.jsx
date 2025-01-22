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
    name: "Mohamed Alie Kallon",
    role: "Legal Preactitioner",
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
    name: "Mrs. Gbakiwa",
    role: "Laboratory Technician",
    image: user,
  },
  {
    name: "Josephine",
    role: "Confidential Technician",
    image: user,
  },
  {
    name: "Millicet",
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
    name: "Nansu Karimu Sannohn",
    role: "Intern",
    image: user,
  },
  {
    name: "Edith",
    role: "Intern",
    image: user,
  },
  {
    name: "Idara son",
    role: "Intern",
    image: user,
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
    <section className="w-full flex justify-center items-center">
      <div className="py-12 bg-gray-50 w-full max-w-[90rem]">
         <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-8">
          Head Office
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
            </div>
          ))}
        </Slider>
      </div>
      </div>


    </section>
  );
};

export default ManagementTeam;
