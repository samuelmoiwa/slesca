import React from "react";
import user from '../../image/user.png'

const testimonials = [
  {
    name: "John Kamara",
    role: "Certified Seed Operator",
    feedback:
      "SLeSCA's training programs have revolutionized my seed production practices. My yields have increased significantly, and the certification process was seamless.",
    image: user,
  },
  {
    name: "Aminata Sesay",
    role: "Farmer",
    feedback:
      "The certified seeds provided by SLeSCA have boosted my crop yields and improved my farming income. Their support has been invaluable.",
    image: user,
  },
  {
    name: "Dr. Mohamed Bangura",
    role: "Agriculture Researcher",
    feedback:
      "Partnering with SLeSCA has been a game-changer for advancing seed quality standards and fostering sustainable agricultural practices in Sierra Leone.",
    image: user,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[90rem]">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-800">
            What People Are Saying
          </h2>
          <p className="mt-4 text-gray-700 text-sm md:text-base">
            Hear from those who have experienced the impact of SLeSCA's work firsthand.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
