import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "John Farmer",
    role: "Local Farmer",
    image: "https://via.placeholder.com/150", // Replace with actual image
    quote:
      "Thanks to SLeSCA, I now have access to high-quality seeds that have significantly improved my crop yield and income.",
  },
  {
    name: "Jane Operator",
    role: "Seed Operator",
    image: "https://via.placeholder.com/150", // Replace with actual image
    quote:
      "SLeSCA's licensing process ensures compliance and quality, making the seed industry more reliable and profitable.",
  },
  {
    name: "Michael Partner",
    role: "Agricultural Partner",
    image: "https://via.placeholder.com/150", // Replace with actual image
    quote:
      "Partnering with SLeSCA has been instrumental in improving seed standards and fostering agricultural growth in Sierra Leone.",
  },
  {
    name: "Sarah Doe",
    role: "Community Leader",
    image: "https://via.placeholder.com/150", // Replace with actual image
    quote:
      "The training provided by SLeSCA has empowered our community to grow better crops with sustainable farming methods.",
  },
];

const TestimonialsSection = () => {
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
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };

      return (
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-green-800">
                What Our Stakeholders Say
              </h2>
              <p className="mt-4 text-gray-600 text-base md:text-lg">
                Hear from farmers, seed operators, and partners about their
                experiences with SLeSCA.
              </p>
            </div>

            {/* Slider Section */}
            <Slider {...settings} className="testimonial-slider">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center text-center "
                >
                  <FaQuoteLeft className="text-green-800 text-3xl mb-4" />
                  <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                  <div className="w-full flex justify-center">
                     <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mb-4"
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      );
    };

export default TestimonialsSection;
